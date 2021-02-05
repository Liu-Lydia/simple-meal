import React, { useEffect, useState } from 'react'
import { Route, withRouter, Link, Switch } from 'react-router-dom'

function SimpleMealCouponCheck(props) {
  // {流程, 流程轉換設定}
  const { flowchart, setFlowchart } = props

  // 掛載轉換階段3
  useEffect(() => setFlowchart(3), [])

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
                    <span>吃飽飽沒煩惱組合</span>
                    <br class="d-block d-sm-none" />
                    <span class="txt-cap poe-red">
                      (包含20張餐卷, 加贈5張免費餐券)
                    </span>
                    <br class="d-block d-sm-none" />
                    <div class="d-block d-sm-none d-flex txt-cap">
                      <span class="poe-bookmark-content-m">優惠價</span>
                      <span class="poe-red">3500</span>
                    </div>
                    <div class="d-block d-sm-none d-flex txt-cap">
                      <span class="poe-bookmark-content-m">數量</span>
                      <span class="poe-red">2</span>
                    </div>
                  </td>
                  <td class="d-none d-sm-block poe-red text-right">3500</td>
                </tr>
              </tbody>
            </table>

            <div class="poe-bookmark-content-result text-right">
              <div class="poe-mb30">
                <span>共 </span>
                <span class="poe-red">2</span>
                <span> 組, 包含 </span>
                <span class="poe-red">50</span>
                <span>
                  {' '}
                  張餐券, <br class="d-block d-sm-none" />
                  金額小計NT${' '}
                </span>
                <span class="poe-red">7,000</span>
                <span> 元</span>
              </div>
              <div class="poe-mb30">
                <span>折扣 </span>
                <span class="poe-red">-100</span>
                <span>
                  {' '}
                  元, <br class="d-block d-sm-none" />
                  金額小計NT${' '}
                </span>
                <span class="poe-red">6,900</span>
                <span> 元</span>
              </div>
              <div>
                <span>共 </span>
                <span class="poe-red">2</span>
                <span> 組, 包含 </span>
                <span class="poe-red">50</span>
                <span>
                  {' '}
                  張餐券, <br class="d-block d-sm-none" />
                  金額小計NT${' '}
                </span>
                <span class="poe-red poe-h6">6,900</span>
                <span> 元</span>
              </div>
            </div>
          </form>
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
                  <td>
                    信用卡線上刷卡一次付清
                    <span class="txt-cap poe-red">
                      (可接受VISA, Master, JCB, 聯合信用卡)
                    </span>
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
            onClick={() => setFlowchart(2)}
            class="btn-gray txt-btn mx-2 poe-mb20"
          >
            <i class="fas fa-chevron-left"></i>　上一步
          </Link>
          <Link
            to="/"
            onClick={() => setFlowchart(1)}
            class="btn-green txt-btn mx-2 poe-mb20"
          >
            送出訂單　<i class="fas fa-check"></i>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SimpleMealCouponCheck
