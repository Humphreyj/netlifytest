import React,{ useContext } from 'react';
import UIC from '../context/UIC';
import { motion } from 'framer-motion';
import  { skillsData } from '../data/skillsData';



const Skills = () => {
    const {animationPhase} = useContext(UIC);

    const title = {
        hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: .9,
            }
          }
      }

    const container = {
        hidden: { opacity: 0,x: -100 },
        visible: {
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            staggerChildren: .2,
            duration: .2,
            
          }
        }
      };
      
      const item = {
        hidden: { y: 100,opacity: 0 },
        visible: {
          opacity:1,
          y: 0
        }
      };
    return (
        <div className="skills">
        
        {animationPhase >= 3 ? <motion.div
                className= "outer"
                variants={container}
                initial="hidden"
                animate={skillsData.length > 0 && "visible"}
            >
              <motion.h4 
              className="skills-title"
              variants={title}
              initial="hidden"
              animate="visible"
              >Skills
              </motion.h4>
            {skillsData.map(skill => {
                return (
                    
                <motion.div
                className= "inner"
                key={skill.id}
                variants={item}
                >
                    <div className="skill">
                        <img src={skill.img} alt={`${skill.name} logo`}/>
                        <p>{skill.name}</p>
                    </div>
                </motion.div>
                    )
                })}
                </motion.div> : ''}
        
    </div>
    );
}

export default Skills;
