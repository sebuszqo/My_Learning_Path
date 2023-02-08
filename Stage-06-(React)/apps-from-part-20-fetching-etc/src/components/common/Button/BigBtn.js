import './Btn.css'
import {Btn} from "./Btn";

export const BigBtn = props => {
    return <Btn padding={40}>{props.children}
        <button>Dodatkowy Przycisk</button>
    </Btn>

}