import {useEffect, useState} from "react";

export const CrazyInput = (props) => {
    const [inputType, setInputType] = useState("password")

    useEffect(() => {
        const intervalId = setInterval(() => {
            setInputType(inputType => (
                inputType === "password" ? "text" : "password"
            ))
        })
        return () => clearInterval(intervalId)
    }, [])
    // return <input type={props.isPwd ? "password" : "text"}/>
    return <input type={inputType}/>
}