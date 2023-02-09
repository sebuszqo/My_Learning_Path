import {useEffect, useState} from "react";

export const AgeGuesserAnswer = props => {
    const [age, setAge] = useState(null)
    const [error, setError] = useState(false)


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://api.agify.io/?name=${props.name}`);
                const data = await response.json()
                setAge(data.age)
                console.log(data)
            } catch (e) {
                setError(true)
            }
        }

        fetchData()
    }, []);

    if (age === null) {
        return <p>Wczytywanie ...</p>
    }

    return <>
        <p>Twój wiek: {age}</p>
        <p>Twoja data urodzenia: {new Date().getFullYear() - age}</p>
    </>
};