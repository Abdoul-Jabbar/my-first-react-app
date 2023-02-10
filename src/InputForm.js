import React from 'react';
import PropTypes from 'prop-types';

export default function InputForm(props) {
    return (
        <div>
            <label>Your idea : </label>
            <input name="idea" type="text" id="idea" value={props.message} onChange={props.onChange} placeholder="Put your idea here" />
            <p style={props.message ? {opacity: '100%'} : {opacity: '10%'}}>{props.message ? props.message : 'Empty for now'}</p>
        </div>
    )
}

InputForm.prototypes = {
    name: PropTypes.string.isRequired
}