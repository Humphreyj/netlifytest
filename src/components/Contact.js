import React from 'react';



const Contact = (props) => {
	

	
	
	
		return (
			<div className='contact-form'>
			<h4>If you are interested in working together, contact me here. I will be in touch shortly!</h4>
			<form action='/' handleSubmit={props.handleSubmit} method='POST' netlify>
				<input type="hidden" name="form-name" value="contact" />
				<input 
				className='contact-item'
				type='text' 
				id='name'
				name='name'
				placeholder='Name'
				onChange={props.handleChange}
				/>
				<br/>
				<input
				className='contact-item' 
				type='text'
				id='email'
				name='email' 
				placeholder='E-mail'
				onChange={props.handleChange}
				/>
				<br/>
				<input
				className='contact-item' 
				type='text' 
				id='subject'
				name='subject'
				placeholder='Subject'
				onChange={props.handleChange}
				/>
				<br/>
				<textarea
				className='contact-item'
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
