import {Dialog} from "./Dialog";

export const ConfirmDialog = props => {
    return <Dialog title={props.title}>
        {props.children}
        <hr/>
        <button>Yes</button>
        <button>No</button>
    </Dialog>
}