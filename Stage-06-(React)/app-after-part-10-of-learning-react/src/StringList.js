import {useEffect, useState} from "react";

export const StringList = props => {
    useEffect(() => {
        console.log("List has been changed")
    }, [props.list])
    return <h1>{props.list.join(", ")}</h1>
}