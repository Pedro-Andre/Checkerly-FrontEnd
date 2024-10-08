import "./RegistroPage.css";
import LoginBtn2 from "../Buttons/LoginBtn2";
import { Link } from "react-router-dom";

function RegistroPage() {
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

        <LoginBtn2 />
      </div>
    </>
  );
}

export default RegistroPage;
