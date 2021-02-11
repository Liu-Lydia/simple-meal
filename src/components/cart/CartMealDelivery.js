import React, { useEffect, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'

function CartMealDelivery(props) {
  const { setFlowchart, setCartMode } = props

  const [deliveryData, setDeliveryData] = useState({
    thisTime: [],
    nextTime: [],
  })

  const [clickNum, setClickNum] = useState(0)

  // 讀取資料庫
  const handleGetData = () => {
    const url = 'http://localhost:4000/mealdelivery/getdeliverycart'
    fetch(url, {
      method: 'get',
    })
      .then((r) => r.json())
      .then((obj) => {
        // console.log(obj)
        setDeliveryData(obj)
      })
  }

  const handleSetMealNum = (sid, quantity) => {
    const url = `http://localhost:4000/mealdelivery/setmealquantity?sid=${sid}&quantity=${quantity}`
    if (quantity >= 1 && quantity <= 10) {
      fetch(url, {
        method: 'get',
      }).then(setClickNum(clickNum + 1))
    }
  }

  // 裝載時轉成流程1
  useEffect(() => {
    setFlowchart(1)
    handleGetData()
  }, [])

  // 當有任何點擊時
  useEffect(() => {
    handleGetData()
  }, [clickNum])

  return (
    <>
      {/* 本次配送 */}
      <div className="">
        <h5>配送餐點</h5>
        <table className="table table-borderless table-hover">
          <thead>
            <tr>
              <th scope="col">
                <input type="checkbox" />
              </th>
              <th scope="col"></th>
              <th className="text-center" scope="col">
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
              <tr key={i}>
                <th className="poe-pr15 align-middle" scope="row">
                  <input type="checkbox" value={v.sid} />
                </th>
                <td className="align-middle poe-pr15 poe-cart-product-img">
                  <img
                    className="w-100"
                    src={`http://localhost:3015/img/meal/未去背/${v.product_id}.png`}
                    alt=""
                  />
                </td>
                <td>
                  <p className="txt-btn">{v.meal_name}</p>
                  <p className="txt-cap poe-gray">{v.description}</p>
                </td>
                <td className="text-center align-middle">
                  <div>
                    <a
                      onClick={() => {
                        const sid = v.sid
                        const quantity = v.quantity - 1
                        handleSetMealNum(sid, quantity)
                      }}
                      className={`px-3 ${
                        v.quantity > 1 ? 'poe-green' : 'poe-gray'
                      }`}
                    >
                      <i className="fas fa-minus-circle"></i>
                    </a>
                    <span>{v.quantity}</span>
                    <a
                      onClick={() => {
                        const sid = v.sid
                        const quantity = v.quantity + 1
                        handleSetMealNum(sid, quantity)
                      }}
                      className={`px-3 ${
                        v.quantity < 10 ? 'poe-green' : 'poe-gray'
                      }`}
                    >
                      <i className="fas fa-plus-circle"></i>
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="poe-bookmark-content-result text-right">
          <div className="text-center text-sm-left">
            <Link
              href=""
              className="select-btn-green txt-btn mx-1 mx-sm-3 poe-mb20"
            >
              移到下次
            </Link>
            <Link
              href=""
              className="select-btn-green txt-btn mx-1 mx-sm-3 poe-mb20"
            >
              刪除餐點
            </Link>
          </div>
          <div>
            <span>您的帳戶現有 </span>
            <span className="poe-red">0</span>
            <span>
              {' '}
              張餐券,
              <br className="d-block d-sm-none" /> 請先購買餐券再進行餐點配送
            </span>
          </div>
        </div>
        <div className="text-center text-sm-right poe-bookmark-btn-group">
          <Link
            onClick={() => setCartMode('SimpleMealCoupon')}
            className="btn-green txt-btn mx-3 poe-mb20"
          >
            購買餐券
          </Link>
          <Link
            to="/cart/mealdelivery"
            onClick={() => setFlowchart(2)}
            className="btn-green txt-btn mx-3 poe-mb20"
          >
            下一步　<i className="fas fa-chevron-right"></i>
          </Link>
        </div>
      </div>
      {/* 分隔紅線 */}
      <div className="poe-red-line"></div>
      {/* 下次配送 */}
      <div className="">
        <h5>下次配送</h5>
        <table className="table table-borderless table-hover">
          <thead>
            <tr>
              <th scope="col">
                <input type="checkbox" />
              </th>
              <th scope="col"></th>
              <th className="text-center" scope="col">
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
            <tr>
              <th className="poe-pr15 align-middle" scope="row">
                <input type="checkbox" />
              </th>
              <td className="align-middle poe-pr15 poe-cart-product-img">
                <img
                  className="w-100"
                  src="/public/img/cart/bg/hero02.png"
                  alt=""
                />
              </td>
              <td>
                <p className="txt-btn">羅勒鮮蔬通心麵</p>
                <p className="txt-cap poe-gray">有羅勒香和奶香的一頓餐點</p>
              </td>
              <td className="text-center align-middle">
                <div>
                  <a href="" className="px-3 poe-green">
                    <i className="fas fa-minus-circle"></i>
                  </a>
                  <span>2</span>
                  <a href="" className="px-3 poe-green">
                    <i className="fas fa-plus-circle"></i>
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="poe-bookmark-content-result text-right">
          <div className="text-center text-sm-left">
            <Link
              href=""
              className="select-btn-green txt-btn mx-1 mx-sm-3 poe-mb20"
            >
              移到本次
            </Link>
            <Link
              href=""
              className="select-btn-green txt-btn mx-1 mx-sm-3 poe-mb20"
            >
              刪除餐點
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartMealDelivery
