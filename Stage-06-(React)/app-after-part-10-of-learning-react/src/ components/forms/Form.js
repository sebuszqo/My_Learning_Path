import {useState} from "react";

export const Form = props => {
    const [firstName, setFirstName] = useState('');
    const [gender, setGender] = useState("")
    const [agreement, setAgreement] = useState(false)

    const sendForm = (event) => {
        event.preventDefault()
        console.log(event.target.value)
    }
    const borderColor = firstName[0] === '@' ? 'green' : 'red';
    // const changeFirstName = event => {
    //     setFirstName(event.target.value)
    // }


    return <form onSubmit={sendForm}>
        <label>
            <input type="checkbox" checked={agreement} onChange={(event) => setAgreement(event.target.checked)}/> I
            consent bla
            bla bla ...
        </label>
        <p>{agreement ? "You will receive newsletter" : "We will not send you out newsletter"}</p>
        <p>{agreement && "This agreement is Required to continue"}</p>
        <select
            name="gender"
            value={gender}
            onChange={event => setGender(event.target.value)}
        >
            <option value={""}>-wybierz-</option>
            <option value={"W"}>Woman</option>
            <option value={"M"}>Man</option>
        </select>
        <button type={"submit"}>Potwierdź</button>
    </form>
    // return <form onSubmit={sendForm}>
    //     <h1>Hello, {firstName}</h1>
    //     <input
    //         type="text" value={firstName}
    //         onChange={event => setFirstName(event.target.value.toUpperCase())}
    //         style={{
    //             border: `1px solid ${borderColor}`
    //         }
    //         }
    //     />
    //     <button type={"submit"}>Save</button>
    // </form>
};