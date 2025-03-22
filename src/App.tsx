import { useEffect } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import TechSlider from "./components/TechSlider/TechSlider";
import Workflow from "./components/Workflow/Workflow";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";

function App() {
  // Efeito para inicializar o tema baseado na preferência do sistema
  useEffect(() => {
    // Verifica se já existe um tema salvo
    const savedTheme = localStorage.getItem("theme");

    // Se não houver tema salvo, verifica a preferência do sistema
    if (savedTheme === null) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.setAttribute(
        "data-theme",
        prefersDark ? "dark" : "light"
      );
      localStorage.setItem("theme", prefersDark ? "dark" : "light");
    } else {
      // Se já existe um tema salvo, aplica ele
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <TechSlider />
      <Workflow />
      <CallToAction />
      <ServicesSection />
      <Footer />
    </div>
  );
}

export default App;
