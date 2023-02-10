import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Clock(props) {
    let { username } = useParams();
    if(!username) {
        username = 'Visitor'
    }

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, [date])

    return (
    <div>
        <div> Hello {username}! It's <span>{date.toLocaleTimeString()}</span> O'clock</div>
        <p>Time according your local TimeZone</p>
    </div>
    )
}












/*
export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <span>{this.state.date.toLocaleTimeString()}</span>
        )
    }

    componentDidMount() {
        this.intervalID = setInterval(() => {
            this.setState({date: new Date()})
        }, 1000)
    }

    componentDidUpdate(prevProps) {
        if(this.props.exampleOfProp !== prevProps.exampleOfProp) {    
      
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
}
*/