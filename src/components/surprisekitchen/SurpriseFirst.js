import React, { useEffect, useState } from 'react'

function SurpriseFirst() {
  function ScrollToOrder() {
    window.scrollTo({
      top: 1100,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {/* 驚喜廚房第一版 */}
      {/* 第一版圖片 */}
      <div className="container-fluid">
        <div className="row">
          {/* <div className="lll-first-picture-width">
            <div className="lll-first-picture"></div>
          </div> */}

          <div className="lll-change-picture-width">
            <div className="lll-change-picture"></div>
          </div>

          <div className="lll-text">
            <div className="lll-text-rwd">
              <h2 className="m-0 lll-firstpage-title">驚喜廚房預約</h2>
              <p className="txt-sub1 lll-detile-style">
                <span className="lll-line">——</span>
                　極簡煮易提供完善的場地與優良食材
              </p>
              <p className="m-0 txt-sub1 lll-detile-style lll-detile-right lll-pb50">
                等你來為自己準備一頓美好的餐點
              </p>
              <div className="lll-mobile-btn lll-cursor">
                <a
                  className="btn-red txt-btn"
                  onClick={() => {
                    ScrollToOrder()
                  }}
                >
                  前往預約
                </a>
              </div>
            </div>
          </div>

          <div className="d-flex lll-coupon-position">
            <div className="lll-get-coupon">
              <img
                className="lll-meal-pictures"
                src="http://localhost:3015/img/lydia/ClickMe.png"
                alt=""
              />
            </div>
            <div className="lll-get-coupon2">
              <img
                className="lll-meal-pictures"
                src="http://localhost:3015/img/lydia/test03.gif"
                alt=""
              />
            </div>

            <div className="mt-auto ml-auto">
              <p className="m-0 lll-green lll-order-text">rder</p>
            </div>
          </div>
          <p className="m-0 lll-explain-coupon">
            點擊到吉祥物咧夢就可立即獲取100元購物金
          </p>
        </div>
      </div>
      {/* 第一版文字 */}
      {/* <div className="container">
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
      </div> */}
      {/* 驚喜廚房第一版 */}
      {/* scroll */}
      <div className="container lll-scroll">
        <div className="row">
          <div className="col">
            <a
              className="btn-yello txt-cap lll-cursor"
              onClick={() => {
                ScrollToOrder()
              }}
            >
              scroll
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SurpriseFirst
