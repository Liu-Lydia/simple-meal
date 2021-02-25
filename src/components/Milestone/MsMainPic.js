import React, { props, useEffect, useState } from 'react'

function MsMainPic() {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center fff-ms-web"
        style={{
          height: '600px',
          background: 'url("http://localhost:3015/img/fff/Neon.svg")',
        }}
      >
        <img src="http://localhost:3015/img/fff/Kumo.svg" alt="" />

        <h5 className="animate__animated animate__bounce">我是佔空間的東西</h5>
      </div>
      <div
        className="d-flex justify-content-center align-items-center fff-ms-web"
        style={{ height: '50px' }}
      >
        <button className="p1-scroll-btn mx-auto d-flex align-items-center">
          &nbsp; scroll
        </button>
      </div>
    </>
  )
}

export default MsMainPic
