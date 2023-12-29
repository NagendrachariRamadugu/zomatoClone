import './FooterBody.css';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Applestore from './FooterBodyImages/Applestore.webp';
import GoogleStore from './FooterBodyImages/GoogleStore.webp';

const FooterBody = () => {
    return (
        <div className="footer-body">
            <div class="ftr-bdy-clm-1">
                <b>ABOUT ZOMATO</b>
                <a href="#">Who We Are</a>
                <a href="#">Blog</a>
                <a href="#">Work With Us</a>
                <a href="#">Investor Relations</a>
                <a href="#">Report Fraud</a>
                <a href="#">Press Kit</a>
                <a href="#">Contact Us</a>
            </div>  
            <div class="ftr-bdy-clm-2">
                <b>ZOMAVERSE</b>
                <a href="#">Zomato</a>
                <a href="#">Blinkit</a>
                <a href="#">Feeding India</a>
                <a href="#">Hyperpure</a>
                <a href="#">Zomaland</a>     
            </div> 
            <div class="ftr-bdy-clm-3">
                <b>FOR RESTAURANTS</b>
                <a href="#">Partner With Us</a>
                <a href="#">Apps For You</a>
                <b class = "enterprise">FOR ENTERPRISES</b>
                <a href="#">Zomato For Enterprise</a>
            </div>
            <div class="ftr-bdy-clm-4">
                <b>LEARN MORE</b>
                <a href="#">Privacy</a>
                <a href="#">Security</a>
                <a href="#">Terms</a>
                <a href="#">Sitemap</a>
            </div>
            <div class="ftr-bdy-clm-5">
                <b>SOCIAL LINKS</b>
                <div class="social-links">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><IoLogoYoutube /></a>
                    <a href="#"><FaXTwitter /></a>
                    <a href="#"><FaInstagramSquare /></a>
                    <a href="#"><FaLinkedin /></a>
                </div>
                <a href="#"><img class="apple-store" src = {Applestore} alt="apple-store"/></a>
                <a href="#"><img class="google-store" src= {GoogleStore} alt="google-store"/></a>
            </div>
        </div>
    )
}

export default FooterBody;