import React from 'react';
import './Board.css'; 

function Block({ mark, position, changeMark }) {
    return (
        <div
            className={`BlockMark${mark}`}
            onClick={() => changeMark(position)}
        >
        </div>
    );
}

export default Block;
