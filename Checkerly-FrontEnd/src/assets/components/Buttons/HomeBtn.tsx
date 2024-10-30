import { Link } from "react-router-dom";
import "./Buttons.css";

function HomeBtn() {
  return (
    <Link to="/home">
      <button className="body-btn">Voltar para Home</button>
    </Link>
  );
}

export default HomeBtn;
