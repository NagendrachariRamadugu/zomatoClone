import './Cuisines.css';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useState } from 'react';


const Cuisines = ({BodyCuisines}) => {

    const [angle, setAngle] = useState(<FaAngleDown/>);

    const [id, setId] = useState(0);

    return (
        <div  onClick={() => {
            setId(id?0:1)
            setAngle(id? (<FaAngleDown/>):(<FaAngleUp/>) )

        }}>
            <div className = "near-me">Popular cuisines near me {angle} </div>
            <div id = 'special-div' className='cuisines-near-me'style={{
                paddingTop: '0.5rem'
            }}>
                {
                    (id)?
                    (BodyCuisines.map(item => (
                        <>
                          {item} food near me {'\u00a0'} <span style = {{
                            fontWeight: 'bold'
                          }}>-</span> {'\u00a0'}
                        </>
                     ))):
                     ('')

                }
            </div>
        </div>  
)
}

export default Cuisines;