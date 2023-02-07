import {Component, useEffect, useState} from "react";


export const Clock = props => {
    const [DateTime, setDateTime] = useState(new Date())

    useEffect(() => {

        console.log("Only once!")
        const intervalId = setInterval(() => {
            setDateTime(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
            console.log("I am unmounted")
        };

    }, [])

    useEffect(() => {
        console.log("Time has been edited")
    }, [DateTime]);

    return <p>{DateTime.toLocaleString()}</p>
}

//
// export class Clock extends Component {
//     state = {
//         datetime: new Date(),
//     };
//
//     componentDidMount() {
//         this.intervalId = setInterval(() => {
//             this.setState({datetime: new Date(),})
//         }, 1000)
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.intervalId)
//     }
//
//     render() {
//         return <p>{this.state.datetime.toLocaleString()}</p>
//     }
// }