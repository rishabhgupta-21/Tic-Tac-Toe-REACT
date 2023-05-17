import { useState } from "react";

const Square = () => {
    // State
    const [value, setValue] = useState(null);

    // Click Event Handler
    const handleClick = () => {
        setValue('X');
    }

    // Return HTML
    return (
        <button className='square' onClick={handleClick}>
            {value}
        </button>
    )
}

export default Square