// Hooks -> Functions to manage state and life cycle.
// useState() -> manage state
import { useState } from "react";

const App = () => {

    // array destructure
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    }

    return <div>
        <h2>State Management</h2>
        <h3>State Data: {counter}</h3>
        <button onClick={handleClick}>Click Me</button>
    </div>
}

export default App;
