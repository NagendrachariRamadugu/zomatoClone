import './PopularPlaces.css';
import  PopularPlace from './PopularPlaces/PopularPlace.jsx';

const PopularPlaces = () => {
    
const bodyPopularPlaces = [
    {
        id: 1,
        count: 23,
        source: "CricketScreening",
        info: "Live Cricket Screenings"
    },

    {
        id: 2,
        count: 11,
        source: "NewRestaurant",
        info: "Newly Opened Restaurants"
    },

    {
        id: 3,
        count: 14,
        source: "ClassicBiryani",
        info: "Classify Biryani Places"
    },

    {
        id: 4,
        count: 12,
        source: "RomanticDining",
        info: "Romantic Dining Places"
    }
];
    return (
        <div className="popular-places">
            {
                bodyPopularPlaces.map(item => (
                    <PopularPlace item = {item}/>
                ))
            }
        </div>   
    )
}

export default PopularPlaces;