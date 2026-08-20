import { useState } from "react";

export const ConditionalRenderingIf = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    if (show) {
        return <div>
            This is true render - <button onClick={handleShow}>Toggle</button>
        </div>
    }

    return <div>
        This is false render - <button onClick={handleShow}>Toggle</button>
    </div>
};