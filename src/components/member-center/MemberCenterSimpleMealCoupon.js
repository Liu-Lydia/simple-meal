import React, { useEffect, useState } from 'react'
import MemberCenterNavbar from './MemberCenterNavbar'
import Moment from 'react-moment'

function MemberCenterSimpleMealCoupon() {
  //模擬和伺服器要的資料
  const [Coupon, setCoupon] = useState([])

  const [Coupon1, setCoupon1] = useState([])

  const [CouponSeach1, setCouponSeach1] = useState('null')

  const [CouponSeach, setCouponSeach] = useState('null')

  const getDataFromServer = async () => {
    //模擬和伺服器要資料
    const response = await fetch(
      `http://localhost:4000/membercenter/cart_simplemealcoupon?start=${CouponSeach}&end=${CouponSeach1}`,
      {
        method: 'get',
        credentials: 'include',
      }
    )
    const data = await response.json()
    //最後設定要到狀態中
    setCoupon(data)
  }

  const getDataFromServer1 = async () => {
    //模擬和伺服器要資料
    const response = await fetch('http://localhost:4000/membercenter/info', {
      method: 'get',
      credentials: 'include',
    })
    const data = await response.json()
    //最後設定要到狀態中
    setCoupon1(data)
  }

  useEffect(() => {
    getDataFromServer()
  }, [])

  useEffect(() => {
    getDataFromServer1()
  }, [])

  const Coupons = (
    <>
      <table className="table txt-sub1  text-nowrap text-center">
        <thead>
          <tr className="">
            <th>訂單編號</th>
            <th>購買日期</th>
            <th>餐卷方案明細</th>
            <th>數量（組）</th>
            <th>內含餐卷數</th>
            <th>付款方式</th>
            <th>總金額</th>
          </tr>
        </thead>

        <tbody className="text-cap">
          {Coupon.map((v, i) => (
            <tr key={i}>
              <td>{v.order_sid}</td>
              <td>
                <Moment format="YYYY/MM/DD">{v.check_date}</Moment>
              </td>
              <td>{v.combination_name}</td>
              <td>{v.quantity}</td>
              <td>{v.total_coupon_num}</td>
              <td>{v.payment_method}</td>
              <td>{v.total_price}</td>
            </tr>
          ))}
        </tbody>
      </table>{' '}
    </>
  )
  const Coupons1 = (
    <>
      <table className="table txt-sub1 text-right text-sm-center ">
        <thead>
          <tr>
            <th>項次</th>
            <th>訂單編號</th>

            <th>餐卷方案明細</th>
          </tr>
        </thead>

        <tbody className="text-cap">
          {Coupon.map((v, i) => (
            <tr key={i}>
              <td>{v.member_sid}</td>
              <td>{v.order_sid}</td>
              <td>{v.combination_name}</td>
            </tr>
          ))}
        </tbody>
      </table>{' '}
    </>
  )

  const saech = (
    <>
      <div className="mt-2 txt-sub2 d-md-flex ">
        <div className=" mt-2 mr-2 txt-cap  d-none d-md-none d-lg-block ">
          輸入查詢區間
        </div>

        <input
          className="mr-2 d-none d-md-none d-lg-block"
          type="date"
          id="CouponSeach"
          name="CouponSeach"
          value={CouponSeach}
          onChange={(e) => setCouponSeach(e.target.value)}
        ></input>
        <small className="txt-cap mt-2 d-none d-md-none d-lg-block ">～</small>
        <input
          className="mr-2 d-none d-md-none d-lg-block"
          type="date"
          id="CouponSeach1"
          name="CouponSeach1"
          value={CouponSeach1}
          onChange={(e) => setCouponSeach1(e.target.value)}
        ></input>
        <button
          className="btn-green3 ml-2 txt-cap ml-2 d-none d-md-none d-lg-block "
          onClick={() => getDataFromServer()}
        >
          送出
        </button>
      </div>

      <div className="mt-2 txt-sub2 mx-auto">
        <div className="col-4 mx-auto txt-sub2 mt-3 d-block d-lg-none mb-3">
          輸入查詢區間
        </div>

        <input
          className="col-12 d-block  d-lg-none mb-3 "
          type="date"
          id="CouponSeach"
          name="CouponSeach"
          value={CouponSeach}
          onChange={(e) => setCouponSeach(e.target.value)}
        ></input>

        <input
          className="col-12 d-block  d-lg-none "
          type="date"
          id="CouponSeach1"
          name="CouponSeach1"
          value={CouponSeach1}
          onChange={(e) => setCouponSeach1(e.target.value)}
        ></input>
        <button
          className="btn-green3 mt-2  d-block d-md-none col-6  mx-auto"
          onClick={() => getDataFromServer()}
        >
          送出
        </button>
      </div>
    </>
  )

  return (
    <>
      <div className="container">
        <div className="row ml-2">
          <MemberCenterNavbar />

          <div className="col-8 ml-5 ">
            <div className="mt-5 h4 ee d-block d-xl-none">餐卷購買明細</div>

            <div className="">
              <div className=" mt-3 mb-4 h4 ee d-none d-xl-block">
                餐卷購買明細
              </div>
              {Coupon1.map((v) => (
                <li className="d-bolck d-lg-none box1 mr-4 mx-auto mx-sm-0 mx-lg-0 mb-2">
                  <img
                    className="cha-cart-user-img "
                    src={`http://localhost:3015/img/member-center/${v.avater}`}
                    alt=""
                  />
                </li>
              ))}

              {Coupon1.map((v) => (
                <li className="d-block d-lg-none text-nowrap col-8 col-sm-10 mx-md-0 mx-auto">
                  會員姓名:
                  <span>{v.name}</span>
                </li>
              ))}
              {Coupon1.map((v) => (
                <li className="mt-3 d-block d-lg-none text-nowrap col-8 col-sm-11 mx-md-0 mx-auto">
                  目前餐卷剩餘數量:
                  <span style={{ color: 'red' }}>{v.simplemeal_coupon}</span>
                </li>
              ))}
              <div className="btn border dropdown-toggle txt-cap1 mr-2 mb-5 col-12 d-block d-lg-none ">
                回上頁
              </div>
            </div>

            {Coupon1.map((v) => (
              <li className="d-none d-lg-block mt-4 mb-4 ">
                目前餐卷剩餘數量:
                <span style={{ color: 'red' }}>{v.simplemeal_coupon}</span>
              </li>
            ))}

            {saech}
            <div className="d-none d-lg-block col-8 mt-4">{Coupons}</div>
          </div>

          <div className="d-block d-lg-none  mx-auto col-12">
            <div class=" txt-cap mt-2 ml-3 col-12">
              請點選餐卷方案明細以取得更詳細的訂單資訊
            </div>

            {Coupons1}
          </div>
        </div>
      </div>
    </>
  )
}
export default MemberCenterSimpleMealCoupon
