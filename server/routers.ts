import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";
import { invokeLLM } from "./_core/llm";
import { generateImage } from "./_core/imageGeneration";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  lessonPlans: router({
    list: protectedProcedure.query(({ ctx }) => db.getLessonPlansByUserId(ctx.user.id)),
    create: protectedProcedure.input(z.object({
      title: z.string(),
      theme: z.string(),
      targetAudience: z.string(),
      duration: z.number(),
      objectives: z.string(),
      content: z.string(),
      methodology: z.string(),
      assistiveTechnologies: z.string(),
      practicalActivity: z.string(),
      evaluationCriteria: z.string(),
      references: z.string().optional(),
    })).mutation(({ ctx, input }) => db.createLessonPlan(ctx.user.id, input)),
    update: protectedProcedure.input(z.object({
      id: z.number(),
      data: z.object({
        title: z.string().optional(),
        theme: z.string().optional(),
        targetAudience: z.string().optional(),
        duration: z.number().optional(),
        objectives: z.string().optional(),
        content: z.string().optional(),
        methodology: z.string().optional(),
        assistiveTechnologies: z.string().optional(),
        practicalActivity: z.string().optional(),
        evaluationCriteria: z.string().optional(),
        references: z.string().optional(),
      }),
    })).mutation(({ input }) => db.updateLessonPlan(input.id, input.data)),
    delete: protectedProcedure.input(z.number()).mutation(({ input }) => db.deleteLessonPlan(input)),
  }),

  chat: router({
    sendMessage: protectedProcedure.input(z.object({
      content: z.string(),
      disabilityType: z.string().optional(),
      availableResources: z.string().optional(),
    })).mutation(async ({ ctx, input }) => {
      await db.saveChatMessage(ctx.user.id, {
        role: "user",
        content: input.content,
        disabilityType: input.disabilityType,
        availableResources: input.availableResources,
      });

      const systemPrompt = `Você é um assistente pedagógico especializado em educação inclusiva para alunos com deficiência física. Fornece sugestões de adaptações pedagógicas, tecnologias assistivas e estratégias de ensino personalizadas.${input.disabilityType ? ` O aluno tem ${input.disabilityType}.` : ""}${input.availableResources ? ` Recursos disponíveis: ${input.availableResources}.` : ""}`;

      const response = await invokeLLM({
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: input.content },
        ],
      });

      const messageContent = response.choices[0]?.message.content;
      const assistantContent = typeof messageContent === 'string' ? messageContent : '';
      await db.saveChatMessage(ctx.user.id, {
        role: "assistant",
        content: assistantContent,
      });

      return { content: assistantContent };
    }),
    getHistory: protectedProcedure.query(({ ctx }) => db.getChatHistory(ctx.user.id)),
  }),

  images: router({
    generate: protectedProcedure.input(z.object({
      prompt: z.string(),
      category: z.enum(["hardware", "diagram", "ai_concept"]),
    })).mutation(async ({ ctx, input }) => {
      const response = await generateImage({ prompt: input.prompt });
      const imageUrl = response.url || '';
      await db.saveGeneratedImage(ctx.user.id, {
        prompt: input.prompt,
        imageUrl: imageUrl,
        category: input.category,
      });
      return { url: imageUrl };
    }),
    list: protectedProcedure.query(({ ctx }) => db.getGeneratedImages(ctx.user.id)),
  }),

  resources: router({
    getAll: publicProcedure.query(() => db.getAllResources()),
    getByCategory: publicProcedure.input(z.string()).query(({ input }) => db.getResourcesByCategory(input)),
  }),
});

export type AppRouter = typeof appRouter;
