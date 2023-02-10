import React from 'react';
import { Names } from './Names';
import { useParams, useHistory } from 'react-router-dom';

export default function UserNumber() {
    const history = useHistory();
    let { name } = useParams();

    if(!Names.includes(name)) {
        history.goBack();
    }

    let number = Math.floor(Math.random() * 101);

    return (
        <div>
            <p>Dear {name}, your Magic number is {number}.</p>
            <p>Wish you a good luck!</p>
        </div>
    )
}