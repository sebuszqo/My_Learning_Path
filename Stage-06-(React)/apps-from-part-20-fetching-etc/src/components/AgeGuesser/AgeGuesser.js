import {AgeGuesserAnswer} from "./AgeGuesserAnswer";
import {useState} from "react";

export const AgeGuesser = props => {
    const [name, setName] = useState()
    const [check, setCheck] = useState(false)

    const sendForm = e => {
        e.preventDefault()
        setCheck(true)
    };

    if (check) {
        return <AgeGuesserAnswer name={name}/>
    }
    return <form onSubmit={sendForm}>
        <label>
            Podaj imię: <br/>
            <input type="text" name={"name"} value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <button type={"submit"}>Zgadnij mój wiek</button>
    </form>
};