import './ResChains.css';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useState } from 'react';


const ResChains = ({BodyResChains}) => {

    const [angle, setAngle] = useState(<FaAngleDown/>);

    const [id, setId] = useState(0);

    const styles = {
        paddingTop: (id)?('1rem'):('0rem'),
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        alignItems: 'center'
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
                    (BodyResChains.map(item => (
                        <div>
                            {item}
                        </div>
                     ))):
                     ('')

                }
            </div>
        </div>  
)
}

export default ResChains;