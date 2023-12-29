import './Header.css';
import Nav from './Header/Nav.jsx';
import HeaderBottomContainer from './Header/HeaderBottomContainer.jsx';

const Header = () => {
    return (
        <header>
            <br/>
            <Nav/>
            <HeaderBottomContainer/>
        </header>
        
    )
}

export default  Header;