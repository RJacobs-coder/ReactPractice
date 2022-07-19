export const ChildComponent =(props) => {
    return (
        <div>
            <button onClick={() => props.greetHandler('Boddy')}>Greet Parent</button>
        </div>
    )
}