import './BodyAppLink.css';
import AppLinkImage from './BodyAppLinkImages/AppLinkImage.avif';
import GoogleStore from './BodyAppLinkImages/GoogleStore.webp';
import AppleStore from './BodyAppLinkImages/AppleStore.webp';

const BodyAppLink = () => {
    return (
        <div className="body-app-link">
            <div class="app-link-image-container">
                    <img src={AppLinkImage} alt="app-link-image"/>
            </div>
            <div class="app-link-text">
                <div class = "app-link-header"><b>Get the Zomato app</b></div>
                <div class = "app-link-des"> <p>We will send you a link, open it on your phone to download the app</p></div>
                <div class="email-phone">
                    <input className = "email-radio" type="radio" name = "fix-1" checked/>
                    <span className = "email-text">Email</span>
                    <input className = "phone-radio" type="radio" name = "fix-1"/>
                    <span className = "phone-text">Phone</span>
                </div>
                <div class = "share-link">
                    <input className = "via-email" type = "email" placeholder="Email"/>
                    <input className = "via-phone" type = "phone" placeholder="type here.."/>
                    <button className = "share-button">Share</button>
                </div>
                <div style = {{color: 'rgb(71, 70, 70)'}}>Download app from</div>
                    <div class = "app-stores">
                        <a href="#"><img className="google-store" src={GoogleStore} alt="google-store"/></a>
                        <a href="#"><img className="apple-store" src={AppleStore} alt="apple-store"/></a>
                    </div>
            </div>
        </div>
    )
}

export default BodyAppLink;