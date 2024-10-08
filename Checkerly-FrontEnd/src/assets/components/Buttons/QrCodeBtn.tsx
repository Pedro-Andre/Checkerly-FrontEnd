import { Link } from "react-router-dom";

function QrdCodeBtn() {
  return (
    <Link to="/evento-criado/qr-code">
      <button className="body-btn">Criar QR-Code</button>
    </Link>
  );
}

export default QrdCodeBtn;
