import React from 'react';
import './animation.css';
import Image from 'next/image';
import icon from "../../../public/6.png"

const CircularTextAnimation: React.FC = () => {
  return (
    <div className="circular-text-animation">
        <div className="text-container">
        {/* <h2 className='email-text'>Email me directly</h2> */}

        </div>
        <div className="image-container">
            
         <Image src="/email (1).png" width={100} height={100} alt='icon'/>
        </div>
     
    </div>
  );
};

export default CircularTextAnimation;
