import "./CallToAction.css";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  const handleClick = () => {
    const element = document.querySelector("#contato");
    const nav = document.querySelector(".nav");
    if (element && nav) {
      const navHeight = nav.getBoundingClientRect().height;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>
          Você tem um Projeto?
          <br />
          Vamos tomar um café!
        </h2>
        <p>
          Seja qual for o seu desafio, podemos ter a solução ideal para ele.
        </p>
        <button className="cta-button" onClick={handleClick}>
          Vamos trabalhar juntos <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
