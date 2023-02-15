import {GiftEntity} from "types";
import {MouseEvent} from "react";
import {Link} from "react-router-dom";

interface Props {
    gift: GiftEntity;
    onGiftsChange: () => void;
}

export const GiftTableRow = (props: Props) => {

    const deleteGift = async (e: MouseEvent) => {
        e.preventDefault()
        if (!window.confirm(`Are You sure you want to remove ${props.gift.name}`)) {
            return
        }
        const res = await fetch(`http://localhost:3001/gift/${props.gift.id}`,
            {
                method: 'DELETE',
            });
        if ([400, 500].includes(res.status)) {
            const error = await res.json()
            alert(`Error occurred ${error.statusText}`)
            return;
        }
        // if everything was fine we have to "send" alert to our parents to change data set
        props.onGiftsChange();
    }
    return (
        <tr>
            <th><Link to={`/gift/${props.gift.id}`}>{props.gift.name}</Link></th>
            <td>{props.gift.count}</td>
            <td><a href="#" onClick={deleteGift}>🗑️</a></td>
        </tr>
    );
};