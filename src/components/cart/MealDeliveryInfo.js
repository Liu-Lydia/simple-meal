import { set } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function MealDeliveryInfo(props) {
  const { flowchart, setFlowchart, info, setInfo } = props

  // placeholder
  const [infoPlaceholder, setInfoPlaceholder] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    date: '',
    time: '',
  })

  // 判斷有沒有填資料
  const [infoBool, setInfoBool] = useState({
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
    memberInfoObj: {},
  })

  // 讀取資料庫
  const handleGetData = () => {
    const url = 'http://localhost:4000/mealdelivery/getdeliverycart'
    fetch(url, {
      method: 'get',
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((obj) => {
        console.log(obj)
        setDeliveryData(obj)
      })
  }

  // 下一步前檢查
  const handleCheckInfo = async () => {
    let newObj = { ...infoPlaceholder }
    let newBool = { ...infoBool }
    new Promise((resolve, reject) => {
      resolve('go')
    })
      .then(() => {
        if (info.name === '') {
          newObj = { ...newObj, name: '請填寫收件人' }
          newBool = { ...newBool, name: false }
        } else {
          newObj = { ...newObj, name: '' }
          newBool = { ...newBool, name: true }
        }
      })
      .then(() => {
        if (info.mobile === '') {
          newObj = { ...newObj, mobile: '請填寫連絡電話' }
          newBool = { ...newBool, mobile: false }
        } else {
          newObj = { ...newObj, mobile: '' }
          newBool = { ...newBool, mobile: true }
        }
      })
      .then(() => {
        if (info.email === '') {
          newObj = { ...newObj, email: '請填寫電子信箱' }
          newBool = { ...newBool, email: false }
        } else {
          newObj = { ...newObj, email: '' }
          newBool = { ...newBool, email: true }
        }
      })
      .then(() => {
        if (info.address === '') {
          newObj = { ...newObj, address: '請填寫收件地址' }
          newBool = { ...newBool, address: false }
        } else {
          newObj = { ...newObj, address: '' }
          newBool = { ...newBool, address: true }
        }
      })
      .then(() => {
        if (info.date === '') {
          newBool = { ...newBool, date: false }
        } else {
          newBool = { ...newBool, date: true }
        }
      })
      .then(() => {
        if (info.time === '') {
          newBool = { ...newBool, time: false }
        } else {
          newBool = { ...newBool, time: true }
        }
      })
      .then(() => {
        setInfoPlaceholder({ ...newObj })
        setInfoBool({ ...newBool })
      })
      .then(() => {
        if (
          newBool.name === true &&
          newBool.mobile === true &&
          newBool.email === true &&
          newBool.address === true &&
          newBool.date === true &&
          newBool.time === true
        ) {
          setFlowchart(3)
        }
        // console.log(infoPlaceholder)
      })
  }

  // 自動填入會員資料到表單
  const handleAutoFillIn = () => {
    const obj = deliveryData.memberInfoObj
    const newInfo = { ...info }
    newInfo.name = obj.name
    newInfo.mobile = obj.mobile
    newInfo.email = obj.email
    newInfo.address = obj.addr

    setInfo({ ...newInfo })
    // console.log(typeof obj.mobile, obj)
  }

  // 裝載時轉成流程2
  useEffect(() => {
    setFlowchart(2)
    handleGetData()
    // console.log(deliveryData.thisTime)
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
                    style={{ width: '150px' }}
                  >
                    數量
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* 商品卡 */}
                {deliveryData.thisTime.map((v, i) => (
                  <tr key={i}>
                    <td className="align-middle px-0 poe-pr15 poe-cart-product-img">
                      <img
                        className="w-100"
                        src={`http://localhost:3015/img/meal/未去背/${v.product_id}.jpg`}
                        alt=""
                      />
                    </td>
                    <td>
                      <p className="txt-btn">{v.meal_name}</p>
                      <p className="txt-cap poe-gray poe-ellipsis">
                        {v.description}
                      </p>
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

          <div className="poe-bookmark-content txt-btn poe-form">
            <div className="row align-items-center poe-mb30">
              <div className="col-2 px-md-0 text-md-right">
                <input type="checkbox" onChange={() => handleAutoFillIn()} />
              </div>
              <div className="col-10">同會員資料</div>
            </div>
            <div className="row align-items-center poe-mb30">
              <div
                className={`col-12 col-md-2 px-md-0 text-md-right poe-mb15 ${
                  infoBool.name ? '' : 'poe-red'
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
                  placeholder={infoPlaceholder.name}
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
                  infoBool.mobile ? '' : 'poe-red'
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
                  placeholder={infoPlaceholder.mobile}
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
                  infoBool.email ? '' : 'poe-red'
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
                  placeholder={infoPlaceholder.email}
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
                  infoBool.address ? '' : 'poe-red'
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
                  placeholder={infoPlaceholder.address}
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
                  infoBool.date ? '' : 'poe-red'
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
                  infoBool.time ? '' : 'poe-red'
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
