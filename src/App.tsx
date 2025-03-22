import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import TechSlider from "./components/TechSlider/TechSlider";
import Workflow from "./components/Workflow/Workflow";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";

function App() {
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
