import React from 'react';

import meSmiling from '.././img/meSmiling.jpg'
const About = (props) => {
	const date = new Date()
	const hours = date.getHours()
	let timeOfDay 

	if(hours < 12) {
		timeOfDay = 'morning.'
	}else if( hours >=12 && hours < 17) {
		timeOfDay = "afternoon."
	}else {
		timeOfDay ='evening.'
	}

    return (
    	<div className='about-me'>
    		<h3 className='about-title'>About Me</h3>
			<div className='my-photo'>
				<img className='me' src={meSmiling} alt='Josh Humphrey'/ >
			</div>
			<p className='about-text'>Good {timeOfDay} 
			<br/>
			<br/>
			For the last decade I was working towards becoming a chef. In 2016 I decided I wanted a change and began learning to code. I have found a new passion and I am seeking new opportunities for education and employment.</p>
			<h3>Skills</h3>
			<div className='skills'>
			
				
				<div className="skill-box">
					<p className="skill html5"><i className="fab fa-html5"></i> HTML5: Proficient</p>
					<p className="skill css3"><i className="fab fa-css3-alt"></i> CSS3: Proficient</p>
					<p className="skill javascript"><i className="fab fa-js-square"></i> JavaScript: Learning</p>
					
				</div>
				<div className="skill-box">
					<p className="skill css3 react"><i className="fab fa-react"></i>React: Proficient</p>
					<p className="skill git"><i class="fab fa-github-square"></i> Git: Proficient</p>
					<p className="skill css3"><i class="fab fa-adobe"></i> Adobe Creative : Learning</p>
				</div>

			</div>
    	</div>
        
    );
};



export default About;
