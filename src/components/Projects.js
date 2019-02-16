import React from 'react';
import bizShop from '../img/bizShop.png'
import levelZ from '../img/levelZ.png'
import theOar from '../img/theOar.png'
import weather from '../img/weather.png'
import calc from '../img/calc.png'

const Projects = (props) => {
    return (
    	<div className='projects'>
			<div className='project'>
				<img className='project-img' src={bizShop} alt='project 1'/>
				<div className="project-info">
					<p className='project-desc'>Static website using CSS grid.</p>
					<i className="fas fa-code"></i>
				</div>
				
			</div>

			<div className='project'>
				<img className='project-img' src={levelZ} alt='project 2'/>
				<p className='project-desc'>Static website with parallax scrolling.</p>
			</div>

			<div className='project'>
				<img className='project-img' src={theOar} alt='project 3'/>
				<p className='project-desc'>Ship tracker for a seafaring tabletop adventure.</p>
			</div>

			<div className='project'>
				<img className='project-img' src={weather} alt='project 3'/>
				<p className='project-desc'>Weather App with React and Flexbox</p>
			</div>

			<div className='project'>
				<img className='project-img' src={calc} alt='project 3'/>
				<p className='project-desc'>Simple calculator with React and Flexbox.</p>
			</div>



    	</div>
        
    );
};



export default Projects;
