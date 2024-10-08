import "./CardsSection.css";

function CardsSection() {
  return (
    <div className="cards-container">
      {/* <div className="card">
        <p>Crição de Eventos</p>
        <span>Crie eventos de forma simples e rápida</span>
      </div>
      <div className="card">
        <p>Controle de presença</p>
        <span>Tenha controle da lista dos presentes no evento</span>
      </div>
      <div className="card">
        <p>Emissão de Certificado</p>
        <span>
          Emissão automática de certificado para os ouvintes presentes
        </span>
      </div> */}
      <div className="card">
        <p>Criação de Certificados</p>
        <span>Crie eventos de forma simples e rápida</span>
      </div>
      <div className="card">
        <p>Controle de Presença</p>
        <span>Tenha acesso a lista dos presentes no evento</span>
      </div>
      <div className="card">
        <p>Emissão de Certificado</p>
        <span>
          Emissão automática de certificado para os ouvintes presentes no evento
        </span>
      </div>
    </div>
  );
}

// let cards = document.querySelectorAll(".card");

// cards.forEach((card) => {
//   (card as HTMLElement).addEventListener("mousemove", function (e: MouseEvent) {
//     let x = e.pageX - (card as HTMLElement).offsetLeft;
//     let y = e.pageY - (card as HTMLElement).offsetTop;

//     (card as HTMLElement).style.setProperty("--x", x + "px");
//     (card as HTMLElement).style.setProperty("--y", y + "px");
//   });
// });

export default CardsSection;
