import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
} from "google-maps-react";
import React, { Component } from "react";
import Info from './Info';



export class MapContainer extends Component {
  constructor(){
    super();
    this.state = {
      //selectedPlace: {},
      response: [],
      photo: 'hi'
    };
  }

componentDidMount(){
  this.setState({ photo: 'hey'})
}


  render() {
    console.log(this.props.ven);
    return (
      <div>
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 40.759011,
          lng: -73.984472
        }}
        zoom={15}
        onClick={this.props.onMapClicked}
      >
      <Marker
        onClick={this.props.onMarkerClick}
        onMouseover={this.onMouseoverMarker}
        name={"The Museum of Modern Art"}
        position={{ lat: 40.761447, lng: -73.977642 }}
        photo={(this.state.photo === 'hey') ? (
          this.props.ven.filter((place) =>
          (place.name === "The Museum of Modern Art (MOMA) - Art Lab")
        )) : 'hi'}
      />
      <Marker
        onClick={this.props.onMarkerClick}
        onMouseover={this.onMouseoverMarker}
        name={"New York City Center"}
        position={{ lat: 40.763836, lng: -73.97953 }}
        photo={(this.state.photo === 'hey') ? (
          this.props.ven.filter((place) =>
          (place.name === "New York City Center")
        )) : 'hi'}
      />
      <Marker
        onClick={this.props.onMarkerClick}
        onMouseover={this.onMouseoverMarker}
        name={"The Monkey Bar"}
        position={{ lat: 40.759903, lng: -73.973222 }}
        photo={(this.state.photo === 'hey') ? (
          this.props.ven.filter((place) =>
          (place.name === "Monkey Bar")
        )) : 'hi'}
      />
        <Marker
          onClick={this.props.onMarkerClick}
          onMouseover={this.onMouseoverMarker}
          title={"The marker`s title will appear as a tooltip."}
          name={"PlayStation Theater"}
          position={{ lat: 40.757888, lng: -73.986247 }}
          photo={(this.state.photo === 'hey') ? (
            this.props.ven.filter((place) =>
            (place.name === "PlayStation Theater")
          )) : 'hi'}
        />
        <Marker
          onClick={this.props.onMarkerClick}
          onMouseover={this.onMouseoverMarker}
          name={"Hard Rock Cafe"}
          position={{ lat: 40.756945, lng: -73.98659 }}
          photo={(this.state.photo === 'hey') ? (
            this.props.ven.filter((place) =>
            (place.name === "Hard Rock Cafe New York")
          )) : 'hi'}
        />

        <Marker
          onClick={this.props.onMarkerClick}
          onMouseover={this.onMouseoverMarker}
          name={"Barnes & Noble"}

          position={{ lat: 40.755742, lng: -73.978994 }}
          photo={(this.state.photo === 'hey') ? (
            this.props.ven.filter((place) =>
            (place.name === "Barnes & Noble")
          )) : 'hi'}

        />

        <InfoWindow
          marker={this.props.activeMarker}
          visible={this.props.showingInfoWindow}
        >

          <div>

            <h4>{this.props.selectedPlace.name}</h4>
            <img src={(this.props.selectedPlace.photo) && (this.props.selectedPlace.photo.length > 0) && (this.props.selectedPlace.photo[0].photos.groups[0].items[0].prefix + '200x200' + this.props.selectedPlace.photo[0].photos.groups[0].items[0].suffix)}/>
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
