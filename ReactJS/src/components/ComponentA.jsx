// -> destructure props to {value, data}.
export const ComponentA = ({ value, data }) => {
    return <div>
        <h1>Component A</h1>
        <p>value: {value}</p>
        <p>data: {data}</p>
    </div>
}