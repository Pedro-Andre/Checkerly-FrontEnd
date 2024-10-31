// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Nav from "../Nav/Nav";
// import "./EventConfirmation.css";

// const EventConfirmation = () => {
//   const navigate = useNavigate();
//   setTimeout(() => {
//     navigate("/home");
//   }, 4500);

//   const [count, setCount] = useState(4);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCount((prevCount) => prevCount - 1); // Decrementa o count a cada segundo
//     }, 1000);

//     if (count === 0) {
//       return () => clearInterval(intervalId);
//     }
//   }, []);

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

// ========== \\

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./EventConfirmation.css";

const EventConfirmation = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(4);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (count === 0) {
      navigate("/home");
    }
  }, [count, navigate]);

  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <div className="confirmation">
          <h3>Evento Criado com Sucesso!</h3>
          <p>Você vai ser redirecionado para a home em {count} segundos...</p>
        </div>
      </main>
    </>
  );
};

export default EventConfirmation;
