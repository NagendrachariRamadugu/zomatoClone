import './NavRightContainer.css';
import { FaAngleDown } from "react-icons/fa6";
import ProfileImage from './NavRightContainerImages/Profile.jpg';

const NavRightContainer = () => {
  return (
    <div className="nav-right-container">
      <a href="https://www.youtube.com/" target="_blank">Investor Relations</a>
      <a href="https://www.youtube.com/" target="_blank">Add restaurant</a>
      <div className="profile-section-container">
        <a href="https://www.youtube.com/" target="_blank">
          <img className="profile-image js-profile-image" src= {ProfileImage} alt="bunny" />
        </a>
        <a href="https://www.youtube.com/" target="_blank">Nagendra</a>
        <a href="https://www.youtube.com/" target="_blank" className="js-angle-down"><FaAngleDown /></a>
      </div>
    </div>
  );
};

export default NavRightContainer;
