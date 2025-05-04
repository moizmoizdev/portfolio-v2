import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper
} from '@mui/material';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Simulate submission
    setTimeout(() => {
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <Box className="contact-section">
      <Container maxWidth="lg">
        <Typography variant="h2" className="contact-title" gutterBottom>
          Contact Me
        </Typography>
        
        <Typography variant="body1" className="contact-subtitle" paragraph>
          Have a question or want to work together? Feel free to reach out to me using the form below.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper elevation={3} className="contact-form-container">
              {formSubmitted && (
                <Box mb={3} p={2} bgcolor="rgba(76, 175, 80, 0.1)" borderRadius={1}>
                  <Typography variant="body1" color="success.main">
                    Thank you for your message! I'll get back to you as soon as possible.
                  </Typography>
                </Box>
              )}
              
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Box className="form-field">
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Box className="form-field">
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Box className="form-field">
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Box className="form-field">
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        variant="outlined"
                        multiline
                        rows={4}
                      />
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      className="form-button"
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper elevation={3} className="contact-form-container">
              <Typography variant="h5" gutterBottom>
                Contact Information
              </Typography>
              
              <Box mt={3}>
                <Typography variant="body1" gutterBottom>
                  <strong>Email:</strong>
                </Typography>
                <Typography variant="body2" paragraph>
                  your.email@example.com
                </Typography>
                
                <Typography variant="body1" gutterBottom>
                  <strong>Location:</strong>
                </Typography>
                <Typography variant="body2" paragraph>
                  Lahore, Pakistan
                </Typography>
                
                <Typography variant="body1" gutterBottom>
                  <strong>Social:</strong>
                </Typography>
                <Typography variant="body2">
                  Connect with me on LinkedIn, GitHub, or Twitter
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 