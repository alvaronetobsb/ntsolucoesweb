import { useEffect, useRef, useState } from "react";
import "./TechSlider.css";

const TechSlider = () => {
  const sliderRef = useRef(null);
  const [activeTooltip, setActiveTooltip] = useState(null);

  // Adiciono useEffect para criar uma animação mais suave
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Uma forma alternativa de controlar a animação se necessário
    const handleAnimationEnd = () => {
      slider.style.transition = "none";
      slider.style.transform = "translateX(0)";

      // Força um reflow para garantir a transição correta
      void slider.offsetWidth;

      slider.style.transition = "transform 25s linear infinite";
      slider.style.transform = "translateX(-50%)";
    };

    slider.addEventListener("animationiteration", handleAnimationEnd);

    return () => {
      slider.removeEventListener("animationiteration", handleAnimationEnd);
    };
  }, []);

  // Efeito para pausar a animação quando há um tooltip ativo
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    if (activeTooltip !== null) {
      slider.style.animationPlayState = "paused";
    } else {
      slider.style.animationPlayState = "running";
    }
  }, [activeTooltip]);

  const technologies = [
    {
      name: "React",
      logo: "/assets/images/logo/React.png",
      description:
        "Biblioteca para construção de interfaces de usuário com componentes reutilizáveis.",
    },
    {
      name: "ReactNative",
      logo: "/assets/images/logo/ReactNative.png",
      description:
        "Framework para desenvolvimento de aplicativos móveis nativos usando React.",
    },
    {
      name: "WordPress",
      logo: "/assets/images/logo/WordPress.png",
      description:
        "Sistema de gerenciamento de conteúdo para criação de sites e blogs.",
    },
    {
      name: "PHP",
      logo: "/assets/images/logo/php 2.png",
      description:
        "Linguagem de script voltada para desenvolvimento web do lado do servidor.",
    },
    {
      name: "PowerBI",
      logo: "/assets/images/logo/Power BI logo.png",
      description:
        "Ferramenta de análise de negócios para visualização interativa de dados.",
    },
    {
      name: "SQL",
      logo: "/assets/images/logo/SQL.png",
      description:
        "Linguagem para manipulação e consulta de bancos de dados relacionais.",
    },
    {
      name: "Python",
      logo: "/assets/images/logo/Python logo.png",
      description:
        "Linguagem de programação de alto nível, interpretada e de propósito geral.",
    },
    {
      name: "JavaScript",
      logo: "/assets/images/logo/JavaScript-logo.png",
      description:
        "Linguagem de programação que permite a criação de conteúdo dinâmico em páginas web.",
    },
    {
      name: "CSS",
      logo: "/assets/images/logo/CSS Logo.png",
      description:
        "Linguagem de estilo para definir a apresentação de documentos HTML.",
    },
    {
      name: "HTML",
      logo: "/assets/images/logo/html.png",
      description:
        "Linguagem de marcação para estruturação de conteúdo na web.",
    },
  ];

  // Duplicamos os logos para criar um efeito contínuo
  const allTechnologies = [...technologies, ...technologies];

  const handleMouseEnter = (index) => {
    setActiveTooltip(index);
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  return (
    <section className="tech-slider">
      <div className="tech-slider-container">
        {/* <div className="tech-slider-title">
          <h3>Tecnologias que trabalhamos</h3>
          <div className="tech-slider-line"></div>
        </div> */}

        <div className="tech-slider-wrapper">
          <div className="tech-slider-track" ref={sliderRef}>
            {allTechnologies.map((tech, index) => (
              <div
                className="tech-item"
                key={`${tech.name}-${index}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img src={tech.logo} alt={`Logo ${tech.name}`} />
                {activeTooltip === index && (
                  <div className="tech-tooltip tech-tooltip-visible">
                    <h4 className="tech-tooltip-title">{tech.name}</h4>
                    <p className="tech-tooltip-text">{tech.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSlider;
