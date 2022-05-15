import logo from "../assets/logo.png";

export default function BoasVindas({ changeTela }) {
  return (
    <div className="boas-vindas">
      <img src={logo} alt="Logo zaprecall" />
      <h1>ZapRecall</h1>
      <button onClick={changeTela}>
        <p>Iniciar Recall!</p>
      </button>
    </div>
  );
}
