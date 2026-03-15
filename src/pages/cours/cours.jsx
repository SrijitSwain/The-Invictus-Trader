import React from 'react';
import { Box, Typography, Container, Card, CardContent, Grid, Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Cours = () => {
    const courses = [
        { title: 'Crypto Basics', level: 'Beginner' },
        { title: 'Advanced Forex', level: 'Pro' },
        { title: 'Stock Analysis', level: 'Intermediate' }
    ];

    return (
        <Box sx={{ minHeight: '100vh', background: '#F5F7FA', pt: 12, pb: 6 }}>
            <Container maxWidth="lg">
                <Box textAlign="center" mb={6}>
                    <SchoolIcon color="primary" sx={{ fontSize: 50, mb: 1 }} />
                    <Typography variant="h3" fontWeight="800" color="textPrimary">
                        Our Trading Courses
                    </Typography>
                </Box>
                <Grid container spacing={4}>
                    {courses.map((course, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card elevation={4} sx={{ borderRadius: 4, transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-10px)' } }}>
                                <CardContent sx={{ p: 4 }}>
                                    <Typography variant="overline" color="primary" fontWeight="bold">
                                        {course.level}
                                    </Typography>
                                    <Typography variant="h5" fontWeight="700" mt={1} mb={2}>
                                        {course.title}
                                    </Typography>
                                    <Button variant="outlined" fullWidth color="primary">View Course</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Cours;
