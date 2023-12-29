import './PopularPlace.css';
import ClassicBiryani from '../PopularPlacesImages/ClassicBiryani.jpeg';
import RomanticDining from '../PopularPlacesImages/RomanticDining.jpeg';
import NewRestaurant from '../PopularPlacesImages/NewRestaurant.jpeg';
import CricketScreening from '../PopularPlacesImages/CricketScreening.avif';

const PopularPlace = ({item}) => {
    return (
        <a href="www.youtube.com">
            <div style = {{
                backgroundImage: 
                `url(${(item.source === 'CricketScreening')
                    ?(CricketScreening):
                    (item.source === 'RomanticDining')
                    ?(RomanticDining):
                    (item.source === 'ClassicBiryani')
                    ?(ClassicBiryani):
                    (NewRestaurant)
                })`
            }}>
                <div>
                    <p class = "info-text">{item.count} {item.info}</p>
                    <p class = "no-of-places">{item.count} Places</p>
                </div>
            </div>
        </a>
    )
}

export default PopularPlace;