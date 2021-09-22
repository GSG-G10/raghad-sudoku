import React from "react";
import { Link } from "react-router-dom";

function SubmitBtn(props) {
  const { setSolved, content } = props;
  return (
    <div>
      <div>
        <h4>{content}</h4>
        <button>
          <Link to="/">Back to home</Link>
        </button>
        <button  onClick={() => {setSolved("not submitted")}}>
          Back to game
        </button>
      </div>
    </div>
  );
}

export default SubmitBtn;
