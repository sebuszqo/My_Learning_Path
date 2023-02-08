import './Dialog.css'

export const Dialog = props => {
    return <div className={"Dialog__container"}>
        {/*if there is no title then 'pass'*/}
        {props.title ? (<div className="Dialog__title">{props.title}</div>) : null}
        <div className="Dialog__content">
            {props.body}{props.children}
        </div>
    </div>
}