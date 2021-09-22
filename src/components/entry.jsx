import React from "react";

function Entry(props) {
  const { entry, canChange, colNum, rowNum, setGeneratedSudoku } = props;

  const handleChange = (e) => {
    if (canChange) {
      setGeneratedSudoku((prev) => {
        const newState = prev;
        newState[rowNum].cols[colNum][0] = parseInt(e.target.value, 10);
        return setGeneratedSudoku(newState);
      });
    }
  };

  return (
    <div>
      <input
        className="entry"
        value={entry ? entry : ""}
        type="text"
        onChange={handleChange}
      />
    </div>
  );
}

export default Entry;
