import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import fetchGeneratedSudoku from "../functions/fetchGeneratedSudoku";
import fetchSudokuSolution from "../functions/fetchSudokuSolution";
import generateStateArray from "../functions/generateStateArray";

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

  const checkSolution = () => {
    if (JSON.stringify(solution) === JSON.stringify(generatedSudoku)) {
      setSolved("solved successfully");
    } else {
      setSolved("fail");
    }
  };

  return (
    <div>

    </div>
  );
}

export default Game;
