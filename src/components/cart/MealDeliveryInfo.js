import React, { useEffect, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'

function MealDeliveryInfo(props) {
  const { flowchart, setFlowchart } = props

  return (
    <>
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
                <tr>
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
                      <span>2</span>
                    </div>
                  </td>
                </tr>
                <tr>
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
                      <span>2</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="poe-bookmark-content-result text-right">
              <div>
                <span>您的帳戶現有 </span>
                <span className="poe-red">0</span>
                <span> 張餐券,</span>
                <br className="d-block d-sm-none" />
                <span>配送將消耗 </span>
                <span className="poe-red">8</span>
                <span> 張餐券, </span>
                <br className="d-block d-sm-none" />
                <span>您尚有 </span>
                <spanspan className="poe-red">12</spanspan>
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
            <div className="row align-items-center poe-mb30">
              <div className="col-2 px-md-0 text-md-right">
                <input type="checkbox" />
              </div>
              <div className="col-10">同會員資料</div>
            </div>
            <div className="row align-items-center poe-mb30">
              <div className="col-12 col-md-2 px-md-0 text-md-right poe-mb15">
                收件人
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
                宅配人員將以此電話資料聯繫
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
            <div className="row align-items-center poe-mb30">
              <div className="col-12 col-md-2 px-md-0 text-md-right poe-mb15">
                收件地址
              </div>
              <div className="col-12 col-md-10 poe-mb15">
                <input type="text" className="w-100 input-style" />
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
              <div className="col-12 col-md-10 poe-mb15">
                <input type="date" className="w-100 input-style" />
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
              <div className="col-12 col-md-10 poe-mb15">
                <input type="time" className="w-100 input-style" />
              </div>
            </div>
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

export default MealDeliveryInfo
