import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {Clock} from "./Clock";
import {StringList} from "./StringList";
import {ArrayCounting} from "./ArrayCounting";
import {RGB} from "./RGB";
import {ShowPassword} from "./ShowPassword";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<App/>*/}
        {/*<Clock/>*/}
        {/*<ArrayCounting/>*/}
        {/*<StringList list={[1, 2, 3, 4, 5]}/>*/}
        <RGB/>
        <ShowPassword/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
