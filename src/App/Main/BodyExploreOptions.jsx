import './BodyExploreOptions.css';
import { bodyCuisines as BodyCuisines, 
        bodyResChains as BodyResChains, 
        bodyRestypes as BodyRestypes,
        bodyCities as BodyCities
    } 
from './BodyExploreOptionsData/Data';
import Cuisines  from './BodyExploreOptions/Cuisines';
import Restypes from './BodyExploreOptions/ResTypes';
import ResChains from './BodyExploreOptions/ResChains';
import Cities from './BodyExploreOptions/Cities'

const BodyExploreOptions = () => {
    return (
        <section className='body-explore-options'>
            <b>Explore options near me</b>
            <br /><br />
            <div className="explore-options">
                <Cuisines BodyCuisines = {BodyCuisines}/> 
                <Restypes BodyRestypes = {BodyRestypes}/>
                <ResChains BodyResChains = {BodyResChains}/>
                <Cities BodyCities = {BodyCities}/>
            </div>
        </section>
    )
}

export default BodyExploreOptions;