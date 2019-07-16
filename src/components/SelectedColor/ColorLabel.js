import React from 'react';

function ColorLabel({colorCode}){
    let style={
        marginTop: "18px",
        fontWeight: "bolder"
    };
    return (
    <div style={style} className="ColorLabel">
        #{colorCode.toLowerCase()}
    </div>
    );
}

export default ColorLabel;