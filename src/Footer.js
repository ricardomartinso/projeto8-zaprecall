export default function Footer(props) {
  return (
    <footer>
      <div className="concluidos">
        <p>0/8 concluidos</p>
      </div>
      <div className="icones-footer">{props.children}</div>
    </footer>
  );
}
