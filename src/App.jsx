import React, { useState } from 'react';
import { 
    Box, 
    AppBar, 
    Toolbar, 
    Typography, 
    Button, 
    Container, 
    IconButton, 
    Drawer, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemText,
    useTheme,
    useMediaQuery 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { Link, useLocation } from 'react-router-dom';
import { useColorMode } from './ThemeContext';

const App = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { toggleColorMode, mode } = useColorMode();

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Cours', path: '/cours' },
        { label: 'Service', path: '/service' },
        { label: 'Blog', path: '/blog' },
        { label: 'Link', path: '/link' },
        { label: 'Contact', path: '/contact' },
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: '100%', bgcolor: 'background.paper', color: 'text.primary' }}>
            <Typography variant="h6" sx={{ my: 2, fontWeight: 800, letterSpacing: 2 }}>
                INVICTUS
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.path} disablePadding>
                        <ListItemButton 
                            component={Link} 
                            to={item.path} 
                            sx={{ 
                                textAlign: 'center',
                                color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                                '& .MuiTypography-root': {
                                    fontWeight: location.pathname === item.path ? 700 : 400,
                                }
                            }}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box>
            <AppBar 
                position="fixed" 
                sx={{ 
                    bgcolor: mode === 'light' ? 'rgba(255,255,255,0.9)' : 'rgba(10, 15, 30, 0.9)', 
                    backdropFilter: 'blur(12px)', 
                    boxShadow: 'none',
                    color: 'text.primary',
                    borderBottom: mode === 'light' ? '1px solid rgba(0,0,0,0.05)' : '1px solid rgba(255,255,255,0.05)'
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 70 }}>
                        <Typography
                            variant="h5"
                            component={Link}
                            to="/"
                            sx={{
                                fontWeight: 800,
                                color: 'text.primary',
                                textDecoration: 'none',
                                letterSpacing: 3,
                                textTransform: 'uppercase',
                                fontStyle: 'normal'
                            }}
                        >
                            INVICTUS
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {/* Desktop Menu */}
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                                {navItems.map((item) => (
                                    <Box key={item.path} sx={{ position: 'relative' }}>
                                        <Button
                                            component={Link}
                                            to={item.path}
                                            sx={{
                                                color: location.pathname === item.path ? 'text.primary' : 'text.secondary',
                                                fontWeight: location.pathname === item.path ? 700 : 500,
                                                textTransform: 'none',
                                                fontSize: '0.95rem',
                                                px: 2,
                                                '&:hover': { color: 'text.primary', bgcolor: 'transparent' }
                                            }}
                                        >
                                            {item.label}
                                        </Button>
                                        {location.pathname === item.path && (
                                            <Box 
                                                sx={{ 
                                                    position: 'absolute', 
                                                    bottom: 8, 
                                                    left: '20%', 
                                                    right: '20%', 
                                                    height: 2, 
                                                    bgcolor: '#38BDF8', // Blue underline like in the image
                                                    borderRadius: 1,
                                                    boxShadow: '0 0 10px rgba(56, 189, 248, 0.5)'
                                                }} 
                                            />
                                        )}
                                    </Box>
                                ))}
                            </Box>

                            <Box sx={{ ml: 2, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                {/* Theme Toggle Button */}
                                <IconButton onClick={toggleColorMode} color="inherit" size="small">
                                    {mode === 'dark' ? (
                                        <WbSunnyIcon sx={{ color: '#FFD700', fontSize: 20 }} />
                                    ) : (
                                        <NightsStayIcon sx={{ color: '#5C6BC0', fontSize: 20 }} />
                                    )}
                                </IconButton>

                                {/* Mobile Menu Icon */}
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{ display: { md: 'none' } }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                anchor="right"
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 260 },
                }}
            >
                {drawer}
            </Drawer>

            <Toolbar sx={{ height: 70 }} />
        </Box>
    );
};

export default App;
