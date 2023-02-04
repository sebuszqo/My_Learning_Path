import logo from './logo.svg';
import './App.css';
import {Component, useState} from "react";
import {Clock} from "./Clock";
import {CrazyInput} from "./CrazyInput";
import {ProgressBar} from "./ProgressBar";
import {AnimatedProgressBar} from "./AnimatedProgressBar";
//
// export class App extends Component {
//     state = {
//         isSend: false
//     }
//
//     sendForm = (event) => {
//         event.preventDefault()
//         this.setState({
//             isSend: true
//         })
//     }
//
//     render() {
//         return <form action="" onSubmit={this.sendForm}>
//             <p>{this.state.isSend ? "I sent your data" : "Give me your data"}</p>
//             <input type="text"/>
//             <button>Wyślij</button>
//         </form>
//     }
// }

//
export const App = props => {
    function clicked(event) {
        event.preventDefault();
    }

    const sendForm = () => {

    }

    return <form action="" onSubmit={sendForm}>
        <input type="text"/>
        <button>Wyślij</button>
    </form>
    return <button onClick={clicked}>Click me!</button>;
// return (
//     <>
//         {/*<div style={{backgroundColor: "black"}}>*/}
//         {/*    <CrazyInput/>*/}
//         {/*</div>*/}
//         {/*<CrazyInput/>*/}
//         {/*<CrazyInput isPwd/>*/}
//         {/*<ProgressBar percentage={100}/>*/}
//         {/*<ProgressBar percentage={75}/>*/}
//         {/*<ProgressBar percentage={50}/>*/}
//         {/*<ProgressBar percentage={25}/>*/}
//         <AnimatedProgressBar/>
//     </>
// )
}
