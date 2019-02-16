import React from 'react';
import {NavLink} from 'react-router-dom'

const Navigation = (props) => {
    return (
        <div id="navigation" className='navigation'>
        	<div className='name'>
				<h1>Joshua A. Humphrey</h1>
                <h4>Front-End Developer</h4>
        	</div>
        	<div className='nav-items'>
                <a href='https://www.linkedin.com/in/joshua-humphrey-113a8a11b/'
                className='nav-item'><i className=" nav fab fa-linkedin"></i></a>
                <a href='https://github.com/Humphreyj' className='nav-item'><i className="nav fab fa-github"></i></a>
				<NavLink to='/' className='nav-item'>Projects</NavLink>
				<NavLink to='/about' className='nav-item'>About</NavLink>
                <NavLink to='/contact' className='nav-item'>Contact</NavLink>
        	</div>

        </div>
    );
};



export default Navigation;
