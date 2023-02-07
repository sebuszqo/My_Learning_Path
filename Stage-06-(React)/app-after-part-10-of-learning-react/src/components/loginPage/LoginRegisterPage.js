import {useState} from "react";
import {LoginForm} from "./LoginForm";
import {RegisterForm} from "./RegisterForm";
import './LoginRegisterPage.css'

export const LoginRegisterPage = () => {
    const [loginSite, setLoginSite] = useState(true)
    
    return <>
        <div className={"links"}>
            <a href="#" onClick={() => setLoginSite(true)}>Login</a>

            <a href="#" onClick={() => setLoginSite(false)}>Register</a>
        </div>
        <div>
            {loginSite ? <LoginForm/> : <RegisterForm/>}
        </div>
    </>
}