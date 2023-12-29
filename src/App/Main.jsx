import BodyInfo from './Main/BodyInfo.jsx';
import BodyCollections from './Main/BodyCollections.jsx';
import BodyLocalities from './Main/BodyLocalities.jsx';
import BodyLinks from './Main/BodyLinks.jsx';
import BodyExploreOptions from './Main/BodyExploreOptions.jsx';
import FooterSection from './Main/FooterSection.jsx';
import './Main.css';

const Main = () => {
    return (
        <main>
            <BodyInfo/>
            <br /><br />
            <BodyCollections/>
            <br /><br /><br /><br />
            <BodyLocalities/>
            <br /><br /><br /><br />
            <BodyLinks/>
            <br /><br />
            <BodyExploreOptions/>
            <br /><br /><br />
            <FooterSection/>
        </main>  
    )
}

export default Main;