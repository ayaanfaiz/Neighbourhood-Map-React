import React, { Component } from "react";
import MapContainer from "./MapContainer.js";
import MenuBar from "./MenuBar";

const API = 'https://api.foursquare.com/v2/venues/'
const AuthURL = '?&client_id=OQDS4CPELU4LLHPFADU1CQRMF0WPCH2APOUQBFAOLBW1AQQZ&client_secret=0XWNSR4AHOD5IRHPW0DC3BNT1TMARJCQAYL34ZVMYESS1Q1D&v=20180423'
const venue = [
  '4b53367af964a5208e9227e3',
  '428a8580f964a52083231fe3',
  '56e333e0498e29dd9f957fb4',
  '3fd66200f964a52053ea1ee3',
  '43fe1ba4f964a520f82f1fe3',
  '435c2400f964a52012291fe3'
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlace: {},
      showingInfoWindow: false,
      activeMarker: {}
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  componentDidMount(){
    var res = []
    venue.forEach((value) => {
        fetch(API + value + AuthURL)
        .then(response => response.json()).then(value => res.push(value.response.venue)
    )});
    this.setState({ ven: res,
                    photo: 'hey'})
                    console.log(this.state.ven);
    }
  render() {
    console.log(this.state.selectedPlace)
    return (
      <div>
        <MapContainer
          ven={this.state.ven}
          selectedPlace={this.state.selectedPlace}
          onMarkerClick={this.onMarkerClick}
          activeMarker={this.state.activeMarker}
          showingInfoWindow={this.state.showingInfoWindow}
        />

        <MenuBar
          selectedPlace={this.state.selectedPlace}
          onMarkerClick={this.onMarkerClick}
          activeMarker={this.state.activeMarker}
          showingInfoWindow={this.state.showingInfoWindow}
        />
      </div>
    );
  }
}

export default App;
