import React, { useState } from 'react'
import {
  Container, Typography, Box, TextField, Button,
  CircularProgress, Card, CardContent, Grid
} from '@mui/material'
import axios from 'axios'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

function IpAddressPage() {
  const [ip, setIp] = useState('')
  const [ipData, setIpData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleIPSearch = async () => {
    setLoading(true)
    setError('')
    setIpData(null)
    try {
      const response = await axios.get(`https://ipinfo.io/${ip}/json`)
      setIpData(response.data)
    } catch (err) {
      setError('Failed to fetch IP info.')
    }
    setLoading(false)
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: 5 }}>
      <Box textAlign="center" mb={5}>
        <Typography variant="h3" gutterBottom>
          IP Address Lookup
        </Typography>
        <Card sx={{ padding: 3 }}>
          <Box textAlign="center">
            <TextField
              label="Enter IP Address"
              variant="outlined"
              fullWidth
              value={ip}
              onChange={(e) => setIp(e.target.value)}
              sx={{ marginBottom: 3 }}
            />
            <Button 
              variant="contained" 
              onClick={handleIPSearch} 
              sx={{ marginTop: 1, padding: '10px 20px', fontSize: '16px' }}
              size="large"
            >
              Search
            </Button>
          </Box>
        </Card>

        {loading && <CircularProgress sx={{ mt: 3 }} />}
        {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}

        {ipData && (
          <Card sx={{ mt: 4, padding: 3 }}>
            <CardContent>
              <Typography variant="h5" color="primary" gutterBottom>IP Information</Typography>
              <Typography variant="h6">IP: {ipData.ip}</Typography>
              <Typography>City: {ipData.city}</Typography>
              <Typography>Region: {ipData.region}</Typography>
              <Typography>Country: {ipData.country}</Typography>
              <Typography>ISP: {ipData.org}</Typography>
              <Typography>Location: {ipData.loc}</Typography>
            </CardContent>
          </Card>
        )}

        {ipData && ipData.loc && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6">Map Showing Location:</Typography>
            <MapContainer
              center={ipData.loc.split(',').map((coord) => parseFloat(coord))}
              zoom={10}
              style={{ height: '300px', width: '100%', borderRadius: '8px', border: '1px solid #ddd' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
              />
              <Marker position={ipData.loc.split(',').map((coord) => parseFloat(coord))}>
                <Popup>
                  {ipData.city}, {ipData.region}, {ipData.country}
                </Popup>
              </Marker>
            </MapContainer>
          </Box>
        )}
      </Box>
    </Container>
  )
}

export default IpAddressPage
