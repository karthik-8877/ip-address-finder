import React, { useState } from 'react'
import {
  Container, Typography, Box, TextField, Button,
  CircularProgress, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, TableFooter, TablePagination, Grid, Alert
} from '@mui/material'
import axios from 'axios'

function PortPage() {
  const [host, setHost] = useState('')
  const [port, setPort] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [portsData, setPortsData] = useState([])

  const handlePortCheck = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await axios.get(`https://api.hackertarget.com/nmap/?q=${host}&port=${port}`)
      setPortsData([
        ...portsData,
        {
          host: host,
          port: port,
          status: response.data.includes('open') ? 'Open' : 'Closed'
        }
      ])
    } catch (err) {
      setError('Failed to check port.')
    }
    setLoading(false)
  }

  return (
    <Container>
      <Box textAlign="center" mt={5}>
        <Typography variant="h4" gutterBottom>Port Check</Typography>

        {/* Input Fields */}
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6}>
            <TextField
              label="Enter Host (IP or Domain)"
              variant="outlined"
              fullWidth
              value={host}
              onChange={(e) => setHost(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Enter Port"
              variant="outlined"
              type="number"
              fullWidth
              value={port}
              onChange={(e) => setPort(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>

        {/* Port Check Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handlePortCheck}
          sx={{ mb: 3 }}
          disabled={loading}
        >
          Check Port
        </Button>

        {/* Loading & Error Handling */}
        {loading && <CircularProgress sx={{ mt: 3 }} />}
        {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}

        {/* Table Display */}
        <TableContainer component={Paper} sx={{ mt: 4 }}>
          <Table aria-label="Port Check Results">
            <TableHead>
              <TableRow>
                <TableCell><strong>Host</strong></TableCell>
                <TableCell><strong>Port</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {portsData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.host}</TableCell>
                  <TableCell>{row.port}</TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  )
}

export default PortPage
