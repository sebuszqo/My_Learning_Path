import {BinanceOneCryptoPairData} from "../../types/crypto-data";

interface Props {
    onePair: BinanceOneCryptoPairData;
}

export const CryptoPriceOnePair = (props: Props) => {
    return (
        <p style={{backgroundColor: Number(props.onePair.priceChangePercent) > 0 ? 'green' : 'red'}}>
            {props.onePair.symbol} actually weighted average price is: {props.onePair.weightedAvgPrice}
        </p>
    )

}