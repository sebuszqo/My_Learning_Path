import {useEffect, useState} from "react";
import {BinanceOneCryptoPairData} from "../../types/crypto-data";
import {CryptoPriceOnePair} from "./CryptoPriceOnePair";

export const CryptoPrice = () => {

    const [data, setData] = useState<BinanceOneCryptoPairData[] | null>(null)
    const [pair, setPair] = useState<string>("")
    const [error, setError] = useState<null | string>(null)
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`https://api2.binance.com/api/v3/ticker/24hr`)
                setData(await res.json())
            } catch (e) {
                setError("Error has occurred")
            }

        })();
    }, [])

    if (data === null) {
        return <p>Loading ...</p>
    }
    if (error !== null) {
        return <p>Sorry, error has occurred</p>
    }


    return <>
        <label>
            Choose your crypto pair: <br/>
            <select value={pair} onChange={(e) => setPair(e.target.value)}>
                {
                    data.map(pair =>
                        <option value={pair.symbol}
                                key={pair.symbol}>{pair.symbol}
                        </option>)
                }
            </select>
        </label>

        {
            pair &&
            <CryptoPriceOnePair onePair={data.find(one => one.symbol === pair) as BinanceOneCryptoPairData}/>
        }

    </>;
}