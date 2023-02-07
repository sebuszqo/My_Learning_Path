import {useState} from "react";
import {PasswordInput} from "./PasswordInput";
import {userEmail, userPassword} from "./data/account";

export const LoginForm = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [personLogin, setPersonLogin] = useState({
        email: "",
        password: "",
    });
    const [logged, setLogged] = useState('')


    const sendForm = event => {
        event.preventDefault()
        if (userPassword === password && userEmail === email) {
            setLogged(() => "valid")
        } else {
            setLogged(() => "noValid");
        }
    }


    return (<>

            <h1>Logowanie</h1>
            <form onSubmit={sendForm}>
                <p>
                    <label>
                        E-mail: <br/>
                        <input type="text" name="email" value={email}
                               onChange={e => setEmail(e.target.value)}/>
                    </label>
                </p>
                <PasswordInput password={password} setLogged={setLogged} setPassword={setPassword}/>
                <p>
                    <button type={"submit"}>Zaloguj</button>
                </p>
            </form>
            {logged === 'valid' ? (
                <div className={"alertDiv"} style={{border: '1px solid green'}}>Logged in</div>
            ) : logged === 'noValid' ? (
                <div className={"alertDiv"} style={{border: '1px solid red'}}>You typed wrong password</div>
            ) : null}
        </>
    )
}
//
//     const change = event => {
//         setPersonLogin(person => ({
//             ...person,
//             [event.target.name]: event.target.value
//         }))
//         console.log(personLogin)
//     };
//     return (<>
//             <h1>Logowanie</h1>
//             <form onSubmit={sendForm}>
//                 <p>
//                     <label>
//                         E-mail: <br/>
//                         <input type="text" name="email" value={personLogin.email} onChange={change}/>
//                     </label>
//                 </p>
//                 <PasswordInput password={change}/>
//                 <p>
//                     <button type={"submit"}>Zaloguj</button>
//                 </p>
//             </form>
//         </>
//     )
// }
