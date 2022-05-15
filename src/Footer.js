export default function Footer(props) {
  return (
    <footer>
      <div className="resultado">
        {props.resultado} <img src={props.imagem} alt="" />
      </div>
      <div className="resultado-texto">{props.textoResultado}</div>
      <div className="concluidos">
        <p>{props.contador}/8 concluidos</p>
      </div>
      <div className="icones-footer">{props.children}</div>
    </footer>
  );
}
