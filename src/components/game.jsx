import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchGeneratedSudoku from "../functions/fetchGeneratedSudoku";
import fetchSudokuSolution from "../functions/fetchSudokuSolution";
import generateStateArray from "../functions/generateStateArray";
import SubmitBtn from "./submitBtn";
import checkSolution from "../functions/checkSolution";
import solveSudoku from "../functions/solveSudoku";
import Row from "./row";

function Game() {
  const [generatedSudoku, setGeneratedSudoku] = useState(0);
  const [solution, setSolution] = useState(0);
  const [solved, setSolved] = useState("not submitted");

  const myAbortController = new AbortController();
  const { level } = useParams();

  useEffect(() => {
    if (level) {
      fetchGeneratedSudoku(
        level,
        myAbortController,
        generateStateArray,
        setGeneratedSudoku,
        fetchSudokuSolution,
        setSolution
      );
    }
    return () => {
      myAbortController.abort();
    };
  }, []);

  return (
    <div>
      <div>
        <Row />
      </div>
      <div>
        <button
          onClick={() => checkSolution(solution, generatedSudoku, setSolved)}
        >
          submit solution
        </button>
        {solved === "fail" ? (
          <SubmitBtn setSolved={setSolved} content="Try again" />
        ) : solved === "solved successfully" ? (
          <SubmitBtn setSolved={setSolved} content="Congratulations" />
        ) : null}
        <button onClick={() => solveSudoku(setGeneratedSudoku, solution)}>
          Show the Solution
        </button>
      </div>
    </div>
  );
}

export default Game;
