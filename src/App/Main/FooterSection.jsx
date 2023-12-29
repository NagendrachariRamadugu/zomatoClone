import './FooterSection.css';
import FooterHeader from './FooterSection/FooterHeader.jsx';
import FooterBody from './FooterSection/FooterBody.jsx';
import FooterBottom from './FooterSection/FooterBottom.jsx';

const FooterSection = () => {
    return (
        <section className='footer-section'>
            <footer>
                <FooterHeader/>
                <br />
                <FooterBody/>
                <br />
                <FooterBottom/>
            </footer>
        </section>
    )
}

export default FooterSection;