import React from "react";

function Row(props) {
  const { generatedSudoku, setGeneratedSudoku } = props;
  return (
    <>
      {generatedSudoku
        ? generatedSudoku.map((row, indexX) => {
            return (
              <div className="row" key={row.rowNum}>
              </div>
            );
          })
        : null}
    </>
  );
}

export default Row;
