import React from 'react';
import { 
  Container, 
  Typography, 
  Box,
  Paper
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import './Education.css';

const Education = () => {
  const educationHistory = [
    {
      id: 1,
      title: 'Bachelor in Computer Science',
      institution: 'Information Technology University Lahore',
      location: 'Lahore, Pakistan',
      duration: '2023 - 2027',
      description: 'Currently pursuing a degree in Computer Science with focus on software development.',
      type: 'education',
      achievements: [
        'CGPA: 3.53/4.0',
        'Been developeing interesting and innovative projects'    
      ]
    },
    {
      id: 2,
      title: 'Intermediate (Pre-Engineering)',
      institution: 'F.G Public School',
      location: 'Pakistan',
      duration: '2021 - 2023',
      description: 'Completed pre-engineering program with focus on mathematics and physics.',
      type: 'education',
      achievements: [
        'Percentage: 83%',
        'Participated in science competitions',
        'Chief Prefect responsible for discipline and conduct of the school, managed dozens ns of prefects'
      ]
    },
    {
      id: 3,
      title: 'Matriculation (Science)',
      institution: 'F.G Public School',
      location: 'Pakistan',
      duration: '2019 - 2021',
      description: 'Completed matriculation with science subjects.',
      type: 'education',
      achievements: [
        'Percentage: 87.5%',
        'Top performer in Science subjects',
      ]
    }
  ];

  const getTimelineIcon = (type) => {
    switch(type) {
      case 'education':
        return <SchoolIcon />;
      case 'work':
        return <WorkIcon />;
      case 'certification':
        return <StarIcon />;
      default:
        return <SchoolIcon />;
    }
  };

  const getTimelineColor = (type) => {
    switch(type) {
      case 'education':
        return 'primary';
      case 'work':
        return 'secondary';
      case 'certification':
        return 'success';
      default:
        return 'info';
    }
  };

  return (
    <Box className="education-section">
      <Container maxWidth="lg">
        <Typography variant="h2" className="section-title" gutterBottom>
          Education
        </Typography>
        
        <Typography variant="body1" className="section-subtitle" paragraph>
          My academic journey in the field of Computer Science.
        </Typography>

        <Timeline position="alternate" className="education-timeline">
          {educationHistory.map((item) => (
            <TimelineItem key={item.id}>
              <TimelineOppositeContent color="text.secondary">
                <Typography variant="body2" className="timeline-date">
                  {item.duration}
                </Typography>
                <Typography variant="body2" className="timeline-location">
                  {item.location}
                </Typography>
              </TimelineOppositeContent>
              
              <TimelineSeparator>
                <TimelineDot color={getTimelineColor(item.type)}>
                  {getTimelineIcon(item.type)}
                </TimelineDot>
                {item.id !== educationHistory.length && <TimelineConnector />}
              </TimelineSeparator>
              
              <TimelineContent>
                <Paper elevation={3} className="timeline-paper">
                  <Box className="timeline-header">
                    <Typography variant="h6" component="h3" className="timeline-title">
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle1" className="timeline-institution">
                      {item.institution}
                    </Typography>
                  </Box>
                  
                  <Typography variant="body2" className="timeline-description">
                    {item.description}
                  </Typography>
                  
                  <Box className="timeline-achievements">
                    <Typography variant="subtitle2" gutterBottom>
                      Key Achievements:
                    </Typography>
                    <ul>
                      {item.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </Box>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};

export default Education; 