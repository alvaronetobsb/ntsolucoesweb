import "./Workflow.css";
import { MessageSquare, Code2, Rocket, LifeBuoy } from "lucide-react";

const Workflow = () => {
  const processos = [
    {
      id: 1,
      titulo: "Conversa Inicial",
      icone: <MessageSquare size={24} />,
      descricao:
        "Mapeamos seus objetivos e necessidades específicas para criar um plano personalizado.",
    },
    {
      id: 2,
      titulo: "Solução Técnica",
      icone: <Code2 size={24} />,
      descricao:
        "Selecionamos as tecnologias ideais e desenvolvemos soluções otimizadas por IA.",
    },
    {
      id: 3,
      titulo: "Entrega Eficiente",
      icone: <Rocket size={24} />,
      descricao:
        "Implementamos sua solução digital testada e pronta para impulsionar seu negócio.",
    },
    {
      id: 4,
      titulo: "Suporte Contínuo",
      icone: <LifeBuoy size={24} />,
      descricao:
        "Garantimos evolução constante com atualizações e otimizações periódicas.",
    },
  ];

  return (
    <section className="workflow-section">
      <div className="workflow-container">
        <div className="workflow-content">
          <div className="workflow-description">
            <h2>Processos de Trabalho</h2>
            <div className="workflow-paragraphs">
              <p>
                Na NT Soluções Web, adotamos uma metodologia estruturada que
                garante resultados excepcionais para cada projeto. Nosso
                processo começa com uma conversa inicial detalhada sobre suas
                necessidades, seguida pela seleção das melhores tecnologias e
                desenvolvimento de soluções potencializadas por inteligência
                artificial.
              </p>
              <p>
                Cada etapa é executada com precisão, desde a concepção até a
                entrega eficiente do produto final. E nosso compromisso não
                termina aí – oferecemos suporte contínuo para garantir que sua
                solução digital evolua constantemente, mantendo-se alinhada com
                as mudanças do mercado e as necessidades do seu negócio.
              </p>
            </div>
          </div>

          <div className="workflow-cards">
            {processos.map((processo) => (
              <div className="workflow-card" key={processo.id}>
                <div className="workflow-card-icon">{processo.icone}</div>
                <div className="workflow-card-content">
                  <h3>
                    {processo.id}. {processo.titulo}
                  </h3>
                  <p>{processo.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
