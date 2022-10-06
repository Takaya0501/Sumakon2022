import Leaflet from 'leaflet';
import React, { Component } from 'react';
// import './App.css';
import 'leaflet/dist/leaflet.css';
import SimpleExample from 'index';

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/';

class App extends Component {
  render() {
    return <SimpleExample />;
  }
}

export default App;
