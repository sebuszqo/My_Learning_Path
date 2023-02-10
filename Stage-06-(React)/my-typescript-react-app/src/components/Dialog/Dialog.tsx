import './Dialog.css'
import React from "react";

interface Props {
    children: React.ReactNode;
    title?: string;
}

export const Dialog = (props: Props) => {
    return <div className={"Dialog__container"}>
        {/*if there is no title then 'pass'*/}
        {props.title ? (<div className="Dialog__title">{props.title}</div>) : null}
        <div className="Dialog__content">
            {props.children}
        </div>
    </div>
}