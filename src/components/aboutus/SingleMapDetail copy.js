import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

const mapStyles = {
  width: '100%',
  height: '25vh',
}

export class SingleMapDetail extends Component {
  static defaultProps = {
    lat: 25.0259029,
    lng: 121.5703875,
  }

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }

  render() {
    //console.log(this.props)
    return (
      <Map
        google={this.props.google}
        containerStyle={{
          width: '100%',
          height: '250px',
          position: 'relative',
        }}
        zoom={17}
        mapTypeControl={false}
        scaleControl={false}
        streetViewControl={false}
        fullscreenControl={false}
        style={mapStyles}
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.lng,
        }}
        onClick={this.onMapClicked}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'物件位置'}
          position={{ lat: this.props.lat, lng: this.props.lng }}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.props.infoTitle}</h1>
            <p>{this.props.infoContent}</p>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyANEATk09b9fvkHO5mw_wa7FycnZ1yXW0c',
  language: 'zh-TW',
})(SingleMapDetail)
