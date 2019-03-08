import React from 'react';
import {NavLink} from 'react-router-dom'
import Hamburger from './Hamburger'

const Navigation = (props) => {
    return (
        <div id="navigation" className='navigation'>
        	<div className='name'>
				<h1>Joshua A. Humphrey</h1>
                <h4>Front-End Developer</h4>
        	</div>
        	<div className='nav-items'>
				<NavLink to='/' className='nav-item'>Projects</NavLink>
				<NavLink to='/about' className='nav-item'>About</NavLink>
                <NavLink to='/contact' className='nav-item'>Contact</NavLink>
                <div className="nav-toggle">
                  <Hamburger click={props.drawerToggleHandler} />
                </div>
        	</div>

        </div>
    );
};



export default Navigation;
