import React, { props } from 'react'

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
      <div className="row fff-ms-mobo d-flex justify-content-center align-items-center">
        <div id="howToGetPoints" className="fff-btn-mobo-style"  onClick={()=>{props.setMoboMsPage2(false)}}>
            {/* 在infoBar中只會設定關閉第二頁 所以不用傳入moboMsPage2 的值*/}
          回前頁
        </div>
      </div>
      
    </>
  )
}

export default MsMoboPointInfo
