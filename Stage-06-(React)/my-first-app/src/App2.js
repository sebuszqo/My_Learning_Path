import {useState} from "react";
import {Counter} from "./WinterCamp";

export const App2 = (props) => {
    const [show, setShow] = useState(true);

    setTimeout(() => {
        setShow(false)
    }, 5000);

    return show ? <Counter/> : null;
}