import React from 'react';
import {NavLink} from 'react-router-dom'

const Sidedrawer = (props) => {

	let drawerClasses = 'side-navbar';
	if(props.show) {
		drawerClasses = 'side-navbar open'
    	}


    return (
		<nav className={drawerClasses}>
			<h1 className='side-nav-name'>Joshua A. Humphrey</h1>
			<ul className="side-nav">
				<NavLink to='/' className='side-nav-item'>Projects</NavLink>
				<NavLink to='/about' className='side-nav-item'>About</NavLink>
				<NavLink to='/contact' className='side-nav-item'>Contact</NavLink>
				<div className="side-social">
					<a href='https://www.linkedin.com/in/joshua-humphrey-113a8a11b/'
                    className='side-social-link'><i className=" nav fab fa-linkedin fa-2x"></i></a>
                    <a href='https://github.com/Humphreyj' className='side-social-link'>
                <i className="fab fa-github fa-2x"></i></a>
				</div>
			</ul>
		</nav>
        
    );
};


export default Sidedrawer;
