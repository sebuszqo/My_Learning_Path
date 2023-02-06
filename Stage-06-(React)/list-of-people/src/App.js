import logo from './logo.svg';
import './App.css';
import {SingleItem} from "./SingleItem";
import {useState} from "react";


export function App(props) {
    const [sorted, setSorted] = useState(false);
    const [list, setList] = useState(props.list)

    const removeItem = (username) => {
        console.log(username, 'was removed')
        setList(list => list.filter(obj => obj.username !== username))
    };

    // .sort --> it's mutable method, so I need to use array dispersion
    const listToRender = [...list]
        .sort((a, b) => sorted ? a.first_name.localeCompare(b.first_name) : b.first_name.localeCompare(a.first_name))
        .map(person => <SingleItem item={person} key={person.username} onRemoveItem={removeItem}/>)
    return (
        <div className={"divList"}>
            <div>
                <p className={"userList"}>Lista użytkowników</p>
                <button onClick={() => setSorted(prev => !prev)}>Sortuj {sorted ? "A-->Z" : "Z-->A"}</button>
            </div>
            <ul className={"ulList"}>{listToRender}</ul>
        </div>
    )
}

