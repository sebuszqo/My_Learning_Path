export const StringList = props => {
    const string = props.list.join(", ")
    return <h1>{string}</h1>
}