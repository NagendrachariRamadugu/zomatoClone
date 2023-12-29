import './Placelist.css'
import { FaAngleRight } from "react-icons/fa";

const PlaceList = ({item}) => {
    return(
        <div>
            <div>
                <span className='place-name'>
                    {item.name}
                </span>
                <span className='places-count'>
                    {item.count} Places
                </span>
            </div>
            <FaAngleRight/>
        </div>
    )
}

export default PlaceList;