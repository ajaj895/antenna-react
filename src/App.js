import React from 'react';
//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import LiveMap from "./components/Live-Map";
import RadioCatalog from './components/Radio-Catalog';
import RadioNearMe from "./components/Radio-Near-Me";

//import RadioMap from "./components/RadioMap";
//<RadioMap className='radiomap' />
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
    //const [data, setData] = React.useState(null);

    // NODE API function
    /*
    React.useEffect(() => {
        fetch("/sqltest")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);
    <p>{!data ? "Loading..." : data}</p>
    */

    return (
        <div className="App">
            <Router>
                <Navbar className='navbar' />
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/Live-Map" exact component={() => <LiveMap />} />
                    <Route path="/Radio-Catalog" exact component={() => <RadioCatalog />} />
                    <Route path="/Radio-Near-Me" exact component={() => <RadioNearMe />} />
                </Switch>

            </Router>
            
            
        </div>
    );
}

export default App;