import "./Square.css";
import { useDispatch } from "react-redux";

export default function Square(props) {
  const symbol = props.symbol;
  let backgroundColor = "whiteColor";
  if (symbol === "X") {
    backgroundColor = "blackColor";
  }

  const dispatch = useDispatch();

  return (
    <div
      onClick={() =>
        dispatch({
          type: "boardClick",
          x: props.x,
          y: props.y,
        })
      }
      id="square"
      class={backgroundColor}
    ></div>
  );
}
