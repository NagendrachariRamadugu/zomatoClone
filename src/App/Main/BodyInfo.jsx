import './BodyInfo.css';
import BodyInfoItem from './BodyInfo/BodyInfoItem.jsx';

const BodyInfo = () => {

     const bodyInfoItems  = [

        {   id: 1,
            name: "OrderOnline",
            description: {
                line1: "Order Online",
                line2: "Stay home and order to your doorstep"
            }
        },
    
        {
            id: 2,
            name: "Dining",
            description: {
                line1: "Dining",
                line2: "View the city's favourite dining venues"
            }
        },
    
        {
            id: 3,
            name: "NightLifeAndClubs",
            description: {
                line1: "Nightlife and Clubs",
                line2: "Explore the city's top nightlife outlets"
            }
        }
    
    ];

    return (
       <section className='body-info'>
            {
                bodyInfoItems.map(item => (
                    <BodyInfoItem item = {item}/>
                ))
            }
       </section>
    )
}

export default BodyInfo;