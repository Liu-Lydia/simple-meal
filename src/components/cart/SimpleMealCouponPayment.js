import React, { useEffect, useState } from 'react'
import { Route, withRouter, Link, Switch } from 'react-router-dom'

function SimpleMealCouponPayment(props) {
  // {流程, 流程轉換設定, 方案id, 方案物件, 預設方案內容}
  const { flowchart, setFlowchart, choice, choiceObj, choiceArray } = props

  // 掛載轉換階段2
  useEffect(() => setFlowchart(2), [])

  return (
    <>
      {/* 購物車頁籤(餐券-選購方案) */}
      <div class="row justify-content-center poe-bookmark">
        <div class="col-12 col-md-8 col-xl-6">
          <div class="d-flex justify-content-between txt-btn">
            <div class="col poe-bookmark-label poe-bookmark-label-active">
              選購方案
            </div>
            <div class="col"></div>
            <div class="col"></div>
          </div>

          <form class="poe-bookmark-content txt-btn">
            <table class="table table-borderless table-hover">
              <thead>
                <tr>
                  <th scope="col">組合明細</th>
                  <th
                    class="d-none d-sm-block text-right text-nowrap"
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
                    <br class="d-block d-sm-none" />
                    <span class="txt-cap poe-red">
                      {choiceArray[choice].discription}
                    </span>
                    <br class="d-block d-sm-none" />
                    <div class="d-block d-sm-none d-flex txt-cap">
                      <span class="poe-bookmark-content-m">優惠價</span>
                      <span class="poe-red">{choiceArray[choice].price}</span>
                    </div>
                    <div class="d-block d-sm-none d-flex txt-cap">
                      <span class="poe-bookmark-content-m">數量</span>
                      <span class="poe-red">{choiceObj.quantity}</span>
                    </div>
                  </td>
                  <td class="d-none d-sm-block poe-red text-right">
                    {choiceArray[choice].price}
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="poe-bookmark-content-result text-right">
              <div>
                <span>共 </span>
                <span class="poe-red">{choiceObj.quantity}</span>
                <span> 組, 包含 </span>
                <span class="poe-red">{choiceObj.couponNum}</span>
                <span>
                  {' '}
                  張餐券, <br class="d-block d-sm-none" />
                  金額小計NT${' '}
                </span>
                <span class="poe-red">{choiceObj.price}</span>
                <span> 元</span>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* 購物車頁籤(餐券/驚喜廚房-使用優惠券) */}
      <div class="row justify-content-center poe-bookmark">
        <div class="col-12 col-md-8 col-xl-6">
          <div class="d-flex justify-content-between txt-btn">
            <div class="col poe-bookmark-label poe-bookmark-label-active">
              使用優惠券
            </div>
            <div class="col"></div>
            <div class="col"></div>
          </div>

          <div class="poe-bookmark-content txt-btn">
            <div class="row d-flex justify-content-between align-items-center poe-bookmark-content-coupon">
              <div class="col-12 col-sm-3 poe-mb15">優惠碼</div>
              <div class="col-12 col-sm-5 poe-mb15">
                <input type="text" class="w-100 input-style poe-input-text" />
              </div>
              <div class="col-12 col-sm-4 poe-mb15">
                <a href="" class="w-100 select-btn-white txt-btn">
                  我的優惠
                </a>
              </div>

              <div class="col-12 text-right">
                <span>折扣 </span>
                <span class="poe-red">- 100</span>
                <span> 元</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 購物車頁籤(餐券/驚喜廚房-選擇付款方式) */}
      <div class="row justify-content-center poe-bookmark">
        <div class="col-12 col-md-8 col-xl-6">
          <div class="d-flex justify-content-between txt-btn">
            <div class="col poe-bookmark-label poe-bookmark-label-active">
              選擇付款方式
            </div>
            <div class="col"></div>
            <div class="col"></div>
          </div>

          <div class="poe-bookmark-content txt-btn">
            <table class="table table-borderless table-hover">
              <tbody>
                <tr>
                  <th>
                    <input type="radio" name="payment" />
                  </th>
                  <td>
                    信用卡線上刷卡一次付清
                    <span class="txt-cap poe-red">
                      (可接受VISA, Master, JCB, 聯合信用卡)
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <input type="radio" name="payment" />
                  </th>
                  <td>
                    銀聯卡
                    <span class="txt-cap poe-red">
                      (支付成功頁面僅為銀聯卡回覆訊息，交易是否完成請需以本商店通知為準)
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <input type="radio" name="payment" />
                  </th>
                  <td>
                    LINE PAY
                    <span class="txt-cap poe-red">(可用LINE POINTS折抵)</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 上下一步 */}
      <div class="row justify-content-center text-center text-sm-right poe-bookmark-btn-group">
        <div class="col-12 col-md-8 col-xl-6">
          <Link
            to="/cart"
            onClick={() => setFlowchart(1)}
            class="btn-gray txt-btn mx-2 poe-mb20"
          >
            <i class="fas fa-chevron-left"></i>　上一步
          </Link>
          <Link
            onClick={() => setFlowchart(3)}
            class="btn-green txt-btn mx-2 poe-mb20"
          >
            下一步　<i class="fas fa-chevron-right"></i>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SimpleMealCouponPayment
