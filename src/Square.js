const Square = ({ value, onSquareClick }) => {
    // Return HTML
    return (
        <button className='square' onClick={onSquareClick}>
            {value}
        </button>
    )
}

export default Square