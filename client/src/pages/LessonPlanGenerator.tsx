import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function LessonPlanGenerator() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    theme: "",
    targetAudience: "",
    duration: 60,
    objectives: "",
    content: "",
    methodology: "",
    assistiveTechnologies: "",
    practicalActivity: "",
    evaluationCriteria: "",
    references: "",
  });

  const createMutation = trpc.lessonPlans.create.useMutation();
  const listQuery = trpc.lessonPlans.list.useQuery(undefined, { enabled: !!user });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "duration" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast.error("Você precisa estar logado para criar um plano de aula");
      return;
    }

    try {
      await createMutation.mutateAsync(formData);
      toast.success("Plano de aula criado com sucesso!");
      setFormData({
        title: "",
        theme: "",
        targetAudience: "",
        duration: 60,
        objectives: "",
        content: "",
        methodology: "",
        assistiveTechnologies: "",
        practicalActivity: "",
        evaluationCriteria: "",
        references: "",
      });
      listQuery.refetch();
    } catch (error) {
      toast.error("Erro ao criar plano de aula");
      console.error(error);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-background text-foreground container py-12">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Acesso Restrito</h2>
          <p className="text-lg text-muted mb-6">
            Você precisa estar logado para criar planos de aula.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-4">Gerador de Planos de Aula</h1>
        <p className="text-lg text-muted mb-12">
          Crie planos de aula personalizados e inclusivos com base no template pedagógico.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-bold mb-2">Título da Aula</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full bg-input text-foreground border border-border rounded px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    placeholder="Ex: Introdução à IA Generativa"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-2">Tema</label>
                    <input
                      type="text"
                      name="theme"
                      value={formData.theme}
                      onChange={handleChange}
                      required
                      className="w-full bg-input text-foreground border border-border rounded px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      placeholder="Ex: IA Generativa"
                    />
                  </div>
                  <div>
                    <label className="block font-bold mb-2">Público-Alvo</label>
                    <input
                      type="text"
                      name="targetAudience"
                      value={formData.targetAudience}
                      onChange={handleChange}
                      required
                      className="w-full bg-input text-foreground border border-border rounded px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      placeholder="Ex: Alunos com deficiência motora"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold mb-2">Duração (minutos)</label>
                  <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    min="15"
                    max="480"
                    className="w-full bg-input text-foreground border border-border rounded px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Objetivos de Aprendizagem</label>
                  <textarea
                    name="objectives"
                    value={formData.objectives}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full bg-input text-foreground border border-border rounded px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    placeholder="Descreva os objetivos da aula"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Conteúdo Programático</label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full bg-input text-foreground border border-border rounded px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    placeholder="Descreva o conteúdo a ser abordado"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Metodologia e Adaptações</label>
                  <textarea
                    name="methodology"
                    value={formData.methodology}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full bg-input text-foreground border border-border rounded px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    placeholder="Descreva a metodologia e adaptações pedagógicas"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Tecnologias Assistivas</label>
                  <textarea
                    name="assistiveTechnologies"
                    value={formData.assistiveTechnologies}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full bg-input text-foreground border border-border rounded px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    placeholder="Descreva as tecnologias assistivas a serem utilizadas"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Atividade Prática</label>
                  <textarea
                    name="practicalActivity"
                    value={formData.practicalActivity}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full bg-input text-foreground border border-border rounded px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    placeholder="Descreva a atividade prática"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Critérios de Avaliação</label>
                  <textarea
                    name="evaluationCriteria"
                    value={formData.evaluationCriteria}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full bg-input text-foreground border border-border rounded px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    placeholder="Descreva os critérios de avaliação"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Referências (Opcional)</label>
                  <textarea
                    name="references"
                    value={formData.references}
                    onChange={handleChange}
                    rows={2}
                    className="w-full bg-input text-foreground border border-border rounded px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    placeholder="Descreva as referências bibliográficas"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={createMutation.isPending}
                  className="w-full bg-accent text-accent-foreground hover:opacity-90"
                >
                  {createMutation.isPending ? "Criando..." : "Criar Plano de Aula"}
                </Button>
              </form>
            </Card>
          </div>

          {/* Sidebar - Saved Plans */}
          <div>
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Meus Planos</h2>
              {listQuery.isLoading ? (
                <p className="text-muted">Carregando...</p>
              ) : listQuery.data && listQuery.data.length > 0 ? (
                <div className="space-y-3">
                  {listQuery.data.map((plan) => (
                    <div key={plan.id} className="p-3 bg-muted/20 rounded border border-border">
                      <h3 className="font-bold text-sm">{plan.title}</h3>
                      <p className="text-xs text-muted mt-1">{plan.theme}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted text-sm">Nenhum plano criado ainda</p>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
