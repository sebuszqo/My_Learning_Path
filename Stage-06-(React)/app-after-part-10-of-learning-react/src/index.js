import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {Clock} from "./ components/clock/Clock";
import {StringList} from "./ components/array/StringList";
import {ArrayCounting} from "./ components/array/ArrayCounting";
import {RGB} from "./ components/RGB/RGB";
import {ShowPassword} from "./ components/password/ShowPassword";
import {Form} from "./ components/forms/Form";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<App/>*/}
        {/*<Clock/>*/}
        {/*<ArrayCounting/>*/}
        {/*<StringList list={[1, 2, 3, 4, 5]}/>*/}
        {/*<RGB/>*/}
        {/*<ShowPassword/>*/}
        <Form/>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
