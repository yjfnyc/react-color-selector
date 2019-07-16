import React from 'react';

function ColorLabel({colorCode}){
    let style={
        marginTop: "18px",
        fontWeight: "bolder"
    };
    let r = parseInt(colorCode.slice(0,2), 16);
    let g = parseInt(colorCode.slice(2,4), 16);
    let b = parseInt(colorCode.slice(4), 16);
    
    return (
    <div style={style} className="ColorLabel">
        <p>#{colorCode.toLowerCase()}</p>
        <p>rgb({r}, {g}, {b})</p>
    </div>
    );
}

export default ColorLabel;