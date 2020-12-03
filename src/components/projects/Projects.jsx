import React,{useEffect,useContext} from 'react';
import Project from'./Project';
import Name from '../Name';
import UIC from '../../context/UIC';
import {projectData} from '../../data/projectData';
import {motion} from 'framer-motion'

const Projects = () => {
const {animationPhase, onComplete} =useContext(UIC);

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
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: .75,
        duration: .75,
        
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity:1,
     
    }
  };
  useEffect(() => {
    console.log(animationPhase)
  },[animationPhase])

    return (
        <div className="showcase">
          
            <Name />
         
            
            <motion.h1 
              className="projects-title"
              variants={title}
              initial="hidden"
              animate="visible"
              >Recent Projects
              </motion.h1>

            <div className='projects-container'>
            {animationPhase >= 2 ? <motion.div
                className= "outer"
                variants={container}
                initial="hidden"
                animate={projectData.length > 0 && "visible"}
                onAnimationComplete={onComplete}
            >
            {projectData.map(proj => {
                return (
                    
                <motion.div
                className= "inner"
                key={proj.id}
                variants={item}
                >
                    <Project
                        img={proj.img}
                        name={proj.name}
                        role={proj.role}
                        stack={proj.stack}
                        description={proj.description}
                        site={proj.site}
                        git={proj.code}
                    />
                </motion.div>
                    )
                })}
                </motion.div> : ''}
            
            
        </div>
        </div>
        
    );
}

export default Projects;
