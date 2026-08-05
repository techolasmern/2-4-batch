import { useContext } from "react";
import { Context } from "../App";

export const PageA = () => {

    const response = useContext(Context);

    return <div>PageA - {response}</div>
};

// context api ( useContext )