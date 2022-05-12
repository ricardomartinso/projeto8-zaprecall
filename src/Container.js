import Conteudo from "./Conteudo";
import BoasVindas from "./BoasVindas";
import React from "react";

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
