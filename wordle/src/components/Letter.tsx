import { defaultBoard } from "./defaultBoard";

enum State {
  DEFAULT = 0,
  INPUT = 1,
}

interface letterProps {
  row: 0 | 1 | 2 | 3 | 4 | 5;
  letterIndex: 0 | 1 | 2 | 3 | 4;
  currPosition: { row: number; letterIndex: number };
}

type letterStateType = "empty" | "error" | "correct" | "almost" | "type";

const ANSWER = "sheep";

const Letter = ({ row, letterIndex, currPosition }: letterProps) => {
  const letter = defaultBoard[row][letterIndex]; //獲取當前字母
  const correct = ANSWER.toUpperCase()[letterIndex] === letter; //判斷當前字母跟答案是否相同
  //判斷當前不是正確字母 且 不為空 且包含正確答案的字母
  const almost =
    !correct && letter !== "" && ANSWER.toUpperCase().includes(letter);

  const letterState =
    letter !== "" && !(currPosition.row > row)
      ? "type"
      : !(currPosition.row > row)
      ? "empty"
      : correct
      ? "correct"
      : almost
      ? "almost"
      : "error";

  const getState = (letterState: letterStateType) => {
    const commonClassNames =
      "font-extrabold text-3xl h-full w-[56px] m-[3px] grid place-items-center ";
    const map = {
      empty: "border border-gray-400 ",
      type: "border border-gray-900 text-black",
      error: "bg-gray-400 text-white",
      almost: "bg-amber-400 text-white",
      correct: "bg-emerald-500 text-white ",
    };

    return `${commonClassNames}${map[letterState]}`;
  };

  return <div className={getState(letterState)}>{letter}</div>;
};

export default Letter;
