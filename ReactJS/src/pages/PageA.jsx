import { useContext } from "react";
import { Link } from "react-router";
import { Context } from "../Providers/SampleProvider";

export const PageA = () => {

    const { counter, setCounter} = useContext(Context);

    const handleUpdate = () => {
        setCounter(counter + 1);
    }

    return <div>PageA - {counter}
        <br />
        <button onClick={handleUpdate}>Click</button>
        <Link to="/page-b">Go To Page B</Link>
    </div>
};

// context api ( useContext )