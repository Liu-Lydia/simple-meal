import React, { useEffect, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'

function CartMealDelivery(props) {
  const { setFlowchart, setCartMode } = props

  // 裝載時轉成流程1
  useEffect(() => {
    setFlowchart(1)
  }, [])

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
                  <Link href="" className="px-3 poe-green">
                    <i className="fas fa-minus-circle"></i>
                  </Link>
                  <span>2</span>
                  <Link href="" className="px-3 poe-green">
                    <i className="fas fa-plus-circle"></i>
                  </Link>
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
