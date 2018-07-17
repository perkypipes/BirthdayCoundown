import React from 'react';

const Button = (title, callback) => {
    return (
        <button key={1} className="button" onClick={callback}>
            {title}
        </button>
    )
}

export default Button;

/* you were at around 3:00 getting ready to mess around in the app.js
maybe just start the video over though...*/