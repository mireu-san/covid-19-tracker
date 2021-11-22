import React from 'react'
import './Map.css'
import { MapContainer as LeafletMap, TileLayer } from 'react-leaflet';

function Map({ center, zoom }) {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
            </LeafletMap>
        </div>
    )
}

 export default Map
