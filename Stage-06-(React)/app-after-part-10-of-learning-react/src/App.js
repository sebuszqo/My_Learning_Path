import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {Clock} from "./Clock";
import {CrazyInput} from "./CrazyInput";
import {ProgressBar} from "./ProgressBar";
import {AnimatedProgressBar} from "./AnimatedProgressBar";

export const App = props => {
    return (
        <>
            {/*<div style={{backgroundColor: "black"}}>*/}
            {/*    <CrazyInput/>*/}
            {/*</div>*/}
            {/*<CrazyInput/>*/}
            {/*<CrazyInput isPwd/>*/}
            {/*<ProgressBar percentage={100}/>*/}
            {/*<ProgressBar percentage={75}/>*/}
            {/*<ProgressBar percentage={50}/>*/}
            {/*<ProgressBar percentage={25}/>*/}
            <AnimatedProgressBar/>
        </>
    )
}
