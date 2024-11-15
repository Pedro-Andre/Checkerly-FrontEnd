import "./Buttons.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  isLoggedIn;
  const handleLogOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <Link to={"/login"}>
      <button className="body-btn log-out-btn" onClick={handleLogOut}>
        Sair
      </button>
    </Link>
  );
}

export default LogoutBtn;
