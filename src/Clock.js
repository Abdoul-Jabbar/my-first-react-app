import React from 'react';

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