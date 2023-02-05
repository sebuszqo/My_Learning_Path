import {useState} from "react";
import './RGB.css'

//little bulb that will change when I click some color
export const RGB = props => {
    const [color, setColor] = useState('white');

    const setRed = () => setColor('red');
    const setGreen = () => setColor('green');
    const setBlue = () => setColor('blue');

    return <div>
        <div className={"RGB"} style={{background: `${color}`}}></div>
        <button onClick={setRed}>Red</button>
        <button onClick={setGreen}>Green</button>
        <button onClick={setBlue}>Blue</button>
    </div>

}