function fetchGeneratedSudoku(level, myAbortController, callback1, callback2, callback3) {
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
      callback1(sudokuArr);
      callback2((sudokuArr, callback3))
    });
}

export default fetchGeneratedSudoku;
