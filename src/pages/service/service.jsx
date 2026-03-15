import React from 'react';
import { Box, Typography, Container, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SpeedIcon from '@mui/icons-material/Speed';

const Service = () => {
    return (
        <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', pt: 12, pb: 6 }}>
            <Container maxWidth="md">
                <Paper elevation={0} sx={{ p: 6, borderRadius: 8, bgcolor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                    <Typography variant="h3" fontWeight="800" align="center" gutterBottom>
                        Professional Services
                    </Typography>
                    <List sx={{ mt: 4 }}>
                        <ListItem sx={{ mb: 2 }}>
                            <ListItemIcon><TrendingUpIcon sx={{ color: '#fff', fontSize: 40 }} /></ListItemIcon>
                            <ListItemText 
                                primary={<Typography variant="h6" fontWeight="bold">Market Analysis</Typography>}
                                secondary={<Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>Daily reports across indices and forex.</Typography>}
                            />
                        </ListItem>
                        <ListItem sx={{ mb: 2 }}>
                            <ListItemIcon><PsychologyIcon sx={{ color: '#fff', fontSize: 40 }} /></ListItemIcon>
                            <ListItemText 
                                primary={<Typography variant="h6" fontWeight="bold">Psychology Mentoring</Typography>}
                                secondary={<Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>Master the mental game of trading.</Typography>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><SpeedIcon sx={{ color: '#fff', fontSize: 40 }} /></ListItemIcon>
                            <ListItemText 
                                primary={<Typography variant="h6" fontWeight="bold">Copy Trading</Typography>}
                                secondary={<Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>Automated trade execution for busy professionals.</Typography>}
                            />
                        </ListItem>
                    </List>
                </Paper>
            </Container>
        </Box>
    );
};

export default Service;
