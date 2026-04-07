import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Curriculum() {
  const modules = [
    {
      id: "history",
      title: "Módulo 1: Fundamentos e Histórico",
      topics: [
        { name: "Histórico", desc: "Evolução das máquinas de calcular até os PCs", adapt: "Simuladores online de máquinas antigas" },
        { name: "Hardware", desc: "Componentes internos (CPU, RAM, HD) e periféricos", adapt: "Atividade de Montagem Virtual" },
        { name: "Software", desc: "Sistemas operacionais e aplicativos", adapt: "Foco na personalização de acessibilidade" },
      ],
    },
    {
      id: "logic",
      title: "Módulo 2: Lógica e Pensamento Computacional",
      topics: [
        { name: "Algoritmos", desc: "Sequências lógicas e resolução de problemas", adapt: "Atividades desplugadas com comandos verbais" },
        { name: "Programação", desc: "Blocos lógicos e linguagens visuais", adapt: "Scratch com extensões de acessibilidade" },
        { name: "Estruturas", desc: "Condicionais (Se/Então) e Repetições", adapt: "Criação de jogos com um único botão" },
      ],
    },
    {
      id: "internet",
      title: "Módulo 3: Internet e Cidadania Digital",
      topics: [
        { name: "Navegação", desc: "Pesquisa, segurança e redes sociais", adapt: "Leitores de tela e atalhos de teclado" },
        { name: "Acessibilidade Web", desc: "O que torna um site acessível (W3C/WCAG)", adapt: "Análise crítica de sites" },
        { name: "Colaboração", desc: "Ferramentas de nuvem (Google Drive, Office 365)", adapt: "Edição compartilhada" },
      ],
    },
    {
      id: "ai",
      title: "Módulo 4: Fundamentos da IA Generativa",
      topics: [
        { name: "O que é IA?", desc: "Modelos de linguagem e redes neurais", adapt: "Analogia com corretor ortográfico" },
        { name: "Prompts", desc: "Como conversar com a IA para obter resultados", adapt: "Foco no ditado por voz" },
        { name: "Aplicações", desc: "Geração de texto, imagem e código", adapt: "IA como ferramenta assistiva" },
        { name: "Ética", desc: "Responsabilidade no uso da IA", adapt: "Debate sobre inclusão e IA" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-4">Currículo Inclusivo</h1>
        <p className="text-lg text-muted mb-12">
          Uma estrutura curricular adaptada para alunos com deficiência física, cobrindo desde o histórico da computação até IA Generativa.
        </p>

        <Tabs defaultValue="history" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="history">Histórico</TabsTrigger>
            <TabsTrigger value="logic">Lógica</TabsTrigger>
            <TabsTrigger value="internet">Internet</TabsTrigger>
            <TabsTrigger value="ai">IA</TabsTrigger>
          </TabsList>

          {modules.map((module) => (
            <TabsContent key={module.id} value={module.id} className="space-y-6">
              <h2 className="text-2xl font-bold">{module.title}</h2>
              <div className="grid gap-6">
                {module.topics.map((topic, idx) => (
                  <Card key={idx} className="p-6">
                    <h3 className="text-xl font-bold mb-2">{topic.name}</h3>
                    <p className="text-muted mb-4">{topic.desc}</p>
                    <div className="bg-accent/10 p-4 rounded border border-accent">
                      <p className="text-sm">
                        <strong>Adaptação Pedagógica:</strong> {topic.adapt}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Card className="mt-12 p-8 bg-muted">
          <h2 className="text-2xl font-bold mb-4">Dica Didática</h2>
          <p className="text-lg">
            Sempre relacione o conteúdo técnico com a autonomia do aluno. Por exemplo, ao ensinar IA, mostre como ela pode ser usada para automatizar tarefas que seriam motoramente exaustivas.
          </p>
        </Card>
      </div>
    </div>
  );
}
