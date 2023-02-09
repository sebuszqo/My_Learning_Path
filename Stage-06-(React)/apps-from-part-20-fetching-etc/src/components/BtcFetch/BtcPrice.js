import {useEffect, useState} from "react";
import BtcImage from './btc.svg'
import './BtcPrice.css'

export const BtcPrice = () => {

    const [currPrice, setCurrData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const intervalId = setInterval(() => {
            const fetchData = async () => {
                try {
                    setError(null)
                    const response = await fetch("https://api2.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT")
                    const data = await response.json()
                    setCurrData(data.askPrice)
                } catch (e) {
                    setError("Error during loading data...")
                }
            }
            fetchData().then(null)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])


    if (error) {
        return <p>Error ...</p>
    }
    if (currPrice === null) {
        return <p>Loading ...</p>
    }

    return <div className="BtcPrice__container">
        <div><img src={BtcImage} alt="Btc Logo"/></div>
        <p>Current bitcoin price: </p><p>{Number(currPrice).toFixed(2)} USD</p>
    </div>
}