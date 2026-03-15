import React from 'react';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

const LinkPage = () => {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#0F172A', color: '#fff', pt: 10 }}>
            <Container maxWidth="sm">
                <Box textAlign="center" mb={4}>
                    <LinkIcon sx={{ fontSize: 60, color: '#38BDF8' }} />
                    <Typography variant="h3" fontWeight="bold">Important Links</Typography>
                </Box>
                <Stack spacing={2}>
                    <Button variant="outlined" size="large" sx={{ borderColor: '#38BDF8', color: '#38BDF8' }}>TradingView Charts</Button>
                    <Button variant="outlined" size="large" sx={{ borderColor: '#38BDF8', color: '#38BDF8' }}>Economic Calendar</Button>
                    <Button variant="outlined" size="large" sx={{ borderColor: '#38BDF8', color: '#38BDF8' }}>MT5 Web Terminal</Button>
                </Stack>
            </Container>
        </Box>
    );
};

export default LinkPage;
