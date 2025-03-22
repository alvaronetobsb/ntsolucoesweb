import React from "react";
import "./ServicesSection.css";
import { LayoutGrid, Globe, ShoppingCart, BarChart } from "lucide-react";

interface RecursoProps {
  id: number;
  titulo: string;
  icone: React.ReactNode;
  descricao: string;
  recursos: string[];
}

const ServicesSection: React.FC = () => {
  const servicos: RecursoProps[] = [
    {
      id: 1,
      titulo: "Desenvolvimento de Landing Pages",
      icone: <LayoutGrid size={24} />,
      descricao:
        "Páginas rápidas e otimizadas para conversão, com design responsivo e adaptado para mobile.",
      recursos: [
        "Alta taxa de conversão",
        "Carregamento rápido",
        "Otimização para SEO",
        "Design responsivo",
      ],
    },
    {
      id: 2,
      titulo: "Criação de Sites e Sistemas Web",
      icone: <Globe size={24} />,
      descricao:
        "Sites institucionais modernos e dinâmicos, sistemas personalizados para necessidades específicas.",
      recursos: [
        "Design moderno e intuitivo",
        "Painel administrativo",
        "Integração com redes sociais",
        "Sistemas sob medida",
      ],
    },
    {
      id: 3,
      titulo: "Desenvolvimento de E-commerces",
      icone: <ShoppingCart size={24} />,
      descricao:
        "Lojas virtuais otimizadas para vendas, com integração com meios de pagamento e sistemas de estoque.",
      recursos: [
        "Gestão de produtos",
        "Integração com gateways de pagamento",
        "Controle de estoque",
        "Relatórios de vendas",
      ],
    },
    {
      id: 4,
      titulo: "Dashboards e Análises em Power BI",
      icone: <BarChart size={24} />,
      descricao:
        "Transformação de dados em insights estratégicos, dashboards interativos para facilitar a tomada de decisão.",
      recursos: [
        "Visualização de dados",
        "Relatórios interativos",
        "Integração com diversas fontes",
        "Insights estratégicos",
      ],
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2>Nossos Serviços</h2>
          <p>
            Oferecemos soluções completas para transformar sua presença digital
            e impulsionar seu negócio.
          </p>
        </div>

        <div className="services-cards">
          {servicos.map((servico) => (
            <div className="service-card" key={servico.id}>
              <div className="service-icon">{servico.icone}</div>
              <h3>{servico.titulo}</h3>
              <p className="service-description">{servico.descricao}</p>
              <ul className="service-features">
                {servico.recursos.map((recurso, index) => (
                  <li key={index}>{recurso}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
