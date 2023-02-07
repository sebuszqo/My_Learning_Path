import {useState} from "react";

export const SelectRGBDiv = props => {
    const [color, setColor] = useState("white");

    const sendForm = (event) => {
        event.preventDefault()
        console.log(event.target.value)
    }
    return (
        <>
            <div style={
                {
                    height: "250px",
                    width: "250px",
                    backgroundColor: `${color}`,
                }}
            ></div>
            <form onSubmit={sendForm}>
                <select name="color" value={color} onChange={e => setColor(e.target.value)}>
                    <option value="">-Wybierz-</option>
                    <option value="red">red</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                </select>
                <input type="text" value={color} onChange={e => setColor(e.target.value)}/>
            </form>
        </>
    )
}