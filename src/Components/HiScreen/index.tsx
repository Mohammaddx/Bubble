import * as React from 'react'
import './style.css'
import {NavLink} from 'react-router-dom'
import WaterWave from 'react-water-wave';
import image from './HiScreenBackground.jpg'
import ReactWOW from 'react-wow'
import Logo from './Logo.png'
import '../../animate.css'
import '../../hover.css'
const HiScreen:React.FC = () =>{
    return(
        
            
        <WaterWave
    imageUrl={image}
  >
      
    {() => (
        
     <div className="hi_screen">
      
            <div className="container">
                <ReactWOW animation="zoomIn">
                <img src={Logo} alt="Logo" className="hvr-grow-rotate" />
                </ReactWOW>
                <h1>Bubble</h1>
                <h2>~Welcome to you~</h2>
                <ReactWOW animation="fadeIn">
                <NavLink to="/Home"><button>Get Started</button></NavLink>
                </ReactWOW>
            </div>

        </div>
    )}
        
        </WaterWave>
        
    )
}

export default HiScreen;