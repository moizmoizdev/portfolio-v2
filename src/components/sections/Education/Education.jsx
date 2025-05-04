import React from 'react';
import { 
  Container, 
  Typography, 
  Box,
  List,
  ListItem,
  Divider
} from '@mui/material';
import './Education.css';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Computer Science',
      school: 'University of Technology',
      location: 'New York',
      years: '2018 - 2022'
    },
    {
      id: 2,
      degree: 'Advanced Web Development Certification',
      school: 'Web Academy',
      location: 'Online',
      years: '2023'
    }
  ];

  const experience = [
    {
      id: 1,
      position: 'Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'Boston',
      years: '2022 - 2023'
    },
    {
      id: 2,
      position: 'Senior Frontend Developer',
      company: 'Digital Solutions Ltd.',
      location: 'Remote',
      years: '2023 - Present'
    }
  ];

  return (
    <Box className="education-section">
      <Container maxWidth="lg">
        <Typography variant="h2" className="section-title" gutterBottom>
          Education
        </Typography>
        
        <List className="education-list">
          {education.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem className="education-item">
                <Box className="education-content">
                  <Typography variant="h6" className="item-title">
                    {item.degree}
                  </Typography>
                  <Typography variant="subtitle1" className="item-subtitle">
                    {item.school} | {item.location}
                  </Typography>
                  <Typography variant="body2" className="item-years">
                    {item.years}
                  </Typography>
                </Box>
              </ListItem>
              {item.id !== education.length && <Divider />}
            </React.Fragment>
          ))}
        </List>

        <Typography variant="h2" className="section-title" gutterBottom sx={{ mt: 5 }}>
          Experience
        </Typography>
        
        <List className="experience-list">
          {experience.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem className="experience-item">
                <Box className="experience-content">
                  <Typography variant="h6" className="item-title">
                    {item.position}
                  </Typography>
                  <Typography variant="subtitle1" className="item-subtitle">
                    {item.company} | {item.location}
                  </Typography>
                  <Typography variant="body2" className="item-years">
                    {item.years}
                  </Typography>
                </Box>
              </ListItem>
              {item.id !== experience.length && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default Education; 