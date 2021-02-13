import React, { props } from 'react'
// 須從父親那邊接收“props”要引入{ props }，因為{ props }非extend default所以要{}包起來。

function MsMoboPointInfo(props) {
  return (
    <>
      <div
        className="row fff-ms-mobo d-flex justify-content-center align-items-center"
        style={{ marginBottom: '30px' }}
      >
        <div className="col d-flex justify-content-center align-items-center">
          <img
            src="http://localhost:3015/img/fff/fff-info-pic.png"
            className="fff-mobo-info-pic"
          ></img>
          <span className="fff-mobo-txt-info">Lydia Liu</span>
          <span className="fff-mobo-txt-info" style={{ marginLeft: '15px' }}>
            點數:
          </span>
          <span className="fff-mobo-txt-info" style={{ color: '#b9433b' }}>
            10000
          </span>
        </div>
        
      </div>
      
    </>
  )
}

export default MsMoboPointInfo
