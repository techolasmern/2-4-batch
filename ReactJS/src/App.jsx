// import { Fragment } from "react";

import { Fragment } from "react";
import { ComponentA } from "./components/ComponentA";

// Props -> Properties -> Pass or transfer data from parent component to child component.

const App = () => {

    return <Fragment>
        <h1>Home Page</h1>
        <ComponentA value="10" data="20"/>
    </Fragment>
}

export default App;