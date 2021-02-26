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
      <div className="col">
        <div className="mt-2 ml-5 txt-cap d-block d-xl-none col-8">
          請點選項目以取得更詳細的訂單資訊
        </div>
      </div>
      <table className="table txt-body  text-nowrap  mx-auto mx-xl-0">
        <thead>
          <tr className="text-center  d-none d-xl-block col-8">
            <th>項次</th>
            <th>訂單編號</th>
            <th>購買日期</th>
            <th>餐卷方案明細</th>
            <th>數量（組）</th>
            <th>內含餐卷數</th>
            <th>付款方式</th>
            <th>總金額</th>
          </tr>
        </thead>
        <thead>
          <tr className="text-center  d-block d-xl-none col-10">
            <th>項次</th>
            <th>訂單編號</th>
            <th>餐卷方案明細</th>
            <th>付款方式</th>
          </tr>
        </thead>

        <tbody className="text-center txt-cap ">
          {Coupon.map((v, i) => (
            <tr key={i}>
              <td>{v.member_sid}</td>
              <td>{v.order_sid}</td>
              <td className=" d-none d-sm-none d-xl-block ">
                <Moment format="YYYY/MM/DD">{v.check_date}</Moment>
              </td>
              <td>{v.combination_name}</td>
              <td className="d-none d-sm-none  d-md-none d-lg-block ">
                {v.quantity}
              </td>
              <td>{v.total_coupon_num}</td>
              <td>{v.payment_method}</td>
              <td className=" d-none d-md-none d-lg-block ">{v.total_price}</td>
            </tr>
          ))}
        </tbody>
      </table>{' '}
    </>
  )
  const saech = (
    <>
      <div className="d-flex ">
        {' '}
        <div className=" mt-md-2  mt-2 txt-sub2 col-12  d-md-flex">
          <div className=" mt-2 mr-2 txt-cap d-none  d-md-block ">
            輸入查詢區間
          </div>
          <div className=" txt-sub2 mt-3 d-block d-xl-none col-10 offset-3 offset-sm-4 mb-3">
            輸入查詢區間
          </div>
          <input
            className="mr-2 d-none d-xl-block"
            type="date"
            id="CouponSeach"
            name="CouponSeach"
            value={CouponSeach}
            onChange={(e) => setCouponSeach(e.target.value)}
          ></input>
          <small className="txt-cap mt-2 d-none d-md-block ">～</small>
          <input
            className="mr-2 d-none d-xl-block"
            type="date"
            id="CouponSeach1"
            name="CouponSeach1"
            value={CouponSeach1}
            onChange={(e) => setCouponSeach1(e.target.value)}
          ></input>
          <button
            className="btn-green3 ml-2 txt-cap ml-2 d-none d-md-block "
            onClick={() => getDataFromServer()}
          >
            送出
          </button>
          <input
            className="col-12 col-sm-12 col-md-10 d-block  d-md-none mb-3 "
            type="date"
            id="CouponSeach"
            name="CouponSeach"
            value={CouponSeach}
            onChange={(e) => setCouponSeach(e.target.value)}
          ></input>

          <input
            className="col-12 col-sm-12 col-md-10 d-block  d-md-none "
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
      </div>{' '}
    </>
  )

  return (
    <>
      <div className="container">
        <div className="row ml-2">
          <MemberCenterNavbar />
          <div className="col-12 col-xl-8 ml-5">
            <div className="col-10 mx-auto mx-xl-0 ">
              <div className=" mt-3  h3 ee d-none d-xl-block">餐卷購買明細</div>

              <div className="mt-5 h3 ee col-12 text-center  d-block d-xl-none">
                餐卷購買明細
              </div>
              {Coupon1.map((v) => (
                <div className="col-12 d-none d-xl-block mt-5">
                  購買餐卷數量:
                  <span style={{ color: 'red' }}>{v.simplemeal_coupon}</span>
                </div>
              ))}
              <div>
                <div className="d-flex offset-3 mb-2">
                  <img
                    src="../../../public/img/member-center/fish4.jpeg"
                    className="rounded-circle box1 mt-3 d-block d-sm-block d-md-none d-lg-none d-xl-none mb-2 mr-2"
                  />
                  <div className="mt-4 d-block d-sm-block d-md-none d-lg-none d-xl-none  d-inline">
                    admin
                  </div>
                </div>
                <div className="btn border dropdown-toggle txt-cap1 mr-2 mb-4  col-12 d-block d-sm-block d-md-none d-lg-none d-xl-none ">
                  回上頁
                </div>
              </div>
              <div className="d-sm-flex d-flex-none ">
                {Coupon1.map((v) => (
                  <div className="d-block d-xl-none offset-3 offset-md-0 ml-md-3">
                    目前餐卷剩餘數量:
                    <span style={{ color: 'red' }}>{v.simplemeal_coupon}</span>
                  </div>
                ))}
              </div>

              {saech}
            </div>
            {Coupons}
          </div>
        </div>
      </div>
    </>
  )
}
export default MemberCenterSimpleMealCoupon
