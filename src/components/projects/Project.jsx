import React from 'react';


const Project = (props) => {
    return (
        <div className='project'>
				<img className='project-img' src={props.img} alt='project 2'/>
				<div className="project-info">
                    <p className="project-title">{props.name}</p>
					<p className="role">{props.role}</p>
					<p className="tech-stack">{props.stack}</p>
					<p className='project-desc'>
					{props.description}
					</p>
					<div className="proj-buttons">
						<a href={props.site} rel="noopener noreferrer" target='_blank' className='proj-link '>View Site</a>
						{props.git ? <a href={props.git} rel="noopener noreferrer" target='_blank' className='proj-link '>View Code</a> : <p>I am unable to share this repo.</p> }

					</div>{/*Project buttons*/}
				</div>
			</div>
    );
}

export default Project;
