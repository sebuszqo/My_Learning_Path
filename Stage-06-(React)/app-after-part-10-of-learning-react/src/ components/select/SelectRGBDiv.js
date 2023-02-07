import {useState} from "react";

export const SelectRGBDiv = props => {
    const [color, setColor] = useState("white");

    const sendForm = (event) => {
        event.preventDefault()
        console.log(event.target.value)
    }
    return (
        <>
            {/*it should be done in another file .css i know*/}
            <div style={
                {
                    height: "250px",
                    width: "250px",
                    backgroundColor: `${color}`,
                }}
            />
            {/*function sendForm when submitting*/}
            <form onSubmit={sendForm}>
                {/*using select and options to deal with colors */}
                <select name="color" value={color} onChange={e => setColor(e.target.value)}>
                    <option value="">-Wybierz-</option>
                    <option value="red">red</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                </select>
                {/*using default input to deal with color parallelly  */}
                <input type="text" value={color} onChange={e => setColor(e.target.value)}/>
            </form>
        </>
    )
}