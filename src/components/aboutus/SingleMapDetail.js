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

  // 預設關閉InfoWindow
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }

  // 點標籤打開InfoWindow
  // this
  onMarkerClick = (props, marker, e) => {
    console.log('props:', props)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      imgsrc: 'http://localhost:3015/img/aboutus/' + props.num+'.jpg',
    })
  }

  // InfoWindow開啟時點地圖其他地方關閉InfoWindow
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
    // const { todos } = this.props
    // console.log('todos:', todos)

    

    
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
          {/* <Marker
            onClick={this.onMarkerClick}
            name={'物件位置'}
            position={{ lat: this.props.lat, lng: this.props.lng }}
          /> */}
          {/* 地圖mark */}
          {this.props.todos
            .filter(function (item, index, array) {
              return item.completed === true
            })
            .map((item, index) => {
              return (
                <Marker
                  key={item.id}
                  onClick={this.onMarkerClick}
                  title={'The marker`s title will appear as a tooltip.'}
                  // name={item.address}
                  address={item.address}
                  infoTitle={item.infoTitle}
                  tel={item.tel}
                  num={item.id}
                  // name="Dolores park"
                  position={{ lat: item.lat, lng: item.lng }}
                />
              )
            })}

          {/* <Marker name="Current location" onClick={this.onMarkerClick} /> */}

          {/* {todos.map((item, index) => {
            return (
              <InfoWindow
                key={item.id}
                marker={this.state.activeMarker}
                // 是否顯示InfoWindow
                visible={this.state.showingInfoWindow}
              >
                <div>
                  <h1>{item.infoTitle}</h1>
                  <p>{item.infoContent}</p>
                </div>
              </InfoWindow>
            )
          })} */}
          {/* <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{infoTitle}</h1>
              <p>{infoContent}</p>
            </div>
          </InfoWindow> */}

          <InfoWindow
            marker={this.state.activeMarker}
            onClose={this.onInfoWindowClose}
            visible={this.state.showingInfoWindow}
          >
            <div>
              {/* ??name???? */}
              <h6>
                {/* 第一次沒有 */}
                {this.state.selectedPlace && this.state.selectedPlace.infoTitle}
              </h6>
              <div className="xxx-190x135">
                <img
                  className="xxx-img100100"
                  // src={
                  //   'http://localhost:3015/img/aboutus/' +
                  //     this.state.selectedPlace &&
                  //   this.state.selectedPlace.num + '.jpg'
                  // }
                  src={
                    
                      this.state.imgsrc
                  }

                  alt=""
                />
              </div>
              <p className="txt-sub1">
                地址 : &nbsp;
                {this.state.selectedPlace && this.state.selectedPlace.address}
              </p>
              <p className="txt-sub1">
                電話 :&nbsp;
                {this.state.selectedPlace && this.state.selectedPlace.tel}
              </p>
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
