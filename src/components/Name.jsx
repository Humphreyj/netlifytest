import React, {useContext} from 'react';
import UIC from '../context/UIC';
import { motion } from 'framer-motion';

const Name = () => {
    const {onComplete} = useContext(UIC)
    const namePlate = {
        hidden: {opacity: 0},
        visible: {
          
          opacity: 1,
          transition: {
            duration: .5
        }
        },
        
      }
    return (
        
    <motion.div 
    className='info'
    variants={namePlate}
    initial="hidden"
    animate="visible"
    onAnimationComplete={onComplete}
    >
        <h4 className="name">Joshua Humphrey</h4>
        <h4 className="title">Front-End Developer</h4>
        <h4 className="location">Texas, United States</h4>
        <div className="git-in">
            <a href='https://www.linkedin.com/in/joshahumphrey/'
                className='social-link'><i className=" nav fab fa-linkedin fa-2x"></i></a>
                <a href='https://github.com/Humphreyj' className='social-link'>
            <i className="fab fa-github fa-2x"></i></a>
        </div>
    </motion.div>
        
    );
}

export default Name;
