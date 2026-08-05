import { Link } from "react-router";

const Header = () => {
    return <header className="position-sticky top-0">
        <Link to={"/cart"}>Cart</Link>
    </header>
}

export default Header;