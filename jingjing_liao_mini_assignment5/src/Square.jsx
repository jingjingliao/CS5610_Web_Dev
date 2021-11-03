import "./Square.css";

export default function Square(props) {
  const symbol = props.symbol;
  let backgroundColor = "whiteColor";
  if (symbol === "X") {
    backgroundColor = "blackColor";
  }

  return (
    <div
      onClick={() => {
        const { boardState, onClick, x, y } = props;
        if (symbol === "X") {
          boardState[x][y] = "O";
        } else {
          boardState[x][y] = "X";
        }
        onClick([...boardState]);
      }}
      id="square"
      class={backgroundColor}
    ></div>
  );
}
