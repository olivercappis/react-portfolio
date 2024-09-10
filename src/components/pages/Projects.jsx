import React from 'react';
import ProjectCard from '../ProjectCard';

const Projects = () => {

  const projects = [
    { id: 1, title: 'Project One', description: 'Description of project one.', link: '#' },
    { id: 2, title: 'Project Two', description: 'Description of project two.', link: '#' },
    { id: 3, title: 'Project Three', description: 'Description of project three.', link: '#' },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-container">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
