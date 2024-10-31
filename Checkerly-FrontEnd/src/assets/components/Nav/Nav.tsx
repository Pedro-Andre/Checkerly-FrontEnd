import "./Nav.css";
import LoginBtn from "../Buttons/LoginBtn";
import Logo from "../imgs/Logo";
import { useEffect } from "react";

function Nav() {
  // nav mobile function
  useEffect(() => {
    const menuIcon = document.querySelector(".menu-icon");
    const navMobile = document.querySelector(".nav-mobile");

    const toggleNav = () => navMobile?.classList.toggle("show-nav");

    menuIcon?.addEventListener("click", toggleNav);

    return () => menuIcon?.removeEventListener("click", toggleNav);
  }, []);

  return (
    <>
      <div className="nav-container">
        <nav className="nav">
          <Logo />
          <div className="navlinks">
            <a href={"/home"}>Home</a>
            <a href={"/criar-evento"}>Criar Evento</a>
            <a href={"/lista-participantes"}>Lista de Participantes</a>
            <a href={"/sobre"}>Sobre</a>
          </div>
          <div className="nav-btns">
            <LoginBtn />
          </div>
        </nav>
      </div>
      {/* NAV MOBILE */}
      <div className="nav-mobile-container">
        <Logo />
        <div className="menu-icon"></div>
        <nav className="nav-mobile">
          <div className="navlinks">
            <a href={"/home"}>Home</a>
            <a href={"/criar-evento"}>Criar Evento</a>
            <a href={"/lista-participantes"}>Lista de Participantes</a>
          </div>
          <LoginBtn />
        </nav>
      </div>
    </>
  );
}

export default Nav;
