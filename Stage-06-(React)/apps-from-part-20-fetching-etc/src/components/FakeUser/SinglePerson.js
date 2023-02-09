export const SinglePerson = (props) => {

    const bigLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

    return <li key={props.item.username} onClick={() => props.onRemoveItem(props.item.username)}>
        <img src={props.item.picture}
             alt={`Avatar of ${props.item.first_name}`}/>
        <div>
            <p>First Name: <strong>{bigLetter(props.item.first_name)}</strong></p>
            <p>Last Name: <strong>{bigLetter(props.item.last_name)}</strong></p>
            <p>Email: <strong>{props.item.email}</strong></p>
        </div>
    </li>
}


