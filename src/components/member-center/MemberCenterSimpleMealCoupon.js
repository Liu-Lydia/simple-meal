import React from 'react'
import MemberCenterNavbar from './MemberCenterNavbar'
function MemberCenterSimpleMealCoupon() {
  return (
    <>
      <div className="container">
        <div className="row ">
          <MemberCenterNavbar />
          <div className=" col-md-12 col-lg-12 col-sm-12 col-xl-8  col-12 ">
            <div className="col-md-10 col-lg-10 col-sm-10 col-xl-10 col-10 mx-auto">
              <div className="mb-4 mt-5 ml-2 d-none d-sm-none d-md-none d-lg- d-xl-block h4 ">
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
                  <a
                    href=""
                    className="btn-green1  mt-2  d-block d-sm-block d-md-none d-lg-none d-xl-none col-10  mx-auto"
                  >
                    搜尋
                  </a>
                  <a
                    href=""
                    className="btn-green1 txt-cap  ml-2 d-none d-sm-none d-md-block d-lg-block d-xl-block "
                  >
                    搜尋
                  </a>
                </div>
                <div className=" txt-cap mt-2 ml-3 d-block d-sm-block d-md-block d-lg-none d-xl-none ">
                  請點選項目以取得更詳細的訂單資訊
                </div>
                <div className=" mt-2 ml-3  txt-cap d-none d-sm-none d-md-none d-lg-block d-xl-block ">
                  請點選項目以取得更詳細的訂單資訊
                </div>

                <table className="txt-body  text-nowrap table  mx-auto mx-xl-0 ">
                  <thead className=" col-10 col-xl-12">
                    <tr className="text-center  ">
                      <th>項次</th>
                      <th>訂單編號</th>
                      <th className=" d-none d-md-block d-sm-none d-lg-block d-xl-block ">
                        購買日期
                      </th>
                      <th>餐卷方案明細</th>
                      <th className="d-none d-md-none d-sm-none d-lg-block d-xl-block  ">
                        數量（組）
                      </th>
                      <th>內含餐卷數</th>
                      <th>付款方式</th>
                      <th className=" d-none d-md-none d-sm-none d-lg-block d-xl-block   ">
                        總金額
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="text-center ">
                      <td>1</td>
                      <td className=" d-none d-md-block d-sm-none d-lg-block d-xl-block">
                        abc1234
                      </td>
                      <td>2020/01/22</td>
                      <td className=" d-none d-md-none d-sm-none d-lg-block d-xl-block">
                        吃飽飽沒煩惱組合
                      </td>
                      <td>1</td>
                      <td className=" d-none d-md-none d-sm-none d-lg-block d-xl-block">
                        20
                      </td>
                      <td>信用卡</td>
                      <td>3600</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MemberCenterSimpleMealCoupon
