import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <h1>Sudoku</h1>
      <nav>
        <ul>
          <li>
            <Link className='nav' to="/">Home</Link>
          </li>
          <li>
            <Link className='nav' to="/game/easy">Easy</Link>
          </li>
          <li>
            <Link className='nav' to="/game/medium">Medium</Link>
          </li>
          <li>
            <Link className='nav' to="/game/hard">Hard</Link>
          </li>
          <li>
            <Link className='nav' to="/game/random">Random</Link>
          </li>
          <li>
            <Link className='nav' to="/statistics">Statistics</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
