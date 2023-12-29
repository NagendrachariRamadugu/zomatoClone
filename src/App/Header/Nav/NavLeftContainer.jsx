import './NavLeftContainer.css';
import { RxHamburgerMenu } from "react-icons/rx";

const NavLeftContainer = () => {
  return (
    <div className = "nav-left-container">
        <a href="https://www.youtube.com/" className = "get-the-app-text">get the app</a>
        <a href="https://www.youtube.com/" className = "hamburger-menu js-hamburger-menu"><RxHamburgerMenu /></a>       
    </div>
  )
}

export default NavLeftContainer;