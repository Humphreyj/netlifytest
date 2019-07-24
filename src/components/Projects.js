import React from 'react';

import pup from '../img/ultimateskill.png'
import theOar from '../img/theOar.png'
import lander from '../img/lander.png'


const Projects = (props) => {
    return (
    	<div>
    		<div className="projects-heading">
    			<h3 className='title'>Projects</h3>
    			<a href='https://github.com/Humphreyj' className='social-link'>
                <i className="fab fa-github"></i></a>
    		</div>
    		
    	<div className='projects'>
			<div className='project'>
				<img className='project-img' src={pup} alt='project 2'/>
				<div className="project-info">
					<p className='project-desc'>Puppy Training APP (WIP)</p>
					<div className="proj-buttons">
						<a href='https://puppy-trainer.netlify.com/' className='proj-link '>View Site</a>
						<a href='https://github.com/Humphreyj/puppy-trainer' className='proj-link '>View Code</a>

					</div>{/*Project buttons*/}
				</div>
			</div>

			<div className='project'>
				<img className='project-img' src={theOar} alt='project 3'/>
				<div className="project-info">
					<p className='project-desc'>Ship tracker for a seafaring tabletop adventure.</p>
					<div className="proj-buttons">
						<a href='https://ship-manager.netlify.com/' className='proj-link '>View Site</a>
						<a href='https://github.com/Humphreyj/ship-manager' className='proj-link '>View Code</a>

					</div>{/*Project buttons*/}
				</div>
			</div>

			<div className='project'>
				<img className='project-img' src={lander} alt='project 4'/>
				<div className="project-info">
					<p className='project-desc'>Home page with weather.</p>
					<div className="proj-buttons">
						<a href='https://dynamiclander.netlify.com' className='proj-link '>View Site</a>
						<a href='https://github.com/Humphreyj/dynamic-lander' className='proj-link '>View Code</a>

					</div>{/*Project buttons*/}
				</div>
			</div>




    	</div>
    	</div>
    	
        
    );
};



export default Projects;
