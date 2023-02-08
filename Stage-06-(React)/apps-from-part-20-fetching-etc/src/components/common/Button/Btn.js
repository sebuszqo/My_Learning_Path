import './Btn.css'

export const Btn = props => {
    return <div>
        <button className={"Btn"} style={{padding: props.padding}}>{props.children}</button>
    </div>

}