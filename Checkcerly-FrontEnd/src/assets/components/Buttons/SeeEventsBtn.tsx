import { Link } from "react-router-dom";

function SeeEventsBtn() {
  return (
    <Link to="/perfil">
      <button className="body-btn">Ver meus eventos</button>
    </Link>
  );
}

export default SeeEventsBtn;
