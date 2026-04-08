import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Chat() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="container py-12">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <Card className="p-8 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Acesso Restrito</h2>
            <p className="text-lg text-muted mb-6">
              Você precisa estar logado para usar o Chatbot Assistivo.
            </p>
            <a href={getLoginUrl()}>
              <Button size="lg" className="bg-accent text-accent-foreground hover:opacity-90">
                Fazer Login
              </Button>
            </a>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Chatbot Assistivo</h1>
          <p className="text-lg text-muted mb-12">
            Receba sugestões personalizadas de adaptações pedagógicas com base em IA.
          </p>

          <Card className="p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤖</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">Em Desenvolvimento</h2>
              <p className="text-muted">
                O Chatbot Assistivo está sendo desenvolvido. Em breve, você poderá:
              </p>
            </div>

            <div className="space-y-3 text-left max-w-md mx-auto mb-8">
              <div className="flex gap-3 items-start">
                <span className="text-accent font-bold">✓</span>
                <p>Descrever o tipo de deficiência do aluno</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-accent font-bold">✓</span>
                <p>Receber sugestões de adaptações pedagógicas personalizadas</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-accent font-bold">✓</span>
                <p>Explorar tecnologias assistivas recomendadas</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-accent font-bold">✓</span>
                <p>Gerar planos de aula adaptados com IA</p>
              </div>
            </div>

            <Link href="/lesson-plans">
              <Button size="lg" className="bg-accent text-accent-foreground hover:opacity-90">
                Ir para Gerador de Planos de Aula
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
