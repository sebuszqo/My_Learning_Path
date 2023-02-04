import './ProgressBar.css'

export const ProgressBar = props => {
    return <div
        className={"ProgressBar"}
        style={{
            width: `${props.percentage}%`
        }
        }>
        {
            props.percentage > 10
                ? <p>{props.percentage}%</p>
                : null
        }
    </div>

};