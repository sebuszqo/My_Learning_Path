import './Btn.css'
import {Btn} from "./Btn";

export const BigBtn = props => {
    return <Btn padding={props.padding}>{props.children}
        <button>Dodatkowy Przycisk</button>
    </Btn>

}