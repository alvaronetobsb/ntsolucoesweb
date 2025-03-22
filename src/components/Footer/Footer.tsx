import React from "react";
import "./Footer.css";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import logoFooter from "../../assets/images/nt-logo-1.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contato">
      <div className="footer-top">
        <div className="footer-content">
          <div className="footer-left">
            <h2>Vamos conversar sobre o seu Projeto?</h2>
            <p>
              Entre em contato e chegaremos a solução perfeita para o seu
              problema.
            </p>

            <div className="footer-info">
              <div className="footer-info-item">
                <div className="info-icon location-icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="info-content">
                  <span className="info-label">Local:</span>
                  <span className="info-text">Brasília, DF</span>
                </div>
              </div>

              <div className="footer-info-item">
                <div className="info-icon email-icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="info-content">
                  <span className="info-label">Email:</span>
                  <span className="info-text">contato@ntsolucoesweb.com</span>
                </div>
              </div>

              <div className="footer-info-item">
                <div className="info-icon phone-icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                  </svg>
                </div>
                <div className="info-content">
                  <span className="info-label">Telefone:</span>
                  <span className="info-text">+55 61 99527-1818</span>
                </div>
              </div>
            </div>

            <div className="social-icons">
              <a href="#" className="social-icon">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="footer-right">
            <h2>Deixe sua mensagem</h2>
            <p>
              Entre em contato e chegaremos a solução perfeita para o seu
              problema.
            </p>

            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Nome*" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email*" required />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Telefone*"
                  required
                  pattern="[0-9]{10,11}"
                />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Selecione o serviço*</option>
                  <option value="site-pessoal">Site Pessoal</option>
                  <option value="landing-page">Landing Page</option>
                  <option value="e-commerce">e-Commerce</option>
                  <option value="sistema-web">Sistema Web</option>
                  <option value="dashboard-powerbi">Dashboard Power BI</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Mensagem*" required></textarea>
              </div>
              <button type="submit" className="submit-button">
                Enviar <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-logo">
            <img
              src={logoFooter}
              alt="NT Soluções Web"
              className="logo-footer-img"
            />
            <span>NT Soluções Web</span>
          </div>

          <nav className="footer-nav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#projetos">Projetos</a>
              </li>
              <li>
                <a href="#testimonhos">Testemunhos</a>
              </li>
              <li>
                <a href="#parceiros">Parceiros</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </nav>

          <div className="footer-copyright">
            <span>Copyright © 2024.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
