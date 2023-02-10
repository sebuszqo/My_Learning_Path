import {useEffect, useState} from "react";
import {SinglePerson} from './SinglePerson'
import './fakeUser.css'

export const FakeUserFetch = props => {
    const [userData, setUserData] = useState('')
    const [error, setError] = useState(null)


    const removeItem = (username) => {
        console.log(username, 'was removed')
        setUserData(list => list.filter(obj => obj.username !== username))
    };
    // const list = data.map()
    const fetchData = async () => {
        try {
            setUserData(null)
            setError(null)
            const res = await fetch(`https://randomuser.me/api/?results=${props.results}`)
            const data = await res.json()
            setUserData(data.results.map((old) => ({
                first_name: old.name.first,
                last_name: old.name.last,
                username: old.login.username,
                picture: old.picture.medium
            })))
        } catch (e) {
            setError("Error", e)
        }
    }


    useEffect(() => {
        if (props.generate !== 0) {
            fetchData()
        }
    }, [props.generate])

    if (error) {
        return <p>Error...</p>
    }

    if (userData === null) {
        return <p>Loading ...</p>
    }

    const list = [...userData].map(person => <SinglePerson item={person} key={person.username}
                                                           onRemoveItem={removeItem}/>)
    return <ul className={"userList"}>{list}</ul>
}