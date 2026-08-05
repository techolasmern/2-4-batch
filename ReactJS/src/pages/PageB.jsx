import { useContext } from "react";
import { Context } from "../App";

export const PageB = () => {

    const response = useContext(Context);

    return <div>PageB - {response}</div>
};