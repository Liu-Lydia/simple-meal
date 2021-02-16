import { set } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'

function MealDeliveryInfo(props) {
  const { flowchart, setFlowchart, info, setInfo } = props

  // 判斷有沒有填資料
  const [infoBool, setInfoBool] = useState({
    // name: false,
    // mobile: false,
    // email: false,
    // address: false,
    // date: false,
    // time: false,
    name: true,
    mobile: true,
    email: true,
    address: true,
    date: true,
    time: true,
  })

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

  // 下一步前檢查
  const handleCheckInfo = async () => {
    // const checkInfo = new Promise(function (resolve, reject) {
    //   console.log(info, infoBool)
    // })
    // checkInfo
    //   .then(() => {
    //     if (info.name === '') {
    //       setInfoBool({ ...infoBool, name: false })
    //       return
    //     } else {
    //       setInfoBool({ ...infoBool, name: true })
    //     }
    //   })
    //   .then(() => {
    //     if (info.mobile === '') {
    //       setInfoBool({ ...infoBool, mobile: false })
    //       return
    //     } else {
    //       setInfoBool({ ...infoBool, mobile: true })
    //     }
    //   })
    //   .then(() => console.log(info, infoBool))
    //   .then(() => {
    //     if (
    //       infoBool.name &&
    //       infoBool.mobile &&
    //       infoBool.email &&
    //       infoBool.address &&
    //       infoBool.date &&
    //       infoBool.time
    //     ) {
    //       setFlowchart(3)
    //     }
    //   })
    setFlowchart(3)
    // // 檢查收件人
    // if (info.name === '') {
    //   setInfoBool({ ...infoBool, name: false })
    //   return
    // } else {
    //   setInfoBool({ ...infoBool, name: true })
    // }
    // // 電話
    // if (info.mobile === '') {
    //   setInfoBool({ ...infoBool, mobile: false })
    //   return
    // } else {
    //   setInfoBool({ ...infoBool, mobile: true })
    // }
    // // 信箱
    // if (info.email === '') {
    //   setInfoBool({ ...infoBool, email: false })
    //   return
    // } else {
    //   setInfoBool({ ...infoBool, email: true })
    // }
    // // 地址
    // if (info.address === '') {
    //   setInfoBool({ ...infoBool, address: false })
    //   return
    // } else {
    //   setInfoBool({ ...infoBool, address: true })
    // }
    // // 日期
    // if (info.date === '') {
    //   setInfoBool({ ...infoBool, date: false })
    //   return
    // } else {
    //   setInfoBool({ ...infoBool, date: true })
    // }
    // // 時間
    // if (info.time === '') {
    //   setInfoBool({ ...infoBool, time: false })
    //   return
    // } else {
    //   setInfoBool({ ...infoBool, time: true })
    // }
    // console.log(info, infoBool)
    // 沒問題才給下一步
    // if (
    //   infoBool.name &&
    //   infoBool.mobile &&
    //   infoBool.email &&
    //   infoBool.address &&
    //   infoBool.date &&
    //   infoBool.time
    // ) {
    //   setFlowchart(3)
    // }
  }

  // 裝載時轉成流程2
  useEffect(() => {
    setFlowchart(2)
    handleGetData()
    console.log(deliveryData.thisTime)
  }, [])

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
                {/* 商品卡 */}
                {deliveryData.thisTime.map((v, i) => (
                  <tr>
                    <td className="align-middle px-0 poe-pr15 poe-cart-product-img">
                      <img
                        className="w-100"
                        src={`http://localhost:3015/img/meal/未去背/${v.product_id}.jpg`}
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
            <div className="row align-items-center poe-mb30">
              <div className="col-2 px-md-0 text-md-right">
                <input type="checkbox" />
              </div>
              <div className="col-10">同會員資料</div>
            </div>
            <div className="row align-items-center poe-mb30">
              <div
                className={`col-12 col-md-2 px-md-0 text-md-right poe-mb15 ${
                  !infoBool.name ? 'poe-red' : ''
                }`}
              >
                收件人
              </div>
              <div className="col-12 col-md-10 poe-mb15">
                <input
                  type="text"
                  className="w-100 input-style"
                  value={info.name}
                  onChange={(event) =>
                    setInfo({ ...info, name: event.target.value })
                  }
                />
              </div>
              <div className="col-md-2"></div>
              <div className="col-12 col-md-10 txt-cap">
                姓名請填寫中文或英文(限10個中英文字)
              </div>
            </div>
            <div className="row align-items-center poe-mb30">
              <div
                className={`col-12 col-md-2 px-md-0 text-md-right poe-mb15 ${
                  !infoBool.mobile ? 'poe-red' : ''
                }`}
              >
                連絡電話
              </div>
              <div className="col-12 col-md-10 poe-mb15">
                <input
                  type="text"
                  className="w-100 input-style"
                  value={info.mobile}
                  onChange={(event) =>
                    setInfo({ ...info, mobile: event.target.value })
                  }
                />
              </div>
              <div className="col-md-2"></div>
              <div className="col-12 col-md-10 txt-cap">
                宅配人員將以此電話資料聯繫
              </div>
            </div>
            <div className="row align-items-center poe-mb30">
              <div
                className={`col-12 col-md-2 px-md-0 text-md-right poe-mb15 ${
                  !infoBool.email ? 'poe-red' : ''
                }`}
              >
                Email
              </div>
              <div className="col-12 col-md-10 poe-mb15">
                <input
                  type="email"
                  className="w-100 input-style"
                  value={info.email}
                  onChange={(event) =>
                    setInfo({ ...info, email: event.target.value })
                  }
                />
              </div>
              <div className="col-md-2"></div>
              <div className="col-12 col-md-10 txt-cap">
                交易通知將會發送到此 Email
              </div>
            </div>
            <div className="row align-items-center poe-mb30">
              <div
                className={`col-12 col-md-2 px-md-0 text-md-right poe-mb15 ${
                  !infoBool.address ? 'poe-red' : ''
                }`}
              >
                收件地址
              </div>
              <div className="col-12 col-md-10 poe-mb15">
                <input
                  type="text"
                  className="w-100 input-style"
                  value={info.address}
                  onChange={(event) =>
                    setInfo({ ...info, address: event.target.value })
                  }
                />
              </div>
              <div className="col-md-2"></div>
              <div className="col-12 col-md-10 txt-cap">
                需專人簽收，勿填寫郵政信箱
              </div>
            </div>
            <div className="row align-items-center poe-mb30">
              <div
                className={`col-12 col-md-2 px-md-0 text-md-right poe-mb15 ${
                  !infoBool.date ? 'poe-red' : ''
                }`}
              >
                配送日期
              </div>
              <div className="col-12 col-md-10 poe-mb15">
                <input
                  type="date"
                  className="w-100 input-style"
                  value={info.date}
                  onChange={(event) =>
                    setInfo({ ...info, date: event.target.value })
                  }
                />
              </div>
              <div className="col-md-2"></div>
              <div className="col-12 col-md-10 txt-cap">
                可選日期從3日後起, 至30日內
              </div>
            </div>
            <div className="row align-items-center poe-mb30">
              <div
                className={`col-12 col-md-2 px-md-0 text-md-right poe-mb15 ${
                  !infoBool.time ? 'poe-red' : ''
                }`}
              >
                配送時間
              </div>
              <div className="col-12 col-md-10 poe-mb15">
                <input
                  type="time"
                  className="w-100 input-style"
                  value={info.time}
                  onChange={(event) =>
                    setInfo({ ...info, time: event.target.value })
                  }
                />
              </div>
              <div className="col-md-2"></div>
              <div className="col-12 col-md-10 txt-cap">
                配送時間從早上9:00至晚間7:00, 視當日路況或許會有些許延誤,
                敬請見諒
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
              onClick={() => handleCheckInfo()}
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
