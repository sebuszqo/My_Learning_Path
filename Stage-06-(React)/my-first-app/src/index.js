import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {WinterCamp, Counter} from './WinterCamp';
import {data} from "./participantsData";
import {App2} from "./App2";
import {ArrayCounting} from "./ArrayCounting";
import {Clock} from "./Clock";

let namePrompt = () => {
    let name = prompt("Podaj swoje imie")
    return name !== "" ? <h1>Witaj {name}</h1> : <strong>Brak imienia</strong>;
}

let counter = 0;

// some simple task with set interval
// setInterval(() => {
//     // counter++
//     root.render(
//         <>
//             <h1>Licznik ma już {counter++}.</h1>
//             <hr/>
//             <h2>Witaj co 1 sekundę będziemy aktualizować</h2>
//         </>,
//     );
// }, 1000)


//.map(), .filter(), .forEach(), .reduce() - these methods are okay, we can use them to change props
// we cannot use methods such as .pop(), .push() without copying our props
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*// <>*/}
        {/*<h1>{namePrompt()}</h1>*/}
        {/*// </>,*/}
        <>
            {/*<App*/}
            {/*    name={"Dominik"}*/}
            {/*    age={20}*/}
            {/*    isTest={true}*/}
            {/*    arr={[1, 23, 4, 5]}*/}
            {/*/>*/}
            {/*<App name={"Dominik"}/>*/}
            {/*<App name={"Sebastian"}/>*/}
            {/*WinterCamp app */}
            {/*<WinterCamp participants={data}/>*/}
            {/*<Counter/>*/}
            {/*<App2/>*/}
            <Clock/>
            <ArrayCounting/>
        </>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
