import React, { useEffect, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'

function MealDeliveryInfo(props) {
  const { flowchart, setFlowchart } = props

  return (
    <>
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
            <div className="row align-items-center poe-mb30">
              <div className="col-2 px-md-0 text-md-right">
                <input type="checkbox" />
              </div>
              <div class="col-10">同會員資料</div>
            </div>
            <div className="row align-items-center poe-mb30">
              <div className="col-12 col-md-2 px-md-0 text-md-right poe-mb15">
                收件人
              </div>
              <div class="col-12 col-md-10 poe-mb15">
                <input type="text" class="w-100 input-style" />
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
              <div class="col-12 col-md-10 poe-mb15">
                <input type="text" class="w-100 input-style" />
              </div>
              <div className="col-md-2"></div>
              <div className="col-12 col-md-10 txt-cap">
                宅配人員將以此電話資料聯繫
              </div>
            </div>
            <div className="row align-items-center poe-mb30">
              <div className="col-12 col-md-2 px-md-0 text-md-right poe-mb15">
                Email
              </div>
              <div class="col-12 col-md-10 poe-mb15">
                <input type="mail" class="w-100 input-style" />
              </div>
              <div className="col-md-2"></div>
              <div className="col-12 col-md-10 txt-cap">
                交易通知將會發送到此 Email
              </div>
            </div>
            <div className="row align-items-center poe-mb30">
              <div className="col-12 col-md-2 px-md-0 text-md-right poe-mb15">
                收件地址
              </div>
              <div class="col-12 col-md-10 poe-mb15">
                <input type="text" class="w-100 input-style" />
              </div>
              <div className="col-md-2"></div>
              <div className="col-12 col-md-10 txt-cap">
                需專人簽收，勿填寫郵政信箱
              </div>
            </div>
            <div className="row align-items-center poe-mb30">
              <div className="col-12 col-md-2 px-md-0 text-md-right poe-mb15">
                配送日期
              </div>
              <div class="col-12 col-md-10 poe-mb15">
                <input type="date" class="w-100 input-style" />
              </div>
              <div className="col-md-2"></div>
              <div className="col-12 col-md-10 txt-cap">
                可選日期從3日後起, 至30日內
              </div>
            </div>
            <div className="row align-items-center poe-mb30">
              <div className="col-12 col-md-2 px-md-0 text-md-right poe-mb15">
                配送時間
              </div>
              <div class="col-12 col-md-10 poe-mb15">
                <input type="time" class="w-100 input-style" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 上下一步 */}
      <div class="row justify-content-center text-center text-sm-right poe-bookmark-btn-group">
        <div class="col-12 col-md-8 col-xl-6">
          <Link
            to="/cart"
            onClick={() => setFlowchart(1)}
            class="btn-green txt-btn mx-2 poe-mb20"
          >
            <i class="fas fa-chevron-left"></i>　上一步
          </Link>
          {1 !== null ? (
            <Link
              onClick={() => setFlowchart(3)}
              class="btn-green txt-btn mx-2 poe-mb20"
            >
              下一步　<i class="fas fa-chevron-right"></i>
            </Link>
          ) : (
            <span disabled class="btn-gray txt-btn mx-2 poe-mb20">
              下一步　<i class="fas fa-chevron-right"></i>
            </span>
          )}
        </div>
      </div>
    </>
  )
}

export default MealDeliveryInfo
