import React, { useEffect, useState } from 'react'
import { Route, withRouter, Link, Switch, Redirect } from 'react-router-dom'

function MealDeliveryCheck(props) {
  const { flowchart, setFlowchart, info } = props

  // 是否結帳完成
  const [checkBool, setCheckBool] = useState(false)

  // 接取資料庫的資料
  const [deliveryData, setDeliveryData] = useState({
    thisTime: [],
    nextTime: [],
    simpleMealCoupon: {
      now: 0,
      cost: 0,
      remain: 0,
    },
  })

  // 讀取資料庫
  const handleGetData = () => {
    const url = 'http://localhost:4000/mealdelivery/getdeliverycart'
    fetch(url, {
      method: 'get',
    })
      .then((r) => r.json())
      .then((obj) => {
        console.log(obj)
        setDeliveryData(obj)
      })
  }
  // 裝載時轉成流程3
  useEffect(() => {
    setFlowchart(3)
    handleGetData()
    console.log(deliveryData.thisTime)
  }, [])

  return (
    <>
      {/* 完成結帳跳轉 */}
      {checkBool && <Redirect to="/" />}

      {/* 配送餐點 */}
      <div className="row justify-content-center poe-bookmark">
        <div className="col-12 col-md-8 col-xl-6">
          <div className="d-flex justify-content-between txt-btn">
            <div className="col poe-bookmark-label poe-bookmark-label-active">
              配送餐點
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>

          <div className="poe-bookmark-content txt-btn">
            <table className="table table-borderless table-hover">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th className="" scope="col">
                    餐點明細
                  </th>
                  <th
                    className="d-none d-sm-block text-center text-nowrap"
                    scope="col"
                  >
                    數量
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* 商品卡 */}
                {deliveryData.thisTime.map((v, i) => (
                  <tr>
                    <td className="align-middle poe-pr15 poe-cart-product-img">
                      <img
                        className="w-100"
                        src="/public/img/cart/bg/hero02.png"
                        alt=""
                      />
                    </td>
                    <td>
                      <p className="txt-btn">{v.meal_name}</p>
                      <p className="txt-cap poe-gray">{v.description}</p>
                    </td>
                    <td className="text-center align-middle">
                      <div>
                        <span>{v.quantity}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="poe-bookmark-content-result text-right">
              <div>
                <span>您的帳戶現有 </span>
                <span className="poe-red">
                  {deliveryData.simpleMealCoupon.now}
                </span>
                <span> 張餐券,</span>
                <br className="d-block d-sm-none" />
                <span>配送將消耗 </span>
                <span className="poe-red">
                  {deliveryData.simpleMealCoupon.cost}
                </span>
                <span> 張餐券,</span>
                <br className="d-block d-sm-none" />
                <span>您尚有 </span>
                <span className="poe-red">
                  {deliveryData.simpleMealCoupon.remain}
                </span>
                <span> 張餐券可以使用</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 寄送資訊 */}
      <div className="row justify-content-center poe-bookmark">
        <div className="col-12 col-md-8 col-xl-6">
          <div className="d-flex justify-content-between txt-btn">
            <div className="col poe-bookmark-label poe-bookmark-label-active">
              寄送資訊
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>

          <div className="poe-bookmark-content txt-btn">
            <div className="row poe-mb30">
              <div className="col-4 col-sm-3 text-right">收件人</div>
              <div className="col-8 col-sm-9 poe-green">{info.name}</div>
            </div>
            <div className="row poe-mb30">
              <div className="col-4 col-sm-3 text-right">連絡電話</div>
              <div className="col-8 col-sm-9 poe-green">{info.mobile}</div>
            </div>
            <div className="row poe-mb30">
              <div className="col-4 col-sm-3 text-right">Email</div>
              <div className="col-8 col-sm-9 poe-green">{info.email}</div>
            </div>
            <div className="row poe-mb30">
              <div className="col-4 col-sm-3 text-right">收件地址</div>
              <div className="col-8 col-sm-9 poe-green">{info.address}</div>
            </div>
            <div className="row poe-mb30">
              <div className="col-4 col-sm-3 text-right">配送日期</div>
              <div className="col-8 col-sm-9 poe-green">{info.date}</div>
            </div>
            <div className="row poe-mb30">
              <div className="col-4 col-sm-3 text-right">配送時間</div>
              <div className="col-8 col-sm-9 poe-green">{info.time}</div>
            </div>
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
              setCheckBool(true)
              // handlePostcheck()
            }}
            className="btn-green txt-btn mx-2 poe-mb20"
          >
            確認配送　<i className="fas fa-check"></i>
          </Link>
        </div>
      </div>
    </>
  )
}

export default MealDeliveryCheck
