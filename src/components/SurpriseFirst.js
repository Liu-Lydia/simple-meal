import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SurpriseFirst() {
  function ScrollToOrder() {
    window.scrollTo({
      top: 300,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
     
          {/* 第一版圖片 */}
          <div className="container-fluid">
            <div className="row">
              <div className="lll-first-picture-width">
                <div className="lll-first-picture"></div>
              </div>
            </div>
          </div>
          {/* 第一版文字 */}
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm lll-text-position">
                <div className="col-xl-6 lll-text-rwd">
                  <h2 className="m-0 lll-firstpage-title">驚喜廚房預約</h2>
                  <p className="txt-sub1 lll-detile-style">
                    <span className="lll-line">——</span>
                    　極簡煮易提供完善的場地與優良食材
                  </p>
                  <p className="m-0 txt-sub1 lll-detile-style lll-detile-right lll-pb50">
                    等你來為自己準備一頓美好的餐點
                  </p>
                  <div className="lll-mobile-btn">
                    <Link to="#" className="btn-red txt-btn">
                      前往預約
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
     

      {/* scroll */}
      <div classNameName="container lll-scroll">
        <div classNameName="row">
          <div classNameName="col">
            <Link to="#" classNameName="btn-yello txt-cap">
              scroll
            </Link>
          </div>
        </div>
      </div>
      {/* 驚喜廚房第一版 */}
    </>
  )
}

export default SurpriseFirst
