import React from "react";
import PerguntaDeck from "./PerguntaDeck";

export default function Perguntas(props) {
  function embaralhar() {
    return Math.random() - 0.5;
  }
  const testeFlashcard = [
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
  const embaralhado = testeFlashcard.sort(embaralhar);

  const [flashcard, setFlashcard] = React.useState(embaralhado);

  return (
    <div className="perguntas">
      {flashcard.map(function (card, index) {
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
