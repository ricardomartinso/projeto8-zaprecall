import React from "react";
import PerguntaDeck from "./PerguntaDeck";

export default function Perguntas(props) {
  function embaralhar() {
    return Math.random() - 0.5;
  }
  const flashcard = [
    {
      pergunta: "O que é Jsx?",
      resposta: "Uma extensão de linguagem do JavaScript",
    },
    {
      pergunta: "O React é __",
      resposta: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      pergunta: "Componentes devem iniciar com",
      resposta: "letra maiúscula",
    },
    {
      pergunta: "Podemos colocar __ dentro do JSX  ",
      resposta: "expressões",
    },
    {
      pergunta: "O ReactDOM nos ajuda __",
      resposta: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      pergunta: "Usamos o npm para __",
      resposta: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      pergunta: "Usamos props para __",
      resposta: "passar diferentes informações para componentes ",
    },
    {
      pergunta: "Usamos estado (state) para __",
      resposta:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];
  function embaralhado() {
    flashcard.sort(embaralhar);
    console.log(flashcard);
  }

  return (
    <div className="perguntas">
      {flashcard.sort(embaralhar).map(function (card, index) {
        return (
          <PerguntaDeck
            key={index}
            numeracao={index + 1}
            pergunta={card.pergunta}
            resposta={card.resposta}
            adicionarIcone={props.function}
            contador={props.contador}
            icones={props.icones}
          />
        );
      })}
    </div>
  );
}
