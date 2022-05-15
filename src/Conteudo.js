import Perguntas from "./Perguntas";
import Footer from "./Footer";
import Icones from "./Icones";
import React from "react";

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
      setImagem("./assets/sad.png");
    } else {
      setResultado("Parabéns!!!");
      setTextoResultado("Você nao esqueceu nenhum card!");
      setImagem("./assets/party.png");
    }
  }
  return (
    <div className="conteudo">
      <header>
        <img src="./assets/logo-pequeno.png" alt="Logo zaprecall" />
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
