import React from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Hero.css';

const HeroSection = () => {
  return (
    <Box className="hero-section">
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={8} className="hero-container">
          <Grid item xs={12} lg={6} className="hero-content">
            <Box className="text-content">
              <Typography variant="subtitle1" className="intro-text">
                Hey! I'm
              </Typography>
              <Typography variant="h1" className="name">
                Abdul Moiz
              </Typography>
              <Typography 
                variant="body1" 
                className="description"
                sx={{ 
                  marginTop: '3.5rem', 
                  marginBottom: '6rem' 
                }}
              >
                I'm a passionate developer specializing in building modern web applications.
                I love creating intuitive and performant user experiences with clean code.
                
              </Typography>
              <Button 
                variant="outlined" 
                color="primary" 
                className="contact-button"
                component={Link}
                to="/contact"
              >
                Reach Out To Me
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12} lg={6} className="image-container">
            <img 
              src="/assets/photo.png" 
              alt="Profile Picture" 
              className="profile-image"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection; 