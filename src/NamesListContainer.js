import React, { useState } from "react";
import NamesList from "./NamesList";

export default function NamesListContainer() {
    const [name, setName] = useState("John");
    const changeName = (newName) => {
        setName(newName)
    }

    const [surname, setSurname] = useState("Doe");
    const changeSurname = ( newSurname) => {
        setSurname(newSurname)
    }

    const handleChange = (newName, newSurname) => {
        changeName(newName);
        changeSurname(newSurname);
    }

    return (<NamesList name={name} surname={surname} onChange={handleChange} />)
}






/*export class NamesListContainer extends React.Component {
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
}*/