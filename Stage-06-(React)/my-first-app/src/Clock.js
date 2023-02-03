import {Component} from "react";

export class Clock extends Component {
    state = {
        datetime: new Date(),
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({datetime: new Date(),})
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        return <p>{this.state.datetime.toLocaleString()}</p>
    }
}