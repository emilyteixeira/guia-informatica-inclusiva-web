import { useState } from "react";
import { Card } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { ExternalLink } from "lucide-react";

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const resourcesQuery = trpc.resources.getAll.useQuery();

  const categories = [
    { id: "all", label: "Todos" },
    { id: "assistive_tech", label: "Tecnologias Assistivas" },
    { id: "pedagogy", label: "Pedagogia Inclusiva" },
    { id: "wcag", label: "Acessibilidade Web" },
    { id: "ia", label: "IA Generativa" },
  ];

  const filteredResources = selectedCategory === "all"
    ? resourcesQuery.data || []
    : (resourcesQuery.data || []).filter((r) => r.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-4">Biblioteca de Recursos</h1>
        <p className="text-lg text-muted mb-12">
          Acesse referências confiáveis sobre tecnologias assistivas, educação inclusiva, acessibilidade web e IA Generativa.
        </p>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                selectedCategory === cat.id
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:opacity-80"
              }`}
              aria-pressed={selectedCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        {resourcesQuery.isLoading ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted">Carregando recursos...</p>
          </div>
        ) : filteredResources.length > 0 ? (
          <div className="grid gap-6">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="p-6 hover:border-accent transition-colors">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                    <p className="text-muted mb-4">{resource.description}</p>
                    {resource.author && (
                      <p className="text-sm text-muted mb-3">
                        <strong>Autor:</strong> {resource.author}
                      </p>
                    )}
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      Acessar Recurso
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded text-sm font-medium whitespace-nowrap">
                    {categories.find((c) => c.id === resource.category)?.label}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted">Nenhum recurso encontrado nesta categoria</p>
          </div>
        )}

        {/* Featured Resources */}
        <div className="mt-16 pt-12 border-t border-border">
          <h2 className="text-3xl font-bold mb-8">Referências Principais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-accent/10 border-accent">
              <h3 className="text-xl font-bold mb-2">Rita Bersch - Tecnologia Assistiva</h3>
              <p className="text-muted mb-4">
                Introdução à Tecnologia Assistiva (2017). Referência fundamental sobre conceitos e aplicações de TA.
              </p>
              <a
                href="https://www.assistiva.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:opacity-80"
              >
                Visitar Site
                <ExternalLink size={16} />
              </a>
            </Card>

            <Card className="p-6 bg-accent/10 border-accent">
              <h3 className="text-xl font-bold mb-2">WCAG 2.1 - Acessibilidade Web</h3>
              <p className="text-muted mb-4">
                Diretrizes de Acessibilidade para Conteúdo Web. Padrão internacional para acessibilidade digital.
              </p>
              <a
                href="https://www.w3.org/WAI/WCAG21/quickref/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:opacity-80"
              >
                Visitar WCAG
                <ExternalLink size={16} />
              </a>
            </Card>

            <Card className="p-6 bg-accent/10 border-accent">
              <h3 className="text-xl font-bold mb-2">Educação Especial Inclusiva</h3>
              <p className="text-muted mb-4">
                Diretrizes e boas práticas para educação inclusiva de alunos com deficiência.
              </p>
              <a
                href="https://www.gov.br/mec/pt-br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:opacity-80"
              >
                MEC - Ministério da Educação
                <ExternalLink size={16} />
              </a>
            </Card>

            <Card className="p-6 bg-accent/10 border-accent">
              <h3 className="text-xl font-bold mb-2">IA Generativa e Ética</h3>
              <p className="text-muted mb-4">
                Recursos sobre uso responsável de IA, incluindo considerações de acessibilidade e inclusão.
              </p>
              <a
                href="https://www.openai.com/research"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:opacity-80"
              >
                OpenAI Research
                <ExternalLink size={16} />
              </a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
