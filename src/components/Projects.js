import React from 'react';
import bizShop from '../img/bizShop.png'
import levelZ from '../img/levelZ.png'
import theOar from '../img/theOar.png'
import weather from '../img/weather.png'
import calc from '../img/calc.png'

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
				<img className='project-img' src={levelZ} alt='project 2'/>
				<div className="project-info">
					<p className='project-desc'>Static website with parallax scrolling.</p>
					<div className="proj-buttons">
						<a href='https://cookinglevel0.netlify.com/' className='proj-link'>View Site</a>
						<a href='https://github.com/Humphreyj/levelZ'><i className="fas fa-code"></i></a>

					</div>{/*Project buttons*/}
				</div>
			</div>

			<div className='project'>
				<img className='project-img' src={theOar} alt='project 3'/>
				<div className="project-info">
					<p className='project-desc'>Ship tracker for a seafaring tabletop adventure.</p>
					<div className="proj-buttons">
						<a href='https://ship-manager.netlify.com/' className='proj-link'>View Site</a>
						<a href='https://github.com/Humphreyj/ship-manager'><i className="fas fa-code"></i></a>

					</div>{/*Project buttons*/}
				</div>
			</div>

			<div className='project'>
				<img className='project-img' src={weather} alt='project 4'/>
				<div className="project-info">
					<p className='project-desc'>Weather App with React and Flexbox</p>
					<div className="proj-buttons">
						<a href='https://humphrey-weather.netlify.com/' className='proj-link'>View Site</a>
						<a href='https://github.com/Humphreyj/weather-app'><i className="fas fa-code"></i></a>

					</div>{/*Project buttons*/}
				</div>
			</div>

			<div className='project'>
				<img className='project-img' src={calc} alt='project 5'/>
				<div className="project-info">
					<p className='project-desc'>Simple calculator with React and Flexbox</p>
					<div className="proj-buttons">
						<a href='https://humphrey-calculator.netlify.com/' className='proj-link'>View Site</a>
						<a href='https://github.com/Humphreyj/calculon'><i className="fas fa-code"></i></a>
					</div>{/*Project buttons*/}
				</div>
			</div>



    	</div>
    	</div>
    	
        
    );
};



export default Projects;
