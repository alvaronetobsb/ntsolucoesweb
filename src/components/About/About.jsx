import "./About.css";

const About = () => {
  return (
    <section className="about" id="sobre">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">Sobre</h2>
          <div className="section-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text-column">
            <p>
              A NT Soluções Web nasceu da paixão por criar experiências digitais
              que fazem a diferença. Somos especialistas em desenvolvimento de
              sites personalizados, lojas virtuais completas, landing pages
              estratégicas e sistemas web inteligentes que impulsionam
              resultados.
            </p>
            <p>
              Acreditamos que o futuro é o nosso presente. Por isso, integramos
              as mais avançadas tecnologias de inteligência artificial em todas
              as nossas soluções, garantindo que nossos clientes estejam sempre
              um passo à frente no mundo digital.
            </p>
            <p>
              Nossa abordagem é totalmente personalizada - entendemos
              profundamente as necessidades de cada cliente para desenvolver
              soluções sob medida que realmente resolvem problemas e geram
              valor. Somos movidos pela inovação e comprometidos com a
              excelência técnica em cada projeto.
            </p>
          </div>

          <div className="about-cards-column">
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="9" r="3" />
                  <path d="M12 12v9" />
                  <path d="M9 9H4.5a1.5 1.5 0 0 0 0 3h.5" />
                  <path d="M20 18a2 2 0 1 0-2-2" />
                  <path d="M20 14v.5" />
                  <path d="M20 18.5V19" />
                  <path d="M16.5 16.5h.5" />
                  <path d="M19.5 16.5H20" />
                  <path d="M17 15.5l-.3-.3" />
                  <path d="M18.3 17.8l.2.2" />
                  <path d="M17.8 17.8l.2-.2" />
                  <path d="M17 17.2l-.3.3" />
                  <path d="M15 12h.5a1.5 1.5 0 0 0 0-3H15" />
                </svg>
              </div>
              <div className="feature-content">
                <h4 className="feature-title">Inovação Contínua</h4>
                <p className="feature-description">
                  Integramos as mais recentes tecnologias de IA em cada solução,
                  garantindo que nossos clientes estejam sempre à frente da
                  concorrência.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" />
                  <path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2" />
                  <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
                  <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
                  <path d="M8.65 22c.21-.66.45-1.32.57-2" />
                  <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
                  <path d="M2 16h.01" />
                  <path d="M21.8 16c.2-2 .131-5.354 0-6" />
                  <path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2" />
                </svg>
              </div>
              <div className="feature-content">
                <h4 className="feature-title">Soluções Personalizadas</h4>
                <p className="feature-description">
                  Desenvolvemos cada projeto de acordo com as necessidades
                  específicas do seu negócio, garantindo resultados que
                  realmente importam.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3v18h18" />
                  <rect x="7" y="10" width="2" height="8" />
                  <rect x="12" y="5" width="2" height="13" />
                  <rect x="17" y="8" width="2" height="10" />
                </svg>
              </div>
              <div className="feature-content">
                <h4 className="feature-title">Business Intelligence</h4>
                <p className="feature-description">
                  Transformamos dados em insights acionáveis com nossos painéis
                  de Power BI personalizados, permitindo tomadas de decisão mais
                  inteligentes.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 11h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2" />
                  <path d="M21 11.08V8a6 6 0 0 0-6-6H9a6 6 0 0 0-6 6v3.08A3 3 0 0 0 3 14v1a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3v-1a3 3 0 0 0-1.5-2.59V8a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3.08A3 3 0 0 0 16 14v1a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3v-1a3 3 0 0 0-.19-1.02" />
                </svg>
              </div>
              <div className="feature-content">
                <h4 className="feature-title">Suporte Dedicado</h4>
                <p className="feature-description">
                  Oferecemos acompanhamento contínuo em cada fase do projeto,
                  garantindo que sua solução digital evolua junto com o seu
                  negócio.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
              </div>
              <div className="feature-content">
                <h4 className="feature-title">E-commerce Inteligente</h4>
                <p className="feature-description">
                  Transformamos sua ideia em uma loja virtual completa, com
                  gestão de produtos, pagamentos integrados e experiência de
                  compra otimizada por IA para maximizar conversões.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
