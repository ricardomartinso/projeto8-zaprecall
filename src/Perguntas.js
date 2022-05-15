import React from "react";

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
            adicionarIcone={props.function}
            contador={props.contador}
            icones={props.icones}
          />
        );
      })}
    </div>
  );
}

function PerguntaDeck(props) {
  const [pergunta, setPergunta] = React.useState("pergunta");
  const [cor, setCor] = React.useState("red");
  const [icone, setIcone] = React.useState("close-circle-outline");
  const [corPergunta, setCorPergunta] = React.useState("tachado-vermelho");

  function mudarEstadoPergunta(estado, acerto) {
    if (estado === "pergunta") {
      setPergunta("question");
    } else if (estado === "question") {
      setPergunta("resposta");
    } else if (estado === "resposta" && acerto === "errado") {
      setPergunta("respondido");
      setCorPergunta("tachado-vermelho");
      setIcone("close-circle");
      setCor("red");
      props.adicionarIcone("close-circle", "red");
      props.contador();
    } else if (estado === "resposta" && acerto === "certo") {
      setPergunta("respondido");
      setCorPergunta("tachado-verde");
      setIcone("checkmark-circle");
      setCor("green");
      props.adicionarIcone("checkmark-circle", "green");
      props.contador();
    } else if (estado === "resposta" && acerto === "quase") {
      setPergunta("respondido");
      setCorPergunta("tachado-laranja");
      setIcone("help-circle");
      setCor("orange");
      props.adicionarIcone("help-circle", "orange");
      props.contador();
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
        <PerguntaRespondida
          numeracao={props.numeracao}
          botao={corPergunta}
          cor={cor}
          icone={icone}
        />
      )}
    </div>
  );
}
function Pergunta(props) {
  return (
    <div className="pergunta">
      <button onClick={() => props.mudarEstadoPergunta("pergunta")}>
        <p className={props.botao}>Pergunta {props.numeracao}</p>
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
          onClick={() => props.mudarEstadoPergunta("resposta", "errado")}
        >
          Não lembrei
        </button>
        <button
          name="quase-nao-lembrei"
          className="quase-nao-lembrei"
          onClick={() => props.mudarEstadoPergunta("resposta", "quase")}
        >
          Quase não lembrei!
        </button>
        <button
          name="zap"
          className="zap"
          onClick={() => props.mudarEstadoPergunta("resposta", "certo")}
        >
          Zap!
        </button>
      </div>
    </div>
  );
}
function PerguntaRespondida(props) {
  return (
    <div className="pergunta">
      <button>
        <p className={props.botao}>Pergunta {props.numeracao}</p>
        <ion-icon name={props.icone} style={{ color: props.cor }}></ion-icon>
      </button>
    </div>
  );
}
