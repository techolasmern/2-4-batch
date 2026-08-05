import { createContext, useState } from "react";

export const Context = createContext();

export const SampleProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);

    return <Context.Provider value={{counter, setCounter}}>
        {children}
    </Context.Provider>;
}