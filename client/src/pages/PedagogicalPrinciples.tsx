import { Card } from "@/components/ui/card";
import { Brain, Zap, Clock, Target } from "lucide-react";

export default function PedagogicalPrinciples() {
  const principles = [
    {
      icon: Brain,
      title: "Cognição Preservada",
      description: "Nunca confunda limitações motoras com dificuldades intelectuais. Alunos com deficiência física frequentemente possuem plenas capacidades cognitivas.",
      implications: [
        "Ofereça conteúdo desafiador e intelectualmente estimulante",
        "Não simplifique o material apenas porque o aluno tem deficiência motora",
        "Adapte a forma de apresentação, não o nível de complexidade",
      ],
    },
    {
      icon: Zap,
      title: "Autonomia via Tecnologia",
      description: "O objetivo principal é fornecer ferramentas que permitam ao aluno realizar tarefas de forma independente.",
      implications: [
        "Escolha tecnologias assistivas que promovam independência",
        "Ensine o aluno a usar as ferramentas, não faça por ele",
        "Valorize a autonomia como resultado do aprendizado",
      ],
    },
    {
      icon: Clock,
      title: "Flexibilidade de Tempo",
      description: "Adapte os cronogramas. Atividades que exigem precisão motora podem levar mais tempo para serem executadas.",
      implications: [
        "Não use velocidade como critério de avaliação",
        "Permita pausas e ajustes conforme necessário",
        "Foque no processo, não apenas no resultado final",
      ],
    },
    {
      icon: Target,
      title: "Ambiente Acessível",
      description: "Garanta que o laboratório possua mesas reguláveis, espaço para manobra de cadeiras de rodas e iluminação adequada.",
      implications: [
        "Realize uma auditoria de acessibilidade do espaço",
        "Envolva o aluno no planejamento do ambiente",
        "Mantenha a flexibilidade para ajustes conforme necessário",
      ],
    },
  ];

  const evaluationPrinciples = [
    {
      title: "Avaliação Formativa e Contínua",
      description: "Foco no processo, não apenas no produto final",
    },
    {
      title: "Adaptações Razoáveis",
      description: "Modificar instrumentos, tempos e contextos de avaliação",
    },
    {
      title: "Feedback Significativo",
      description: "Fornecer retorno que promova aprendizado e autonomia",
    },
    {
      title: "Parceria com Equipe",
      description: "Colaborar com família, equipe multiprofissional e AEE",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-4">Princípios Pedagógicos</h1>
        <p className="text-lg text-muted mb-12">
          Fundamentos que orientam a educação inclusiva e acessível para alunos com deficiência física.
        </p>

        <div className="grid gap-8 mb-12">
          {principles.map((principle, idx) => {
            const Icon = principle.icon;
            return (
              <Card key={idx} className="p-8">
                <div className="flex gap-4 mb-4">
                  <Icon className="w-12 h-12 text-accent flex-shrink-0" />
                  <h2 className="text-2xl font-bold">{principle.title}</h2>
                </div>
                <p className="text-lg text-muted mb-6">{principle.description}</p>
                <div className="bg-muted/20 p-6 rounded border border-border">
                  <h3 className="font-bold mb-3">Implicações Práticas:</h3>
                  <ul className="space-y-2">
                    {principle.implications.map((impl, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>{impl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Princípios de Avaliação Inclusiva</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {evaluationPrinciples.map((eval_principle, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-xl font-bold mb-2">{eval_principle.title}</h3>
                <p className="text-muted">{eval_principle.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-8 bg-accent text-accent-foreground">
          <h2 className="text-2xl font-bold mb-4">Reflexão Final</h2>
          <p className="text-lg mb-4">
            Avaliar na educação especial exige olhar individualizado e flexibilidade. As técnicas avaliativas devem ser adaptadas, não simplificadas mecanicamente.
          </p>
          <p className="text-lg">
            A meta é garantir o direito de aprender e de ter seu aprendizado reconhecido e valorizado.
          </p>
        </Card>
      </div>
    </div>
  );
}
