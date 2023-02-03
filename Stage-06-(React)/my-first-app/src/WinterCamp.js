import {CounterOfChildren} from "./CounterOfChildren";
import {StringList} from "./StringList";
import {Component, useState} from "react";


// useState to know how to deal with it in class components
export class Counter extends Component {
    state = {
        count: 0,
    };


    componentDidMount() {
        // preventing from rendering it again and again
        // thanks to that only 1 time it will be rendered during mounting
        this.intervalId = setInterval(() => {
            this.setState(prev => ({
                count: prev.count + 1
            }));

        }, 1000)
        // console.log("First mounting the component in DOM.")
    }

    //
    // componentDidUpdate() {
    //     console.log("Component did update in DOM.")
    // }
    //
    componentWillUnmount() {
        clearInterval(this.intervalId)
        console.log("Component will be unmounted in DOM.")
    }

    render() {
        console.log("Rendering ... ")
        return <h1>{this.state.count}</h1>
    }
}


//
// export const WinterCamp = (props) => {
//     // first use-state
//     const [thingsToDo, setThingToDo] = useState("go to fridge")
//     //
//     // cannot do like that
//     // let information = 'xyz'
//
//
//     const [count, setCount] = useState(0)
//
//     // counter, but It's not good idea
//     // recursion !!
//     // setTimeout(() => {
//     //     setCount((count) => count + 1)
//     // }, 1000);
//
//     setTimeout(() => {
//
//
//         setThingToDo("Zjeść ... ")
//
//         // cannot do like that
//         // information = "zyx"
//
//
//     }, 2000)
//
//
//     //.map(), .filter(), .forEach(), .reduce() - these methods are okay, we can use them to change props
//     // we cannot use methods such as .pop(), .push() without copying our props
//     const names = props.participants.map(person => person.name)
//     return (
//         <>
//             {count}
//             <br/>
//             {thingsToDo}
//             <StringList list={names}/>
//             <CounterOfChildren count={props.participants.length}/>
//         </>
//
//     )
// }