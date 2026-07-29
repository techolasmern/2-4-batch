// Hooks -> Functions to manage state and life cycle.
// useState() -> manage state
import { useState } from "react";

const Mapping = () => {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    // const array = [<li>first</li>, <li>second</li>, <li>Third</li>];
    // const elem = [<p>a</p>, <p>b</p>, <p>c</p>];

    const resArr = arr.map((item, index) => <li key={index}>{item}</li>);

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
        <ol type="I">
            {resArr}
        </ol>
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
        <div>
            {arr}
        </div>
        <div>
            <ul>
                {/* {array} */}
            </ul>
        </div>
    </div>
}

export default Mapping;
