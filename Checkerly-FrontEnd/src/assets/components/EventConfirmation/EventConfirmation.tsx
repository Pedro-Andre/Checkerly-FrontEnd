// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Nav from "../Nav/Nav";
// import "./EventConfirmation.css";

// const EventConfirmation = () => {
//   const navigate = useNavigate();
//   const [count, setCount] = useState(12);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCount((prevCount) => prevCount - 1);
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     if (count === 0) {
//       navigate("/home");
//     }
//   }, [count, navigate]);

//   return (
//     <>
//       <header>
//         <Nav />
//       </header>

//       <main>
//         <div className="confirmation">
//           <h3>Evento Criado com Sucesso!</h3>
//           <p>Você vai ser redirecionado para a home em {count} segundos...</p>
//         </div>
//       </main>
//     </>
//   );
// };

// export default EventConfirmation;

// === ALTERANDO === \\

import Nav from "../Nav/Nav";
import "./EventConfirmation.css";
import HomeBtn from "../Buttons/HomeBtn";

const EventConfirmation = () => {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <div className="confirmation">
          <h3>
            Você estava Presente no local e hora do Evento! Verifique seu e-mail
            para ter acesso ao seu Certificado!
          </h3>
          <HomeBtn />
        </div>
      </main>
    </>
  );
};

export default EventConfirmation;
