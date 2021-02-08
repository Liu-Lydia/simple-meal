import React, { Component } from 'react'
// import { Key } from ''  //引入API key(Key那隻要.gitignore***)
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>

class simpleMealMap extends Component {
  //沒有父傳, 則用defaultProps中的值
  static defaultProps = {
    center: { lat: 25.03632068467027, lng: 121.54365687264495 },
    zoom: 14,
  }

  render() {
    return (
      <GoogleMapReact
        // bootstrapURLKeys={{ key: Key }} //API Key***
        defaultCenter={this.props.center} //預設地圖視角
        defaultZoom={this.props.zoom} //預設縮放視角
      >
        <AnyReactComponent
          lat={525.03632068467027} //緯度
          lng={121.54365687264495} //經度
          text={'極簡煮易'} //這個Marker的文字
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

//https://www.coderbridge.com/series/a98833b7bf4d43d38c7d541cf4cbe1b1/posts/c323dab93cad46f8bb632792c056ca66

//http://well-being-ng.net/wiki1231/index.php?title=Google%E5%9C%B0%E5%9C%96/API_KEY

//https://levelup.gitconnected.com/reactjs-google-maps-with-custom-marker-ece0c7d184c4
