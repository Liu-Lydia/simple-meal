import React, { useEffect, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'

function ReserveKitchenPayment(props) {
  const {
    flowchart,
    setFlowchart,
    paymentArray,
    paymentObj,
    setPaymentObj,
    paymentValue,
    setPaymentValue,
    coupon,
    setCoupon,
  } = props

  // 改變付款方案
  const handleSetPaymentValue = (event) => {
    setPaymentValue(event.target.value)
    handleSetPaymentObj(event.target.value)
  }

  // 設定決定的付款選項物件
  const handleSetPaymentObj = (i) => {
    setPaymentObj(paymentArray[i])
  }

  const handleCoupon = (e) => {
    const couponText = e.target.value
    if (couponText.length === 5) {
      setCoupon({ string: couponText, cost: 100 })
    } else {
      setCoupon({ string: couponText, cost: 0 })
    }
  }

  return (
    <>
      {/* 預約人資訊 */}
      <div className="row justify-content-center poe-bookmark">
        <div className="col-12 col-md-8 col-xl-6">
          <div className="d-flex justify-content-between txt-btn">
            <div className="col poe-bookmark-label poe-bookmark-label-active">
              預約人資訊
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>

          <div className="poe-bookmark-content txt-btn">
            <div className="row align-items-center poe-mb30">
              <div className="col-2 px-md-0 text-md-right">
                <input type="checkbox" />
              </div>
              <div className="col-10">同會員資料</div>
            </div>
            <div className="row align-items-center poe-mb30">
              <div className="col-12 col-md-2 px-md-0 text-md-right poe-mb15">
                預約人
              </div>
              <div className="col-12 col-md-10 poe-mb15">
                <input type="text" className="w-100 input-style" />
              </div>
              <div className="col-md-2"></div>
              <div className="col-12 col-md-10 txt-cap">
                姓名請填寫中文或英文(限10個中英文字)
              </div>
            </div>
            <div className="row align-items-center poe-mb30">
              <div className="col-12 col-md-2 px-md-0 text-md-right poe-mb15">
                連絡電話
              </div>
              <div className="col-12 col-md-10 poe-mb15">
                <input type="text" className="w-100 input-style" />
              </div>
              <div className="col-md-2"></div>
              <div className="col-12 col-md-10 txt-cap">
                管理人員將以此電話資料聯繫
              </div>
            </div>
            <div className="row align-items-center poe-mb30">
              <div className="col-12 col-md-2 px-md-0 text-md-right poe-mb15">
                Email
              </div>
              <div className="col-12 col-md-10 poe-mb15">
                <input type="mail" className="w-100 input-style" />
              </div>
              <div className="col-md-2"></div>
              <div className="col-12 col-md-10 txt-cap">
                交易通知將會發送到此 Email
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 購物車頁籤(餐券/驚喜廚房-使用優惠券) */}
      <div className="row justify-content-center poe-bookmark">
        <div className="col-12 col-md-8 col-xl-6">
          <div className="d-flex justify-content-between txt-btn">
            <div className="col poe-bookmark-label poe-bookmark-label-active">
              使用優惠券
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>

          <div className="poe-bookmark-content txt-btn">
            <div className="row d-flex justify-content-between align-items-center poe-bookmark-content-coupon">
              <div className="col-12 col-sm-3 poe-mb15">優惠碼</div>
              <div className="col-12 col-sm-5 poe-mb15">
                <input
                  type="text"
                  className="w-100 input-style poe-input-text"
                  value={coupon.string}
                  onChange={(event) => handleCoupon(event)}
                />
              </div>
              <div className="col-12 col-sm-4 poe-mb15">
                <a className="w-100 select-btn-white txt-btn">我的優惠</a>
              </div>
              {coupon.cost !== 0 && (
                <div className="col-12 text-right">
                  <span>折扣 </span>
                  <span className="poe-red">-{coupon.cost}</span>
                  <span> 元</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 購物車頁籤(餐券/驚喜廚房-選擇付款方式) */}
      <div className="row justify-content-center poe-bookmark">
        <div className="col-12 col-md-8 col-xl-6">
          <div className="d-flex justify-content-between txt-btn">
            <div className="col poe-bookmark-label poe-bookmark-label-active">
              選擇付款方式
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>

          <div className="poe-bookmark-content txt-btn">
            <table className="table table-borderless table-hover">
              <tbody>
                {paymentArray.map((v, i) => (
                  <tr key={i}>
                    <th>
                      <input
                        type="radio"
                        name="payment"
                        value={i}
                        checked={paymentValue === `${i}`}
                        onChange={(e) => handleSetPaymentValue(e)}
                      />
                    </th>
                    <td>
                      {v.proj}
                      <span className="txt-cap poe-red">{v.discript}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 上下一步 */}
      <div className="row justify-content-center text-center text-sm-right poe-bookmark-btn-group">
        <div className="col-12 col-md-8 col-xl-6">
          <Link
            to="/cart"
            onClick={() => setFlowchart(1)}
            className="btn-green txt-btn mx-2 poe-mb20"
          >
            <i className="fas fa-chevron-left"></i>　上一步
          </Link>
          {1 !== null ? (
            <Link
              onClick={() => setFlowchart(3)}
              className="btn-green txt-btn mx-2 poe-mb20"
            >
              下一步　<i className="fas fa-chevron-right"></i>
            </Link>
          ) : (
            <span disabled className="btn-gray txt-btn mx-2 poe-mb20">
              下一步　<i className="fas fa-chevron-right"></i>
            </span>
          )}
        </div>
      </div>
    </>
  )
}

export default ReserveKitchenPayment
