import React, { props, useEffect, useState } from 'react'

function MsMainPic() {
  //scroll定位　↓↓↓
  function ScrollToOrder() {
    window.scrollTo({
      top: 1100,
      left: 0,
      behavior: 'smooth',
    })
  }
  //scroll定位　↑↑↑
  return (
    <>
      <div
        className=" row d-flex flex-column justify-content-center align-items-center fff-ms-web"
        style={{
          backgroundImage: 'url(http://localhost:3015/img/fff/Kumo.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize:'cover'
        }}
      >
        <img
        className='col'
          src="http://localhost:3015/img/fff/newMsMainPic.gif"
          alt=""
          style={{ maxWidth: '1200px' }}
        />
        <a
          style={{ marginBottom: '80px' }}
          className="btn-yello txt-cap lll-cursor"
          onClick={() => {
            ScrollToOrder()
          }}
        >
          scroll
        </a>
      </div>
      <div></div>
    </>
  )
}

export default MsMainPic
