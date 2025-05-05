import React from 'react';
import { 
  Container, 
  Typography, 
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { usePageTitle } from '../../../context/PageTitleContext';
import './Education.css';

function Education() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const { pageTitle } = usePageTitle();
  
  const schoolInfo = [
    {
      id: 1,
      title: 'Bachelor in Computer Science',
      school: 'Information Technology University Lahore',
      place: 'Lahore, Pakistan',
      years: '2023 - 2027',
      details: 'Currently pursuing a degree in Computer Science with focus on software development.',
      highlights: [
        'CGPA: 3.53/4.0',
        'Been developeing interesting and innovative projects'    
      ]
    },
    {
      id: 2,
      title: 'Intermediate (Pre-Engineering)',
      school: 'F.G Public School',
      place: 'Pakistan',
      years: '2021 - 2023',
      details: 'Completed pre-engineering program with focus on mathematics and physics.',
      highlights: [
        'Percentage: 83%',
        'Participated in science competitions',
        'Chief Prefect responsible for discipline and conduct of the school, managed dozens ns of prefects'
      ]
    },
    {
      id: 3,
      title: 'Matriculation (Science)',
      school: 'F.G Public School',
      place: 'Pakistan',
      years: '2019 - 2021',
      details: 'Completed matriculation with science subjects.',
      highlights: [
        'Percentage: 87.5%',
        'Top performer in Science subjects',
      ]
    }
  ];

  const renderMobileView = () => {
    return (
      <Box className="mobile-education">
        {schoolInfo.map((item, index) => (
          <Card key={item.id} className={index % 2 === 0 ? 'light-card' : 'dark-card'}>
            <CardContent>
              <Typography variant="h6" className="degree-cell">
                {item.title}
              </Typography>
              
              <Typography variant="body2" className="school-text">
                {item.school} • {item.place}
              </Typography>
              
              <Typography variant="body2" className="year-text">
                {item.years}
              </Typography>
              
              <Typography variant="body2" className="details-text">
                {item.details}
              </Typography>
              
              <Typography variant="subtitle2" className="highlights-title">
                Highlights:
              </Typography>
              
              <List dense className="highlights-list-mobile">
                {item.highlights.map((point, idx) => (
                  <ListItem key={idx} disableGutters>
                    <ListItemText primary={point} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        ))}
      </Box>
    );
  };

  const renderTableView = () => {
    return (
      <TableContainer component={Paper} className="education-table">
        <Table>
          <TableHead>
            <TableRow className="table-header">
              <TableCell><SchoolIcon className="table-icon" /> Degree</TableCell>
              <TableCell>School</TableCell>
              <TableCell>Years</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>About</TableCell>
              <TableCell>Highlights</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schoolInfo.map((item, index) => (
              <TableRow 
                key={item.id} 
                className={index % 2 === 0 ? 'light-row' : 'dark-row'}
              >
                <TableCell className="degree-cell">{item.title}</TableCell>
                <TableCell>{item.school}</TableCell>
                <TableCell>{item.years}</TableCell>
                <TableCell>{item.place}</TableCell>
                <TableCell>{item.details}</TableCell>
                <TableCell>
                  <ul className="highlights-list">
                    {item.highlights.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <Box className="education-section">
      <Container maxWidth="lg">
        <Typography variant="h2" className="section-title" gutterBottom>
          {pageTitle}
        </Typography>
        
        <Typography variant="body1" className="section-subtitle" paragraph>
          My academic journey in the field of Computer Science.
        </Typography>

        {isMobile ? renderMobileView() : renderTableView()}
      </Container>
    </Box>
  );
}

export default Education; 