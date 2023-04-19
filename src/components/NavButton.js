import React from 'react';

function NavButton(props) {
    let arrow = "";
    switch (props.where) {
        case "forward":
            arrow = ">";
            break;
        case "back":
            arrow = "<";
            break;
        default:
            break;
    }

    return (
        <button onClick={props.click} disabled={props.disabled}>{arrow}</button>
    )
}

export default NavButton