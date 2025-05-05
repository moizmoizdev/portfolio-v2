import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import './Projects.css';

const ProjectCard = ({ project }) => {
  return (
    <Paper className="project-card" elevation={2}>
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
      </div>
      <div className="project-content">
        <Typography variant="h6" className="project-title">
          {project.title}
        </Typography>
        <Typography variant="body2" className="project-description">
          {project.description}
        </Typography>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              <GitHubIcon fontSize="small" /> Code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
              <LaunchIcon fontSize="small" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </Paper>
  );
};

const Projects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'CelestialChain',
      description: 'A blockchain implementation with consensus protocol and transaction processing capabilities.',
      image: '/assets/blockchain.jpg',
      technologies: ['OpenSSL', 'Boost', 'levelDB'],
      github: 'https://github.com/moizmoizdev/CelestialChain'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills with a modern UI design.',
      image: '/assets/portfolio.jpg',
      technologies: ['React', 'Material UI', 'CSS', 'Javascript'],
      github: 'https://github.com/moizmoizdev/portfolio-v2',
      demo: 'https://moizmoiz.com'
    }
  ];

  return (
    <Box className="projects-section">
      <Container maxWidth="lg">
        <Typography variant="h2" className="section-title" gutterBottom>
          Projects
        </Typography>
        
        <Typography variant="body1" className="section-subtitle" paragraph>
          Here are some of the projects I've worked on. Each project has helped me develop my skills and learn new technologies.
        </Typography>

        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Box>
  );
};

export default Projects; 