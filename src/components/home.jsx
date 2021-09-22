import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <button>
        <Link to="/game/easy"> easy</Link>
      </button>

      <button>
        <Link to="/game/medium">medium</Link>
      </button>

      <button>
        <Link to="/game/hard">hard</Link>
      </button>

      <button>
        <Link to="/game/random">random</Link>
      </button>

      <button>
        <Link to="/statistics">Statistics</Link>
      </button>
    </div>
  );
}

export default Home;
