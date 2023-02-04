import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {Clock} from "./Clock";
import {CrazyInput} from "./CrazyInput";

export const App = props => {
    return (
        <>
            <div style={{backgroundColor: "black"}}>
                <CrazyInput/>
            </div>
            <CrazyInput/>
            {/*<CrazyInput isPwd/>*/}
        </>
    )
}
