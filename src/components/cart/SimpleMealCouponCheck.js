import React, { useEffect, useState } from 'react'
import { Route, withRouter, Link, Switch, Redirect } from 'react-router-dom'

function SimpleMealCouponCheck(props) {
  // {流程, 流程轉換設定, 方案id, 方案物件, 預設方案內容, 付款選項物件, 優惠碼物件}
  const {
    flowchart,
    setFlowchart,
    choice,
    choiceObj,
    choiceArray,
    paymentObj,
    coupon,
  } = props

  // 掛載轉換階段3
  useEffect(() => setFlowchart(3), [])

  const handlePostcheck = async () => {
    const fd = new FormData(document.querySelector('#cart_simplemealcoupon'))
    await fetch('http://localhost:4000/simplemealcoupon/addcheck', {
      method: 'post',
      body: fd,
    })
      .then((r) => r.json())
      .then((obj) => {
        alert(`您的訂單已完成, 訂單編號 ${obj.order_sid}`)
        setCheckBool(true)
      })
  }

  // 是否結帳完成
  const [checkBool, setCheckBool] = useState(false)

  return (
    <>
      {/* 完成結帳跳轉 */}
      {checkBool && <Redirect to="/" />}

      {/* 購物車頁籤(餐券-選購方案) */}
      <div className="row justify-content-center poe-bookmark">
        <div className="col-12 col-md-8 col-xl-6">
          <div className="d-flex justify-content-between txt-btn">
            <div className="col poe-bookmark-label poe-bookmark-label-active">
              選購方案
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>

          <form className="poe-bookmark-content txt-btn">
            <table className="table table-borderless table-hover">
              <thead>
                <tr>
                  <th scope="col">組合明細</th>
                  <th
                    className="d-none d-sm-block text-right text-nowrap"
                    scope="col"
                  >
                    優惠價
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>{choiceArray[choice].combination}</span>
                    <br className="d-block d-sm-none" />
                    <span className="txt-cap poe-red">
                      {choiceArray[choice].discription}
                    </span>
                    <br className="d-block d-sm-none" />
                    <div className="d-block d-sm-none d-flex txt-cap">
                      <span className="poe-bookmark-content-m">優惠價</span>
                      <span className="poe-red">{choiceArray[choice].price}</span>
                    </div>
                    <div className="d-block d-sm-none d-flex txt-cap">
                      <span className="poe-bookmark-content-m">數量</span>
                      <span className="poe-red">{choiceObj.quantity}</span>
                    </div>
                  </td>
                  <td className="d-none d-sm-block poe-red text-right">
                    {choiceArray[choice].price}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="poe-bookmark-content-result text-right">
              <div className="poe-mb30">
                <span>共 </span>
                <span className="poe-red">{choiceObj.quantity}</span>
                <span> 組, 包含 </span>
                <span className="poe-red">{choiceObj.couponNum}</span>
                <span>
                  {' '}
                  張餐券, <br className="d-block d-sm-none" />
                  金額小計NT${' '}
                </span>
                <span className="poe-red">{choiceObj.price}</span>
                <span> 元</span>
              </div>
              {coupon.cost !== 0 && (
                <div className="poe-mb30">
                  <span>折扣 </span>
                  <span className="poe-red">-{coupon.cost}</span>
                  <span>
                    {' '}
                    元, <br className="d-block d-sm-none" />
                    金額小計NT${' '}
                  </span>
                  <span className="poe-red">{choiceObj.price - coupon.cost}</span>
                  <span> 元</span>
                </div>
              )}

              <div>
                <span>共 </span>
                <span className="poe-red">{choiceObj.quantity}</span>
                <span> 組, 包含 </span>
                <span className="poe-red">{choiceObj.couponNum}</span>
                <span>
                  {' '}
                  張餐券, <br className="d-block d-sm-none" />
                  金額小計NT${' '}
                </span>
                <span className="poe-red poe-h6">{choiceObj.price}</span>
                <span> 元</span>
              </div>
            </div>
          </form>
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
                <tr>
                  <td>
                    {paymentObj.proj}
                    <span className="txt-cap poe-red">{paymentObj.discript}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 上下一步 */}
      <div className="row justify-content-center text-center text-sm-right poe-bookmark-btn-group">
        <div className="col-12 col-md-8 col-xl-6">
          <Link
            onClick={() => setFlowchart(2)}
            className="btn-green txt-btn mx-2 poe-mb20"
          >
            <i className="fas fa-chevron-left"></i>　上一步
          </Link>
          <Link
            onClick={() => {
              handlePostcheck()
            }}
            className="btn-green txt-btn mx-2 poe-mb20"
          >
            送出訂單　<i className="fas fa-check"></i>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SimpleMealCouponCheck
