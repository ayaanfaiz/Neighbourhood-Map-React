import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
} from "google-maps-react";
import React, { Component } from "react";
import Info from './Info';

const API = 'https://api.foursquare.com/v2/venues/'
const AuthURL = '?&client_id=OQDS4CPELU4LLHPFADU1CQRMF0WPCH2APOUQBFAOLBW1AQQZ&client_secret=0XWNSR4AHOD5IRHPW0DC3BNT1TMARJCQAYL34ZVMYESS1Q1D&v=20180423'
const venue = [
  '435c2400f964a52012291fe3',
  '428a8580f964a52083231fe3',
  '43fe1ba4f964a520f82f1fe3',
  '3fd66200f964a52053ea1ee3',
  '43fe1ba4f964a520f82f1fe3',
  '4b53367af964a5208e9227e3'
]

export class MapContainer extends Component {
  constructor(){
    super();
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      response: [],
      ven: []
    };
  }

  componentDidMount(){
    var res = []
    venue.forEach((value) => {
        fetch(API + value + AuthURL)
        .then(response => response.json()).then(value => res.push(value.response.venue)
    )});
    this.setState({ ven: res })
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
  render() {
     console.log(this.state.ven);
    return (
      <div>
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 40.759011,
          lng: -73.984472
        }}
        zoom={15}
        onClick={this.onMapClicked}
      >
        <Marker
          onClick={this.onMarkerClick}
          onMouseover={this.onMouseoverMarker}
          title={"The marker`s title will appear as a tooltip."}
          name={"PlayStation Theater"}
          position={{ lat: 40.757888, lng: -73.986247 }}
          venue={
            (this.state.ven[0]) && (
              console.log(this.state.ven[2].name)
            )
          }
        />
        <Marker
          onClick={this.onMarkerClick}
          onMouseover={this.onMouseoverMarker}
          name={"Hard Rock Cafe"}
          position={{ lat: 40.756945, lng: -73.98659 }}
        />

        <Marker
          onClick={this.onMarkerClick}
          onMouseover={this.onMouseoverMarker}
          name={"The Museum of Modern Art"}
          position={{ lat: 40.761447, lng: -73.977642 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          onMouseover={this.onMouseoverMarker}
          name={"The Monkey Bar"}
          position={{ lat: 40.759903, lng: -73.973222 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          onMouseover={this.onMouseoverMarker}
          name={"Barnes & Noble"}
          position={{ lat: 40.755742, lng: -73.978994 }}

        />
        <Marker
          onClick={this.onMarkerClick}
          onMouseover={this.onMouseoverMarker}
          name={"New York City Center"}
          position={{ lat: 40.763836, lng: -73.97953 }}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>

      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAUhvdkvkCr0yth1dC3MvO9i1nrNjZU6sg"
})(MapContainer);
