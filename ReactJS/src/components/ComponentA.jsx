import "./ComponentA.css";

// -> destructure props to {value, data}.
export const ComponentA = ({ value, handleClick }) => {
    return <div>
        <h1>Component A</h1>
        <p>value: {value}</p>
        <button className="btn" onClick={handleClick}>Click Me</button>

    </div>
}