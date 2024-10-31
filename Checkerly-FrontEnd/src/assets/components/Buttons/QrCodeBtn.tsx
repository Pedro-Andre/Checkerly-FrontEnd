// import { Link } from "react-router-dom";

// interface QrdCodeBtnProps {
//   eventInfo: {
//     id: string;
//   };
// }

// const QrdCodeBtn: React.FC<QrdCodeBtnProps> = ({ eventInfo }) => {
//   return (
//     <Link
//       to={{
//         pathname: "/evento-criado/qr-code",
//       }}
//       state={{ eventInfo }}
//     >
//       <button className="body-btn">Criar QR-Code</button>
//     </Link>
//   );
// };

// export default QrdCodeBtn;

// ======= \\
import { Link } from "react-router-dom";

const QrdCodeBtn = () => {
  return (
    <Link
      to={{
        pathname: "/evento-criado/qr-code",
      }}
    >
      <button className="body-btn">Criar QR-Code</button>
    </Link>
  );
};

export default QrdCodeBtn;
