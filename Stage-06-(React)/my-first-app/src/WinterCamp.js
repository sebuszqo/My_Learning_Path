import {CounterOfChildren} from "./CounterOfChildren";
import {StringList} from "./StringList";

export const WinterCamp = (props) => {

    //.map(), .filter(), .forEach(), .reduce() - these methods are okay, we can use them to change props
    // we cannot use methods such as .pop(), .push() without copying our props
    const names = props.participants.map(person => person.name)
    return (
        <>
            <StringList list={names}/>
            <CounterOfChildren count={props.participants.length}/>
        </>

    )
}