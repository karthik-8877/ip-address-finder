import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Typography, Box, Button, useTheme } from '@mui/material'
import ThreeDEarth from './ThreeDEarth'

function HomePage() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const textColor = isDark ? 'white' : '#222'

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}
    >
      {/* 3D Earth Background */}
      <ThreeDEarth />

      {/* Foreground Content */}
      <Box
        textAlign="center"
        sx={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: textColor,
          p: 2,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to the IP & Port Info Tool
        </Typography>
        <Typography variant="h6" gutterBottom>
          Choose a page to get started
        </Typography>
        <Box mt={3}>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginRight: 2 }}
            component={Link}
            to="/ip-address"
          >
            IP Address Lookup
          </Button>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/ports"
          >
            Port Info
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default HomePage
