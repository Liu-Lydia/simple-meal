import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import Swal from 'sweetalert2'

function SurpriseFirst(props) {
  //會員傳入, 是否為會員
  const { loginBool } = props

  //定義SweetAlert2的按鈕
  const [shouldRedirectTo, setShouldRedirectTo] = useState('')

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      popup: 'poe-alert',
      title: 'poe-green my-0',
      content: 'txt-btn poe-red',
      confirmButton: 'btn-green txt-btn mx-2 my-3',
    },
    buttonsStyling: false,
  })

  //取得優惠券　↓↓↓
  const handleGetCoupon = async () => {
    if (!loginBool) {
      console.log('滾去登入再說')
      console.log(loginBool)
      setShouldRedirectTo('memberCenter')
      return
    } else {
      await fetch('http://localhost:4000/activityCoupon/getlemoncoupon', {
        method: 'get',
        credentials: 'include',
      })
        .then((r) => r.json())
        .then((obj) => {
          console.log(obj)
          if (obj.success) {
            swalWithBootstrapButtons.fire({
              imageUrl: 'http://localhost:3015/img/lemon/Coupon.GIF',
              imageHeight: 100,
              title: '<h4>恭喜獲取100元購物金</h4>',
              text: `100元優惠碼已新增至會員中心囉！`,
              padding: '25px',
              showConfirmButton: true,
              confirmButtonText: '確認',
              // showCloseButton: true,
              backdrop: `rgba(0,0,0,.5)`,
            })
          }
        })
    }
    //取得優惠券 ↑↑↑
  }

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
      {/* 是不是會員的轉址 */}
      {shouldRedirectTo === 'memberCenter' && <Redirect to="/MemberCenter" />}

      {/* 驚喜廚房第一版 */}
      {/* 第一版圖片 */}
      <div className="container-fluid">
        <div className="row">
          <div className="lll-change-picture-width">
            <div className="lll-change-picture"></div>
          </div>

          {/* 第一版文字 */}
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

          {/* 點擊優惠券Order圖片 */}
          <div className="d-flex lll-coupon-position">
            <div className="lll-get-coupon">
              <img
                className="lll-meal-pictures lll-cursor"
                src="http://localhost:3015/img/lydia/ClickMe.png"
                alt=""
                onClick={() => {
                  handleGetCoupon()
                }}
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
