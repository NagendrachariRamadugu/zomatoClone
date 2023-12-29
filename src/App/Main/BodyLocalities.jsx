import './BodyLocalities.css';
import CityText from './BodyLocalities/CityText.jsx';
import PlacesList from './BodyLocalities/PlacesList.jsx';

const BodyLocalities = () => {
    return (
        <section className='body-localities'>
            <CityText/>
            <br /><br />
              <PlacesList/>         
        </section>
    )
}

export default BodyLocalities;