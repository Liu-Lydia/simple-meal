import React, { useEffect, useState, useRef } from 'react'
import { withRouter, Link } from 'react-router-dom'

function ReserveKitchenPayment(props) {
  const {
    flowchart,
    setFlowchart,
    paymentArray,
    paymentObj,
    setPaymentObj,
    paymentValue,
    setPaymentValue,
    coupon,
    setCoupon,
    reservationInfo,
    setReservationInfo,
  } = props

  // 優惠券資料(非餐券)
  const [couponDatabase, setCouponDatabase] = useState([])

  // 切換隱藏視窗
  const [modalStyle, setModalStyle] = useState({ display: 'none' })

  // placeholder
  const [infoPlaceholder, setInfoPlaceholder] = useState({
    name: '',
    mobile: '',
    email: '',
  })

  // 判斷有沒有填資料
  const [infoBool, setInfoBool] = useState({
    name: true,
    mobile: true,
    email: true,
  })

  // 接會員資料
  const [memberInfo, setMemberInfo] = useState({})

  // 切換信用卡隱藏視窗
  const [creditModalStyle, setCreditModalStyle] = useState({ display: 'none' })

  // 信用卡填入資訊
  const [creditCardInfo, setCreditCardInfo] = useState({
    num: '',
    date: '',
    cvn: '',
  })

  // 信用卡是否翻轉
  const [creditTransBool, setCreditTransBool] = useState(false)

  // 指定信用卡
  const creditCard = useRef()

  const handleGetMemberData = () => {
    fetch('http://localhost:4000/getmemberinfo', {
      method: 'get',
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((obj) => {
        // console.log(obj)
        setMemberInfo(obj)
      })
  }
  // 載入時取得會員資料, 跟資料庫要優惠券
  useEffect(() => {
    handleGetMemberData()
    handleGetCouponFromDatabase()
  }, [])

  // 改變付款方案
  const handleSetPaymentValue = (event) => {
    setPaymentValue(event.target.value)
    handleSetPaymentObj(event.target.value)
    // 如果是信用卡就跳出填寫視窗
    if (event.target.value === '0') {
      setCreditModalStyle({ display: 'block' })
    }
  }

  // 設定決定的付款選項物件
  const handleSetPaymentObj = (i) => {
    setPaymentObj(paymentArray[i])
  }

  // 手動輸入優惠碼
  const handleCoupon = (e) => {
    const couponText = e.target.value

    // 先歸零
    setCoupon({ string: couponText, cost: 0 })

    // 如果輸入的字串有屬於優惠碼, 提供相應的優惠
    couponDatabase.map((v, i) => {
      console.log(v.discount_code, couponText)
      v.discount_code === couponText &&
        setCoupon({ string: couponText, cost: v.discount })
    })
  }

  // 選用優惠券填入
  const handleSelectCoupon = (string, discount) => {
    setCoupon({
      string: string,
      cost: discount,
    })
    setModalStyle({ display: 'none' })
  }

  // 跟資料庫拿優惠券
  const handleGetCouponFromDatabase = () => {
    const url = 'http://localhost:4000/milestone/cartForDiscount'
    fetch(url, {
      method: 'get',
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((array) => {
        console.log(array)
        setCouponDatabase(array)
      })
  }

  // 自動填入會員資料到表單
  const handleAutoFillIn = () => {
    const obj = { ...memberInfo }
    const newInfo = { ...reservationInfo }
    newInfo.reservation_name = obj.name
    newInfo.reservation_tel = obj.mobile
    newInfo.reservation_email = obj.email

    setReservationInfo({ ...newInfo })
    // console.log(obj, reservationInfo)
  }

  // 下一步前檢查
  const handleCheckInfo = async () => {
    let newObj = { ...infoPlaceholder }
    let newBool = { ...infoBool }
    new Promise((resolve, reject) => {
      resolve('go')
    })
      .then(() => {
        if (reservationInfo.reservation_name === '') {
          newObj = { ...newObj, name: '請填寫預約人' }
          newBool = { ...newBool, name: false }
        } else {
          newObj = { ...newObj, name: '' }
          newBool = { ...newBool, name: true }
        }
      })
      .then(() => {
        if (reservationInfo.reservation_tel === '') {
          newObj = { ...newObj, mobile: '請填寫連絡電話' }
          newBool = { ...newBool, mobile: false }
        } else {
          newObj = { ...newObj, mobile: '' }
          newBool = { ...newBool, mobile: true }
        }
      })
      .then(() => {
        if (reservationInfo.reservation_email === '') {
          newObj = { ...newObj, email: '請填寫電子信箱' }
          newBool = { ...newBool, email: false }
        } else {
          newObj = { ...newObj, email: '' }
          newBool = { ...newBool, email: true }
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
          paymentObj.proj !== ''
        ) {
          setFlowchart(3)
        }
        console.log(infoPlaceholder)
      })
  }

  return (
    <>
      {/* 預約人資訊 */}
      <div className="row justify-content-center poe-bookmark">
        <div className="col-12 col-md-8 col-xl-6">
          <div className="d-flex justify-content-between txt-btn">
            <div className="col poe-bookmark-label poe-bookmark-label-active">
              預約人資訊
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
                預約人
              </div>
              <div className="col-12 col-md-10 poe-mb15">
                <input
                  type="text"
                  className="w-100 input-style"
                  value={reservationInfo.reservation_name}
                  onChange={(event) => {
                    setReservationInfo({
                      ...reservationInfo,
                      reservation_name: event.target.value,
                    })
                  }}
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
                  value={reservationInfo.reservation_tel}
                  onChange={(event) => {
                    setReservationInfo({
                      ...reservationInfo,
                      reservation_tel: event.target.value,
                    })
                  }}
                  placeholder={infoPlaceholder.mobile}
                />
              </div>
              <div className="col-md-2"></div>
              <div className="col-12 col-md-10 txt-cap">
                管理人員將以此電話資料聯繫
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
                  type="mail"
                  className="w-100 input-style"
                  value={reservationInfo.reservation_email}
                  onChange={(event) => {
                    setReservationInfo({
                      ...reservationInfo,
                      reservation_email: event.target.value,
                    })
                  }}
                  placeholder={infoPlaceholder.email}
                />
              </div>
              <div className="col-md-2"></div>
              <div className="col-12 col-md-10 txt-cap">
                交易通知將會發送到此 Email
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 購物車頁籤(餐券/驚喜廚房-使用優惠券) */}
      <div className="row justify-content-center poe-bookmark">
        <div className="col-12 col-md-8 col-xl-6">
          <div className="d-flex justify-content-between txt-btn">
            <div className="col poe-bookmark-label poe-bookmark-label-active">
              使用優惠券
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>

          <div className="poe-bookmark-content txt-btn">
            <div className="row d-flex justify-content-between align-items-center poe-bookmark-content-coupon">
              <div className="col-12 col-sm-3 poe-mb15 text-center">優惠碼</div>
              <div className="col-12 col-sm-5 poe-mb15">
                <input
                  type="text"
                  className="w-100 input-style poe-input-text"
                  value={coupon.string}
                  onChange={(event) => handleCoupon(event)}
                />
              </div>
              <div className="col-12 col-sm-4 poe-mb15">
                <button
                  className="w-100 select-btn-white txt-btn"
                  onClick={() => setModalStyle({ display: 'block' })}
                >
                  我的優惠
                </button>
              </div>
              {coupon.cost !== 0 && (
                <div className="col-12 text-right">
                  <span>折扣 </span>
                  <span className="poe-red">-{coupon.cost}</span>
                  <span> 元</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 購物車頁籤(餐券/驚喜廚房-選擇付款方式) */}
      <div className="row justify-content-center poe-bookmark">
        <div className="col-12 col-md-8 col-xl-6">
          <div className="d-flex justify-content-between txt-btn">
            <div className="col poe-bookmark-label poe-bookmark-label-active">
              選擇付款方式
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>

          <div className="poe-bookmark-content txt-btn">
            <table className="table table-borderless table-hover poe-cartTable">
              <tbody>
                {paymentArray.map((v, i) => (
                  <tr key={i}>
                    <th>
                      <input
                        type="radio"
                        name="payment"
                        value={i}
                        checked={paymentValue === `${i}`}
                        onChange={(e) => handleSetPaymentValue(e)}
                      />
                    </th>
                    <td>
                      {v.proj}
                      <span className="txt-cap poe-red">{v.discript}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      {/* 隱藏視窗 */}
      <div className="fff-handmadepopup" style={modalStyle}>
        <div
          className="fff-handmadepopup-content"
          style={{ marginTop: '20vh' }}
        >
          {/* 關閉頁面的Ｘ */}
          <div className="fff-ms-mobo justify-content-end col-12">
            <h6>
              <i
                className="fas fa-times aboutCloseBtn"
                onClick={() => {
                  setModalStyle({ display: 'none' })
                }}
              ></i>
            </h6>
          </div>
          {/* 如果沒有優惠券 */}
          {couponDatabase.length === 0 && (
            <div className="row justify-content-center poe-green">
              <div
                style={{
                  width: '120px',
                  height: '100px',
                  background:
                    'url("http://localhost:3015/img/lemon/Empty.GIF") center center no-repeat',
                  backgroundSize: 'contain',
                }}
              ></div>
            </div>
          )}
          {/* 優惠券位置*/}
          <div className="row justify-content-center poe-green">
            {couponDatabase.length === 0 ? (
              <h5>您沒有可用的優惠券</h5>
            ) : (
              <h5>您的優惠券</h5>
            )}

            {/* 按鈕 */}
            <div className="w-100">
              {couponDatabase.map((v, i) => (
                <>
                  <div className="my-2 w-100">
                    <button
                      className="select-btn-green txt-btn w-100"
                      style={{ height: '50px' }}
                      onClick={() => {
                        handleSelectCoupon(v.discount_code, v.discount)
                      }}
                    >
                      優惠折扣 {v.discount} 元, 優惠碼 {v.discount_code}
                    </button>
                  </div>
                </>
              ))}
            </div>
            {/* 取消按鈕 */}
            <div className="col-12 d-flex justify-content-center mt-3">
              <button
                type="button"
                className="btn-white txt-btn aboutCloseBtn"
                onClick={() => {
                  setModalStyle({ display: 'none' })
                }}
                data-dismiss="modal"
              >
                取消
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 隱藏視窗(信用卡) */}
      <div className="fff-handmadepopup" style={creditModalStyle}>
        <div className="fff-handmadepopup-content" style={{ marginTop: '5vh' }}>
          {/* 關閉頁面的Ｘ */}
          <div className="fff-ms-mobo justify-content-end col-12">
            <h6>
              <i
                className="fas fa-times aboutCloseBtn"
                onClick={() => {
                  setCreditModalStyle({ display: 'none' })
                }}
              ></i>
            </h6>
          </div>
          {/* 信用卡圖樣 */}
          <div className="poe-creditcard-container">
            <div
              className="poe-creditcard-body"
              ref={creditCard}
              style={
                creditTransBool
                  ? {
                      webkitTransform: 'rotateY(180deg)',
                      mozTransform: 'rotateY(180deg)',
                      transform: 'rotateY(180deg)',
                    }
                  : {}
              }
              onMouseEnter={() => {
                setCreditTransBool(true)
              }}
              onMouseLeave={() => {
                setCreditTransBool(false)
              }}
            >
              <div className="poe-creditcard-front">
                <div className="poe-creditcard">
                  <div className="poe-credit-title txt-btn">
                    <i class="fas fa-caret-left"></i>&nbsp;&nbsp; Credit Card
                  </div>
                  <div className="poe-credit-chip"></div>
                  <div className="poe-credit-numbox txt-btn">
                    <div className="poe-credit-num">
                      {creditCardInfo.num.slice(0, 4)}
                    </div>
                    <div className="poe-credit-num">
                      {creditCardInfo.num.slice(4, 8)}
                    </div>
                    <div className="poe-credit-num">
                      {creditCardInfo.num.slice(8, 12)}
                    </div>
                    <div className="poe-credit-num">
                      {creditCardInfo.num.slice(12, 16)}
                    </div>
                  </div>
                  <div className="poe-credit-effective text-center txt-btn">
                    &nbsp;&nbsp;{creditCardInfo.date.slice(0, 2)}/
                    {creditCardInfo.date.slice(2, 4)}
                  </div>
                </div>
              </div>
              <div className="poe-creditcard-back">
                <div className="poe-creditcard">
                  <div className="poe-creditblackbar"></div>
                  <div className="poe-credit-backbox">
                    <div className="poe-credit-username">user name</div>
                    <div className="poe-credit-cvn">{creditCardInfo.cvn}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 信用卡輸入位置*/}
          {/* 填入 */}
          <div className="mx-auto mx-sm-5 mt-4 txt-btn poe-form">
            <div className="row align-items-center poe-mb15">
              <div
                className={`col-12 col-md-2 px-md-0 text-md-right poe-mb15 ${
                  true ? '' : 'poe-red'
                }`}
              >
                卡號
              </div>
              <div className="col-12 col-md-10 poe-mb15">
                <input
                  type="text"
                  className="w-100 input-style"
                  value={creditCardInfo.num}
                  onChange={(event) => {
                    setCreditTransBool(false)
                    if (event.target.value.length <= 16) {
                      setCreditCardInfo({
                        ...creditCardInfo,
                        num: event.target.value,
                      })
                    }
                  }}
                  // placeholder={infoPlaceholder.name}
                />
              </div>
              {/* <div className="col-md-2"></div>
              <div className="col-12 col-md-10 txt-cap">
                姓名請填寫中文或英文(限10個中英文字)
              </div> */}
            </div>
            <div className="row align-items-center poe-mb15">
              <div
                className={`col-12 col-md-2 px-md-0 text-md-right poe-mb15 ${
                  true ? '' : 'poe-red'
                }`}
              >
                有效期
              </div>
              <div className="col-12 col-md-10 poe-mb15">
                <input
                  type="text"
                  className="w-100 input-style"
                  value={creditCardInfo.date}
                  onChange={(event) => {
                    setCreditTransBool(false)
                    if (event.target.value.length <= 4) {
                      setCreditCardInfo({
                        ...creditCardInfo,
                        date: event.target.value,
                      })
                    }
                  }}
                  // placeholder={infoPlaceholder.name}
                />
              </div>
              {/* <div className="col-md-2"></div>
              <div className="col-12 col-md-10 txt-cap">
                姓名請填寫中文或英文(限10個中英文字)
              </div> */}
            </div>
            <div className="row align-items-center poe-mb15">
              <div
                className={`col-12 col-md-2 px-md-0 text-md-right poe-mb15 ${
                  true ? '' : 'poe-red'
                }`}
              >
                驗證碼
              </div>
              <div className="col-12 col-md-10 poe-mb15">
                <input
                  type="text"
                  className="w-100 input-style"
                  value={creditCardInfo.cvn}
                  onChange={(event) => {
                    setCreditTransBool(true)
                    if (event.target.value.length <= 3) {
                      setCreditCardInfo({
                        ...creditCardInfo,
                        cvn: event.target.value,
                      })
                    }
                  }}

                  // placeholder={infoPlaceholder.name}
                />
              </div>
              {/* <div className="col-md-2"></div>
              <div className="col-12 col-md-10 txt-cap">
                姓名請填寫中文或英文(限10個中英文字)
              </div> */}
            </div>
          </div>
          <div className="row justify-content-center poe-green">
            {/* 按鈕 */}
            <div className="col-12 d-flex justify-content-center">
              <button
                type="button"
                className="btn-red txt-btn mx-2 my-2"
                onClick={() => {
                  setCreditModalStyle({ display: 'none' })
                }}
                data-dismiss="modal"
              >
                取消
              </button>
              <button
                type="button"
                className="aboutCloseBtn btn-green txt-btn mx-2 my-2"
                onClick={() => {
                  setCreditModalStyle({ display: 'none' })
                }}
                data-dismiss="modal"
              >
                確定
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReserveKitchenPayment
