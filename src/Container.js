import Conteudo from "./componente-principal/Conteudo";
import BoasVindas from "./componente-principal/BoasVindas";
import React from "react";
import "./css/reset.css";
import "./css/style.css";

export default function Container() {
  const [tela, setTela] = React.useState("boas-vindas");

  function changeTela() {
    setTela("conteudo");
  }

  return (
    <>
      {tela === "boas-vindas" ? (
        <BoasVindas changeTela={changeTela} />
      ) : (
        <Conteudo />
      )}
    </>
  );
}
