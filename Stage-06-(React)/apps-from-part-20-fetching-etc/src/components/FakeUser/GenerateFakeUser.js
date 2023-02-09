import {FakeUserFetch} from "./FakeUserFetch";
import {useEffect, useState} from "react";

export const GenerateFakeUser = props => {
    const [generate, setGenerate] = useState(false)

    useEffect(() => {
        console.log("zmiana")
    }, [generate])
    return <button onClick={() => setGenerate((prev) => prev ? false : true)}>Generuj nowego użytkownika</button>
}