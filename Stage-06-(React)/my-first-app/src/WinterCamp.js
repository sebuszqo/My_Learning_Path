import {CounterOfChildren} from "./counterOfChildren";
import {StringList} from "./stringList";

export const WinterCamp = (props) => {
    const names = props.participants.map(person => person.name)
    console.log(names)
    return (
        <>
            <StringList list={names}/>
            <CounterOfChildren participants={props.participants}/>
        </>

    )
}