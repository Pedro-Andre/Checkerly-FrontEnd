import EventQrCodeBtn from "../Buttons/EventQrCodeBtn";
// import ParticipantsBtn from "../Buttons/ParticipantsBtn";
import "./ListaPage.css";

function ListaPage() {
  return (
    <>
      <div className="texts-container">
        <p>Lista de participantes</p>
        <h3>Nome do Evento</h3>
      </div>

      <div className="container event-list list-container">
        <div className="list-header">
          <p className="container-title events-title list-title">
            Participantes <span>(0)</span>
          </p>
          <label htmlFor="list-search" className="search-container">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.7737 21.8325H23.2633L22.728 21.3058C23.9228 19.8895 24.796 18.2211 25.2852 16.4202C25.7743 14.6193 25.8673 12.7304 25.5575 10.8885C24.6589 5.46526 20.2236 1.13447 14.8706 0.471198C12.9887 0.228256 11.0772 0.427835 9.28247 1.05466C7.48776 1.68149 5.85735 2.71895 4.51601 4.08766C3.17468 5.45637 2.15796 7.12006 1.54367 8.9514C0.929381 10.7827 0.733794 12.7332 0.971877 14.6536C1.62189 20.1158 5.86606 24.6417 11.1808 25.5586C12.9859 25.8747 14.837 25.7798 16.6019 25.2807C18.3668 24.7815 20.0018 23.8905 21.3898 22.6714L21.906 23.2176V24.7587L30.0311 33.0497C30.8149 33.8495 32.0958 33.8495 32.8796 33.0497C33.6635 32.2498 33.6635 30.9428 32.8796 30.143L24.7737 21.8325ZM13.3029 21.8325C8.54256 21.8325 4.69987 17.9114 4.69987 13.0539C4.69987 8.19639 8.54256 4.27527 13.3029 4.27527C18.0633 4.27527 21.906 8.19639 21.906 13.0539C21.906 17.9114 18.0633 21.8325 13.3029 21.8325Z"
                fill="#999999"
              />
            </svg>
            <input
              className="search-input"
              type="search"
              id="list-search"
              placeholder="Procurar participante"
            />
          </label>
        </div>
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
                  <th>Nome do participante</th>
                  <th>Email</th>
                  <th>Local</th>
                  <th>Registros</th>
                  <th>Ações</th>
                </tr>
                <tr>
                  <td className="list-name">Fulano de Tal</td>
                  <td id="list-email-value" className="list-email">
                    email_do_fulando@msamd.com
                  </td>
                  <td className="list-local">Uniceplac</td>
                  <td>100</td>
                  <td className="event-list-btn">
                    <EventQrCodeBtn />
                    {/* <ParticipantsBtn /> */}
                  </td>
                </tr>
                <tr>
                  <th>Nome do participante</th>
                  <th>Email</th>
                  <th>Local</th>
                  <th>Registros</th>
                  <th>Ações</th>
                </tr>
                <tr>
                  <td className="list-name">Fulano de Tal</td>
                  <td id="list-email-value" className="list-email">
                    email_do_fulando@msamd.com
                  </td>
                  <td className="list-local">Uniceplac</td>
                  <td>100</td>
                  <td className="event-list-btn">
                    <EventQrCodeBtn />
                    {/* <ParticipantsBtn /> */}
                  </td>
                </tr>
                <tr>
                  <th>Nome do participante</th>
                  <th>Email</th>
                  <th>Local</th>
                  <th>Registros</th>
                  <th>Ações</th>
                </tr>
                <tr>
                  <td className="list-name">Fulano de Tal</td>
                  <td id="list-email-value" className="list-email">
                    email_do_fulando@msamd.com
                  </td>
                  <td className="list-local">Uniceplac</td>
                  <td>100</td>
                  <td className="event-list-btn">
                    <EventQrCodeBtn />
                    {/* <ParticipantsBtn /> */}
                  </td>
                </tr>
                <tr>
                  <th>Nome do participante</th>
                  <th>Email</th>
                  <th>Local</th>
                  <th>Registros</th>
                  <th>Ações</th>
                </tr>
                <tr>
                  <td className="list-name">Fulano de Tal</td>
                  <td id="list-email-value" className="list-email">
                    email_do_fulando@msamd.com
                  </td>
                  <td className="list-local">Uniceplac</td>
                  <td>100</td>
                  <td className="event-list-btn">
                    <EventQrCodeBtn />
                    {/* <ParticipantsBtn /> */}
                  </td>
                </tr>
                <tr>
                  <th>Nome do participante</th>
                  <th>Email</th>
                  <th>Local</th>
                  <th>Registros</th>
                  <th>Ações</th>
                </tr>
                <tr>
                  <td id="list-name-value" className="list-name">
                    Fulano de Tal
                  </td>
                  <td id="list-email-value" className="list-email">
                    email_do_fulando@msamd.com
                  </td>
                  <td className="list-local">Uniceplac</td>
                  <td>100</td>
                  <td className="event-list-btn">
                    <EventQrCodeBtn />
                    {/* <ParticipantsBtn /> */}
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

export default ListaPage;
