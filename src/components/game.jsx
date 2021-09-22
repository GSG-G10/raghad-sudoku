import React, { useState, useEffect } from 'react'
import { useParams 
  } from "react-router-dom";
import fetchGeneratedSudoku from '../fetchingFunctions/fetchGeneratedSudoku';

function Game() {
    const [generatedSudoku, setGeneratedSudoku] = useState(0);
    const myAbortController = new AbortController();
    const { level } = useParams();

    useEffect(() => {
        if(level){
            fetchGeneratedSudoku(level, myAbortController, setGeneratedSudoku)
        }   
        return () => {
          myAbortController.abort();
        };
      }, []);
    


    return (
        <div>
            hi
        </div>
    )
}

export default Game