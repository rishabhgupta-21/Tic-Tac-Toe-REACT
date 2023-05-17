import { useState } from "react";
import Square from "./Square";

function Board() {
    // State
    const [squares, setSquares] = useState(Array(9).fill(null));

    // Functions
    const squareClickHandler = (i) => {
        // console.log('Square clicked!')
        let newSquares = squares.slice();
        newSquares[i] = 'X';
        setSquares(newSquares);
    }

    // Return HTML
    return (
        <>
            <div className='board-row'>
                <Square value={squares[0]} handleClick={() => {
                    squareClickHandler(0);
                }} />
                <Square value={squares[1]} handleClick={() => {
                    squareClickHandler(1);
                }} />
                <Square value={squares[2]} handleClick={() => {
                    squareClickHandler(2);
                }} />
            </div>
            <div className='board-row'>
                <Square value={squares[3]} handleClick={() => {
                    squareClickHandler(3);
                }} />
                <Square value={squares[4]} handleClick={() => {
                    squareClickHandler(4);
                }} />
                <Square value={squares[5]} handleClick={() => {
                    squareClickHandler(5);
                }} />
            </div>
            <div className='board-row'>
                <Square value={squares[6]} handleClick={() => {
                    squareClickHandler(6);
                }} />
                <Square value={squares[7]} handleClick={() => {
                    squareClickHandler(7);
                }} />
                <Square value={squares[8]} handleClick={() => {
                    squareClickHandler(8);
                }} />
            </div>
        </>
    );
}

export default Board;
