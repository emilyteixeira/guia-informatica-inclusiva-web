import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { BookOpen, Zap, Users, Brain, FileText, Library } from "lucide-react";

export default function Home() {
  const { user } = useAuth();

  const features = [
    {
      icon: Zap,
      title: "Tecnologias Assistivas",
      description: "Explore hardware e software para adaptar laboratórios de informática",
      href: "/assistive-tech",
    },
    {
      icon: BookOpen,
      title: "Currículo Inclusivo",
      description: "Aprenda desde o histórico da computação até IA Generativa",
      href: "/curriculum",
    },
    {
      icon: Users,
      title: "Princípios Pedagógicos",
      description: "Compreenda os fundamentos da educação inclusiva",
      href: "/principles",
    },
    {
      icon: FileText,
      title: "Gerador de Planos de Aula",
      description: "Crie planos de aula personalizados e exporte em PDF",
      href: "/lesson-plans",
    },
    {
      icon: Brain,
      title: "Chatbot Assistivo",
      description: "Receba sugestões personalizadas com IA",
      href: "/lesson-plans",
    },
    {
      icon: Library,
      title: "Biblioteca de Recursos",
      description: "Acesse referências e links úteis sobre acessibilidade",
      href: "/resources",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Guia de Informática Inclusiva
          </h1>
          <p className="text-lg md:text-xl text-muted mb-8">
            Um recurso completo para ensino de computação acessível a alunos com deficiência física e intelectual. Desde tecnologias assistivas até IA Generativa, com foco em adaptações pedagógicas e inclusão digital.
          </p>
          <div className="flex gap-4 flex-wrap">
            {user ? (
              <Link href="/lesson-plans">
                <Button size="lg" className="bg-accent text-accent-foreground hover:opacity-90">
                  Começar a Criar Planos
                </Button>
              </Link>
            ) : (
              <a href={getLoginUrl()}>
                <Button size="lg" className="bg-accent text-accent-foreground hover:opacity-90">
                  Entrar para Começar
                </Button>
              </a>
            )}
            <Link href="/assistive-tech">
              <Button size="lg" variant="outline">
                Explorar Conteúdo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-card border-t border-border py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Principais Funcionalidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link key={feature.href} href={feature.href}>
                  <Card className="p-6 hover:border-accent transition-colors cursor-pointer h-full">
                    <Icon className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted">{feature.description}</p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Sobre Este Guia</h2>
          <div className="space-y-4 text-lg">
            <p>
              Este guia foi desenvolvido com base em princípios de educação inclusiva e tecnologia assistiva. Ele reconhece que a deficiência física não implica em limitações cognitivas e oferece ferramentas e estratégias para garantir que todos os alunos tenham acesso igualitário ao ensino de informática.
            </p>
            <p>
              Abrange desde os fundamentos históricos da computação até os conceitos emergentes de Inteligência Artificial Generativa, sempre com foco em adaptações pedagógicas e tecnologias assistivas que promovem autonomia e inclusão digital.
            </p>
            <p>
              O design deste site segue rigorosamente os padrões WCAG 2.1 de acessibilidade, garantindo navegação por teclado, alto contraste e compatibilidade com leitores de tela.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent text-accent-foreground py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para Começar?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Explore nossos recursos, crie planos de aula personalizados e receba sugestões de adaptações pedagógicas com IA.
          </p>
          {!user && (
            <a href={getLoginUrl()}>
              <Button size="lg" className="bg-accent-foreground text-accent hover:opacity-90">
                Fazer Login
              </Button>
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
