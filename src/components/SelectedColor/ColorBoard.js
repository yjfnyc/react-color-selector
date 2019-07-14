import React from 'react';


function ColorBoard({colorCode}) {
    console.log("color code in color board: ", colorCode)
    let style = {
        width: 300,
        height: 300,
        backgroundColor: `#${colorCode}`,
        margin: "auto"

    };

    return (
        <div style={style} className="ColorBoard">

        </div>
    );
}

export default ColorBoard;