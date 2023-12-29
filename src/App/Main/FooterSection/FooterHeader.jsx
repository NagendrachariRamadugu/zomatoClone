import './FooterHeader.css';
import India from './FooterHeaderImages/India.webp';
import LogoFooter from './FooterHeaderImages/LogoFooter.avif';
import { FaAngleDown } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const FooterHeader = () => {
    return (
        <div className="footer-header">
            <img className = 'footer-logo' src= {LogoFooter} alt="footer-logo" />
            <div class="footer-right-section">
                <div className = "country js-country">
                    <img className = "flag" src = {India} alt="India-flag"/>
                    India 
                    <FaAngleDown />
                    <div className = "js-country-absolute"></div>
                </div>
                <div className = "language">
                <FaGlobe />
                    English 
                    <FaAngleDown />
                </div>
            </div>
        </div>
    )
}

export default FooterHeader;