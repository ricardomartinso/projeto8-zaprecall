export default function BoasVindas({ changeTela }) {
  return (
    <div className="boas-vindas">
      <img src="./assets/logo.png" alt="Logo zaprecall" />
      <h1>ZapRecall</h1>
      <button onClick={changeTela}>
        <p>Iniciar Recall!</p>
      </button>
    </div>
  );
}
