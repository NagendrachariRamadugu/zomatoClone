import './PlacesList.css';
import { localities as Localities, extraLocalities as ExtraLocalities} from './PlacesListData/localities.js';
import { useState } from 'react';
import PlaceList from './PlacesList/placeList';


const PlacesList = () => {
    const [localities, setLocalities] = useState(Localities);
    const addLocalities = (e) => {
        setLocalities((e.target.textContent === 'see more')
        ?(Localities.concat(ExtraLocalities))
        :(Localities))
        
}
    return (
        <div className="places-list">
            {
                localities.map(item => (
                    <PlaceList item = {item}/>
                ))
            }
            <div onClick={(e) => {
                addLocalities(e);
                e.target.textContent = 
                    (e.target.textContent === 'see more')
                    ?('see less')
                    :('see more')

            }}>
                see more
            </div>
        </div>
          

    )
}

export default PlacesList;