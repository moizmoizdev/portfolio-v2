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
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Contact.css';

// Define validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  subject: Yup.string()
    .required('Subject is required')
    .min(5, 'Subject must be at least 5 characters'),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters')
});

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Initial form values
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  // Handle form submission
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    // In a real application, you would send the form data to a server
    console.log('Form values:', values);
    
    // Simulate server delay
    setTimeout(() => {
      setFormSubmitted(true);
      resetForm();
      setSubmitting(false);
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
                <Box className="success-message">
                  <Typography variant="body1">
                    Thank you for your message! I'll get back to you as soon as possible.
                  </Typography>
                </Box>
              )}
              
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, touched, errors }) => (
                  <Form>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <Box className="form-field">
                          <Field
                            as={TextField}
                            fullWidth
                            label="Name"
                            name="name"
                            variant="outlined"
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                          />
                        </Box>
                      </Grid>
                      
                      <Grid item xs={12} sm={6}>
                        <Box className="form-field">
                          <Field
                            as={TextField}
                            fullWidth
                            label="Email"
                            name="email"
                            variant="outlined"
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                          />
                        </Box>
                      </Grid>
                      
                      <Grid item xs={12}>
                        <Box className="form-field">
                          <Field
                            as={TextField}
                            fullWidth
                            label="Subject"
                            name="subject"
                            variant="outlined"
                            error={touched.subject && Boolean(errors.subject)}
                            helperText={touched.subject && errors.subject}
                          />
                        </Box>
                      </Grid>
                      
                      <Grid item xs={12}>
                        <Box className="form-field">
                          <Field
                            as={TextField}
                            fullWidth
                            label="Message"
                            name="message"
                            variant="outlined"
                            multiline
                            rows={4}
                            error={touched.message && Boolean(errors.message)}
                            helperText={touched.message && errors.message}
                          />
                        </Box>
                      </Grid>
                      
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          className="form-button"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
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