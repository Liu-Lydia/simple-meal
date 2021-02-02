import React, { useEffect, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'

function CartSimpleMealCoupon() {
  // 方案選擇
  const [choice, setChoice] = useState('')
  return (
    <>
      <h5>選購方案</h5>
      <table className="table table-borderless table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
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
            <th scope="row">
              <input type="radio" name="poePlan" />
            </th>
            <td>
              <span>吃飽飽沒煩惱組合</span>
              <br className="d-block d-sm-none" />
              <span className="txt-cap poe-red">
                (包含20張餐卷, 加贈5張免費餐券)
              </span>
              <br className="d-block d-sm-none" />
              <div className="d-block d-sm-none d-flex txt-cap">
                <span className="poe-bookmark-content-m">優惠價</span>
                <span className="poe-red">3500</span>
              </div>
            </td>
            <td className="d-none d-sm-block poe-red text-right">3500</td>
          </tr>
          <tr>
            <th scope="row">
              <input type="radio" name="poePlan" />
            </th>
            <td>
              <span>食在很滿足組合</span>
              <br className="d-block d-sm-none" />
              <span className="txt-cap poe-red">
                (包含10張餐卷, 加贈2張免費餐券)
              </span>
              <br className="d-block d-sm-none" />
              <div className="d-block d-sm-none d-flex txt-cap">
                <span className="poe-bookmark-content-m">優惠價</span>
                <span className="poe-red">1700</span>
              </div>
            </td>
            <td className="d-none d-sm-block poe-red text-right">1700</td>
          </tr>
          <tr>
            <th scope="row">
              <input type="radio" name="poePlan" />
            </th>
            <td>
              <span>經濟實惠組</span>
              <br className="d-block d-sm-none" />
              <span className="txt-cap poe-red">
                (包含5張餐卷, 加贈1張免費餐券)
              </span>
              <br className="d-block d-sm-none" />
              <div className="d-block d-sm-none d-flex txt-cap">
                <span className="poe-bookmark-content-m">優惠價</span>
                <span className="poe-red">850</span>
              </div>
            </td>
            <td className="d-none d-sm-block poe-red text-right">850</td>
          </tr>
        </tbody>
      </table>
      <div className="poe-bookmark-content-choice text-right">
        <span className="">組合數量</span>
        <Link href="" className="mx-3">
          <i className="fas fa-minus-circle"></i>
        </Link>
        <span>2</span>
        <Link href="" className="mx-3">
          <i className="fas fa-plus-circle"></i>
        </Link>
      </div>
      <div className="poe-bookmark-content-result text-right">
        <div>
          <span>共 </span>
          <span className="poe-red">2</span>
          <span> 組, 包含 </span>
          <span className="poe-red">50</span>
          <span>
            {' '}
            張餐券, <br className="d-block d-sm-none" />
            金額小計NT${' '}
          </span>
          <span className="poe-red">7,000</span>
          <span> 元</span>
        </div>
      </div>
      <div className="text-right poe-bookmark-btn-group">
        <a href="./cart-meal-coupon-payment.html" className="btn-green txt-btn">
          下一步　<i className="fas fa-chevron-right"></i>
        </a>
      </div>
    </>
  )
}

export default CartSimpleMealCoupon
