import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>

class simpleMealMap extends Component {
  static defaultProps = {
    center: { lat: 25.03632068467027, lng: 121.54365687264495 },
    zoom: 11,
  }

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={525.03632068467027}
          lng={121.54365687264495}
          text={'極簡煮易'}
        />
      </GoogleMapReact>
    )
  }
}

export default simpleMealMap

//https://tomchentw.github.io/react-google-maps/#events/event-closure

//http://jartto.wang/2017/05/18/use-google-map-in-react/

//https://www.npmjs.com/package/@react-google-maps/api

//https://github.com/google-map-react/google-map-react/issues/704

//https://b97201019.medium.com/%E7%94%A8react%E4%BE%86%E8%A9%A6%E5%81%9A%E7%95%AB%E9%9D%A2%E6%A9%AB%E5%90%91%E7%A7%BB%E5%8B%95%E6%95%88%E6%9E%9C-35243d6fb9e1

//https://codesandbox.io/search?refinementList%5Btemplate%5D=&refinementList%5Bnpm_dependencies.dependency%5D%5B0%5D=react-collapse&page=3&configure%5BhitsPerPage%5D=12
