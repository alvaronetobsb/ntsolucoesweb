import React, { useState } from "react";
import "./Footer.css";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import logoFooter from "../../assets/images/nt-logo-1.svg";

interface FormErrors {
  nome?: string;
  email?: string;
  telefone?: string;
  servico?: string;
  mensagem?: string;
}

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    servico: "",
    mensagem: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: string; text: string }>({
    type: "",
    text: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    let formIsValid = true;

    // Validação do nome
    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório";
      formIsValid = false;
    } else if (formData.nome.trim().length < 3) {
      newErrors.nome = "Nome deve ter pelo menos 3 caracteres";
      formIsValid = false;
    }

    // Validação do email
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
      formIsValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Formato de email inválido";
      formIsValid = false;
    }

    // Validação do telefone
    if (!formData.telefone) {
      newErrors.telefone = "Telefone é obrigatório";
      formIsValid = false;
    } else if (formData.telefone.replace(/\D/g, "").length < 10) {
      newErrors.telefone = "Telefone inválido";
      formIsValid = false;
    }

    // Validação do serviço
    if (!formData.servico) {
      newErrors.servico = "Selecione um serviço";
      formIsValid = false;
    }

    // Validação da mensagem
    if (!formData.mensagem.trim()) {
      newErrors.mensagem = "Mensagem é obrigatória";
      formIsValid = false;
    } else if (formData.mensagem.trim().length < 10) {
      newErrors.mensagem = "Mensagem deve ter pelo menos 10 caracteres";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  // Função para formatar telefone como (99) 99999-9999
  const formatPhone = (value: string): string => {
    if (!value) return "";

    // Remove tudo que não for número
    const numbers = value.replace(/\D/g, "");

    // Limita a 11 dígitos
    const phoneNumber = numbers.slice(0, 11);

    // Formata o número
    if (phoneNumber.length <= 2) {
      return `(${phoneNumber}`;
    } else if (phoneNumber.length <= 7) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    } else {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
        2,
        7
      )}-${phoneNumber.slice(7)}`;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // Para o telefone, aplicamos a formatação
    if (name === "telefone") {
      setFormData((prev) => ({
        ...prev,
        [name]: formatPhone(value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Limpar erro quando o campo for alterado
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar formulário antes de enviar
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const apiUrl = import.meta.env.PROD
        ? "https://www.ntsolucoesweb.com/api/send-mail.php"
        : "/api/send-mail.php";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "Mensagem enviada com sucesso!" });
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          servico: "",
          mensagem: "",
        });
        setErrors({});
      } else {
        throw new Error(data.error || "Erro ao enviar mensagem");
      }
    } catch (error) {
      setMessage({
        type: "error",
        text:
          error instanceof Error ? error.message : "Erro ao enviar mensagem",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
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

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome*"
                  value={formData.nome}
                  onChange={handleChange}
                  className={errors.nome ? "error" : ""}
                />
                {errors.nome && (
                  <span className="error-message">{errors.nome}</span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Telefone* (99) 99999-9999"
                  value={formData.telefone}
                  onChange={handleChange}
                  className={errors.telefone ? "error" : ""}
                  maxLength={16}
                />
                {errors.telefone && (
                  <span className="error-message">{errors.telefone}</span>
                )}
              </div>
              <div className="form-group">
                <select
                  name="servico"
                  value={formData.servico}
                  onChange={handleChange}
                  className={errors.servico ? "error" : ""}
                >
                  <option value="">Selecione o serviço*</option>
                  <option value="site-pessoal">Site Pessoal</option>
                  <option value="landing-page">Landing Page</option>
                  <option value="e-commerce">e-Commerce</option>
                  <option value="sistema-web">Sistema Web</option>
                  <option value="dashboard-powerbi">Dashboard Power BI</option>
                </select>
                {errors.servico && (
                  <span className="error-message">{errors.servico}</span>
                )}
              </div>
              <div className="form-group">
                <textarea
                  name="mensagem"
                  placeholder="Mensagem*"
                  value={formData.mensagem}
                  onChange={handleChange}
                  className={errors.mensagem ? "error" : ""}
                ></textarea>
                {errors.mensagem && (
                  <span className="error-message">{errors.mensagem}</span>
                )}
              </div>
              {message.text && (
                <div className={`message ${message.type}`}>{message.text}</div>
              )}
              <button
                type="submit"
                className="submit-button"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar"} <Send size={18} />
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
                <a href="#home" onClick={(e) => handleScroll(e, "#home")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" onClick={(e) => handleScroll(e, "#sobre")}>
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#workflow"
                  onClick={(e) => handleScroll(e, "#workflow")}
                >
                  Workflow
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  onClick={(e) => handleScroll(e, "#servicos")}
                >
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" onClick={(e) => handleScroll(e, "#contato")}>
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          <div className="footer-copyright">
            <span>Copyright © {new Date().getFullYear()}.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
