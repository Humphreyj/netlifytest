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
    		<h3>About Me</h3>
			<div className='my-photo'>
				<img src="https://fillmurray.com/g/200/200" alt='Josh Humphrey'/ >
			</div>
			<p>Good {timeOfDay} dolor sit amet, consectetur adipisicing elit. Deserunt repellat facere, ad nihil ipsa error quo quia, laudantium adipisci repellendus!</p>
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
