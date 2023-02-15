import {ChildEntity, GiftEntity} from 'types';
import {ChildrenTableRow} from "./ChildrenTableRow";

interface Props {
    childrenList: ChildEntity[]
    gifts: GiftEntity[]
}

export const ChildrenTable = (props: Props) => (
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Gift</th>
        </tr>
        </thead>
        <tbody>
        {
            props.childrenList.map(child => <ChildrenTableRow child={child} key={child.id}
                                                              gifts={props.gifts}/>)
        }
        </tbody>
    </table>
);