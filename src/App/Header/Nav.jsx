import NavLeftContainer from "./Nav/NavLeftContainer.jsx";
import NavRightContainter from "./Nav/NavRightContainer.jsx";
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <NavLeftContainer/>
            <NavRightContainter/>
        </nav>
    )
}

export default Nav;