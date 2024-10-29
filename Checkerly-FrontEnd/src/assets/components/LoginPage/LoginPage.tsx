// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./LoginPage.css";
// import LoginBtn3 from "../Buttons/LoginBtn3";

// const LoginPage: React.FC = () => {
//   let emailInp = document.getElementById("login-email") as HTMLInputElement;
//   let passInp = document.getElementById("login-pass") as HTMLInputElement;

//   const [loginEmail, setLoginEmail] = useState<string>("");
//   const [loginPass, setLoginPass] = useState<string>("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const data = {
//       loginEmail,
//       loginPass,
//     };

//     console.log(data);

//     // reset input values
//     emailInp.value = "";
//     passInp.value = "";
//   };

//   return (
//     <>
//       <div className="container">
//         <p className="container-title">Login</p>
//         <svg
//           width="100%"
//           height="40rem"
//           xmlns="http://www.w3.org/2000/svg"
//           className="svg-container"
//         >
//           <rect
//             rx="20"
//             width="100%"
//             height="40rem"
//             x="0"
//             y="0"
//             stroke="url(#paint0_linear_227_259)"
//             strokeWidth="2"
//           />
//           <defs>
//             <linearGradient
//               id="paint0_linear_227_259"
//               x1="1.61353"
//               y1="1.00342"
//               x2="1297.61"
//               y2="416.915"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop stopColor="#009D53" />
//               <stop offset="1" stopColor="#F07F3D" />
//             </linearGradient>
//           </defs>
//         </svg>
//         <form id="login-form" onSubmit={handleSubmit}>
//           <div className="inputs">
//             <label htmlFor="login-email">
//               Email
//               <input
//                 type="email"
//                 name="mail"
//                 id="login-email"
//                 placeholder="Seu email"
//                 value={loginEmail}
//                 onChange={(e) => setLoginEmail(e.target.value)}
//               />
//             </label>
//             <label htmlFor="login-pass">
//               Senha
//               <input
//                 type="password"
//                 name="senha"
//                 id="login-pass"
//                 placeholder="Sua senha"
//                 value={loginPass}
//                 onChange={(e) => setLoginPass(e.target.value)}
//               />
//             </label>
//           </div>
//           <Link to={"/nova-senha"} className="nova-senha">
//             Esqueceu a senha? Clique aqui para redefinir
//           </Link>
//           <LoginBtn3 />
//         </form>
//       </div>
//     </>
//   );
// };

// export default LoginPage;

// ==================== \\

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LoginPage.css";
// import LoginBtn3 from "../Buttons/LoginBtn3";

// const LoginPage: React.FC = () => {
//   const [loginEmail, setLoginEmail] = useState<string>("");
//   const [loginPass, setLoginPass] = useState<string>("");
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:8080/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username: loginEmail,
//           password: loginPass,
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         localStorage.setItem("token", data.token);
//         navigate("/perfil");
//       } else {
//         setErrorMessage("Login falhou. Por favor verifique suas credenciais.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <div className="container">
//       <p className="container-title">Login</p>
//       <svg
//         width="100%"
//         height="40rem"
//         xmlns="http://www.w3.org/2000/svg"
//         className="svg-container"
//       >
//         <rect
//           rx="20"
//           width="100%"
//           height="40rem"
//           x="0"
//           y="0"
//           stroke="url(#paint0_linear_227_259)"
//           strokeWidth="2"
//         />
//         <defs>
//           <linearGradient
//             id="paint0_linear_227_259"
//             x1="1.61353"
//             y1="1.00342"
//             x2="1297.61"
//             y2="416.915"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stopColor="#009D53" />
//             <stop offset="1" stopColor="#F07F3D" />
//           </linearGradient>
//         </defs>
//       </svg>

//       <form id="login-form" onSubmit={handleSubmit}>
//         <div className="inputs">
//           <label htmlFor="login-email">
//             Email
//             <input
//               type="email"
//               name="mail"
//               id="login-email"
//               placeholder="Seu email"
//               value={loginEmail}
//               onChange={(e) => setLoginEmail(e.target.value)}
//               required
//             />
//           </label>
//           <label htmlFor="login-pass">
//             Senha
//             <input
//               type="password"
//               name="senha"
//               id="login-pass"
//               placeholder="Sua senha"
//               value={loginPass}
//               onChange={(e) => setLoginPass(e.target.value)}
//               required
//             />
//           </label>
//         </div>
//         {errorMessage && <p className="error">{errorMessage}</p>}
//         <LoginBtn3 />
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

// ====== gepeto === === \\

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./LoginPage.css";
// import LoginBtn3 from "../Buttons/LoginBtn3";

// const LoginPage: React.FC = () => {
//   const [loginEmail, setLoginEmail] = useState<string>("");
//   const [loginPass, setLoginPass] = useState<string>("");
//   const [errorMessage, setErrorMessage] = useState<string>("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const data = {
//       email: loginEmail,
//       password: loginPass,
//     };

//     try {
//       const response = await fetch("http://localhost:8080/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         const errorText = await response.text();
//         console.error(`Resposta do servidor.${errorText}`);
//         throw new Error(`Login falhou.${errorText}`);
//       }

//       const result = await response.json();
//       const { token } = result;

//       localStorage.setItem("token", token);

//       navigate("/perfil");
//     } catch (error) {
//       setErrorMessage((error as Error).message);
//     }
//   };

//   return (
//     <>
//       <div className="container">
//         <p className="container-title">Login</p>
//         <svg
//           width="100%"
//           height="40rem"
//           xmlns="http://www.w3.org/2000/svg"
//           className="svg-container"
//         >
//           <rect
//             rx="20"
//             width="100%"
//             height="40rem"
//             x="0"
//             y="0"
//             stroke="url(#paint0_linear_227_259)"
//             strokeWidth="2"
//           />
//           <defs>
//             <linearGradient
//               id="paint0_linear_227_259"
//               x1="1.61353"
//               y1="1.00342"
//               x2="1297.61"
//               y2="416.915"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop stopColor="#009D53" />
//               <stop offset="1" stopColor="#F07F3D" />
//             </linearGradient>
//           </defs>
//         </svg>
//         <form id="login-form" onSubmit={handleSubmit}>
//           <div className="inputs">
//             <label htmlFor="login-email">
//               Email
//               <input
//                 type="email"
//                 name="mail"
//                 id="login-email"
//                 placeholder="Seu email"
//                 value={loginEmail}
//                 onChange={(e) => setLoginEmail(e.target.value)}
//               />
//             </label>
//             <label htmlFor="login-pass">
//               Senha
//               <input
//                 type="password"
//                 name="senha"
//                 id="login-pass"
//                 placeholder="Sua senha"
//                 value={loginPass}
//                 onChange={(e) => setLoginPass(e.target.value)}
//               />
//             </label>
//           </div>

//           {errorMessage && <p className="error-message">{errorMessage}</p>}

//           <Link to={"/nova-senha"} className="nova-senha">
//             Esqueceu a senha? Clique aqui para redefinir
//           </Link>
//           <LoginBtn3 />
//         </form>
//       </div>
//     </>
//   );
// };

// export default LoginPage;

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./LoginPage.css";
// import LoginBtn3 from "../Buttons/LoginBtn3";

// const LoginPage: React.FC = () => {
//   const [loginEmail, setLoginEmail] = useState<string>("");
//   const [loginPass, setLoginPass] = useState<string>("");
//   const [errorMessage, setErrorMessage] = useState<string>("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const data = {
//       email: loginEmail,
//       password: loginPass,
//     };

//     try {
//       const response = await fetch("http://localhost:8080/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//         credentials: "include",
//       });

//       if (!response.ok) {
//         const errorText = await response.json();
//         setErrorMessage(
//           `Login falhou: ${errorText.message || "Credenciais inválidas"}`
//         );
//         return;
//       }

//       navigate("/perfil");
//     } catch (error) {
//       setErrorMessage("Erro ao fazer login. Tente novamente mais tarde.");
//     }
//   };

//   return (
//     <>
//       <div className="container">
//         <p className="container-title">Login</p>
//         <svg
//           width="100%"
//           height="40rem"
//           xmlns="http://www.w3.org/2000/svg"
//           className="svg-container"
//         >
//           <rect
//             rx="20"
//             width="100%"
//             height="40rem"
//             x="0"
//             y="0"
//             stroke="url(#paint0_linear_227_259)"
//             strokeWidth="2"
//           />
//           <defs>
//             <linearGradient
//               id="paint0_linear_227_259"
//               x1="1.61353"
//               y1="1.00342"
//               x2="1297.61"
//               y2="416.915"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop stopColor="#009D53" />
//               <stop offset="1" stopColor="#F07F3D" />
//             </linearGradient>
//           </defs>
//         </svg>
//         <form id="login-form" onSubmit={handleSubmit}>
//           <div className="inputs">
//             <label htmlFor="login-email">
//               Email
//               <input
//                 type="email"
//                 id="login-email"
//                 placeholder="Seu email"
//                 value={loginEmail}
//                 onChange={(e) => setLoginEmail(e.target.value)}
//               />
//             </label>
//             <label htmlFor="login-pass">
//               Senha
//               <input
//                 type="password"
//                 id="login-pass"
//                 placeholder="Sua senha"
//                 value={loginPass}
//                 onChange={(e) => setLoginPass(e.target.value)}
//               />
//             </label>
//           </div>

//           {errorMessage && <p className="error-message">{errorMessage}</p>}

//           <Link to={"/nova-senha"} className="nova-senha">
//             Esqueceu a senha? Clique aqui para redefinir
//           </Link>
//           <LoginBtn3 />
//         </form>
//       </div>
//     </>
//   );
// };

// export default LoginPage;

// ============= \\

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import LoginBtn3 from "../Buttons/LoginBtn3";

const LoginPage: React.FC = () => {
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPass, setLoginPass] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      email: loginEmail,
      password: loginPass,
    };

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (!response.ok) {
        const errorText = await response.json();
        setErrorMessage(
          `Login falhou: ${errorText.message || "Credenciais inválidas"}`
        );
        return;
      }

      navigate("/perfil");
    } catch (error) {
      setErrorMessage("Erro ao fazer login. Tente novamente mais tarde.");
    }
  };

  return (
    <>
      <div className="container">
        <p className="container-title">Login</p>
        <svg
          width="100%"
          height="40rem"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-container"
        >
          <rect
            rx="20"
            width="100%"
            height="40rem"
            x="0"
            y="0"
            stroke="url(#paint0_linear_227_259)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_227_259"
              x1="1.61353"
              y1="1.00342"
              x2="1297.61"
              y2="416.915"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#009D53" />
              <stop offset="1" stopColor="#F07F3D" />
            </linearGradient>
          </defs>
        </svg>
        <form id="login-form" onSubmit={handleSubmit}>
          <div className="inputs">
            <label htmlFor="login-email">
              Email
              <input
                type="email"
                id="login-email"
                placeholder="Seu email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </label>
            <label htmlFor="login-pass">
              Senha
              <input
                type="password"
                id="login-pass"
                placeholder="Sua senha"
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
              />
            </label>
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <Link to={"/nova-senha"} className="nova-senha">
            Esqueceu a senha? Clique aqui para redefinir
          </Link>
          <LoginBtn3 />
        </form>
      </div>
    </>
  );
};

export default LoginPage;
