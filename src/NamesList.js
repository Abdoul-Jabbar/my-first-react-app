import React from 'react';
import { FullNames } from './Names';

export default function NamesList(props) {
    const handleChange = ({ target }) => {
        const fullName = target.value.split(' ');
        const name = fullName[0];
        const surname = fullName[1];
        props.onChange(name, surname);
    }

    return (
        <div>
            <select name='memberList' id='memberList' onChange={handleChange}>
                {FullNames.map((x, y) => {
                    return <option key={y}>{x.name} {x.surname}</option>
                })}
            </select>
            <p>Hey my name is {props.name} {props.surname}!</p>
        </div>
    );
}










/*
export class NamesList extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const fullName = e.target.value.split(' ');
        const name = fullName[0];
        const surname = fullName[1];
        this.props.onChange(name, surname);
    }

    render() {
        return (
            <div>
                <h1>Hey my name is {this.props.name} {this.props.surname}!</h1>
                <select name='memberList' id='memberList' onChange={this.handleChange}>
                    {FullNames.map((x,y) => {
                        return <option key={y}>{x.name} {x.surname}</option>
                    })}
                </select>
            </div>
        );
    }
}
*/