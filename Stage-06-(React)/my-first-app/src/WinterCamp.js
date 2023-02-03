import {CounterOfChildren} from "./CounterOfChildren";
import {StringList} from "./StringList";
import {useState} from "react";

export const WinterCamp = (props) => {
    // first use-state
    const [thingsToDo, setThingToDo] = useState("go to fridge")
    //
    // cannot do like that
    // let information = 'xyz'


    const [count, setCount] = useState(0)

    // counter but It's not good idea
    // recursion !!
    // setTimeout(() => {
    //     setCount((count) => count + 1)
    // }, 1000);

    setTimeout(() => {


        setThingToDo("Zjeść ... ")

        // cannot do like that
        // information = "zyx"


    }, 2000)

    
    //.map(), .filter(), .forEach(), .reduce() - these methods are okay, we can use them to change props
    // we cannot use methods such as .pop(), .push() without copying our props
    const names = props.participants.map(person => person.name)
    return (
        <>
            {count}
            <br/>
            {thingsToDo}
            <StringList list={names}/>
            <CounterOfChildren count={props.participants.length}/>
        </>

    )
}