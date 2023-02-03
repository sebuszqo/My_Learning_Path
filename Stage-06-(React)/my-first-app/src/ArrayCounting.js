import {Component} from "react";
import {StringList} from "./StringList";

export class ArrayCounting extends Component {
    state = {
        numbers: [1]
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => {
                return {
                    numbers: [...prevState.numbers, prevState.numbers.length + 1]
                }
                // same as above
                const array = structuredClone(prevState)
                // const array = JSON.parse(JSON.stringify(prevState));
                array.numbers.push(parseInt(array.numbers.slice(-1)) + 1);
                return array
            });
        }, 500);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const {numbers} = this.state;
        return <StringList list={numbers}/>;
    }
}