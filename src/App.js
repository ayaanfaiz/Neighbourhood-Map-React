import React, { Component } from 'react';
import MapContainer from './MapContainer.js';
import MenuBar from './MenuBar'

class App extends Component {

 

  render() {
    return (
      <div >

      <MapContainer />
      <MenuBar />

      </div>
    );
  }
}

export default App;
