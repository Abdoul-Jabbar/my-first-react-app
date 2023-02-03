import React from "react";
import { NamesList } from "./NamesList";

export class NamesListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "John", surname: "Doe"};
        this.changeName = this.changeName.bind(this);
    }

    changeName(newName, newSurname){
        this.setState({
            name: newName,
            surname: newSurname
        });
    }

    render(){
        return (
            <NamesList name={this.state.name} surname={this.state.surname} onChange={this.changeName} />
        )
    }
}