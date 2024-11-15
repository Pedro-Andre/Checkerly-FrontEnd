// import LogoutBtn from "../Buttons/LogoutBtn";
// import UserIcon from "../imgs/UserIcon";
// import "./SignOut.css";
// import { useEffect } from "react";
// // import { Link } from "react-router-dom";

// function SignOut() {
//   // nav mobile function
//   useEffect(() => {
//     const menuIcon = document.querySelector(".menu-icon");
//     const navMobile = document.querySelector(".nav-mobile");

//     const toggleNav = () => navMobile?.classList.toggle("show-nav");

//     menuIcon?.addEventListener("click", toggleNav);

//     return () => menuIcon?.removeEventListener("click", toggleNav);
//   }, []);

//   return (
//     <>
//       <div className="sign-out">
//         <div className="sign-out-container">
//           <UserIcon />
//           <LogoutBtn />
//         </div>
//       </div>
//     </>
//   );
// }

// export default SignOut;

// gpt
import LogoutBtn from "../Buttons/LogoutBtn";
import UserIcon from "../imgs/UserIcon";
import "./SignOut.css";
import { useState } from "react";

function SignOut() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="sign-out">
      <div onClick={toggleDropdown} className="user-icon">
        <UserIcon />
      </div>
      {showDropdown && (
        <div className="sign-out-dropdown">
          <LogoutBtn />
        </div>
      )}
    </div>
  );
}

export default SignOut;
