import "./HeroSection.css";
import CtaButton from "../global/CtaButton";
import HeroImg from "../imgs/HeroImg";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h3>
          Planeje e Gerencie seus eventos de forma <span>fácil</span> e{" "}
          <span>simplificada</span>.
        </h3>
        <CtaButton text="Criar Evento" to="/criar-evento" />
      </div>
      <div className="hero-img">
        <HeroImg></HeroImg>
      </div>
    </div>
  );
}

export default HeroSection;
