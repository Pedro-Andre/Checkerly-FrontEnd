import "./RegisterPage.css";
import CtaButton from "../global/CtaButton";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <>
      <div className="container">
        <p className="container-title">Registre-se como:</p>

        <div className="options-container">
          <Link to="/registro/registro-organizador">
            <div className="option">
              <h3 className="option-title">Organizador de Eventos</h3>
              <p>• Crie eventos</p>
              <p>• Controle a lista de participantes</p>
            </div>
          </Link>

          <Link to="/registro/registro-ouvinte">
            <div className="option">
              <h3 className="option-title">Ouvinte (participante)</h3>
              <p>• Registre sua presença em eventos</p>
              <p>
                • Receba certificados de participação{" "}
                <span>(quando disponível)</span>
              </p>
            </div>
          </Link>
        </div>

        <CtaButton text="Já tenho uma conta" to="/login" />
      </div>
    </>
  );
}

export default RegisterPage;
