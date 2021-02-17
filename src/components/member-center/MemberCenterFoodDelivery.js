import React from 'react'
import MemberCenterNavbar from './MemberCenterNavbar'

function MemberCenterFoodDelivery() {
  return (
    <>
      <div className="container">
        <div className="row ">
          <MemberCenterNavbar />
          <div className=" col-md-12 col-lg-12 col-sm-12 col-xl-8  col-12 ">
            <div className="col-md-10 col-lg-10 col-sm-10 col-xl-10 col-10 mx-auto">
              <h4 className="mb-4 mt-5 ml-2 d-none d-sm-none d-md-none d-lg- d-xl-block ">
                配送餐點
              </h4>
              <div className="d-block d-sm-block d-md-block d-lg-block d-xl-none text-center">
                <h4>配送餐點</h4>
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
              <div className="">
                <div className="col-12 col-sm-12 col-md-12 d-flex   ">
                  <ul className="nav line1  " id="myTab" role="tablist">
                    <li className="nav-item btn-green2  col-6  col-sm-6 col-md-6 col-xl-2 mr-xl-1  ">
                      <a
                        className=" text-light active "
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        已配送
                      </a>
                    </li>
                    <li className="nav-item btn-green2 col-6 col-sm-6 col-md-6 col-xl-2 ">
                      <a
                        className="text-light "
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        未配送
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className=" mt-md-4  mt-2 d-md-flex txt-sub2 col-10 col-sm-12 mx-auto  ">
                      <div className=" mt-2 mr-2 txt-cap d-none d-sm-none d-md-block d-lg-block d-xl-block">
                        輸入查詢區間
                      </div>
                      <div className=" txt-sub2 mt-3 d-block d-sm-block d-md-none d-lg-none d-xl-none col-12  offset-2 offset-sm-4">
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
                      <div className="btn border dropdown-toggle txt-cap1 mr-2 mb-2 col-10 col-sm-10 d-block d-sm-block d-md-none d-lg-none d-xl-none offset-1">
                        起始日期
                      </div>
                      <div className="btn border dropdown-toggle txt-cap1 mr-2 col-10 col-sm-10 d-block d-sm-block d-md-none d-lg-none d-xl-none  offset-1 ">
                        結束日期
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
                    <div className=" mt-2 ml-3  txt-cap d-none d-sm-none d-md-none d-lg-block d-xl-block">
                      請點選項目以取得更詳細的訂單資訊
                    </div>

                    <table className="txt-body  text-nowrap table col-10 mx-auto mx-xl-0 ">
                      <thead className=" ">
                        <tr className="text-center  ">
                          <th>項次</th>
                          <th className=" d-none d-md-block d-sm-none d-lg-block d-xl-block ">
                            訂單編號
                          </th>
                          <th>訂單日期</th>
                          <th className="d-none d-md-none d-sm-none d-lg-block d-xl-block  ">
                            配送明細
                          </th>
                          <th>使用餐卷</th>
                          <th className=" d-none d-md-none d-sm-none d-lg-block d-xl-block   ">
                            配送日期
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr className="text-center ">
                          <td>1</td>
                          <td className=" d-none d-md-block d-sm-none d-lg-block d-xl-block">
                            210106022925001
                          </td>
                          <td>2020/01/15</td>
                          <td className=" d-none d-md-none d-sm-none d-lg-block d-xl-block">
                            紅醬義大利麵 ...
                          </td>
                          <td>5</td>
                          <td className=" d-none d-md-none d-sm-none d-lg-block d-xl-block">
                            2020/01/15
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className=" mt-md-4  mt-2 d-md-flex txt-sub2 col-10 col-sm-12 mx-auto  ">
                      <div className=" mt-2 mr-2 txt-cap d-none d-sm-none d-md-block d-lg-block d-xl-block">
                        輸入查詢區間
                      </div>
                      <div className=" txt-sub2 mt-3 d-block d-sm-block d-md-none d-lg-none d-xl-none col-12  offset-2 offset-sm-4">
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
                      <div className="btn border dropdown-toggle txt-cap1 mr-2 mb-2 col-10 col-sm-10 d-block d-sm-block d-md-none d-lg-none d-xl-none offset-1">
                        起始日期
                      </div>
                      <div className="btn border dropdown-toggle txt-cap1 mr-2 col-10 col-sm-10 d-block d-sm-block d-md-none d-lg-none d-xl-none  offset-1 ">
                        結束日期
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
                    <div className=" mt-2 ml-3  txt-cap d-none d-sm-none d-md-none d-lg-block d-xl-block">
                      請點選項目以取得更詳細的訂單資訊
                    </div>

                    <table className="txt-body  text-nowrap table col-10 mx-auto mx-xl-0 ">
                      <thead className=" ">
                        <tr className="text-center  ">
                          <th>項次</th>
                          <th className=" d-none d-md-block d-sm-none d-lg-block d-xl-block ">
                            訂單編號
                          </th>
                          <th>訂單日期</th>
                          <th className="d-none d-md-none d-sm-none d-lg-block d-xl-block  ">
                            配送明細
                          </th>
                          <th>使用餐卷</th>
                          <th className=" d-none d-md-none d-sm-none d-lg-block d-xl-block   ">
                            配送日期
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr className="text-center ">
                          <td>1</td>
                          <td className=" d-none d-md-block d-sm-none d-lg-block d-xl-block">
                            210106022925001
                          </td>
                          <td>2020/01/15</td>
                          <td className=" d-none d-md-none d-sm-none d-lg-block d-xl-block">
                            紅醬義大利麵 ...
                          </td>
                          <td>5</td>
                          <td className=" d-none d-md-none d-sm-none d-lg-block d-xl-block">
                            2020/01/15
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MemberCenterFoodDelivery
