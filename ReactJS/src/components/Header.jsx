import { style } from "../style";

const Header = () => {
    return <header>
        <h1 style={style.heading}>Logo</h1>
        <ul>
            <li>Home</li>
            <li>Store</li>
            <li>Contact</li>
        </ul>
    </header>
}

export default Header;