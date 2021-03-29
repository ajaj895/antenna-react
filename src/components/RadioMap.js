import { render } from '@testing-library/react';
import './RadioMap.css'
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

class RadioMap extends React.Component{
    constructor() {
        super();
        this.state = {
            lat: 40.458,
            lng: -90.672,
            zoom: 13,
        };
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <div className="mapid" >
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
                <MapContainer center={position} zoom={this.state.zoom} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    <Marker position={position}>
                        <Popup>
                            <span>An example radio station.<br/> Data goes here.</span>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        )
    }
}

//Exports the class above, just like the Navbar.js
export default RadioMap