import React, { useState, useEffect } from 'react'
import QRCode from 'qrcode.react'
import '../../styles/public.css'
import '../../styles/fff.css'

{/* <QRCodeDialog
qrcodeStyle={qrcodeStyle}
setqrcodeStyle={setqrcodeStyle}
couponKey={couponKey}
/> */}
function QRCodeDialog(props) {
  const { qrcodeStyle, setqrcodeStyle, couponKey } = props
  const [coupon, setCoupon] = useState([])

  const getCoupon = async () => {
    const url = `http://localhost:4000/reward/getCoupon?key=${couponKey}`
    //sid 要從session來
    await fetch(url, {
      method: 'get',
      credentials: 'include',
    })
      //then 是會接前方拋出的結果
      .then((r) => r.json())
      .then((couponList) => {
        setCoupon(couponList)
      })
  }

  useEffect(() => {
    getCoupon()
  }, [couponKey])

  return (
    <div className="fff-exchange" style={qrcodeStyle}>
      <div className="fff-exchange-content-box">
        <div className="row justify-content-end fff-no-mr-and-pad">
          {/* 關閉頁面的Ｘ */}
          <div className="" style={{ marginBottom: '10px' }}>
            <h6 className="fff-no-mr-and-pad" style={{ color: '#627E2A' }}>
              <i
                className="fas fa-times aboutCloseBtn"
                onClick={() => {
                  setqrcodeStyle({ display: 'none' })
                }}
              ></i>
            </h6>
          </div>
        </div>
        <div className="row justify-content-center fff-no-mr-and-pad">
          <form id="dialog-form">
            {/* <div className="">
              <QRCode value={''} />
            </div>
            <div className="txt-btn text-center">可使用</div> */}
            {coupon.map((value, index) => (
              <div key={index}>
                <div >
                  <QRCode value={value.discount_code} />
                </div>
                {value.used_date == null ? (
                  <div className="fff-reward-unuse">可使用</div>
                ) : (
                    <div className="fff-reward-used">已使用</div>
                  )}
              </div>
            ))}
            <div
              className="col d-column fff-exchange-content txt-btn"
              style={{ marginTop: '30px' }}
            >
              <button
                type="button"
                className="btn-green txt-btn aboutCloseBtn"
                onClick={() => {
                  setqrcodeStyle({ display: 'none' })
                }}
                data-dismiss="modal"
              >
                關閉
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default QRCodeDialog
