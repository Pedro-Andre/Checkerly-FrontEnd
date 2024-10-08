import { Link } from "react-router-dom";
import "./Buttons.css";

function EventQrCodeBtn() {
  return (
    <Link to="/qr-code" className="participantes-btn">
      Qr-code
    </Link>
  );
}

export default EventQrCodeBtn;
