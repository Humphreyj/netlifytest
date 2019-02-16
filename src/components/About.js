import React from 'react';

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
				<img src="https://fillmurray.com/g/200/200" alt='Josh Humphrey'/ >
			</div>
			<p className='about-text'>Good {timeOfDay} For the last decade I was working towards becoming a chef. In 2016 I decided I wanted a change.
				I began learning to code and am now proficient in HTML, CSS, JavaScript and React. </p>
			<div className='skills'>
				<div className='skill'>
					<img className='skillBadge' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/173442/HTML5_Badge.svg' alt='HTML Badge'/>
				</div>
				<div className='skill'>
					<img className='skillBadge' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/173442/CSS3_Badge.svg' alt='CSS Badge'/>
				</div>
				<div className='skill'>
					<img className='skillBadge' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/173442/JS_Badge.svg' alt='JavaScript Badge'/>
				</div>
			</div>
    	</div>
        
    );
};



export default About;
