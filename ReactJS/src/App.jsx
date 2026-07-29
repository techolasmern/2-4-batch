// import { Fragment } from "react";

import { Fragment, useState } from "react";
import { ComponentA } from "./components/ComponentA";

// Props -> Properties -> Pass or transfer data from parent component to child component.

const App = () => {

    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(prevState => prevState + 1);
    }

    return <Fragment>
        <h1>Home Page</h1>
        <ComponentA value={counter} handleClick={handleClick} />
    </Fragment>
}

export default App;