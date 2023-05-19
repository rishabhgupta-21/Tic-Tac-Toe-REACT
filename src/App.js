import { useState } from "react";
import Board from './Board'


const Game = () => {
    // States
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);

    // Variables
    const xIsNext = (currentMove % 2 === 0)
    const currentSquares = history[currentMove];

    // Variable - Array of React Elements
    const moves = history.map((squares, move) => {
        let text = ''

        if (move === 0) {
            text = 'Go to game start'
        }
        else {
            text = `Go to move #${move}`
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>
                    {text}
                </button>
            </li>
        )
    })

    // Functions
    const handlePlay = (nextSquares) => {
        const nextHistory = history.slice(0, currentMove + 1);
        setHistory([...nextHistory, nextSquares]);
        setCurrentMove(currentMove + 1);
    }

    const jumpTo = (nextMove) => {
        setCurrentMove(nextMove);
    }


    // Return HTML
    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>

            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}


export default Game;