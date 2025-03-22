import "./Header.css";
import logoImage from "../../assets/images/nt-logo-1.svg"; // Ajuste o caminho conforme necessário

const Header = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <span className="name">NT Soluções Web</span>
              <span className="greeting">
                Desenvolvimento de Sites e Sistemas Web Sob Medida
              </span>
            </h1>
            <p className="hero-description">
              Criamos landing pages, sites, sistemas web, e-commerces e
              dashboards em Power BI para impulsionar negócios com tecnologia e
              eficiência.
            </p>
            <button className="cta-button">Saiba mais!</button>

            <div className="stats-container">
              <div className="stat-item">
                <h2 className="stat-number">15+ anos</h2>
                <p className="stat-description">Experiencia em TI</p>
              </div>

              <div className="stat-item">
                <h2 className="stat-number">56+</h2>
                <p className="stat-description">Projetos Finalizados</p>
              </div>

              <div className="stat-item">
                <h2 className="stat-number">38</h2>
                <p className="stat-description">Clientes Parceiros</p>
              </div>
            </div>
          </div>

          <div className="hero-image-container">
            <div className="hero-image">
              <img src={logoImage} alt="logo da NT Soluções Web" />
            </div>
            <div className="hero-image-caption">
              <span>NT Soluções Web</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
