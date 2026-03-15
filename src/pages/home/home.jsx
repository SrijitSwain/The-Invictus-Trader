import React from 'react';
import { Box, Typography, Container, Button, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const Home = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: isDark 
                    ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' 
                    : 'linear-gradient(135deg, #E0E7FF 0%, #F8FAFC 100%)',
                color: 'text.primary',
                textAlign: 'center',
                pt: 10
            }}
        >
            <Container maxWidth="md">
                <HomeIcon sx={{ fontSize: 80, mb: 2, color: 'primary.main' }} />
                <Typography variant="h1" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '3rem', md: '5rem' }, color: 'text.primary' }}>
                    Invictus Trader
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.8, fontWeight: 300, color: 'text.secondary' }}>
                    Master the markets with our elite trading platform and expert insights.
                </Typography>
                <Button 
                    variant="contained" 
                    size="large" 
                    sx={{ 
                        borderRadius: '30px',
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        boxShadow: 3
                    }}
                >
                    Get Started
                </Button>
            </Container>
        </Box>
    );
};

export default Home;
