import React, { useEffect, useState } from 'react'
import { Route, withRouter, Link, Switch, Redirect } from 'react-router-dom'

function MealDeliveryCheck(props) {
  const { flowchart, setFlowchart } = props

  // 是否結帳完成
  const [checkBool, setCheckBool] = useState(false)

  return (
    <>
      {/* 完成結帳跳轉 */}
      {checkBool && <Redirect to="/" />}

      {/* 配送餐點 */}
      <div class="row justify-content-center poe-bookmark">
        <div class="col-12 col-md-8 col-xl-6">
          <div class="d-flex justify-content-between txt-btn">
            <div class="col poe-bookmark-label poe-bookmark-label-active">
              配送餐點
            </div>
            <div class="col"></div>
            <div class="col"></div>
          </div>

          <div class="poe-bookmark-content txt-btn">
            <table class="table table-borderless table-hover">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th class="" scope="col">
                    餐點明細
                  </th>
                  <th
                    class="d-none d-sm-block text-center text-nowrap"
                    scope="col"
                  >
                    數量
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="align-middle poe-pr15 poe-cart-product-img">
                    <img
                      class="w-100"
                      src="/public/img/cart/bg/hero02.png"
                      alt=""
                    />
                  </td>
                  <td>
                    <p class="txt-btn">羅勒鮮蔬通心麵</p>
                    <p class="txt-cap poe-gray">有羅勒香和奶香的一頓餐點</p>
                  </td>
                  <td class="text-center align-middle">
                    <div>
                      <span>2</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="align-middle poe-pr15 poe-cart-product-img">
                    <img
                      class="w-100"
                      src="/public/img/cart/bg/hero02.png"
                      alt=""
                    />
                  </td>
                  <td>
                    <p class="txt-btn">羅勒鮮蔬通心麵</p>
                    <p class="txt-cap poe-gray">有羅勒香和奶香的一頓餐點</p>
                  </td>
                  <td class="text-center align-middle">
                    <div>
                      <span>2</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="poe-bookmark-content-result text-right">
              <div>
                <span>您的帳戶現有 </span>
                <span class="poe-red">0</span>
                <span> 張餐券,</span>
                <br class="d-block d-sm-none" />
                <span>配送將消耗 </span>
                <span class="poe-red">8</span>
                <span> 張餐券, </span>
                <br class="d-block d-sm-none" />
                <span>您尚有 </span>
                <spanspan class="poe-red">12</spanspan>
                <span> 張餐券可以使用</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 寄送資訊 */}
      <div class="row justify-content-center poe-bookmark">
        <div class="col-12 col-md-8 col-xl-6">
          <div class="d-flex justify-content-between txt-btn">
            <div class="col poe-bookmark-label poe-bookmark-label-active">
              寄送資訊
            </div>
            <div class="col"></div>
            <div class="col"></div>
          </div>

          <div class="poe-bookmark-content txt-btn">
            <div className="row poe-mb30">
              <div className="col-4 col-sm-3 text-right">收件人</div>
              <div class="col-8 col-sm-9 poe-green">真麻煩</div>
            </div>
            <div className="row poe-mb30">
              <div className="col-4 col-sm-3 text-right">連絡電話</div>
              <div class="col-8 col-sm-9 poe-green">0987563256</div>
            </div>
            <div className="row poe-mb30">
              <div className="col-4 col-sm-3 text-right">Email</div>
              <div class="col-8 col-sm-9 poe-green">abc@gmail.com</div>
            </div>
            <div className="row poe-mb30">
              <div className="col-4 col-sm-3 text-right">收件地址</div>
              <div class="col-8 col-sm-9 poe-green">
                高雄市鳳山區文山里文化路666號
              </div>
            </div>
            <div className="row poe-mb30">
              <div className="col-4 col-sm-3 text-right">配送日期</div>
              <div class="col-8 col-sm-9 poe-green">2021-02-02</div>
            </div>
            <div className="row poe-mb30">
              <div className="col-4 col-sm-3 text-right">配送時間</div>
              <div class="col-8 col-sm-9 poe-green">10:00-12:00</div>
            </div>
          </div>
        </div>
      </div>

      {/* 上下一步 */}
      <div class="row justify-content-center text-center text-sm-right poe-bookmark-btn-group">
        <div class="col-12 col-md-8 col-xl-6">
          <Link
            onClick={() => setFlowchart(2)}
            class="btn-green txt-btn mx-2 poe-mb20"
          >
            <i class="fas fa-chevron-left"></i>　上一步
          </Link>
          <Link
            onClick={() => {
              setCheckBool(true)
              // handlePostcheck()
            }}
            class="btn-green txt-btn mx-2 poe-mb20"
          >
            確認配送　<i class="fas fa-check"></i>
          </Link>
        </div>
      </div>
    </>
  )
}

export default MealDeliveryCheck
