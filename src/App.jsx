import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, createTheme, IconButton, AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import IpAddressPage from './components/IPAddressPage';
import PortPage from './components/PortPage';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: 'all 0.4s ease',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* AppBar with App Name and Home Button */}
      <AppBar position="sticky" color="primary" sx={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
          {/* App Title */}
          <Typography variant="h6">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              IP & Port Tools
            </Link>
          </Typography>

          {/* Home Button + Dark Mode Toggle */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              <IconButton color="inherit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z" />
                </svg>
              </IconButton>
            </Link>

            {/* Dark Mode Toggle */}
            <IconButton onClick={toggleTheme} color="inherit">
              <span
                style={{
                  display: 'inline-block',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: darkMode
                    ? 'linear-gradient(45deg, #ffcc00, #ff9900)'
                    : 'radial-gradient(circle at center, #333 40%, transparent 41%)',
                  border: darkMode ? '2px solid #fff' : '2px solid #222',
                  transition: 'all 0.3s ease-in-out',
                  boxShadow: darkMode
                    ? '0 0 5px 2px rgba(255, 255, 0, 0.5)'
                    : '0 0 2px rgba(0, 0, 0, 0.2)',
                }}
              ></span>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ip-address" element={<IpAddressPage />} />
        <Route path="/ports" element={<PortPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
