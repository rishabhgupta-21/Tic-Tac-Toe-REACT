const Square = ({ value, handleClick }) => {
    // Return HTML
    return (
        <button className='square' onClick={handleClick}>
            {value}
        </button>
    )
}

export default Square