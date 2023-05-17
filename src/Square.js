import { useState } from "react";

const Square = ({ value }) => {
    // Return HTML
    return (
        <button className='square' onClick={handleClick}>
            {value}
        </button>
    )
}

export default Square