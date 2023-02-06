import logo from './logo.svg';
import './App.css';
import {SingleItem} from "./SingleItem";
import {useState} from "react";


export function App(props) {
    const [sorted, setSorted] = useState(false);
    // .sort --> it's mutable method, so I need to use array dispersion
    const list = [...props.list]
        .sort((a, b) => sorted ? a.first_name.localeCompare(b.first_name) : b.first_name.localeCompare(a.first_name))
        .map(person => <SingleItem item={person} key={person.username}/>)
    return (
        <div className={"divList"}>
            <div>
                <p className={"userList"}>Lista użytkowników</p>
                <button onClick={() => setSorted(prev => !prev)}>Sortuj {sorted ? "A-->Z" : "Z-->A"}</button>
            </div>
            <ul className={"ulList"}>{list}</ul>
        </div>
    )
}

