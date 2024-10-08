import "./Buttons.css";
import { Link } from "react-router-dom";

function LoginBtn() {
  return (
    <Link to={"/registro"}>
      <button className="body-btn ">Entrar</button>
    </Link>
  );
}

export default LoginBtn;
