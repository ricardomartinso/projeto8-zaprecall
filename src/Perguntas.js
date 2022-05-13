import React from "react";
export default function Perguntas() {
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
      resposta:
        "5. interagindo com a DOM para colocar componentes React na mesma",
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

  return (
    <div className="perguntas">
      {flashcard.sort(embaralhar).map(function (card, index) {
        return (
          <PerguntaDeck
            key={index}
            numeracao={index + 1}
            pergunta={card.pergunta}
            resposta={card.resposta}
          />
        );
      })}
    </div>
  );
}

function PerguntaDeck(props) {
  const [pergunta, setPergunta] = React.useState("pergunta");

  function mudarEstadoPergunta(estado) {
    if (estado === "pergunta") {
      setPergunta("question");
    } else if (estado === "question") {
      setPergunta("resposta");
    } else if (estado === "resposta") {
      setPergunta("respondido");
    }
  }
  return (
    <div className="pergunta-deck">
      {pergunta === "pergunta" ? (
        <Pergunta
          numeracao={props.numeracao}
          mudarEstadoPergunta={mudarEstadoPergunta}
        />
      ) : pergunta === "question" ? (
        <FlashcardQuestion
          pergunta={props.pergunta}
          mudarEstadoPergunta={mudarEstadoPergunta}
        />
      ) : pergunta === "resposta" ? (
        <FlashcardAnswer
          resposta={props.resposta}
          mudarEstadoPergunta={mudarEstadoPergunta}
        />
      ) : (
        <Pergunta
          numeracao={props.numeracao}
          mudarEstadoPergunta={mudarEstadoPergunta}
        />
      )}
    </div>
  );
}
function Pergunta(props) {
  return (
    <div className="pergunta">
      <button onClick={() => props.mudarEstadoPergunta("pergunta")}>
        <p>Pergunta {props.numeracao}</p>
        <ion-icon name="play-outline"></ion-icon>
      </button>
    </div>
  );
}
function FlashcardQuestion(props) {
  return (
    <div className="flashcard question">
      <p>{props.pergunta}</p>
      <div
        className="virar-flashcard"
        onClick={() => props.mudarEstadoPergunta("question")}
      >
        <img src="./assets/setinha.png" alt="" />
      </div>
    </div>
  );
}
function FlashcardAnswer(props) {
  return (
    <div className="flashcard answer">
      <p>{props.resposta}</p>
      <div className="respostas">
        <button
          name="nao-lembrei"
          className="nao-lembrei"
          onClick={() => props.mudarEstadoPergunta("resposta")}
        >
          Não lembrei
        </button>
        <button name="quase-nao-lembrei" className="quase-nao-lembrei">
          Quase não lembrei!
        </button>
        <button name="zap" className="zap">
          Zap!
        </button>
      </div>
    </div>
  );
}
