import React from 'react';

const Hamburger = (props) => {
    return (
    	<button className="toggle" onClick={props.click}>
	    	<i className="fas fa-align-justify burger"></i>
    	</button>
        
    );
};


export default Hamburger;
