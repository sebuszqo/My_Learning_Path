import {useState} from "react";

export const ShowPassword = (props) => {
    const [visible, setVisible] = useState(false)
    return <>
        <input type={visible ? "text" : "password"}/>
        {/*<button onClick={() => setVisible((prevVisible) => prevVisible ? false : true)}>{visible ? "🔒" : "👁"}️</button>*/}
        <button onMouseDown={() => setVisible(true)} onMouseUp={() => setVisible(false)}>{visible ? "🔒" : "👁"}️</button>
    </>
}