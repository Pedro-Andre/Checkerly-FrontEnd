import { Link } from "react-router-dom";

function CreateEventBtn() {
  return (
    <Link to={"/criar-evento"}>
      <button className="body-btn" type="submit">
        Criar Evento
      </button>
    </Link>
  );
}

export default CreateEventBtn;
