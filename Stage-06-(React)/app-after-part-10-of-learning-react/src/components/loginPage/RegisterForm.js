import {useEffect, useState} from "react";
import {PasswordInput} from "./PasswordInput";

export const RegisterForm = props => {
    // const [person, setPerson] = useState({
    //     email: "",
    //     firstName: "",
    //     secondName: "",
    //     password: "",
    //     secondPassword: "",
    // })
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [password, setPassword] = useState("")
    const [secondPassword, setSecondPassword] = useState("")
    const [passwordValid, setPasswordValid] = useState('')

    const sendForm = event => {
        event.preventDefault()
    }

    useEffect(() => {
        if (secondPassword === password && secondPassword.length != 0) {
            setPasswordValid("green");
        } else if (secondPassword !== password && secondPassword.length != 0) {
            setPasswordValid("red");
        } else {
            setPasswordValid("");
        }
    }, [password, secondPassword]);

    return (<>

        <h1>Rejestracja</h1>
        <form onSubmit={sendForm}>
            <p>
                <label>
                    E-mail: <br/>
                    <input type="text" name="email" value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           style={{borderColor: email.includes("@") ? "green" : "red"}}
                    />
                </label>
            </p>
            <p>
                <label>
                    FirstName: <br/>
                    <input type="text" name={"firstName"} value={firstName}
                           onChange={(e) => setFirstName(e.target.value)}
                           style={{borderColor: firstName.length >= 3 ? "green" : "red"}}/>
                </label>
            </p>
            <p>
                <label>
                    SecondName: <br/>
                    <input type="text" name="secondName" value={secondName}
                           onChange={(e) => setSecondName(e.target.value)}
                           style={{borderColor: secondName.length >= 3 ? "green" : "red"}}
                    />
                </label>
            </p>
            <p>
                <label>
                    Password: <br/>
                    <input type="text" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
            </p>
            <p>
                <label>
                    Confirm Password: <br/>
                    <input type="text" name="secondPassword" value={secondPassword}
                           onChange={e => setSecondPassword(e.target.value)}
                           style={{borderColor: passwordValid}}
                    />
                </label>
            </p>
            <p>
                <button type={"submit"}>Zarejestruj</button>
            </p>
        </form>
    </>)
}