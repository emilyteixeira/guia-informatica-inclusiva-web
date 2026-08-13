# PRD — EduCode Marabá

> Plataforma offline-first de formação e apoio pedagógico para o ensino inclusivo de Computação no Ensino Fundamental II

| Campo | Valor |
| --- | --- |
| Status | Proposta para validação |
| Versão | 1.0 |
| Data | 13 de agosto de 2026 |
| Última verificação normativa | 13 de agosto de 2026 |
| Horizonte | MVP e piloto controlado |
| Local inicial | 1–2 escolas públicas de Marabá (PA) |
| Público principal | Professores, pedagogos e coordenação escolar |
| Público beneficiário | Estudantes do 6º ao 9º ano |
| Responsáveis acadêmicos de origem | Emily Teixeira Araújo da Silva, Manuella da Cruz Furtado e Marcos Hernandes |

## 1. Resumo executivo

O EduCode Marabá é uma proposta de evolução do atual **Guia de Informática Inclusiva** para uma plataforma educacional offline-first que ajude profissionais de escolas públicas a ensinar Computação de forma curricular, acessível e contextualizada. O MVP prioriza quem planeja, media e acompanha a aprendizagem: professores, pedagogos, coordenadores e gestores escolares. Estudantes são beneficiários acompanhados, mas não terão conta nem experiência autônoma completa nesta fase.

O produto organiza formação docente, referências curriculares, recursos didáticos, atividades desplugadas, tecnologias assistivas, planejamento de aulas e acompanhamento pedagógico mínimo em um único fluxo. As funções essenciais devem continuar disponíveis sem conexão após a preparação inicial do dispositivo. Recursos de inteligência artificial serão opcionais e exclusivamente online; nenhum plano, conteúdo ou registro essencial dependerá deles.

O piloto pretende responder a quatro questões:

1. A plataforma aumenta a confiança e a capacidade prática do educador para trabalhar competências de Computação?
2. O planejamento alinhado ao complemento de Computação à BNCC reduz o esforço para preparar aulas inclusivas?
3. O funcionamento offline-first sustenta o uso em escolas com conectividade intermitente?
4. O acompanhamento pedagógico mínimo produz evidências úteis sem coletar dados excessivos de crianças e adolescentes?

Este PRD atende simultaneamente a três leitores:

- **produto e engenharia:** requisitos, regras, dados, cenários e critérios de aceite;
- **banca acadêmica:** problema, fundamentação, hipóteses, metodologia e limites do estudo;
- **parceiros públicos:** impacto esperado, governança, conformidade, implantação e decisão de escala.

O documento é uma especificação de produto. Ele não substitui parecer jurídico, avaliação pedagógica da rede, plano de pesquisa aprovado ou projeto técnico detalhado.

## 2. Contexto e oportunidade

### 2.1 Problema

O ensino de Computação na Educação Básica precisa ser implementado de forma curricular, mas muitos educadores enfrentam simultaneamente:

- formação insuficiente ou fragmentada em Computação;
- dificuldade para localizar e interpretar habilidades curriculares aplicáveis ao ano escolar;
- pouco tempo para transformar referenciais em atividades executáveis;
- infraestrutura heterogênea e conexão instável;
- falta de materiais que combinem acessibilidade, inclusão e realidade local;
- ausência de um registro pedagógico simples sobre aplicação e progresso;
- insegurança sobre privacidade e uso responsável de IA com menores de idade.

Esses obstáculos tendem a transformar o ensino de Computação em ações pontuais, dependentes de pessoas específicas ou de ferramentas online que não funcionam em todos os contextos.

### 2.2 Oportunidade

Há uma convergência entre a obrigatoriedade curricular da educação digital, a necessidade de formação docente, a prioridade pública de inclusão digital e o contexto municipal de tecnologias e equidade. O EduCode pode transformar essa convergência em um serviço prático: aprender, planejar, aplicar, registrar e melhorar, mesmo em condições de conectividade limitada.

### 2.3 Origem da proposta

O relatório acadêmico **“Apresentação da Plataforma EduCode Marabá”**, de 7 de novembro de 2025, propõe ensino inclusivo de Computação para crianças e adolescentes, aplicação gamificada PWA, atividades offline, avaliação formativa e apoio docente. Este PRD preserva essa visão, mas reduz o primeiro recorte para torná-lo testável: o MVP é orientado a educadores e ao Ensino Fundamental II.

O relatório menciona quatro eixos. Para o produto, o catálogo curricular deve usar a nomenclatura oficial do complemento de Computação à BNCC: **Pensamento Computacional, Mundo Digital e Cultura Digital**. “Tecnologias Digitais” pode aparecer como tema transversal ou linguagem pedagógica, mas não como quarto eixo oficial.

## 3. Visão do produto

### 3.1 Declaração de visão

> Tornar possível que todo educador de escola pública planeje e conduza experiências inclusivas de aprendizagem em Computação, com base curricular confiável e recursos que funcionem na realidade da escola.

### 3.2 Proposta de valor

| Público | Valor entregue |
| --- | --- |
| Professor | Formação curta, referência curricular e plano aplicável sem depender de conexão constante. |
| Pedagogo/coordenador | Curadoria, acompanhamento da prática docente e visão agregada da implantação. |
| Gestor escolar | Evidências de adoção, necessidades de infraestrutura e conformidade básica do piloto. |
| Estudante | Atividades mais acessíveis, contextualizadas e adequadas às suas necessidades de acesso. |
| Rede pública | Modelo replicável de formação e implementação curricular com menor dependência de conectividade. |

### 3.3 Princípios

1. **Professor primeiro, estudante protegido:** o MVP fortalece a mediação docente sem criar conta infantil.
2. **Offline é modo normal:** falta de internet não pode interromper formação baixada, planejamento ou registro local.
3. **Currículo rastreável:** toda recomendação curricular deve apontar para fonte, etapa, ano e versão.
4. **Inclusão ampla:** barreiras físicas, sensoriais, cognitivas, comunicacionais, socioeconômicas e tecnológicas são consideradas desde o desenho.
5. **Dados mínimos:** coletar apenas o necessário para a finalidade pedagógica explicitada.
6. **IA assistiva, não decisória:** a IA sugere; o educador revisa, edita e assume a decisão pedagógica.
7. **Transparência operacional:** o usuário sempre sabe se está offline, o que está salvo localmente e o que foi sincronizado.
8. **Evidência antes de escala:** expansão depende dos resultados e salvaguardas do piloto.

## 4. Objetivos, não objetivos e hipóteses

### 4.1 Objetivos do MVP

- Oferecer formação docente modular sobre Computação, inclusão, avaliação e segurança digital.
- Traduzir o complemento de Computação à BNCC em referências pesquisáveis para o 6º ao 9º ano.
- Permitir criar, adaptar, salvar, exportar e aplicar planos de aula inclusivos.
- Manter o núcleo funcional disponível offline após preparação inicial.
- Disponibilizar biblioteca curada com atividades conectadas, desplugadas e acessíveis.
- Registrar necessidades de acesso, objetivos e progresso por perfil pedagógico pseudonimizado.
- Oferecer visão básica da participação docente e do acompanhamento pedagógico.
- Validar utilidade, usabilidade, acessibilidade e viabilidade operacional em 1–2 escolas.

### 4.2 Não objetivos do MVP

- Conta, login ou painel autônomo para estudante.
- Ambiente virtual completo de aprendizagem ou substituição do sistema acadêmico da rede.
- Gamificação completa, ranking, rede social ou comunicação entre estudantes.
- Tutor de IA destinado diretamente a crianças ou adolescentes.
- Modelo de IA executado offline.
- Armazenamento de diagnóstico clínico, laudo, prontuário ou descrição médica detalhada.
- Publicidade, perfilamento comercial, monetização de dados ou compras dentro do produto.
- Pagamentos, assinatura ou marketplace.
- Certificação oficial de formação.
- Integração com diário de classe, SSO governamental ou sistemas de gestão escolar.
- Decisão automatizada sobre avaliação, deficiência, adaptação ou desempenho.
- Cobertura curricular da Educação Infantil, anos iniciais ou Ensino Médio no piloto.

### 4.3 Hipóteses

| ID | Hipótese | Evidência esperada |
| --- | --- | --- |
| H1 | Formação e planejamento integrados reduzem a barreira de adoção. | Pelo menos 70% dos educadores ativados criam ou aplicam um plano. |
| H2 | Materiais offline sustentam o uso com internet intermitente. | Pelo menos 80% dos fluxos essenciais iniciados offline são concluídos sem erro impeditivo. |
| H3 | Curadoria curricular aumenta a confiança docente. | Melhoria positiva e mensurável entre autoavaliação inicial e final. |
| H4 | Perfis mínimos geram acompanhamento útil sem exigir dados clínicos. | Educadores avaliam os registros como úteis e não solicitam campos sensíveis como requisito essencial. |
| H5 | IA opcional economiza tempo sem se tornar dependência. | Usuários online adotam sugestões, enquanto usuários offline concluem os mesmos objetivos por modelos determinísticos. |

## 5. Estado atual e estratégia de evolução

### 5.1 Capacidades já presentes no repositório

O protótipo atual usa React 19, Vite, TypeScript, tRPC, Express, Drizzle ORM e MySQL. Ele contém:

- autenticação e papéis gerais de usuário/administrador;
- páginas de tecnologias assistivas, currículo inclusivo e princípios pedagógicos;
- gerador e persistência de planos de aula;
- biblioteca de recursos;
- estrutura de chatbot com IA e histórico;
- estrutura de geração de imagens;
- tema de alto contraste, navegação semântica e componentes acessíveis;
- banco para usuários, planos, mensagens, imagens e recursos.

### 5.2 Lacunas para o MVP

| Área | Situação atual | Necessidade do MVP |
| --- | --- | --- |
| Identidade | “Guia de Informática Inclusiva” | Posicionamento e linguagem EduCode Marabá. |
| Público | Conteúdo geral para educadores | Jornadas explícitas por professor, coordenação e gestor. |
| Currículo | Módulos estáticos | Catálogo versionado e rastreável ao complemento de Computação à BNCC. |
| Formação | Conteúdo consultivo | Trilhas, unidades, progresso e autoavaliação. |
| Planejamento | CRUD de planos | Associação curricular, acessibilidade, modo offline, versões e aplicação. |
| Estudantes | Sem perfil pedagógico | Perfil mínimo pseudonimizado e registros de progresso. |
| Offline | Não há evidência de PWA/sincronização | Manifesto, service worker, pacotes, fila e resolução de conflitos. |
| Acessibilidade | Intenção e componentes | Critérios WCAG 2.2 AA/eMAG e testes com tecnologia assistiva. |
| Segurança | Autenticação básica | Isolamento institucional, autorização por recurso, auditoria e proteção local. |
| IA | Estrutura técnica disponível | Política de uso, revisão humana, filtro de dados e fallback offline. |
| Avaliação | Sem instrumentação do piloto | Eventos mínimos, métricas agregadas e instrumentos pré/pós. |

O protótipo é uma **base a evoluir**, não evidência de que os requisitos deste PRD já estejam atendidos. Antes do desenvolvimento do MVP, a equipe deverá realizar revisão de arquitetura, autorização, acessibilidade e segurança.

## 6. Público, personas e papéis

### 6.1 Professor — usuário principal

**Contexto:** leciona componente específico ou trabalha Computação de modo interdisciplinar; tem tempo limitado e familiaridade tecnológica variável.

**Necessidades:** entender o que ensinar, obter exemplo aplicável, adaptar à turma, trabalhar offline e registrar resultados sem burocracia.

**Sucesso:** consegue preparar e aplicar uma aula alinhada, inclusiva e viável com os recursos disponíveis.

### 6.2 Pedagogo ou coordenador — curador e apoiador

**Contexto:** acompanha planejamento, formação e coerência curricular de uma ou mais turmas.

**Necessidades:** indicar trilhas, revisar planos, orientar adaptações e visualizar adoção agregada.

**Sucesso:** identifica lacunas e oferece apoio sem acessar mais dados de estudante do que o necessário.

### 6.3 Gestor escolar — responsável institucional local

**Contexto:** responde por adesão, infraestrutura, pessoas autorizadas e comunicação com a rede e responsáveis.

**Necessidades:** administrar acessos, conhecer riscos, conferir situação do piloto e solicitar exportação/exclusão.

**Sucesso:** mantém operação segura, transparente e compatível com as decisões da instituição.

### 6.4 Estudante — beneficiário acompanhado

**Contexto:** cursa do 6º ao 9º ano e pode encontrar barreiras diversas de acesso e aprendizagem.

**Necessidades:** participar de atividades adequadas, ter escolhas de interação e receber avaliação formativa.

**Sucesso:** demonstra progresso nos objetivos trabalhados sem ser exposto a coleta excessiva, classificação automatizada ou competição pública.

### 6.5 Matriz de papéis

| Ação | Professor | Pedagogo/coordenador | Gestor escolar | Administrador da plataforma |
| --- | --- | --- | --- | --- |
| Consumir formação | Própria | Própria | Opcional | Não |
| Criar plano | Sim | Sim | Não por padrão | Não |
| Revisar/compartilhar plano | Próprios e compartilhados | Na escola | Leitura agregada | Suporte excepcional auditado |
| Criar turma | Se autorizado | Sim | Sim | Não |
| Criar perfil pedagógico | Em turmas atribuídas | Se autorizado | Não por padrão | Não |
| Registrar progresso | Em turmas atribuídas | Se autorizado | Não | Não |
| Ver dados individuais | Turmas atribuídas | Conforme política escolar | Apenas quando formalmente necessário | Apenas suporte excepcional e auditado |
| Gerir usuários da escola | Não | Limitado | Sim | Suporte e gestão global |
| Exportar dados institucionais | Próprios | Escopo autorizado | Sim | Sob solicitação e auditoria |
| Excluir/desativar | Solicita | Solicita | Autoriza conforme governança | Executa quando aplicável |

Privilégios devem seguir menor acesso necessário. O administrador técnico não recebe acesso rotineiro ao conteúdo pedagógico individual.

## 7. Jornadas prioritárias

### J1. Preparar o dispositivo e estudar offline

1. Educador entra quando há conexão.
2. Seleciona escola, etapa e pacotes desejados.
3. A plataforma informa tamanho, versão e data dos pacotes.
4. Educador baixa trilhas, catálogo curricular, modelos e recursos.
5. O sistema confirma disponibilidade offline e data da última sincronização.
6. Sem internet, o educador conclui unidades e autoavaliações.
7. O progresso entra na fila e sincroniza quando a conexão retorna.

### J2. Consultar currículo e criar plano

1. Educador seleciona ano, eixo, tema ou objetivo.
2. Visualiza habilidade com texto oficial, fonte, versão e sugestões curadas.
3. Escolhe um modelo de plano ou inicia um plano vazio.
4. Define objetivos, atividade, recursos disponíveis, alternativas offline e avaliação.
5. Associa habilidades e necessidades de acesso, sem inserir diagnóstico clínico.
6. Salva localmente, revisa e exporta para impressão/PDF quando suportado.
7. Compartilha com coordenação após sincronização.

### J3. Adaptar com IA quando houver conexão

1. Educador escolhe “Sugerir adaptação com IA”.
2. A plataforma mostra quais dados serão enviados e remove identificadores.
3. Educador confirma objetivo, faixa, recursos e barreiras funcionais genéricas.
4. IA gera sugestão marcada como conteúdo não validado.
5. Educador aceita, edita ou descarta; nada é aplicado automaticamente.
6. O plano registra que houve assistência de IA, sem armazenar prompt identificável.
7. Se a IA falhar, o fluxo retorna a modelos e recomendações curadas.

### J4. Acompanhar estudante sem conta infantil

1. Educador cria turma e perfil com código/apelido.
2. Registra ano, objetivos e necessidades de acesso em linguagem funcional.
3. Associa uma atividade aplicada.
4. Registra evidência formativa e nível de progresso.
5. Consulta histórico individual e visão agregada da turma.
6. Corrige, exporta ou solicita exclusão conforme governança.

### J5. Resolver sincronização

1. Interface indica itens pendentes e última sincronização.
2. Conexão retorna e a fila envia operações de forma idempotente.
3. Eventos de progresso duplicados são descartados pelo identificador da operação.
4. Alterações concorrentes em um plano geram versões comparáveis; não há sobrescrita silenciosa.
5. Educador escolhe versão ou combina conteúdo.
6. Exclusões usam marca de remoção até confirmação do servidor.

## 8. Escopo funcional

### 8.1 Formação docente

**FR-01 — Catálogo de trilhas.** Exibir trilhas por objetivo e nível de familiaridade, com duração estimada, versão e estado de download.

**FR-02 — Estrutura modular.** Cada trilha contém unidades curtas, objetivos, conteúdo, exemplo local, prática, verificação de compreensão e referências.

**FR-03 — Progresso.** Registrar início, conclusão e autoavaliação localmente; sincronizar depois sem duplicar eventos.

**FR-04 — Trilhas iniciais.** O pacote editorial mínimo deverá cobrir:

1. fundamentos e eixos da Computação na Educação Básica;
2. pensamento computacional e atividades desplugadas;
3. mundo digital, redes e segurança;
4. cultura digital, ética, cidadania e proteção de dados;
5. planejamento inclusivo e Desenho Universal para Aprendizagem;
6. tecnologias assistivas e comunicação acessível;
7. avaliação formativa em Computação;
8. uso responsável de IA pelo educador.

**FR-05 — Evidência não certificadora.** Emitir comprovante de conclusão informativo, claramente identificado como não equivalente a certificado oficial.

### 8.2 Referencial curricular

**FR-06 — Catálogo oficial versionado.** Armazenar e exibir habilidades do 6º ao 9º ano provenientes do anexo oficial do complemento de Computação à BNCC.

**FR-07 — Metadados curriculares.** Cada habilidade deve ter código quando existente, texto, etapa, ano, eixo, fonte oficial, versão, data de revisão e estado editorial.

**FR-08 — Navegação.** Permitir busca e filtro por ano, eixo, tema, palavra-chave e tipo de atividade.

**FR-09 — Camada editorial.** Distinguir visualmente texto normativo de interpretação, exemplo e recomendação EduCode.

**FR-10 — Rastreabilidade.** Planos e atividades devem manter vínculo com a versão da habilidade usada no momento da criação.

Nenhum conteúdo gerado por IA pode criar ou alterar códigos, textos oficiais ou relações curriculares sem revisão editorial autorizada.

### 8.3 Biblioteca de recursos

**FR-11 — Tipos.** Incluir planos-modelo, atividades plugadas/desplugadas, materiais imprimíveis, guias, tecnologias assistivas e referências externas.

**FR-12 — Metadados.** Registrar título, descrição, autoria, licença, fonte, ano escolar, eixo, duração, infraestrutura, acessibilidade, conectividade, formato e data de revisão.

**FR-13 — Pacotes offline.** Permitir baixar itens e dependências; links externos devem ser marcados como indisponíveis offline, salvo conteúdo licenciado armazenado no pacote.

**FR-14 — Curadoria.** Publicação exige responsável editorial, revisão pedagógica e verificação de licença e acessibilidade.

**FR-15 — Obsolescência.** Recurso retirado não some de planos históricos; aparece como arquivado e oferece substituto quando disponível.

### 8.4 Planejamento de aula

**FR-16 — Formas de criação.** Criar a partir de modelo, duplicar plano existente ou iniciar em branco.

**FR-17 — Campos mínimos.** Título, ano/turma, duração, habilidades, objetivos, conhecimentos prévios, materiais, conectividade, metodologia, etapas, acessibilidade, atividade, avaliação e referências.

**FR-18 — Adaptações.** Registrar alternativas de representação, interação, comunicação, tempo, ambiente e tecnologia assistiva. O sistema deve desencorajar rótulos médicos.

**FR-19 — Validação.** Alertar, sem bloquear indevidamente, sobre ausência de objetivo, habilidade, avaliação ou alternativa offline.

**FR-20 — Ciclo de vida.** Rascunho, pronto para revisão, aprovado localmente, aplicado e arquivado.

**FR-21 — Versionamento.** Preservar versões aplicadas; nova edição após aplicação cria revisão.

**FR-22 — Exportação.** Gerar visualização para impressão e arquivo acessível. PDF e Markdown são formatos desejados; a implementação deverá validar ordem de leitura, estrutura e texto alternativo.

**FR-23 — Compartilhamento.** Compartilhar dentro da escola por padrão. Publicação entre escolas exige revisão de direitos autorais, dados e contexto.

O plano deve identificar quando uma atividade usa dispositivo digital e deixar explícita a finalidade pedagógica. O MVP não pode pressupor que estudantes levem aparelho pessoal; uso de dispositivos da escola ou de tecnologia assistiva deve seguir o regimento e a proposta pedagógica locais.

### 8.5 Turmas e perfis pedagógicos

**FR-24 — Turma.** Registrar nome interno, ano, turno opcional, período letivo e educadores atribuídos.

**FR-25 — Perfil mínimo.** Registrar identificador gerado, código/apelido escolhido pela escola, ano/turma, necessidades funcionais de acesso, preferências de interação, objetivos pedagógicos e estado ativo/inativo.

**FR-26 — Proibição de campos clínicos.** Não oferecer campo de diagnóstico, CID, laudo, medicação, prontuário ou anexo clínico.

**FR-27 — Prevenção de excesso.** Orientar o usuário a não inserir nome civil, matrícula ou diagnóstico em campos livres; detectar e alertar sobre padrões evidentes quando tecnicamente viável.

**FR-28 — Progresso.** Registrar data, atividade, objetivo/habilidade, escala formativa, observação curta e autor.

Escala inicial:

- não observado;
- iniciou com apoio;
- realiza com apoio;
- realiza com autonomia;
- transfere para novo contexto.

**FR-29 — Visões.** Exibir histórico individual ao educador autorizado e agregados de turma sem ranking público.

**FR-30 — Portabilidade e encerramento.** Permitir exportação legível e desativação/exclusão conforme política institucional e obrigação de retenção aprovada.

### 8.6 Painéis

**FR-31 — Educador.** Mostrar trilhas em andamento, planos recentes, itens offline, pendências de sincronização e turmas atribuídas.

**FR-32 — Coordenação.** Mostrar adesão, trilhas, planos por estado, habilidades cobertas e necessidades de apoio em forma agregada.

**FR-33 — Gestão.** Mostrar usuários ativos, situação do piloto, armazenamento/sincronização e indicadores agregados, sem expor observações individuais por padrão.

**FR-34 — Explicabilidade.** Todo indicador deve informar definição, período e limite de interpretação.

### 8.7 IA opcional

**FR-35 — Casos permitidos.** Sugerir adaptações, variações de atividade, perguntas formativas e rascunhos de plano.

**FR-36 — Casos proibidos.** Diagnosticar, classificar deficiência, atribuir nota automaticamente, decidir progressão, gerar perfil comportamental ou conversar diretamente com estudante.

**FR-37 — Minimização.** O contexto enviado deve excluir identificador de perfil, nome, escola específica e observações livres; usar apenas faixa/ano, objetivo, recursos e barreiras funcionais genéricas.

**FR-38 — Consentimento operacional.** Antes do envio, mostrar resumo dos dados e exigir ação afirmativa do educador.

**FR-39 — Revisão humana.** Saída entra como sugestão destacada e nunca substitui conteúdo oficial ou plano sem edição/confirmação.

**FR-40 — Fallback.** Indisponibilidade, limite ou recusa da IA encaminha para biblioteca e modelos locais, preservando a tarefa.

**FR-41 — Registro.** Registrar provedor/modelo, data e aceitação/edição para auditoria de qualidade, sem conservar prompt identificável além do necessário.

## 9. Offline-first e sincronização

### 9.1 Matriz de disponibilidade

| Capacidade | Offline | Online |
| --- | --- | --- |
| Abrir trilhas baixadas | Completa | Completa |
| Concluir unidade/autoavaliação | Completa, com fila | Completa |
| Consultar catálogo curricular baixado | Completa | Completa e atualizável |
| Criar/editar plano | Completa | Completa |
| Exportar/visualizar impressão | Completa quando dependências estiverem no pacote | Completa |
| Consultar recursos baixados | Completa | Completa |
| Criar perfil e registrar progresso | Completa em sessão previamente autorizada | Completa |
| IA | Indisponível com fallback | Disponível conforme serviço |
| Convidar usuário/alterar permissões | Não | Completa |
| Baixar/atualizar pacotes | Não | Completa |

### 9.2 Requisitos técnicos de produto

- **NFR-OFF-01:** aplicação instalável como PWA em navegadores-alvo definidos pelo piloto.
- **NFR-OFF-02:** shell da aplicação e pacotes selecionados permanecem disponíveis após reinício do navegador/dispositivo.
- **NFR-OFF-03:** toda mutação local recebe `clientMutationId`, horário local, usuário, dispositivo e versão do registro.
- **NFR-OFF-04:** fila é persistente, ordenada por dependência e idempotente.
- **NFR-OFF-05:** interface distingue `salvo neste dispositivo`, `aguardando sincronização`, `sincronizado`, `conflito` e `erro`.
- **NFR-OFF-06:** falha não apaga edição; nova tentativa pode ser automática com recuo e manual pelo usuário.
- **NFR-OFF-07:** atualização de pacote não remove versão necessária a registros históricos.
- **NFR-OFF-08:** logout oferece remoção segura dos dados locais; em dispositivo compartilhado, remoção é padrão recomendado.

### 9.3 Regras de conflito

1. Eventos de progresso são anexados e deduplicados por `clientMutationId`.
2. Alterações concorrentes em plano ou perfil nunca usam sobrescrita silenciosa.
3. Se campos diferentes mudaram, o sistema pode mesclar e mostrar o resultado.
4. Se o mesmo campo mudou, preservar ambas as versões e solicitar resolução a usuário autorizado.
5. Exclusão cria tombstone; se houver edição posterior não sincronizada, o sistema pausa e solicita decisão.
6. Mudanças de permissão no servidor têm precedência: um usuário revogado não sincroniza novas leituras ou escritas.
7. O usuário pode exportar o conteúdo próprio pendente antes de descartar uma alteração rejeitada, desde que não viole permissão ou privacidade.

### 9.4 Uso de dispositivos em ambiente escolar

- O EduCode é ferramenta de mediação docente e não autorização genérica para uso de celular por estudante.
- Atividades digitais devem registrar finalidade, duração, supervisão, alternativa desplugada e dispositivo previsto.
- O uso pedagógico deve observar a política da rede/escola, a Lei nº 15.100/2025, o Decreto nº 12.385/2025 e a Resolução CNE/CEB nº 2/2025.
- Tecnologias assistivas e demais exceções legais devem ser preservadas sem exigir que o EduCode armazene laudo ou documento de saúde.
- Formação docente deve abordar uso seguro, responsável e equilibrado de telas e dispositivos.

## 10. Conteúdo e governança curricular

### 10.1 Arquitetura editorial

Cada conteúdo deve distinguir:

- **fonte normativa:** reprodução fiel e vinculada à origem;
- **interpretação pedagógica:** explicação revisada por especialista;
- **material de aplicação:** plano, atividade ou instrumento;
- **adaptação inclusiva:** opções baseadas em barreiras e formas de participação;
- **sugestão de IA:** rascunho temporário, nunca fonte de verdade.

### 10.2 Fluxo de publicação

1. Autoria ou importação com fonte e licença.
2. Revisão curricular por profissional designado.
3. Revisão de inclusão e acessibilidade.
4. Revisão de linguagem simples e contexto local.
5. Aprovação editorial com versão e responsável.
6. Publicação no pacote online/offline.
7. Revisão periódica ou acionada por mudança normativa.

### 10.3 Qualidade mínima

- vínculo curricular verificável;
- objetivo observável;
- alternativa para baixa ou nenhuma conectividade;
- materiais e duração realistas;
- opções de acesso e participação;
- avaliação formativa não baseada apenas em velocidade;
- licença ou autorização de uso registrada;
- formato acessível e linguagem não capacitista;
- data e responsável pela última revisão.

## 11. Acessibilidade e inclusão

### 11.1 Meta

O produto deve buscar conformidade **WCAG 2.2 nível AA** e aplicar recomendações pertinentes do **eMAG 3.1**. WCAG é referência técnica; eMAG orienta o contexto brasileiro de serviços públicos. A conformidade só pode ser declarada após avaliação, não pela simples presença de componentes ou alto contraste.

### 11.2 Requisitos

- navegação completa por teclado, foco visível e ordem lógica;
- landmarks, títulos, rótulos, mensagens e relações semânticas;
- contraste mínimo conforme WCAG e modo de alto contraste sem perda de informação;
- ampliação/refluxo sem rolagem bidimensional indevida nos conteúdos principais;
- alvos de interação adequados e alternativas a gestos complexos;
- nenhuma informação transmitida apenas por cor, posição, som ou animação;
- compatibilidade testada com leitores de tela selecionados para desktop e Android;
- redução de movimento e ausência de animação obrigatória;
- linguagem simples, explicação de siglas e instruções consistentes;
- legendas, transcrições, audiodescrição ou alternativa equivalente para mídia;
- texto alternativo significativo e possibilidade de marcar imagem decorativa;
- formulários com prevenção, identificação e recuperação de erros;
- tempo flexível e salvamento automático;
- exportações com estrutura de títulos, listas, tabelas e ordem de leitura;
- atividades com múltiplas formas de representação, ação/expressão e engajamento;
- suporte a tecnologias assistivas não condicionado a diagnóstico clínico.

### 11.3 Validação inclusiva

Testes automáticos são necessários, mas insuficientes. O piloto deve incluir avaliação manual e participação remunerada ou institucionalmente reconhecida de pessoas com deficiência e educadores que atuam com diferentes necessidades de acesso.

## 12. Modelo conceitual de dados

O modelo abaixo orienta o domínio; não constitui migração de banco nesta fase.

| Entidade | Finalidade | Campos conceituais essenciais | Dados proibidos/evitados |
| --- | --- | --- | --- |
| `Educador` | Identidade e acesso profissional | id, nome, e-mail profissional, papel, escola, estado, datas | dados pessoais não necessários |
| `Escola` | Isolamento institucional | id, nome, rede, município, configurações, responsável | dados sensíveis sem finalidade |
| `Turma` | Agrupamento pedagógico | id, escola, ano, período, educadores | lista civil de estudantes no MVP |
| `PerfilPedagógico` | Acompanhamento mínimo | id, código/apelido, turma, necessidades funcionais, objetivos, estado | nome completo, matrícula, CID, laudo, saúde |
| `Trilha` | Formação | id, título, módulos, versão, revisão | — |
| `HabilidadeBNCC` | Fonte curricular | id/código, texto, ano, eixo, fonte, versão | conteúdo de IA não revisado |
| `PlanoDeAula` | Planejamento | id, autor, escola, versão, campos pedagógicos, habilidades, estado | identificadores de estudante em texto livre |
| `Atividade` | Recurso aplicável | id, metadados, licença, acessibilidade, pacote | material sem licença ou fonte |
| `RegistroDeProgresso` | Evidência formativa | id, perfil, atividade, objetivo, nível, nota curta, autor, data | decisão automatizada, nota clínica |
| `PacoteOffline` | Distribuição versionada | id, tipo, versão, tamanho, hash, dependências | — |
| `OperacaoSincronizacao` | Idempotência e conflito | clientMutationId, entidade, ação, versão, estado, datas | conteúdo além do necessário |
| `EventoAuditoria` | Responsabilização | ator, ação, alvo, escola, data, resultado | conteúdo integral salvo por padrão |

### 12.1 Relacionamentos essenciais

- uma escola possui educadores e turmas;
- uma turma possui perfis pedagógicos e educadores atribuídos;
- um plano referencia habilidades e atividades em versões determinadas;
- um registro de progresso pertence a um perfil e pode referenciar plano, atividade e habilidade;
- trilhas e pacotes são versionados e independentes dos registros pessoais;
- auditoria registra operações sensíveis sem replicar o conteúdo protegido.

## 13. Privacidade, proteção infantil e segurança

### 13.1 Governança

Antes do piloto, rede/escola, equipe do projeto e eventual fornecedor devem definir formalmente controlador, operador, encarregado/canal e responsabilidades. A base legal de cada tratamento deve ser documentada pela instituição competente; este PRD não presume que consentimento seja a única ou a melhor base legal.

Quando consentimento for adotado, deve ser específico, destacado, verificável e revogável conforme a legislação aplicável. Independentemente da base, prevalecem finalidade, necessidade, transparência, segurança e melhor interesse da criança ou adolescente.

### 13.2 Inventário de finalidades

| Dado | Finalidade | Visibilidade | Retenção proposta |
| --- | --- | --- | --- |
| Conta do educador | autenticação e atribuição | escola e suporte autorizado | vínculo + prazo institucional |
| Código/apelido do perfil | diferenciar acompanhamento | educadores autorizados | período letivo + prazo aprovado |
| Necessidades funcionais | adaptar atividade | educadores autorizados | enquanto objetivo estiver ativo |
| Registro de progresso | avaliação formativa | educadores autorizados e agregados | período letivo + prazo aprovado |
| Eventos de uso | avaliar piloto | agregados/pseudonimizados | até conclusão da avaliação |
| Auditoria | segurança e responsabilização | pessoal autorizado | prazo de segurança aprovado |

Os prazos finais devem constar de política aprovada antes da coleta. “Guardar indefinidamente” não é uma opção válida.

### 13.3 Requisitos de segurança

- isolamento lógico entre escolas e verificação de autorização em toda leitura/escrita;
- autenticação adequada ao risco e segundo fator para perfis administrativos quando disponível;
- sessão curta/bloqueio em dispositivo compartilhado e remoção local acessível;
- criptografia em trânsito e em repouso no servidor;
- proteção dos dados locais com recursos criptográficos adequados quando a plataforma suportar, sem prometer segurança impossível em dispositivo comprometido;
- segredos fora do cliente e rotação documentada;
- logs de acesso, exportação, alteração de permissão e exclusão;
- backups com mesma política de retenção e procedimento de restauração testado;
- processo de vulnerabilidade, incidente, comunicação e recuperação;
- exportação sem fórmulas executáveis, metadados excessivos ou dados de outras turmas;
- avaliação de impacto à proteção de dados e modelagem de ameaças antes do piloto.

### 13.4 Direitos e solicitações

Deve existir processo institucional para confirmação, acesso, correção, exportação, oposição quando aplicável, revogação de consentimento e eliminação, respeitando obrigações legais de retenção. A interface não deve sugerir que exclusão local equivale a exclusão no servidor.

### 13.5 Pesquisa acadêmica

Dados operacionais do produto não estão automaticamente autorizados para pesquisa. Se resultados identificáveis ou dados diretamente obtidos de participantes forem usados em pesquisa acadêmica, a equipe deverá avaliar e cumprir o fluxo ético aplicável, inclusive Sistema CEP/Conep, TCLE/assentimento e autorização institucional, antes da coleta para essa finalidade.

## 14. Requisitos não funcionais

### Desempenho

- **NFR-01:** shell instalado deve abrir em até 3 segundos em dispositivo-alvo mediano, medido sem rede e com cache preparado.
- **NFR-02:** ações locais comuns devem responder em até 300 ms no percentil 95, excluídas exportações pesadas.
- **NFR-03:** sincronização deve ser retomável e não exigir repetição manual de conteúdo.

### Confiabilidade

- **NFR-04:** nenhuma edição confirmada como salva localmente pode ser perdida em recarga normal.
- **NFR-05:** restauração de backup e recuperação de fila devem ser testadas antes do piloto.
- **NFR-06:** degradação de IA, analytics ou link externo não bloqueia o núcleo.

### Compatibilidade

- **NFR-07:** navegadores e dispositivos-alvo serão definidos após diagnóstico das escolas; no mínimo, Android/Chrome e desktop Chromium recentes devem ser avaliados.
- **NFR-08:** impressão deve funcionar em A4 e manter legibilidade em preto e branco.

### Manutenibilidade e conteúdo

- **NFR-09:** conteúdo curricular e pacotes têm versão independente da aplicação.
- **NFR-10:** alterações normativas podem ser publicadas sem invalidar referências históricas.
- **NFR-11:** textos de interface e conteúdo editorial devem aceitar revisão e futura internacionalização, embora o MVP seja em português brasileiro.

### Observabilidade com privacidade

- **NFR-12:** falhas, sincronização e métricas de funil usam identificadores pseudônimos e não registram observações pedagógicas.
- **NFR-13:** nenhum serviço de analytics recebe perfil pedagógico ou texto de plano por padrão.

## 15. Métricas e instrumentação

### 15.1 Funil docente

1. convidado;
2. conta ativada;
3. pacote inicial baixado;
4. primeira unidade concluída;
5. primeiro plano criado;
6. plano marcado como aplicado;
7. retorno na quarta semana.

### 15.2 Indicadores do piloto

| Indicador | Definição | Meta inicial |
| --- | --- | --- |
| Ativação | Convidados que ativam e concluem uma ação de valor em 7 dias | ≥ 70% |
| Criação/aplicação | Ativados que criam ou aplicam ao menos um plano | ≥ 70% |
| Retenção em 4 semanas | Ativados com ação de valor na quarta semana | ≥ 60% |
| Conclusão de trilha | Iniciantes que concluem uma trilha essencial | Baseline no piloto; meta após primeira coorte |
| Êxito offline | Fluxos essenciais offline concluídos sem erro impeditivo | ≥ 80% |
| Sincronização | Operações válidas sincronizadas em até 24 h após retorno da conexão | ≥ 95% |
| Conflito não destrutivo | Conflitos sem perda silenciosa de dados | 100% |
| Confiança docente | Variação pré/pós em escala definida | Melhoria positiva, com distribuição reportada |
| Utilidade | Educadores que classificam o produto como útil/muito útil | ≥ 75% |
| Acessibilidade crítica | Bloqueios críticos encontrados e não resolvidos antes da expansão | 0 |
| Incidente de privacidade grave | Incidentes confirmados com dados de estudantes | 0 |

As metas são hipóteses, não evidência prévia. Resultados devem apresentar denominador, perdas de acompanhamento e contexto, evitando afirmar causalidade sem desenho de pesquisa adequado.

### 15.3 Eventos mínimos

`account_activated`, `package_downloaded`, `unit_started`, `unit_completed`, `plan_created`, `plan_applied`, `offline_flow_completed`, `sync_succeeded`, `sync_failed`, `conflict_created`, `conflict_resolved`, `ai_suggestion_requested`, `ai_suggestion_accepted` e `export_completed`.

Eventos não devem conter nome, apelido, observação, prompt livre, conteúdo do plano ou habilidade de um estudante específico.

### 15.4 Avaliação pedagógica

O acompanhamento do estudante é formativo. Para avaliar impacto do piloto, usar medidas agregadas e adequadas ao objetivo trabalhado, combinando:

- rubricas antes/depois quando metodologicamente justificadas;
- amostra de produções ou atividades;
- percepção do educador;
- entrevistas ou grupos focais autorizados;
- registros de barreiras, adaptações e participação.

O produto não deve reduzir aprendizagem a tempo de tela, quantidade de cliques ou velocidade motora.

## 16. Critérios de aceite e cenários críticos

### AC-01 — Uso totalmente offline

**Dado** um dispositivo autenticado e com pacote preparado, **quando** ficar sem internet, **então** o educador abre trilha, consulta habilidade, cria plano, registra progresso e vê todos os itens como salvos localmente, sem tela de erro bloqueante.

### AC-02 — Sincronização posterior

**Dado** conteúdo criado offline, **quando** a conexão retornar, **então** a fila envia cada operação uma única vez, confirma o estado e preserva os identificadores e horários relevantes.

### AC-03 — Conflito de plano

**Dado** o mesmo campo editado offline em dois dispositivos, **quando** ambos sincronizarem, **então** nenhuma versão é perdida, o conflito é visível e usuário autorizado escolhe ou combina versões.

### AC-04 — Troca de dispositivo

**Dado** um educador autorizado em novo dispositivo, **quando** entrar online, **então** recupera dados sincronizados e escolhe pacotes offline; dados que nunca sincronizaram no dispositivo antigo não são apresentados como recuperados.

### AC-05 — Revogação de acesso

**Dado** um usuário removido da turma/escola, **quando** tentar abrir ou sincronizar, **então** novas operações são negadas, sessão/dados locais protegidos são bloqueados e o evento é auditado.

### AC-06 — Exclusão de perfil

**Dado** pedido autorizado e validado, **quando** a exclusão for executada, **então** o perfil deixa de aparecer, tombstones sincronizam, backups seguem prazo documentado e um comprovante sem conteúdo excessivo é gerado.

### AC-07 — IA indisponível

**Dado** um plano em edição, **quando** a IA estiver indisponível ou offline, **então** o plano permanece íntegro e o usuário acessa modelos e recomendações curadas.

### AC-08 — Proteção do prompt

**Dado** um pedido de IA que contenha identificador ou texto potencialmente pessoal, **quando** o usuário tentar enviar, **então** a plataforma alerta/bloqueia conforme risco, apresenta contexto sanitizado e exige confirmação.

### AC-09 — Acessibilidade por teclado e leitor de tela

**Dado** um usuário sem mouse, **quando** percorrer as jornadas J1–J5, **então** alcança todos os controles, identifica foco, erros e estados de sincronização, sem armadilhas de teclado e com anúncios compreensíveis.

### AC-10 — Conteúdo curricular

**Dado** um plano associado a habilidade, **quando** o usuário abrir a referência, **então** vê texto, ano, eixo, fonte, versão e distinção entre conteúdo oficial e recomendação EduCode.

### AC-11 — Dispositivo compartilhado

**Dado** logout em computador compartilhado, **quando** outro usuário entrar, **então** não acessa dados, cache ou sugestões do usuário anterior; a remoção local é verificável.

### AC-12 — Exportação

**Dado** um plano completo, **quando** exportado, **então** mantém títulos, listas, tabelas, ordem de leitura, contraste e referências, sem incluir dados de perfil não selecionados.

## 17. Estratégia de piloto

### Fase 0 — Governança e diagnóstico (4–6 semanas)

- selecionar 1–2 escolas e responsáveis;
- mapear dispositivos, navegadores, energia, conectividade e tecnologias assistivas;
- validar recorte curricular com SEMED/rede e educadores;
- definir controlador/operador, base legal, retenção, termos e canal de direitos;
- concluir avaliação de impacto, segurança e ética de pesquisa, quando aplicável;
- recrutar grupo diverso de educadores e participantes de acessibilidade;
- registrar baseline de confiança, práticas e infraestrutura.

**Gate:** nenhum dado individual de estudante é coletado antes das aprovações e comunicações aplicáveis.

### Fase 1 — Formação e ensaio sem dados de estudante (2–3 semanas)

- preparar dispositivos e pacotes;
- formar educadores;
- testar planos com perfis fictícios;
- executar testes offline, acessibilidade, restauração e suporte;
- corrigir bloqueadores.

**Gate:** zero falha crítica aberta de privacidade, autorização, perda de dados ou acessibilidade nas jornadas essenciais.

### Fase 2 — Piloto controlado (6–8 semanas)

- liberar perfis mínimos apenas para turmas autorizadas;
- acompanhar uso semanal sem interferir indevidamente na aula;
- manter canal de suporte e registro de incidentes;
- realizar ponto intermediário e ajustes de baixo risco;
- coletar avaliação final e evidências autorizadas.

### Fase 3 — Decisão (2–3 semanas)

- analisar métricas quantitativas e qualitativas;
- documentar limitações e grupos sub-representados;
- revisar conformidade e incidentes;
- decidir: interromper, repetir com correções ou expandir;
- publicar relatório sem identificação de estudantes.

### Critérios para expansão

- metas centrais de ativação, utilidade e offline atingidas ou explicadas;
- ausência de incidente grave não mitigado;
- acessibilidade essencial validada com usuários;
- conteúdo curricular aprovado pela governança local;
- suporte e manutenção sustentáveis;
- base legal e políticas confirmadas para novo escopo.

## 18. Riscos e mitigação

| Risco | Probabilidade/impacto | Mitigação | Indicador de alerta |
| --- | --- | --- | --- |
| Conectividade impede preparação/sync | Alta/Alta | diagnóstico, pacotes pequenos, retomada, janela de conexão e mídia local controlada | filas antigas, downloads interrompidos |
| Dispositivo compartilhado expõe dados | Alta/Alta | sessão curta, bloqueio, isolamento local, limpeza e treinamento | acesso cruzado ou cache residual |
| Baixa adesão docente | Média/Alta | formação em serviço, modelos prontos, apoio da coordenação e feedback rápido | abandono antes do primeiro plano |
| Conteúdo curricular incorreto/desatualizado | Média/Alta | fonte versionada e dupla revisão | divergência com norma oficial |
| IA inventa ou recomenda inadequadamente | Alta/Média | escopo limitado, sanitização, aviso e revisão humana | aceitação sem edição, relatos de erro |
| Dado infantil excessivo | Média/Alta | esquema mínimo, bloqueio de campos clínicos, alertas e auditoria | texto livre com identificadores |
| Acessibilidade incompleta | Média/Alta | testes manuais e participação de usuários | tarefa essencial não concluída |
| Perda/conflito de dados offline | Média/Alta | fila idempotente, versões, tombstones e testes de caos | divergência ou duplicação |
| Métrica vira vigilância | Média/Alta | agregação, minimização e proibição de ranking | solicitação de monitoramento individual |
| Pesquisa sem autorização adequada | Baixa/Alta | separação de finalidades e gate ético | coleta antes de aprovação |
| Dependência de uma pessoa/equipe | Média/Média | governança editorial, documentação e treinamento | conteúdo sem revisor substituto |
| Custo de manutenção inviável | Média/Alta | medir suporte, armazenamento e curadoria no piloto | horas/custo por usuário crescentes |

## 19. Roadmap posterior ao MVP

### Fase A — Consolidação docente

- ampliar trilhas e recursos validados;
- colaboração entre escolas com revisão;
- relatórios de cobertura curricular;
- integrações institucionais priorizadas pela rede;
- melhoria de exportações e atualização de pacotes.

### Fase B — Experiência estudantil supervisionada

- protótipo separado de atividades para estudantes;
- autenticação/vínculo responsável compatível com ECA Digital;
- desenho apropriado por idade, controles e privacidade por padrão;
- atividades gamificadas sem publicidade, ranking público ou padrões manipulativos;
- validação específica de acessibilidade, segurança e bem-estar.

Essa fase exige novo PRD, avaliação de impacto e critérios de lançamento próprios. O presente documento não a autoriza.

### Fase C — Expansão regional/nacional

- suporte a outros anos e etapas;
- adaptação a currículos estaduais/municipais sem alterar a fonte nacional;
- governança federada de conteúdo;
- operação multi-rede e interoperabilidade;
- modelo sustentável de suporte público e comunitário.

## 20. Dependências e questões a validar antes da construção

As decisões abaixo são dependências institucionais, não escolhas deixadas informalmente à engenharia:

- escolas participantes e autoridade que aprova o piloto;
- controlador, operador, encarregado/canal e base legal por finalidade;
- política final de retenção e descarte;
- navegadores/dispositivos e limite de armazenamento encontrados no diagnóstico;
- currículo/localização editorial aprovados pela rede;
- responsáveis por revisão curricular, acessibilidade e segurança;
- provedor de IA, contrato, localização/retenção de dados e opt-out de treinamento;
- plano de suporte, resposta a incidente e continuidade;
- enquadramento do estudo acadêmico e eventual aprovação ética;
- instrumentos de avaliação e tamanho da coorte.

O desenvolvimento pode criar protótipos com dados fictícios enquanto essas decisões são tomadas, mas não deve iniciar coleta real de estudante.

## 21. Rastreabilidade

| Problema | Persona | Requisitos principais | Métricas | Aceite |
| --- | --- | --- | --- | --- |
| Formação fragmentada | Professor, coordenação | FR-01–05 | conclusão, confiança | AC-01, AC-09 |
| Currículo difícil de operacionalizar | Professor | FR-06–10, FR-16–23 | planos criados/aplicados | AC-10, AC-12 |
| Conectividade instável | Todos | NFR-OFF-01–08 | êxito offline, sync | AC-01–04, AC-07 |
| Materiais pouco inclusivos | Professor, estudante | FR-11–15, FR-18, seção 11 | utilidade, bloqueios | AC-09, AC-12 |
| Acompanhamento sem excesso de dados | Professor, estudante, gestor | FR-24–34 | utilidade, incidentes | AC-05, AC-06, AC-11 |
| IA como dependência/risco | Professor, estudante | FR-35–41 | uso e fallback | AC-07, AC-08 |
| Falta de evidência para escala | Gestor, parceiro público | seções 15 e 17 | conjunto do piloto | gates de expansão |

## 22. Base normativa e técnica

### 22.1 Requisitos legais e normativos a validar

| Fonte | Relevância para o produto |
| --- | --- |
| [Resolução CNE/CEB nº 1/2022 — Computação na Educação Básica](https://portal.mec.gov.br/docman/outubro-2022-pdf/241671-rceb001-22/file) e [anexo do Parecer CNE/CEB nº 2/2022](https://basenacionalcomum.mec.gov.br/images/historico/anexo_parecer_cneceb_n_2_2022_bncc_computacao.pdf) | Fonte curricular e obrigação de considerar formação, currículos e recursos didáticos. |
| [Resolução CNE/CEB nº 2/2025](https://www.gov.br/mec/pt-br/cne/2025/marco/rceb002_25.pdf) | Diretrizes operacionais para dispositivos digitais nas escolas e integração curricular da educação digital e midiática. |
| [Lei nº 14.533/2023 — Política Nacional de Educação Digital](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14533.htm) | Inclusão, educação digital escolar, capacitação, direitos digitais e alteração da LDB. |
| [Lei nº 9.394/1996 — LDB](https://www.planalto.gov.br/ccivil_03/leis/l9394.htm) | Organização e responsabilidades da Educação Básica. |
| [Lei nº 15.100/2025](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15100.htm) e [Decreto nº 12.385/2025](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/decreto/d12385.htm) | Uso de aparelhos eletrônicos pessoais nas escolas, finalidade pedagógica e exceções de acessibilidade/inclusão. |
| [Lei nº 13.709/2018 — LGPD](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm) | Princípios, direitos, segurança e melhor interesse no tratamento de dados de menores. |
| [Lei nº 15.211/2025 — ECA Digital](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15211.htm) e [Decreto nº 12.880/2026](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/decreto/d12880.htm) | Proteção por padrão, prevenção, informação, segurança e regras para produtos de acesso provável por menores. |
| [Página vigente da ANPD sobre ECA Digital](https://www.gov.br/anpd/pt-br/assuntos/eca-digital) | Orientações e cronograma regulatório em evolução em 2026. |
| [Lei nº 8.069/1990 — ECA](https://www.planalto.gov.br/ccivil_03/leis/l8069compilado.htm) | Proteção integral e condição peculiar de pessoa em desenvolvimento. |
| [Lei nº 13.146/2015 — Lei Brasileira de Inclusão](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm) | Educação inclusiva, acessibilidade, adaptações razoáveis e tecnologia assistiva. |
| [Plano Municipal de Educação de Marabá 2024–2034](https://semma.maraba.pa.gov.br/wp-content/blogs.dir/34/files/2025/05/PLANO_MUNICIPAL_DE_EDUCACAO_2024_2034_V2.pdf) | Contexto local de formação e competências em TIC; conteúdo deve ser confirmado com SEMED. |
| [Resolução CNS nº 510/2016](https://www.gov.br/conselho-nacional-de-saude/pt-br/atos-normativos/resolucoes/2016/resolucao-no-510.pdf/view) | Avaliação ética de pesquisa em Ciências Humanas e Sociais quando aplicável. |

### 22.2 Diretrizes técnicas e recomendações

| Fonte | Tratamento no PRD |
| --- | --- |
| [WCAG 2.2 — tradução autorizada em português](https://www.w3.org/Translations/WCAG22-pt-BR/) | Meta técnica de conformidade nível AA. |
| [eMAG 3.1](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/modelo-de-acessibilidade) | Recomendações brasileiras para acessibilidade em serviços públicos digitais. |
| Princípios de Desenho Universal para Aprendizagem | Referência pedagógica, não norma legal por si só. |
| Boas práticas de PWA, segurança e sincronização | Decisões técnicas a demonstrar por testes e modelagem de ameaças. |

### 22.3 Nota de atualização regulatória

Na data de verificação, o ECA Digital está em vigor desde março de 2026 e a ANPD mantém orientações e etapas de regulamentação/monitoramento em evolução. A equipe deverá refazer a revisão normativa imediatamente antes do piloto e antes de liberar qualquer experiência direta para estudantes.

## 23. Glossário

- **Atividade desplugada:** atividade de Computação executável sem computador ou internet.
- **Barreira funcional:** obstáculo à participação descrito pelo efeito na tarefa, sem exigir diagnóstico.
- **BNCC Computação:** complemento de Computação à Base Nacional Comum Curricular aprovado pelas normas de 2022.
- **Conteúdo curado:** material revisado e aprovado por responsáveis identificados.
- **Dado pseudonimizado:** dado que não identifica diretamente sem informação adicional mantida separadamente e protegida.
- **eMAG:** Modelo de Acessibilidade em Governo Eletrônico.
- **Offline-first:** estratégia em que funções essenciais são concebidas para operar localmente e sincronizar depois.
- **Pacote offline:** conjunto versionado de conteúdo e dependências preparado para uso sem rede.
- **Perfil pedagógico:** registro mínimo, gerido pelo educador, de necessidades funcionais, objetivos e progresso; não é prontuário clínico.
- **PWA:** aplicação web progressiva instalável com capacidades locais suportadas pelo navegador.
- **Tombstone:** marca sincronizável de exclusão usada para impedir reaparecimento indevido do registro.
- **WCAG:** Diretrizes de Acessibilidade para Conteúdo Web do W3C.

## 24. Checklist de prontidão do PRD

- [x] Público principal e beneficiário separados.
- [x] Estado atual, MVP e roadmap separados.
- [x] Escopo e não escopo explícitos.
- [x] Jornadas e requisitos identificados.
- [x] Modo offline, sincronização e conflitos definidos.
- [x] IA opcional e fallback não baseado em IA definidos.
- [x] Dados de estudante limitados ao mínimo pedagógico.
- [x] Diagnósticos e laudos excluídos.
- [x] Papéis, privacidade, segurança e auditoria especificados.
- [x] Acessibilidade com meta verificável.
- [x] Métricas tratadas como hipóteses de piloto.
- [x] Gates de implantação e expansão estabelecidos.
- [x] Rastreabilidade entre problemas, requisitos, métricas e aceite.
- [x] Fontes oficiais e data de verificação registradas.
- [ ] Validação curricular formal pela rede/SEMED.
- [ ] Validação jurídica e de proteção de dados.
- [ ] Definição do enquadramento ético da pesquisa.
- [ ] Diagnóstico de dispositivos e conectividade das escolas.
- [ ] Aprovação institucional do piloto.

---

### Histórico do documento

| Versão | Data | Alteração |
| --- | --- | --- |
| 1.0 | 13/08/2026 | PRD inicial consolidado a partir do relatório acadêmico, do protótipo e das decisões de escopo. |
