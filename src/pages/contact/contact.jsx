import React from 'react';
import { Box, Typography, Container, TextField, Button, Paper } from '@mui/material';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const Contact = () => {
    return (
        <Box sx={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #f8fafc, #e2e8f0)', pt: 12, pb: 6 }}>
            <Container maxWidth="sm">
                <Paper elevation={10} sx={{ p: 4, borderRadius: 6, textAlign: 'center' }}>
                    <ContactSupportIcon color="primary" sx={{ fontSize: 60, mb: 2 }} />
                    <Typography variant="h4" fontWeight="800" gutterBottom>Get In Touch</Typography>
                    <Typography variant="body1" color="textSecondary" mb={4}>
                        Have questions? Our support team is here to help you 24/7.
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField margin="normal" required fullWidth label="Full Name" />
                        <TextField margin="normal" required fullWidth label="Email Address" />
                        <TextField margin="normal" required fullWidth label="Message" multiline rows={4} />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, py: 1.5, borderRadius: 2 }}
                        >
                            Send Message
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default Contact;
