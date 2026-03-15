import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';

const Blog = () => {
    return (
        <Box sx={{ minHeight: '100vh', background: '#f0f2f5', pt: 12, pb: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="h2" fontWeight="800" align="center" mb={6}>The Trader's Journal</Typography>
                <Grid container spacing={4}>
                    {[1, 2, 3].map((post) => (
                        <Grid item xs={12} md={4} key={post}>
                            <Card sx={{ borderRadius: 4 }}>
                                <Box sx={{ height: 200, bgcolor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <ArticleIcon sx={{ fontSize: 60, color: '#999' }} />
                                </Box>
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold">Market Recap #{post}</Typography>
                                    <Typography variant="body2" color="textSecondary" mt={1}>
                                        Weekly analysis of major currency pairs and upcoming economic events...
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Blog;
