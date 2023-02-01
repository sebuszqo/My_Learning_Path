export const WinterCamp = (props) => {
    return (
        <>
            <h1>
                {
                    props.participants
                        .map(person => person.name)
                        .join(', ')
                }
            </h1>
            <p>Razem: {props.participants.length} rekordów</p>
        </>

    )
}