import {Dialog} from "./Dialog";
import React from "react";

interface Props {
    children: React.ReactNode,
    title: string,

}

export const ConfirmDialog = (props: Props) => {
    return <Dialog title={props.title}>
        {props.children}
        <hr/>
        <button>Yes</button>
        <button>No</button>
    </Dialog>
}