import {useEffect, useState} from "react";
import {GiftTable} from "./GiftTable";
import {GiftEntity} from 'types';
import {Spinner} from "../../common/Spinner/Spinner";

export const GiftList = () => {
    const [giftsList, setGiftsList] = useState<GiftEntity[] | null>(null)

    const refreshGifts = async () => {
        // it will make my site "loading" doing refreshing big set of data
        setGiftsList(null);
        const response = await fetch("http://localhost:3001/gift")
        const data = await response.json()
        setGiftsList(data.giftsList);
    };

    useEffect(() => {
        refreshGifts()
    }, [])

    if (giftsList === null) {
        return <Spinner/>
    }
    return <><h1>Gifts</h1>
        <GiftTable gifts={giftsList} onGiftsChange={refreshGifts}/>
    </>
}