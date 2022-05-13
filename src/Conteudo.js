import Perguntas from "./Perguntas";
import Footer from "./Footer";
import Icones from "./Icones";
import React from "react";

export default function Conteudo(props) {
  const [icones, setIcones] = React.useState([
    <Icones icone="close-circle-outline" cor="red" />,
    <Icones icone="help-circle-outline" cor="orange" />,
  ]);

  function adicionarIcone(icone, cor) {
    const objIcone = <Icones icone={icone} cor={cor} />;
    setIcones(...icones, objIcone);
  }
  return (
    <div className="conteudo">
      <header>
        <img src="./assets/logo-pequeno.png" alt="Logo zaprecall" />
        <h1>ZapRecall</h1>
      </header>
      <Perguntas adicionarIcone={adicionarIcone} />
      <Footer>
        {icones.map(function (icone) {
          return icone;
        })}
      </Footer>
    </div>
  );
}
