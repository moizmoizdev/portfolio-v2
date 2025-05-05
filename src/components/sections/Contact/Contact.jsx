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
import { usePageTitle } from '../../../context/PageTitleContext';
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
  const { pageTitle } = usePageTitle();

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
          {pageTitle}
        </Typography>
        
        <Typography variant="body1" className="contact-subtitle" paragraph>
          Have a question or want to work together? Feel free to reach out to me using the form below.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ flex: '1 1 auto', width: { xs: '100%', md: '66.666%' } }}>
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
                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, mb: 3 }}>
                        {/* Name field */}
                        <Box sx={{ flex: 1 }}>
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
                        
                        {/* Email field */}
                        <Box sx={{ flex: 1 }}>
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
                      </Box>
                      
                      {/* Subject field */}
                      <Box sx={{ mb: 3 }}>
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
                      
                      {/* Message field (full width, its own row) */}
                      <Box sx={{ mb: 3 }}>
                        <Field
                          as={TextField}
                          fullWidth
                          label="Message"
                          name="message"
                          variant="outlined"
                          multiline
                          rows={3}
                          error={touched.message && Boolean(errors.message)}
                          helperText={touched.message && errors.message}
                          className="message-field"
                        />
                      </Box>
                      
                      {/* Submit button */}
                      <Box>
                        <Button
                          type="submit"
                          variant="contained"
                          className="form-button"
                          disabled={isSubmitting}
                          fullWidth
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </Box>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Paper>
          </Box>
          
          <Box sx={{ flex: '1 1 auto', width: { xs: '100%', md: '33.333%' } }}>
            <Paper elevation={3} className="contact-form-container">
              <Typography variant="h5" className="contact-info-title" gutterBottom>
                Contact Information
              </Typography>
              
              <Box mt={3}>
                <Box className="contact-info-item">
                  <Typography variant="body1" className="contact-info-label" gutterBottom>
                    Email
                  </Typography>
                  <Typography variant="body2" className="contact-info-value" paragraph>
                    contact@moizmoiz.com
                  </Typography>
                </Box>
                
                <Box className="contact-info-item">
                  <Typography variant="body1" className="contact-info-label" gutterBottom>
                    Location
                  </Typography>
                  <Typography variant="body2" className="contact-info-value" paragraph>
                    Lahore, Pakistan
                  </Typography>
                </Box>
                
                <Box className="contact-info-item">
                  <Typography variant="body1" className="contact-info-label" gutterBottom>
                    Social
                  </Typography>
                  <Typography variant="body2" className="contact-info-value">
                    <a href="https://www.linkedin.com/in/moizmoiz/" target="_blank" rel="noopener noreferrer">Connect with me on LinkedIn</a>
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact; 