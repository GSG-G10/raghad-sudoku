function checkSolution(solution, generatedSudoku, setSolved) {
  if (JSON.stringify(solution) === JSON.stringify(generatedSudoku)) {
    setSolved("solved successfully");
  } else {
    setSolved("fail");
  }
}

export default checkSolution;
