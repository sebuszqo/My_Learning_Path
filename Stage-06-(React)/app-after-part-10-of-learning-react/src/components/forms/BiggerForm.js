import {useState} from "react";

// formik.org
// redux-form.com

export const BiggerForm = props => {
    const [person, setPerson] = useState({
        firstName: "",
        lastName: "",
        age: 0
    });

    // most automated way to create a form or use formik,redux-form etc.
    const change = e => {
        setPerson((person) => (
            {
                ...person,
                [e.target.name]: e.target.value
            }
        ))
    }


    function sendForm(e) {
        e.preventDefault()
        console.log("Sent")
    }

    return (
        <form onSubmit={sendForm}>
            <p>
                <label>
                    Name: <br/>
                    <input type="text"
                           name={"firstName"}
                           value={person.firstName}
                           onChange={change}
                    />
                </label>
            </p>
            <p>
                <label>
                    Surname: <br/>
                    <input type="text" value={person.lastName} onChange={e => setPerson((person) => (
                        {
                            ...person,
                            lastName: e.target.value
                        }
                    ))}/>
                </label>
            </p>
            <p>
                <label>
                    Age: <br/>
                    <input type="text" value={person.age} onChange={e => setPerson((person) => (
                        {
                            ...person,
                            age: e.target.value
                        }
                    ))}/>
                </label>
            </p>
            <p>
                <button type={"submit"}>Submit</button>
            </p>
        </form>
    )


    //-----------------------------------------------
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [age, setAge] = useState(0)
    //
    // const sendForm = event => {
    //     event.preventDefault()
    //     const person = {
    //         firstName,
    //         lastName,
    //         age
    //     }
    //     console.log(person)
    // }
    // return (
    //     <form onSubmit={sendForm}>
    //         <p>
    //             <label>
    //                 Name: <br/>
    //                 <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
    //             </label>
    //         </p>
    //         <p>
    //             <label>
    //                 Surname: <br/>
    //                 <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
    //             </label>
    //         </p>
    //         <p>
    //             <label>
    //                 Age: <br/>
    //                 <input type="text" value={age} onChange={e => setAge(e.target.value)}/>
    //             </label>
    //         </p>
    //         <p>
    //             <button type={"submit"}>Submit</button>
    //         </p>
    //     </form>
    // )
}