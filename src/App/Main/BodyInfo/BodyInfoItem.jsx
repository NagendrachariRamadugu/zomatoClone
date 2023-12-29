import './BodyInfoItem.css';
import Dining from '../BodyInfoImages/Dining.avif';
import OrderOnline from '../BodyInfoImages/OrderOnline.avif';
import NightLifeAndClubs from '../BodyInfoImages/NightLifeAndClubs.avif';

const BodyInfoItem = ({item}) => {
    return (
        <a href="www.youtube.com" className = "explore-link" target = "_blank">
            <div style = {{
                backgroundImage: 
                `url(${(item.name === 'Dining')
                    ?(Dining) 
                    :(item.name === 'OrderOnline')
                        ?(OrderOnline)
                        :(NightLifeAndClubs)})`
            }}>
            </div>
        </a>
    )
}

export default BodyInfoItem;