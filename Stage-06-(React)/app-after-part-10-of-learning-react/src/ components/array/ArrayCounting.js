import {StringList} from "./StringList";
import {useEffect, useState} from "react";

export const ArrayCounting = () => {
    const [numbers, setNumbers] = useState([1])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNumbers(numbers => [...numbers, parseInt(numbers.slice(-1)) + 1])
        }, 1000)
        return () => {
            clearInterval(intervalId);
        }
    }, [])
    return <StringList list={numbers}/>;
}