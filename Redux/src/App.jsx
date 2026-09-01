import { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './redux/sample';

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

/* sample:  { counter: 0 } 
    user: { name: "John", age: 30 }
    product: { name: "Laptop", price: 1000 }

    const store = {
        sample:{
            counter: 0
        },
        user: {
            name: "John",
            age: 30
        },
        product: {
            name: "Laptop",
            price: 1000
        }
    }
*/

function App() {

    const states = useSelector((state) => state.sample);
    const init = { counter: 0 }
    const [state, dispatch] = useReducer(reducer, init);
    const dispatchFunc = useDispatch();

    return <div>
        <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
        <button onClick={() => dispatchFunc(actions.increment(10))}>Click +</button>
        <button onClick={() => dispatchFunc(actions.reset(0))}>Click (reset)</button>
        <button onClick={() => dispatchFunc(actions.decrement(20))}>Click -</button>
        <div>{state.counter}</div>
        <div>
            counter_1: {states.counter}
        </div>
    </div>
}

export default App
