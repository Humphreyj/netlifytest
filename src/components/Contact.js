import React, { Component } from 'react';

const Contact = (props) => {
	

	
	
	
		return (
			<div className='contact-form'>
			<h4>If you are interested in working together, contact me here. I will be in touch shortly!</h4>
			<form name='contact' method='POST' data-netlify='true'>
			<input 
			type='text' 
			id='name'
			name='name'
			placeholder='name'
			onChange={props.handleChange}
			/>
			<br/>
			<input 
			type='text'
			id='email'
			name='email' 
			placeholder='email'
			onChange={props.handleChange}
			/>
			<br/>
			<input 
			type='text' 
			id='subject'
			name='subject'
			placeholder='subject'
			onChange={props.handleChange}
			/>
			<br/>
			<textarea
			id='message'
			name='message'
			placeholder='Message here...'
			onChange={props.handleChange} />
			<br/>
			<button className='submit-button'>Submit</button>
			</form>

			</div>
		);
}

export default Contact
