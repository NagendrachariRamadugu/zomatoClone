import './Cities.css';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useState } from 'react';


const Cities = ({BodyCities}) => {

    const [angle, setAngle] = useState(<FaAngleDown/>);

    const [id, setId] = useState(0);

    const styles = {
        paddingTop: '0.5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
    }

    return (
        <div  onClick={() => {
            setId(id?0:1)
            setAngle(id? (<FaAngleDown/>):(<FaAngleUp/>) )

        }}>
            <div className = "near-me"> Top Restaurant Chains {angle} </div>
            <div id = 'special-div' className='top-res-chains' style={styles}>
                {
                    (id)?
                    (BodyCities.map(item => (
                        <div style = {{
                            padding: '0.5rem 0rem'
                        }}>
                            {item}
                        </div>
                     ))):
                     ('')

                }
            </div>
        </div>  
)
}

export default Cities;