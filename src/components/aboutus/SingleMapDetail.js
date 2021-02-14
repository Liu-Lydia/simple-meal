import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

// 申請的google api key
import { apiKey } from '../../config/googleApi'

// 地圖大小
const mapStyles = {
  width: '100%',
  height: '70vh',
}

export class SingleMapDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    console.log('類別型父傳子', props)

  }

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

  onMapReady = (mapProps, map) => {
    this.map = map
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      'componentDidUpdate',
      prevProps.lat,
      this.props.lat,
      prevProps.lng,
      this.props.lng
    )

    // 產生只有勾選的陣列
    const filtertrue = this.props.todos.filter(function (item, index, array) {
      return item.completed === true
    })

    console.log('filtertrue')
    console.log(filtertrue)

    if (prevProps.google !== this.props.google) {
      this.loadMap()
    }

    if (prevProps.lat !== this.props.lat || prevProps.lng !== this.props.lng) {
      this.recenterMap()
    }
  }

  recenterMap = () => {
    const map = this.map
    const curr = { lat: this.props.lat, lng: this.props.lng }

    const google = this.props.google
    const maps = google.maps

    console.log(this.props, this.map)

    if (map) {
      //console.log(this.markerOne.current.marker)
      let center = new maps.LatLng(curr.lat, curr.lng)
      map.panTo(center)
      map.setZoom(12)

      //console.log(this.infoWindowOne.current.infowindow)
      // let markerCurrent = this.markerOne.current.marker
      // let infowindowCurrent = this.infoWindowOne.current.infowindow
      // infowindowCurrent.open(map, markerCurrent)
    }
  }

  render() {
    console.log(this.props)
    const { todos } = this.props
    console.log('todos:', todos)
    return (
      <>
        <Map
          google={this.props.google}
          containerStyle={{
            width: '100%',
            height: '250px',
            position: 'relative',
          }}
          zoom={8}
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
          onReady={this.onMapReady}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={'物件位置'}
            position={{ lat: this.props.lat, lng: this.props.lng }}
          />
          {this.props.todos
            .filter(function (item, index, array) {
              return item.completed === true
            })
            .map((item, index) => {
              return (
                <Marker
                  key={item.id}
                  title={'The marker`s title will appear as a tooltip.'}
                  name={'SOMA'}
                  position={{ lat: item.lat, lng: item.lng }}
                />
              )
            })}
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
      </>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: apiKey,
  language: 'zh-TW',
})(SingleMapDetail)
