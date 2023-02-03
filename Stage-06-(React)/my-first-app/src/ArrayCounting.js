import {Component} from "react";
import {StringList} from "./StringList";

export class ArrayCounting extends Component {
    state = {
        numbers: [1]
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => {
                const array = structuredClone(prevState)
                // const array = JSON.parse(JSON.stringify(prevState));
                array.numbers.push(array.numbers.length + 1);
                return array
            });
        }, 100);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const {numbers} = this.state;
        return <StringList list={numbers}/>;
    }
}