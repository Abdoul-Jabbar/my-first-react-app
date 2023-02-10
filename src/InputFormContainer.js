import React, { useState } from 'react';
import InputForm from './InputForm';

export default function InputFormContainer() {
    const [idea, setIdea] = useState('');

    const handleChange = ({ target }) => {
        setIdea(target.value);
    }

    return <InputForm onChange={handleChange} message={idea}/>
}