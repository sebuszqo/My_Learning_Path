import {ChildEntity, GiftEntity} from "types";
import {MouseEvent} from "react";
import {Link} from "react-router-dom";
import {ChildGiftSelect} from "../ChildGiftSelect";

interface Props {
    child: ChildEntity;
    gifts: GiftEntity[];
}

export const ChildrenTableRow = (props: Props) => {
    return (
        <tr>
            <th>{props.child.name}</th>
            <td>
                <ChildGiftSelect childId={props.child.id as string} giftsList={props.gifts}
                                 selectedId={props.child.giftId}/>
            </td>
        </tr>
    );
};