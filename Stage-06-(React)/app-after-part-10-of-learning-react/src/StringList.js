import {useEffect, useState} from "react";

export const StringList = props => {
    const list = props.list
        .map(string => <li>{string}</li>)
    // useEffect(() => {
    //     console.log("List has been changed")
    // }, [props.list])

    // return <h1>{props.list.join(", ")}</h1>
    return <ul>{list}</ul>
}