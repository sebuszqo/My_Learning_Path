import {useState} from "react";

// component that shows and does not show password when clicked
export const PasswordInput = (props) => {
    const [visible, setVisible] = useState(false)
    // const [password, setPassword] = useState("")
    const handlePasswordChange = (event) => {
        props.setPassword(event.target.value)
        props.setLogged(() => "")
    }
    return (
        <p>
            <label>
                <input type={visible ? "text" : "password"}
                       name={"password"}
                       value={props.password}
                       onChange={handlePasswordChange}
                />
            </label>
            <button type={"button"} onMouseDown={() => setVisible(true)}
                    onMouseUp={() => setVisible(false)}>{visible ? "🔒" : "👁"}
                ️
            </button>
        </p>
    )
}