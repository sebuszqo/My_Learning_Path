//how to deal with rendering elements with keys from array in appropriate way
export const StringList = props => {
    const list = props.list
        .map(string, index => <li key={`${index}`}>{string}</li>)

    // useEffect(() => {
    //     console.log("List has been changed")
    // }, [props.list])

    // return <h1>{props.list.join(", ")}</h1>
    return <ul>{list}</ul>
}