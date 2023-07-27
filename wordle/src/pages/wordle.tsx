import "tailwindcss/tailwind.css";

import Board from "../components/Board";
import { useReducer } from "react";
import { defaultBoard } from "../components/defaultBoard";

interface initialState {
  row: number;
  letterIndex: number;
  board: Array<Array<string>>;
  gameOver: Boolean;
}

type ACTIONTYPES =
  | { type: "onInput"; e: string }
  | { type: "onDelete" }
  | { type: "onEnter" };

const initialState = {
  row: 0,
  letterIndex: 0,
  board: defaultBoard,
  gameOver: false,
};

const reducer = (state: initialState, action: ACTIONTYPES) => {
  const { row, letterIndex, board } = state;
  const newBoard = [...board];
  switch (action.type) {
    case "onInput":
      newBoard[row][letterIndex] = action.e;
      return {
        ...state,
        letterIndex: letterIndex + 1,
        board: newBoard,
      };
    case "onDelete":
      newBoard[row][letterIndex - 1] = "";
      return {
        ...state,
        letterIndex: letterIndex - 1,
        board: newBoard,
      };
    case "onEnter":
      let currWord = "";
      for (let i = 0; i < 5; i++) {
        currWord += state.board[state.row][i];
      }
      let isAnswer = currWord === "SHEEP";
      return {
        ...state,
        row: row + 1,
        letterIndex: 0,
        gameOver: isAnswer,
      };
  }
};

const wordle = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onInput = (e: string) => {
    if (state.letterIndex > 4) return;
    dispatch({ type: "onInput", e });
  };

  const onDelete = () => {
    if (state.letterIndex === 0) return;
    dispatch({ type: "onDelete" });
  };

  const onEnter = () => {
    if (state.letterIndex !== 5) return;
    dispatch({ type: "onEnter" });
  };

  return (
    <div className=" bg-slate-200 h-screen w-full flex flex-col items-center justify-center">
      <p className=" font-serif font-semibold">wordle</p>
      <Board
        onInput={onInput}
        onDelete={onDelete}
        onEnter={onEnter}
        currPosition={state}
      />
      🐏
    </div>
  );
};

export default wordle;
