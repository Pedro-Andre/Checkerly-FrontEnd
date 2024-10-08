import CreateEventBtn2 from "../Buttons/CreateEventBtn2";
import "./BottomSection.css";

function BottomSection() {
  return (
    <>
      <div className="bottom-container">
        <div className="content">
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
          <div className="bottom-text">
            <p>Quero planejar um evento</p>
            <span>
              Vamos te ajudar a criar as informações do seu evento de forma
              simplificada
            </span>
            <CreateEventBtn2 />
          </div>
        </div>
        <div className="orb-1"></div>
        <div className="orb-2"></div>
      </div>
    </>
  );
}

export default BottomSection;
