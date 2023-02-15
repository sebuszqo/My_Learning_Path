import {useEffect, useState} from "react";
import {ChildrenTable} from "./ChildrenTable";
import {ListChildrenRes} from 'types';
import {Spinner} from "../../common/Spinner/Spinner";

export const ChildrenList = () => {
    const [data, setData] = useState<ListChildrenRes | null>(null)

    const refreshGifts = async () => {
        // it will make my site "loading" doing refreshing big set of data
        setData(null);
        const response = await fetch("http://localhost:3001/child")
        setData(await response.json());
    };

    useEffect(() => {
        refreshGifts()
    }, [])

    if (data === null) {
        return <Spinner/>
    }
    return <><h1>Children</h1>
        <ChildrenTable childrenList={data.childrenList} gifts={data.giftsList}/>
    </>
}