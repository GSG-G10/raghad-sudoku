function checkSolution(level, time, solution, generatedSudoku, setSolved) {
  if (JSON.stringify(solution) === JSON.stringify(generatedSudoku)) {
    setSolved("solved successfully");
    localStorage.setItem('game', JSON.stringify({level, time}))
  } else {
    setSolved("fail");
  }
}

export default checkSolution;
