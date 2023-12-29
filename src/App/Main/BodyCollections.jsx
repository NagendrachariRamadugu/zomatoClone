import Heading from './BodyCollections/Heading.jsx';
import Description from './BodyCollections/Description.jsx';
import PopularPlaces from './BodyCollections/PopularPlaces.jsx';
import './BodyCollections.css';

const BodyCollections = () => {
    return (
        <section className="body-collections">
            <Heading/>
            <br />
            <Description/>
            <br />
            <PopularPlaces/>
        </section>
    )
}

export default BodyCollections;