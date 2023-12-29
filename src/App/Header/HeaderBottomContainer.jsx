import './HeaderBottomContainer.css';
import { CiLocationOn } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import Logo from './HeaderBottomContainerImages/Logo.avif';
import { CiSearch } from "react-icons/ci";

const HeaderBottomContainer = () => {
    return (
        <div className="header-bottom-container">
            <img class = "zomato-logo" src= {Logo}alt="zomato-logo"/>
            <p class = "service-area-text js-service-area-text">Discover the best food & drinks in Nirmal</p>
            <div className="location-search-bar">
                <div className="location">
                    <CiLocationOn />
                    <span class = "location-info">Work - Budhwarpet, Nir</span>
                    <FaCaretDown /> 
                </div>
                <div className="search-bar">
                    <CiSearch />
                    <input type="text" placeholder="Search" ></input>
                </div>
            </div>
        </div>
    )
}
export default HeaderBottomContainer;