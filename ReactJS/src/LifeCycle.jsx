// hook -> useEffect

import { useEffect, useState } from "react"

export const LifeCycle = () => {

    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    useEffect(() => {
        console.log("Component Mounted or Updated");
        return () => {
            console.log("Component Unmounted");
        }
    }, [counter]);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const handleIncrement2 = () => {
        setCounter2(counter2 + 1);
    }

    return <div>
        <button onClick={handleIncrement}>Click Me - {counter}</button>
        <button onClick={handleIncrement2}>Click Me - {counter2}</button>
    </div>
}