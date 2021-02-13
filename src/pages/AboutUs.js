import SingleMapDetail from '../components/aboutus/SingleMapDetail'
import GeocodeSearch from '../components/aboutus/GeocodeSearch'
import { useState, useEffect } from 'react'

function GoogleMapDemo() {
  // 預設的中心點
  const [lat, setLat] = useState(23.642985361265722)
  const [lng, setLng] = useState(120.9954084799164)
  const [zoom, setZoom] = useState(8)

  useEffect(() => {
    console.log(lat)
  }, [lat])

  useEffect(() => {
    console.log(lng)
  }, [lng])

  return (
    <>

      <GeocodeSearch setLat={setLat} setLng={setLng}/>
      <SingleMapDetail
        lat={lat}
        lng={lng}
        zoom={zoom}
        infoTitle="測試"
        infoContent="this is a sample string"
      />

      {/* <h2>捷運科技大樓站</h2>
      <SingleMapDetail
        lat={25.026312}
        lng={121.543439}
        infoTitle="捷運科技大樓站"
        infoContent="this is a sample string"
      /> */}
    </>
  )
}

export default GoogleMapDemo
