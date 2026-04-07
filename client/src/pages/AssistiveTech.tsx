import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AssistiveTech() {
  const hardwareOptions = [
    {
      name: "Teclados Adaptados",
      description: "Teclados com colmeias, teclas ampliadas ou layouts simplificados",
      use: "Alunos com tremores, espasticidade ou baixa precisão motora",
    },
    {
      name: "Mouses Especiais",
      description: "Trackballs, mouses de acionamento por sopro ou movimento de cabeça",
      use: "Alunos com impossibilidade de uso das mãos ou braços",
    },
    {
      name: "Acionadores (Switches)",
      description: "Botões grandes acionados por qualquer parte do corpo",
      use: "Alunos com movimentos voluntários mínimos",
    },
    {
      name: "Joysticks Adaptados",
      description: "Alavancas que substituem o mouse convencional",
      use: "Alunos com melhor controle de punho do que de dedos",
    },
  ];

  const softwareOptions = [
    {
      name: "Teclados Virtuais",
      description: "Digitação via clique de mouse ou varredura",
      examples: "Teclado Virtual do Windows, Click-N-Type",
    },
    {
      name: "Controle por Voz",
      description: "Comandos e ditado para operar o sistema",
      examples: "Reconhecimento de Fala do Windows, Voice Access",
    },
    {
      name: "Softwares de Varredura",
      description: "Seleção de itens na tela através de um único clique",
      examples: "HeadMouse, softwares de comunicação alternativa",
    },
    {
      name: "Filtros de Teclado",
      description: "Ignorar teclas repetidas ou pressionadas por muito tempo",
      examples: "Teclas de Aderência e Teclas de Filtragem (Windows)",
    },
  ];

  const environmentalAdaptations = [
    {
      title: "Mesas com Regulagem de Altura",
      description: "Para acomodar diferentes tipos de cadeiras de rodas",
    },
    {
      title: "Suportes de Braço",
      description: "Para reduzir o cansaço muscular durante o uso do computador",
    },
    {
      title: "Espaçamento Adequado",
      description: "Garantir rotas de circulação de no mínimo 90cm entre as bancadas",
    },
    {
      title: "Iluminação Apropriada",
      description: "Evitar reflexos nas telas que possam dificultar a visualização",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-4">Tecnologias Assistivas</h1>
        <p className="text-lg text-muted mb-12">
          Recursos de hardware e software para adaptar o laboratório de informática e garantir acessibilidade total.
        </p>

        <Tabs defaultValue="hardware" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="hardware">Hardware</TabsTrigger>
            <TabsTrigger value="software">Software</TabsTrigger>
            <TabsTrigger value="environment">Ambiente</TabsTrigger>
          </TabsList>

          <TabsContent value="hardware" className="space-y-6">
            <div className="grid gap-6">
              {hardwareOptions.map((item, idx) => (
                <Card key={idx} className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-muted mb-4">{item.description}</p>
                  <div className="bg-muted/20 p-4 rounded border border-border">
                    <p className="text-sm">
                      <strong>Indicação:</strong> {item.use}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="software" className="space-y-6">
            <div className="grid gap-6">
              {softwareOptions.map((item, idx) => (
                <Card key={idx} className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-muted mb-4">{item.description}</p>
                  <div className="bg-muted/20 p-4 rounded border border-border">
                    <p className="text-sm">
                      <strong>Exemplos:</strong> {item.examples}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="environment" className="space-y-6">
            <div className="grid gap-6">
              {environmentalAdaptations.map((item, idx) => (
                <Card key={idx} className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted">{item.description}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Card className="mt-12 p-8 bg-accent text-accent-foreground">
          <h2 className="text-2xl font-bold mb-4">Dica Importante</h2>
          <p className="text-lg">
            A escolha da tecnologia assistiva deve ser personalizada de acordo com as necessidades específicas de cada aluno. Sempre valide com o aluno se o recurso está confortável antes de iniciar a aula.
          </p>
        </Card>
      </div>
    </div>
  );
}
