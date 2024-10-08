import "./Perfil.css";
import ParticipantsBtn from "../Buttons/ParticipantsBtn";
import EventQrCodeBtn from "../Buttons/EventQrCodeBtn";

function PerfilPage() {
  return (
    <>
      <div className="container">
        <p className="container-title">
          Bem vindo, <span>User (ouvinte-teste)</span>
        </p>
        <svg
          width="100%"
          height="25rem"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-container"
        >
          <rect
            rx="20"
            width="100%"
            height="25rem"
            x="-0"
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
        <div className="user-texts">
          <div className="user-name">
            <span>Nome</span>
            <p>Fulaninho de Tal</p>
          </div>
          <div className="user-email">
            <span>Email</span>
            <p>Email@fulaninho.detal</p>
          </div>
        </div>
      </div>

      <div className="container event-list">
        <p className="container-title events-title">
          Seus eventos <span>(0)</span>
        </p>
        <svg
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-container svg-list"
        >
          <rect
            rx="20"
            width="100%"
            x="-0"
            y="0"
            stroke="url(#paint0_linear_227_259)"
            strokeWidth="2"
            className="svg-list"
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
        <div className="scroll-container-wrapper">
          <div className="scroll-container">
            <table>
              <tbody>
                <tr>
                  <th>Nome do Evento</th>
                  <th>Data</th>
                  <th>Local</th>
                  <th>Registros</th>
                  <th>Ações</th>
                </tr>
                <tr>
                  <td className="list-name">evento de fulaninho sobre</td>
                  <td className="list-date">00/00/0000</td>
                  <td className="list-local">Uniceplac</td>
                  <td>100</td>
                  <td className="event-list-btn event-list-btn-2">
                    <EventQrCodeBtn />
                    <ParticipantsBtn />
                  </td>
                </tr>
                <tr>
                  <th>Nome do Evento</th>
                  <th>Data</th>
                  <th>Local</th>
                  <th>Registros</th>
                  <th>Ações</th>
                </tr>
                <tr>
                  <td className="list-name">evento de fulaninho</td>
                  <td className="list-date">00/00/0000</td>
                  <td className="list-local">Uniceplac</td>
                  <td>100</td>
                  <td className="event-list-btn event-list-btn-2">
                    <EventQrCodeBtn />
                    <ParticipantsBtn />
                  </td>
                </tr>
                <tr>
                  <th>Nome do Evento</th>
                  <th>Data</th>
                  <th>Local</th>
                  <th>Registros</th>
                  <th>Ações</th>
                </tr>
                <tr>
                  <td className="list-name">evento de fulaninho</td>
                  <td className="list-date">00/00/0000</td>
                  <td className="list-local">Uniceplac</td>
                  <td>100</td>
                  <td className="event-list-btn event-list-btn-2">
                    <EventQrCodeBtn />
                    <ParticipantsBtn />
                  </td>
                </tr>
                <tr>
                  <th>Nome do Evento</th>
                  <th>Data</th>
                  <th>Local</th>
                  <th>Registros</th>
                  <th>Ações</th>
                </tr>
                <tr>
                  <td className="list-name">evento de fulaninho</td>
                  <td className="list-date">00/00/0000</td>
                  <td className="list-local">Uniceplac</td>
                  <td>100</td>
                  <td className="event-list-btn event-list-btn-2">
                    <EventQrCodeBtn />
                    <ParticipantsBtn />
                  </td>
                </tr>
                <tr>
                  <th>Nome do Evento</th>
                  <th>Data</th>
                  <th>Local</th>
                  <th>Registros</th>
                  <th>Ações</th>
                </tr>
                <tr>
                  <td className="list-name">evento de fulaninho</td>
                  <td className="list-date">00/00/0000</td>
                  <td className="list-local">Uniceplac</td>
                  <td>100</td>
                  <td className="event-list-btn event-list-btn-2">
                    <EventQrCodeBtn />
                    <ParticipantsBtn />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default PerfilPage;
