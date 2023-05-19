import { useState } from "react";
import Square from "./Square";

const Board = ({ xIsNext, squares, onPlay }) => {
    // Functions
    const handleClick = (i) => {
        if (squares[i])
            return;

        if (calculateWinner(squares))
            return;

        const nextSquares = squares.slice();

        xIsNext ? nextSquares[i] = 'X' : nextSquares[i] = 'O';

        // setXIsNext(!xIsNext);
        // setSquares(newSquares);

        onPlay(nextSquares);
    }



    // Return HTML
    return (
        <>
            {/* Logic for Displaying Game Winner / Next Turn */}
            {calculateWinner(squares) ? (
                <div className="status">
                    Winner: {calculateWinner(squares)}
                </div>
            ) : (
                <div className="status">
                    Next player: {xIsNext ? <>X</> : <>Y</>}
                </div>
            )}

            <div className='board-row'>
                <Square value={squares[0]} onSquareClick={() => {
                    handleClick(0);
                }} />
                <Square value={squares[1]} onSquareClick={() => {
                    handleClick(1);
                }} />
                <Square value={squares[2]} onSquareClick={() => {
                    handleClick(2);
                }} />
            </div>
            <div className='board-row'>
                <Square value={squares[3]} onSquareClick={() => {
                    handleClick(3);
                }} />
                <Square value={squares[4]} onSquareClick={() => {
                    handleClick(4);
                }} />
                <Square value={squares[5]} onSquareClick={() => {
                    handleClick(5);
                }} />
            </div>
            <div className='board-row'>
                <Square value={squares[6]} onSquareClick={() => {
                    handleClick(6);
                }} />
                <Square value={squares[7]} onSquareClick={() => {
                    handleClick(7);
                }} />
                <Square value={squares[8]} onSquareClick={() => {
                    handleClick(8);
                }} />
            </div>
        </>
    );
}


const Game = () => {
    // States
    const [xIsNext, setXIsNext] = useState(true);   // first move will be X
    const [history, setHistory] = useState([Array(9).full(null)])

    // Variables
    const currentSquares = history[history.length - 1];

    // Functions
    const handlePlay = (nextSquares) => {
        setXIsNext(!xIsNext);
        setHistory([...history, nextSquares]);
    }

    // Return HTML
    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>

            <div className="game-info">
                <ol>{/* something */}</ol>
            </div>
        </div>
    );
}

// Helper Function
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}


export default Game;
