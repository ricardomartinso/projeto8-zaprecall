import Perguntas from "./Perguntas";
import Footer from "./Footer";
import Icones from "./Icones";
import React from "react";

export default function Conteudo() {
  const [icone, setIcone] = React.useState("checkmark-circle-outline");

  return (
    <div className="conteudo">
      <header>
        <img src="./assets/logo-pequeno.png" alt="Logo zaprecall" />
        <h1>ZapRecall</h1>
      </header>

      <Perguntas />

      <Footer>
        <Icones icone={icone} />
      </Footer>
    </div>
  );
}
