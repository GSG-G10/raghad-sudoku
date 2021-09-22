function fetchGeneratedSudoku(data, callback) {
  const encodeBoard = (board) =>
    board.reduce(
      (result, row, i) =>
        result +
        `%5B${encodeURIComponent(row)}%5D${
          i === board.length - 1 ? "" : "%2C"
        }`,
      ""
    );
  const encodeParams = (params) =>
    Object.keys(params)
      .map((key) => key + "=" + `%5B${encodeBoard(params[key])}%5D`)
      .join("&");

  fetch("https://sugoku.herokuapp.com/solve", {
    method: "POST",
    body: encodeParams(data),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  })
    .then((response) => response.json())
    .then((response) => callback(response.solution));
}

export default fetchGeneratedSudoku;
