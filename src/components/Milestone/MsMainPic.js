import React, { props, useEffect, useState } from 'react'

function MsMainPic() {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center fff-ms-web"
        
      >
        <img src="http://localhost:3015/img/fff/msMainPic.png" alt="" style={{ maxWidth: '1000px'}} />

      </div>
      <div>
        <button className="p1-scroll-btn mx-auto d-flex align-items-center">
          &nbsp; scroll
        </button>
      </div>
    </>
  )
}

export default MsMainPic
