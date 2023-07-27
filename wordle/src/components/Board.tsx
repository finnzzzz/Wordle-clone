import Letter from "./Letter";
import { useState, useEffect } from "react";

interface boardProps {
  onInput: (e: string) => void;
  onDelete: () => void;
  onEnter: () => void;
  currPosition: { row: number; letterIndex: number; gameOver: Boolean };
}

const Board = ({ onInput, onDelete, onEnter, currPosition }: boardProps) => {
  const allLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const handleKeyboard = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      onEnter();
    } else if (e.key === "Backspace") {
      onDelete();
    } else {
      allLetters.forEach(letter => {
        if (e.key.toLowerCase() === letter.toLocaleLowerCase()) {
          onInput(letter);
        }
      });
    }
  };

  //gameOver = true時 不再監聽
  console.log(currPosition.gameOver);
  if (!currPosition.gameOver) {
    useEffect(() => {
      window.addEventListener("keydown", handleKeyboard);
      return () => {
        window.removeEventListener("keydown", handleKeyboard);
      };
    }, [handleKeyboard]);
  }

  return (
    <div className=" flex flex-col">
      <div className="flex flex-row m-[3px] h-[56px]">
        <Letter row={0} letterIndex={0} currPosition={currPosition}></Letter>
        <Letter row={0} letterIndex={1} currPosition={currPosition}></Letter>
        <Letter row={0} letterIndex={2} currPosition={currPosition}></Letter>
        <Letter row={0} letterIndex={3} currPosition={currPosition}></Letter>
        <Letter row={0} letterIndex={4} currPosition={currPosition}></Letter>
      </div>
      <div className="flex flex-row m-[3px] h-[56px]">
        <Letter row={1} letterIndex={0} currPosition={currPosition}></Letter>
        <Letter row={1} letterIndex={1} currPosition={currPosition}></Letter>
        <Letter row={1} letterIndex={2} currPosition={currPosition}></Letter>
        <Letter row={1} letterIndex={3} currPosition={currPosition}></Letter>
        <Letter row={1} letterIndex={4} currPosition={currPosition}></Letter>
      </div>
      <div className="flex flex-row m-[3px] h-[56px]">
        <Letter row={2} letterIndex={0} currPosition={currPosition}></Letter>
        <Letter row={2} letterIndex={1} currPosition={currPosition}></Letter>
        <Letter row={2} letterIndex={2} currPosition={currPosition}></Letter>
        <Letter row={2} letterIndex={3} currPosition={currPosition}></Letter>
        <Letter row={2} letterIndex={4} currPosition={currPosition}></Letter>
      </div>
      <div className="flex flex-row m-[3px] h-[56px]">
        <Letter row={3} letterIndex={0} currPosition={currPosition}></Letter>
        <Letter row={3} letterIndex={1} currPosition={currPosition}></Letter>
        <Letter row={3} letterIndex={2} currPosition={currPosition}></Letter>
        <Letter row={3} letterIndex={3} currPosition={currPosition}></Letter>
        <Letter row={3} letterIndex={4} currPosition={currPosition}></Letter>
      </div>
      <div className="flex flex-row m-[3px] h-[56px]">
        <Letter row={4} letterIndex={0} currPosition={currPosition}></Letter>
        <Letter row={4} letterIndex={1} currPosition={currPosition}></Letter>
        <Letter row={4} letterIndex={2} currPosition={currPosition}></Letter>
        <Letter row={4} letterIndex={3} currPosition={currPosition}></Letter>
        <Letter row={4} letterIndex={4} currPosition={currPosition}></Letter>
      </div>
      <div className="flex flex-row m-[3px] h-[56px]">
        <Letter row={5} letterIndex={0} currPosition={currPosition}></Letter>
        <Letter row={5} letterIndex={1} currPosition={currPosition}></Letter>
        <Letter row={5} letterIndex={2} currPosition={currPosition}></Letter>
        <Letter row={5} letterIndex={3} currPosition={currPosition}></Letter>
        <Letter row={5} letterIndex={4} currPosition={currPosition}></Letter>
      </div>
    </div>
  );
};

export default Board;
