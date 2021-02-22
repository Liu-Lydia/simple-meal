import React, { useEffect, useState } from 'react'
import { Transition, TransitionGroup } from 'react-transition-group'

function SurpriseFirst() {
  function ScrollToOrder() {
    window.scrollTo({
      top: 1190,
      left: 0,
      behavior: 'smooth',
    })
  }

  const [inProp, setInProp] = useState(false)
  const [imgList, setImgList] = useState([
    { src: 'http://localhost:3015/img/lydia/Omurice4s.gif' },
    { src: 'http://localhost:3015/img/lydia/hero01.png' },
    { src: 'http://localhost:3015/img/lydia/hero04.png' },
  ])

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

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm offset-4 float-left">
            <div className="col-xl-6 lll-text-rwd">
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
            {/* <TransitionGroup>
              <div className="lll-get-coupon">
                {imgList.map((v, i) => (
                  <Transition
                    in={inProp}
                    key={i}
                    timeout={200}
                    className="lll-testtransition"
                  >
                    <img  src={v.src} alt="" />
                  </Transition>
                ))}
              </div>
            </TransitionGroup> */}
            {/* <div className="lll-get-coupon">
              <img
                className="lll-meal-pictures"
                src="http://localhost:3015/img/lydia/hero01.png"
                alt=""
              />
            </div>*/}

            <div className="lll-get-coupon">
              <img
                className="lll-meal-pictures"
                src="http://localhost:3015/img/lydia/hero01.png"
                alt=""
              />
            </div> 
            {/* <div className="lll-get-coupons">
              <img
                className="lll-meal-pictures"
                src="http://localhost:3015/img/lydia/test02.gif"
                alt=""
              />
            </div> */}
            <div className="lll-get-coupon">
              <img
                className="lll-meal-pictures"
                src="http://localhost:3015/img/lydia/Omurice4s.gif"
                alt=""
              />
            </div>
            

            <div className="mt-auto ml-auto">
              <h1 className="lll-green">rder</h1>
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
