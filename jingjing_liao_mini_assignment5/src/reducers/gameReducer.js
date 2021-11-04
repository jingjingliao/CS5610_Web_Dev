const defaultState = [
  ["", ""],
  ["", ""],
];

export default function gameReducer(state = defaultState, action) {
  if (action.type === "boardClick") {
    const value = state[action.x][action.y];
    if (value === "X") {
      state[action.x][action.y] = "O";
    } else {
      state[action.x][action.y] = "X";
    }
    return [...state];
  }
  return state;
}
