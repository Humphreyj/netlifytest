import React, {useContext} from 'react';
import UIC from '../context/UIC';
import { motion } from 'framer-motion';

const Name = () => {
    const {onComplete,toggleSkills} = useContext(UIC)
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
            <motion.a 
                href='https://www.linkedin.com/in/joshahumphrey/'
                className='social-link'
                target='_blank'
                rel= 'noopener noreferrer'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                ><i className=" nav fab fa-linkedin fa-2x"></i>
            </motion.a>
            <motion.a 
                href='https://github.com/Humphreyj' 
                className='social-link'
                target='_blank'
                rel= 'noopener noreferrer'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                ><i className="fab fa-github fa-2x"></i>
            </motion.a>
            <motion.button 
                className='toggle'
                 onClick={toggleSkills}
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ rotate: 45,transition:{duration: .3}, y: 10 }}
                 >skills</motion.button>
        </div>
    </motion.div>
        
    );
}

export default Name;
