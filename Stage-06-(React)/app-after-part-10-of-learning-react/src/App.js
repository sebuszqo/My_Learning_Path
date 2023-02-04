import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {Clock} from "./Clock";

export const App = props => {
    const [show, setShow] = useState(true)

    setTimeout(() => {
        setShow(false)
    }, 5000)
    return show ? <Clock/> : null;
}
