import React from 'react';

const ProjectCard = ({ title, description, link }) => {
    return (
        <a href={link} className="project-card" target="_blank" rel="noopener noreferrer">
            <h3>{title}</h3>
            <p>{description}</p>
        </a>
    );
};

export default ProjectCard;
