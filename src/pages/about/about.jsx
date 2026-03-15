import React from 'react';
import { Box, Typography, Container, Paper, Grid } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const About = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #2D3436 0%, #000000 100%)',
                color: '#fff',
                pt: 10
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <InfoIcon sx={{ fontSize: 60, mb: 2, color: '#00CEC9' }} />
                        <Typography variant="h2" sx={{ fontWeight: 700, mb: 3 }}>
                            Our Vision
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.8, opacity: 0.9 }}>
                            The Invictus Trader was founded on the principle of financial empowerment. We provide the tools, education, and community needed to navigate world markets with confidence and precision.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={24} sx={{ p: 4, bgcolor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', color: '#fff', borderRadius: 4, border: '1px solid rgba(255,255,255,0.1)' }}>
                            <Typography variant="h4" gutterBottom sx={{ color: '#00CEC9' }}>
                                Why Choose Us?
                            </Typography>
                            <Typography variant="body2" paragraph>
                                - 10+ Years of Market Experience
                            </Typography>
                            <Typography variant="body2" paragraph>
                                - Real-time Data Analytics
                            </Typography>
                            <Typography variant="body2">
                                - Dedicated Support Community
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
