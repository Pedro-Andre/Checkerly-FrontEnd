import { Link } from "react-router-dom";
import "./Buttons.css";

function LoginBtn2() {
  return (
    <Link to="/login">
      <button className="body-btn">Ja tenho uma conta</button>
    </Link>
  );
}

export default LoginBtn2;
