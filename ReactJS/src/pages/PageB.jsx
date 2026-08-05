import { useContext } from "react";
import { Link } from "react-router";
import { Context } from "../Providers/SampleProvider";

export const PageB = () => {

    const { counter, setCounter } = useContext(Context);

    const handleUpdate = () => {
        setCounter(counter + 1);
    }

    return <div>PageB - {counter}
        <br />
        <button onClick={handleUpdate} className="btn btn-primary">Click</button>
        <Link to="/page-a">Go To Page A</Link>   
    </div>
};