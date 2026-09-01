import { useReducer } from 'react'

const reducer = (state, action) => {
    if (action.type === "increment") {
        return { counter: state.counter + 1 };
    }
    if (action.type === "decrement") {
        return { counter: state.counter - 1 };
    }
    if (action.type === "reset") {
        return { counter: 0 };
    }
}

function App() {

    const init = { counter: 0 }
    const [state, dispatch] = useReducer(reducer, init);

    return <div>
        <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
        <div>{state.counter}</div>
    </div>
}

export default App
