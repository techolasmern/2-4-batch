import { useState } from "react";

export const ConditionalRendering = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    return <div>
        This is { show ? "true" : "false" } render - <button onClick={handleShow}>Toggle</button> 
    </div>;
};