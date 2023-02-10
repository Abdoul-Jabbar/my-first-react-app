import React from "react";
import PropTypes from 'prop-types';

export default function Button(props) {
    return (
    <div>
        <button onClick={props.onClick}>{props.label}</button>
        <p>Click to get an alert of a random name</p>
    </div>
    )
}

Button.defaultProps = {label: "Click here"};

Button.propTypes = {
    label: PropTypes.string.isRequired
};