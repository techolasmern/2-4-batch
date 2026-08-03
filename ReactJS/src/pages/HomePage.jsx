import { Link } from "react-router";

export const HomePage = () => {
    return <div>
        <h1>React - Home Page</h1>
        {/* <a href="/about">Go To About Page</a> */}
        <Link to="/about">Go About</Link>
    </div>
}