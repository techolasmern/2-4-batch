// Hooks -> Functions to manage state and life cycle.
// useState() -> manage state
import { useState } from "react";

const App = () => {

    // array destructure
    const [counter, setCounter] = useState({ first_counter: 0, second_counter: 0 });

    const handleFirstCounterClick = (operator) => {
        if (operator == "+") {
            setCounter((prevState) => {
                return { ...prevState, first_counter: prevState.first_counter + 1 };
            })
        } else {
            setCounter((prevState) => {
                return { ...prevState, first_counter: prevState.first_counter - 1 };
            })
        }
    }

    const handleSecondCounterClick = (operator) => {
        if (operator == "+") {
            setCounter((prevState) => {
                return { ...prevState, second_counter: prevState.second_counter + 1 };
            })
        } else {
            setCounter((prevState) => {
                return { ...prevState, second_counter: prevState.second_counter - 1 };
            })
        }
    }

    return <div>
        <h2>State Management</h2>
        <h3>First Counter: {counter.first_counter}</h3>
        <h3>Second Counter: {counter.second_counter}</h3>
        <div>
            <button onClick={() => handleFirstCounterClick("+")}>First Counter +</button>
            <button onClick={() => handleFirstCounterClick("-")}>First Counter -</button>
        </div>
        <div>
            <button onClick={() => handleSecondCounterClick("+")}>Second Counter +</button>
            <button onClick={() => handleSecondCounterClick("-")}>Second Counter -</button>
        </div>
    </div>
}

export default App;
