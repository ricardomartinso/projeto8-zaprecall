import Perguntas from "./Perguntas";

export default function Conteudo() {
  return (
    <div className="conteudo">
      <header>
        <img src="./assets/logo-pequeno.png" alt="Logo zaprecall" />
        <h1>ZapRecall</h1>
      </header>

      <Perguntas />

      <footer>
        <div className="concluidos">
          <p>0/8 concluidos</p>
        </div>
        <div className="icones-footer invisivel">
          <ion-icon name="close-circle-outline"></ion-icon>
          <ion-icon name="close-circle-outline"></ion-icon>
          <ion-icon name="close-circle-outline"></ion-icon>
          <ion-icon name="close-circle-outline"></ion-icon>
          <ion-icon name="close-circle-outline"></ion-icon>
          <ion-icon name="close-circle-outline"></ion-icon>
          <ion-icon name="close-circle-outline"></ion-icon>
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
      </footer>
    </div>
  );
}
