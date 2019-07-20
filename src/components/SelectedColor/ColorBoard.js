import React from 'react';

function ColorBoard({colorCode}) {
    let style = {
        width: 300,
        height: 300,
        border: "1px solid #e3e3e3",
        backgroundColor: `#${colorCode}`,
        margin: "auto"
    };

    return (
        <div style={style} className="ColorBoard">
        </div>
    );
}

export default ColorBoard;