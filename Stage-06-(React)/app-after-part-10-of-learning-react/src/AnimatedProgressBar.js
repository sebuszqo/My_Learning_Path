import {useEffect, useState} from "react";
import {ProgressBar} from "./ProgressBar";

export const AnimatedProgressBar = props => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPercentage((percentage) => {
                // it's not how it should be done in React way
                if (percentage >= 99) {
                    clearInterval(intervalId)
                }
                return percentage + 1
            })
        }, 16);
        return () => clearInterval(intervalId)
    }, [])
    return <ProgressBar percentage={percentage}/>
}