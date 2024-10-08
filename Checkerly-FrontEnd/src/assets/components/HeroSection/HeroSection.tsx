import "./HeroSection.css";
import CreateEventBtn2 from "../Buttons/CreateEventBtn2";
import HeroImg from "../imgs/HeroImg";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h3>
          Planeje e Gerencie seus eventos de forma <span>fácil</span> e{" "}
          <span>simplificada</span>.
        </h3>
        <CreateEventBtn2 />
      </div>
      <div className="hero-img">
        <HeroImg></HeroImg>
      </div>
    </div>
  );
}

export default HeroSection;
