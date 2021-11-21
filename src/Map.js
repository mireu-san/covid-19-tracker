import React from 'react'
import { MapContainer as LeafletMap, TileLayer } from 'react-leaflet';

function Map() {
    return (
        <div className="map">
            <h1>this is Map</h1>
            <LeafletMap>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
            </LeafletMap>
        </div>
    )
}

 export default Map
