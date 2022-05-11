export default function Conteudo() {
  return (
    <div class="conteudo">
      <header>
        <img src="./assets/logo-pequeno.png" alt="Logo zaprecall" />
        <h1>ZapRecall</h1>
      </header>

      <div class="perguntas">
        <div class="pergunta">
          <div class="pergunta invisivel">
            <button>
              <p>Pergunta 1</p>
              <ion-icon name="play-outline"></ion-icon>
            </button>
          </div>
          <div class="flashcard question invisivel">
            <p>O que é Jsx?</p>
            <div class="virar-flashcard">
              <img src="./assets/setinha.png" alt="" />
            </div>
          </div>
          <div class="flashcard answer">
            <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
            <div class="respostas">
              <button name="nao-lembrei" class="nao-lembrei">
                Não lembrei
              </button>
              <button name="quase-nao-lembrei" class="quase-nao-lembrei">
                Quase não lembrei!
              </button>
              <button name="zap" class="zap">
                Zap!
              </button>
            </div>
          </div>
        </div>

        <div class="pergunta">
          <button>
            <p>Pergunta 1</p>
            <ion-icon name="play-outline"></ion-icon>
          </button>
        </div>
      </div>

      <footer>
        <span>0/4 Concluídos</span>
      </footer>
    </div>
  );
}
