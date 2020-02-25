import React from 'react';

import outpost from '../img/outpost.png'
import nasa from '../img/nasa.png'
import lander from '../img/lander.png'
import quick from '../img/quick.png'


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
				<img className='project-img' src={outpost} alt='project 2'/>
				<div className="project-info">
					<p className='project-desc'>Outpost Radio
					<br/>
					<br/>
					The Front End for a 'Pirate Radio' station. I was tasked with the redesign of the site and implementation of additional features (WIP)
					</p>
					<div className="proj-buttons">
						<a href='https://outpost-radio.netlify.com/' className='proj-link '>View Site</a>
						<a href='https://github.com/Humphreyj/pirate-radio/tree/master/outpost-radio' className='proj-link '>View Code</a>

					</div>{/*Project buttons*/}
				</div>
			</div>

			<div className='project'>
				<img className='project-img' src={nasa} alt='project 3'/>
				<div className="project-info">
					<p className='project-desc'>APOTD
					<br/>
					<br/>
					 A web Application that consumes Nasa's Picture of the Day API and returns the most current temperature on Mars!
					 <br/>
					 </p>
					<div className="proj-buttons">
						<a href='https://spaceyall.netlify.com/' className='proj-link '>View Site</a>
						<a href='https://github.com/Humphreyj/nasa-photo-of-the-day' className='proj-link '>View Code</a>

					</div>{/*Project buttons*/}
				</div>
			</div>

			<div className='project'>
				<img className='project-img' src={lander} alt='project 4'/>
				<div className="project-info">
					<p className='project-desc'>Focus Up
					<br/>
					<br/>
					 Consumes Google's Geolocation API, passes that data to OpenWeatherMap API and returns the local weather. Also displays the price of Bitcoin and Ethereum using the Coin Compare API.</p>
					<div className="proj-buttons">
						<a href='https://dynamiclander.netlify.com' className='proj-link '>View Site</a>
						<a href='https://github.com/Humphreyj/dynamic-lander' className='proj-link '>View Code</a>

					</div>{/*Project buttons*/}
				</div>
			</div>

			<div className='project'>
				<img className='project-img' src={quick} alt='project 2'/>
				<div className="project-info">
					<p className='project-desc'>Quick Dice
					<br/>
					<br/>
					A custom dice roller made with React. User can save common dice roll to speed up gameplay.
					</p>
					<div className="proj-buttons">
						<a href='https://quick-dice.netlify.com/' className='proj-link '>View Site</a>
						<a href='https://github.com/Humphreyj/quickr-dice' className='proj-link '>View Code</a>

					</div>{/*Project buttons*/}
				</div>
			</div>




    	</div>
    	</div>
    	
        
    );
};



export default Projects;
