import {FakeUserFetch} from "./FakeUserFetch";
import {useEffect, useState} from "react";

export const GenerateFakeUser = props => {
    const [generate, setGenerate] = useState(0)
    const [numberOfResults, setNumberOfResults] = useState(1)


    return (<div>
            <p>How many people you want to generate:</p>
            <input type="number" value={numberOfResults} onChange={(e) => setNumberOfResults(e.target.value)}/>
            <button onClick={() => setGenerate((prev) => prev + 1)}>Generate new users
            </button>
            <FakeUserFetch generate={generate} results={numberOfResults}/>
        </div>
    )
}