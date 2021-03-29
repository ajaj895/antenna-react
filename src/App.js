import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import RadioMap from "./components/RadioMap";

/*
var mymap = L.map('mapid').setView([40.458,-90.672], 13); // County clerk building in Macomb IL
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYWphajg5NSIsImEiOiJja21zbzEybGQwanI1Mm5vNDE5bWZzd2R1In0.tY8RS0zBsUY2Mda-QbuxfQ'
      }).addTo(mymap);

      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
*/


function App(){
    return (
        <div className="App">
            <Navbar />
            <RadioMap />
            
            
        </div>
    );
}

export default App;