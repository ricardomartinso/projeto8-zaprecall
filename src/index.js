import ReactDOM from "react-dom";
import Container from "./Container.js";

function ZapRecall() {
  return (
    <div className="container">
      <Container />
    </div>
  );
}

const element = document.querySelector(".root");

ReactDOM.render(ZapRecall(), element);
