import React, { useEffect, useState } from 'react'
import { data } from './data'
import MemberCenterNavbar from './MemberCenterNavbar'
import { withFormik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

function MemberCenterSimpleMealCoupon() {
  const [Coupon, setCoupon] = useState([])

  const getDataFromServer = async () => {
    //模擬和伺服器要資料
    const response = await fetch(
      'http://localhost:4000/membercenter/cart_simplemealcoupon',
      {
        method: 'get',
      }
    )
    const data = await response.json()
    //最後設定要到狀態中
    setCoupon(data)
  }

  useEffect(() => {
    getDataFromServer()
  }, [])

  const Coupons = (
    <>
      {' '}
      <table className="txt-body  text-nowrap table  mx-auto mx-xl-4 ">
        <thead>
          <tr className="text-center ">
            <th>項次</th>
            <th>訂單編號</th>
            <th className=" d-none d-sm-none d-xl-block ">購買日期</th>
            <th>餐卷方案明細</th>
            <th className="d-none d-sm-none  d-md-none d-lg-block ">
              數量（組）
            </th>
            <th>內含餐卷數</th>
            <th>付款方式</th>
            <th className=" d-none d-md-none d-lg-block ">總金額</th>
          </tr>
        </thead>

        <tbody className="text-center txt-cap ">
          {Coupon.map((v, i) => (
            <tr key={i}>
              <td>{v.member_sid}</td>
              <td>{v.order_sid}</td>
              <td className=" d-none d-sm-none d-xl-block ">{v.check_date}</td>
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

  useEffect(() => {
    setCoupon(data)
  }, [])

  return (
    <>
      <div className="container">
        <div className="row">
          <MemberCenterNavbar />
          <div className=" col-md-12 col-lg-12 col-sm-12 col-xl-8  col-12 ">
            <div className="col-10 ">
              <div className=" ml-2 d-none d-sm-none d-md-none d-lg- d-xl-block h4 ">
                餐卷購買明細
              </div>
              <div className="d-block d-sm-block d-md-block d-lg-block d-xl-none mt-5 ">
                <div className=" offset-md-0 h4  offset-sm-3 offset-2 col-12">
                  餐卷購買明細
                </div>
              </div>

              <div className="col-12 d-none d-sm-none d-md-none d-lg-block d-xl-block mt-3">
                目前餐卷剩餘數量:999
              </div>
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
              <div className="d-sm-flex d-flex-none ">
                {' '}
                <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none offset-3 offset-md-0 ml-md-3">
                  目前餐卷剩餘數量:
                </div>
                <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none offset-5 offset-md-0 ofcol-12 ">
                  999張
                </div>
              </div>
              <div className="">
                <div className=" mt-md-2  mt-2 d-md-flex txt-sub2 col-12 col-sm-12 mx-auto ">
                  <div className=" mt-2 mr-2 txt-cap d-none d-sm-none d-md-block d-lg-block d-xl-block ">
                    輸入查詢區間
                  </div>
                  <div className=" txt-sub2 mt-3 d-block d-sm-block d-md-none d-lg-none d-xl-none col-10  offset-3  offset-sm-4">
                    輸入查詢區間
                  </div>
                  <div className="btn  border dropdown-toggle txt-cap1 mr-2  d-none d-sm-none d-md-block d-lg-block d-xl-block">
                    起始日期
                  </div>
                  
                  <small className="txt-cap mt-2 d-none d-sm-none d-md-block d-lg-block d-xl-block">
                    ～
                  </small>
                  <div className="btn border dropdown-toggle txt-cap1 ml-2 d-none d-sm-none d-md-block d-lg-block d-xl-block">
                    結束日期
                  </div>
                  <div className="btn border dropdown-toggle txt-cap1 mr-2 mb-2 col-12 col-sm-12 col-md-10 d-block d-sm-block d-md-none d-lg-none d-xl-none ">
                    起始日期
                  </div>
                </div>
                <div className="col-12 col-sm-10 mx-auto d-flex justify-content-center">
                  <button type="submit" className="btn-green txt-btn mt-2 mb-3">
                    送出
                  </button>
                </div>
                <div className=" txt-cap mt-2 ml-3 d-block d-sm-block d-md-block d-lg-none d-xl-none ">
                  請點選項目以取得更詳細的訂單資訊
                </div>
                <div className=" mt-2 ml-3  txt-cap d-none d-sm-none d-md-none d-lg-block d-xl-block ">
                  請點選項目以取得更詳細的訂單資訊
                </div>
              </div>
              {Coupons}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MemberCenterSimpleMealCoupon
