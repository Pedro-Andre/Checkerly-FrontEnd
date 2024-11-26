import "./BottomSection.css";
import CtaButton from "../global/CtaButton";
import SvgContainer from "../global/SvgContainer";

function BottomSection() {
  return (
    <>
      <div className="bottom-container">
        <div className="content">
          <SvgContainer width="100%" height="40rem" className="svg-container" />

          <div className="bottom-text">
            <p>Quero planejar um evento</p>
            <span>
              Vamos te ajudar a criar as informações do seu evento de forma
              simplificada
            </span>
            <CtaButton text="Criar Evento" to="/criar-evento" />
          </div>
        </div>
        <div className="orb-1"></div>
        <div className="orb-2"></div>
      </div>
    </>
  );
}

export default BottomSection;
