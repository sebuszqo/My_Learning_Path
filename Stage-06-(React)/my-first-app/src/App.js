import logo from './logo.svg';
import './App.css';

// I can do whatever I want with JS things by using {}
function checkName(name) {
    // const name = prompt("podaj imie")
    return name === "Michal" ? <strong>Banned!</strong> : name;
}

function App() {
    const person = {
        firstName: "Pawel",
        lastName: "Michalski",
    }
    const guests = ["Dominik", "Sebastian", "maciek"]
    return (
        <>
            <header className="App-header">
                <input type="text" tabIndex={-1}/>
                <p>Witaj {checkName("Michal")}</p>
                <p>Witaj {guests.join(', ')}</p>
                <p>{person.firstName} {person.lastName}</p>
                <img src="" alt=""/>
            </header>
        </>
    );
}

export default App;
