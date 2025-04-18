import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function IPMap({ lat, lon, city }) {
  return (
    <MapContainer center={[lat, lon]} zoom={10} style={{ height: '300px', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[lat, lon]}>
        <Popup>{city}</Popup>
      </Marker>
    </MapContainer>
  )
}

export default IPMap
