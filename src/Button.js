import React from "react";

export function Button(props) {
    return (<button onClick={props.onClick}>{props.label}</button>)
}

Button.defaultProps = {label: "Click here"};