import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./AboutPage.css";

function AboutPage() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section>
          <div className="about-text">
            <span>Sobre o Checkerly</span>
            <p>
              Bem-vindo ao Checkerly, a plataforma inovadora que transforma a
              maneira como você gerencia e participa de eventos! Nossa missão é
              simplificar a vida de organizadores e participantes, oferecendo
              uma experiência intuitiva e eficiente que conecta pessoas e
              eventos de forma única. No Checkerly, acreditamos que a tecnologia
              pode melhorar a forma como interagimos e nos engajamos. Com nosso
              sistema de registro de presença por QR code, você pode participar
              de eventos com facilidade e segurança. Organizadores têm a
              oportunidade de gerenciar suas atividades de maneira prática,
              emitindo certificados de participação de forma automatizada e
              garantindo uma comunicação clara com os participantes.
            </p>
            <span>O que fazemos?</span>
            <p>
              Registro de Presença: Facilite a entrada dos participantes com
              nosso sistema de QR code, reduzindo filas e otimizando o tempo.
              Emissão de Certificados: Gere certificados personalizados e
              envie-os diretamente por e-mail para os participantes, garantindo
              que todos tenham um registro de sua presença. Gerenciamento de
              Eventos: Organizadores podem criar e gerenciar eventos de forma
              simples, mantendo todos os dados organizados e acessíveis.
            </p>
            <span>Nossa Visão No Checkerly</span>

            <p>
              Estamos comprometidos em criar uma comunidade onde a tecnologia
              impulsiona a conexão humana. Queremos ser a primeira escolha para
              quem busca inovação e eficiência na gestão de eventos. Junte-se a
              nós e descubra como o Checkerly pode simplificar sua experiência
              em eventos, seja como participante ou organizador. Venha dar um
              check na sua próxima experiência!
            </p>
          </div>
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default AboutPage;
