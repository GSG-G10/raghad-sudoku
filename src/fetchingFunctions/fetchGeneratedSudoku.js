function fetchGeneratedSudoku(level, myAbortController, callback) {
  fetch(`https://sugoku.herokuapp.com/board?difficulty=${level}`, {
    signal: myAbortController.signal,
  })
    .then((response) => response.json())
    .then((data) => {
      const sudokuArr = [];
      data.board.map((row, rowIndex) => {
        const cols = [];
        sudokuArr.push({ cols: cols, rowNum: rowIndex });
        row.map((col, colIndex) => {
          cols.push([col, colIndex]);
        });
      });
      callback(sudokuArr);
    });
}

export default fetchGeneratedSudoku;
