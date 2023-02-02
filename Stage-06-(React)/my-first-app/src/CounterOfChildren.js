export const CounterOfChildren = props => {
    //.map(), .filter(), .forEach(), .reduce() - these methods are okay, we can use them to change props
    // we cannot use methods such as .pop(), .push() without copying our props
    return <p>Razem: {props.count} rekordów</p>
}