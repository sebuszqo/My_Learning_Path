import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {WinterCamp} from './WinterCamp';

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
const root = ReactDOM.createRoot(document.getElementById('root'));

const data = [
    {
        name: "Michał",
        email: "michalkuzyk@gmail.com"
    },
    {
        name: "Monika",
        email: "monika34@proton.me"
    }
]


root.render(
    <React.StrictMode>
        {/*// <>*/}
        {/*<h1>{namePrompt()}</h1>*/}
        {/*// </>,*/}
        <>
            <App
                name={"Dominik"}
                age={20}
                isTest={true}
                arr={[1, 23, 4, 5]}
            />
            <App name={"Dominik"}/>
            <App name={"Sebastian"}/>
            <WinterCamp participants={data}/>
        </>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
