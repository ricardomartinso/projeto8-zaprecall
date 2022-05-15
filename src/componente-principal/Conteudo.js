import Perguntas from "../componente-perguntas/Perguntas";
import Footer from "./Footer";
import Icones from "../componente-icons/Icones";
import React from "react";
import logoPequeno from "../assets/logo-pequeno.png";
import sad from "../assets/sad.png";
import party from "../assets/sad.png";

export default function Conteudo(props) {
  let [icones, setIcones] = React.useState([]);
  let [contador, setContador] = React.useState(0);
  const [resultado, setResultado] = React.useState(true);
  const [textoResultado, setTextoResultado] = React.useState(true);
  const [imagem, setImagem] = React.useState("");
  let [iconesChecado, setIconesChecado] = React.useState([]);

  function adicionarIcone(icone, cor) {
    const objIcone = <Icones icone={icone} cor={cor} />;
    setIcones([...icones, objIcone]);
    iconesChecado.push(objIcone);
  }

  function acrescimoContador() {
    setContador((contador = contador + 1));
    if (contador === 8) {
      checarIcone();
    }
  }
  function checarIcone() {
    const checador = iconesChecado.filter((icone) => icone.props.cor === "red");
    if (checador.length >= 1) {
      setResultado("Putz...");
      setTextoResultado("Tente novamente na próxima");
      setImagem(sad);
    } else {
      setResultado("Parabéns!!!");
      setTextoResultado("Você nao esqueceu nenhum card!");
      setImagem(party);
    }
  }
  return (
    <div className="conteudo">
      <header>
        <img src={logoPequeno} alt="Logo zaprecall" />
        <h1>ZapRecall</h1>
      </header>

      <Perguntas
        function={adicionarIcone}
        contador={acrescimoContador}
        icones={icones}
      />

      <Footer
        contador={contador}
        resultado={resultado}
        textoResultado={textoResultado}
        imagem={imagem}
      >
        {icones.map((icone, index) => icone)}
      </Footer>
    </div>
  );
}
