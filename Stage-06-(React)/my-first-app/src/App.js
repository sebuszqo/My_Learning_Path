import logo from './logo.svg';
import './App.css';
import {Component} from "react";

// only to learn how to create class component
export class App extends Component {
    //that is not necessary
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hi there ! {this.props.name} </h1>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid architecto consectetur
                    dicta est harum hic ipsum minus mollitia nam nihil odio odit provident, quae rerum temporibus velit
                    veritatis
                    vitae!</p>
            </div>
        );
    }
}

//
// export const App = ({name}) => {
//     return (
//         <>
//             <h1>Hi there ! {name} </h1>
//             <hr/>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid architecto consectetur dicta
//                 est harum hic ipsum minus mollitia nam nihil odio odit provident, quae rerum temporibus velit veritatis
//                 vitae!</p>
//         </>
//     )
// }


// I can do whatever I want with JS things by using {}
// function checkName(name) {
//     // const name = prompt("podaj imie")
//     return name === "Michal" ? <strong>Banned!</strong> : name;
// }
//
// export function App() {
//     const person = {
//         firstName: "Pawel",
//         lastName: "Michalski",
//     }
//     const guests = ["Dominik", "Sebastian", "maciek"]
//     return (
//         <>
//             <header className="App-header">
//                 <input type="text"/>
//                 <p>Hello world!</p>
//                 <p>Witaj {checkName("Michal")}</p>
//                 <p>Witaj {guests.join(', ')}</p>
//                 <p>{person.firstName} {person.lastName}</p>
//                 <img src="" alt=""/>
//             </header>
//         </>
//     );
// }

// function - component App
// export const App = () => {
//     return (
//         <>
//             <h1>Hello</h1>
//         </>
//     )
// }

//class - component App "the same" as above
// export class App extends Component {
//     render() {
//         return (
//             <>
//                 <h1>Hello there</h1>
//             </>
//         )
//     };
// }


