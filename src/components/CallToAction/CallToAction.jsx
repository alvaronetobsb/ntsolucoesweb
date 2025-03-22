import "./CallToAction.css";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
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
        <button className="cta-button">
          Vamos trabalhar juntos <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
