import React from 'react';
import {connect} from 'react-redux';

function ColorBoard({colorCode}) {
    console.log("colorcode " ,colorCode)
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

let mapStateToProps = (state) => {
    return {
        colorCode: state.colorCode
    }
}

export default connect(mapStateToProps)(ColorBoard);