import {useState} from "react";

export const StringList = props => {
    return <h1>{props.list.join(", ")}</h1>
}