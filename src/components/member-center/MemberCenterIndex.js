import { Link } from 'react-router-dom'
import React from 'react'
function MemberCenterIndex() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto">
            <div className="h3 text-rightt ml-2 mb-5 mt-5 d-none d-xl-block">
              會員中心
            </div>
            <div className=" dd d-none d-xl-block">
              <div className=" col-8 offset-1">
                <div className="mb-5  col-8 d-flex mt-4">
                  <ul className="col">
                    <li>
                      {' '}
                      <img
                        src="../../../public/img/member-center/fish4.jpeg"
                        className="rounded-circle box "
                      />
                    </li>
                  </ul>
                  <ul className=" col-7 mt-3">
                    <li className="item1 ">
                      會員編號<span>2020011201</span>
                    </li>
                    <li className="item1 ">小明</li>
                    <li className="item1 d-flex">會員等級:VIP</li>
                  </ul>
                  <ul className="col-10 mt-3">
                    <li className="item1 ">
                      剩餘點數:<span>999</span>
                    </li>
                    <li className="item1 ">
                      餐卷數量:<span>999</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-12 d-flex justify-content-md-between">
                <div className="d-flex col-10 d-flex justify-content-md-between mx-auto">
                  <ul className="h6 item1  col-4">
                    <li>
                      <i className="far fa-address-card mr-1 mb-3"></i>
                      我的帳戶
                    </li>
                    <li className="item2 ml-4 ">
                      <Link to="/MemberCenter/Info" className="text-dark">
                        個人資料
                      </Link>
                    </li>
                    <li className="item2 ml-4">
                      <Link to="" className="text-dark">
                        密碼變更
                      </Link>
                    </li>
                    <li className="item2 ml-4">
                      <Link to="" className="text-dark">
                        信用卡
                      </Link>
                    </li>
                    <li className="item2 ml-4">
                      <Link to="" className="text-dark">
                        地址
                      </Link>
                    </li>
                    <li className="item2 ml-4">
                      <Link to="" className="text-dark">
                        分級資訊
                      </Link>
                    </li>
                  </ul>
                  <ul className="h6 item1 col-5 ">
                    <li className="item">
                      <i className="fas fa-heart mr-2 "></i>
                      <Link to="" className="text-dark">
                        我的專屬菜單
                      </Link>
                    </li>
                    <li className="item ">
                      <i className="fas fa-carrot mr-2"></i>
                      <Link to="" className="text-dark">
                        我的共享食譜
                      </Link>
                    </li>
                    <li className="item ">
                      <i className="fas fa-medal mr-2"></i>
                      <Link to="" className="text-dark">
                        我的成就
                      </Link>
                    </li>
                    <li className="item ">
                      <i className="fas fa-ticket-alt mr-1"></i>
                      <Link to="" className="text-dark">
                        我的優惠卷
                      </Link>
                    </li>
                  </ul>
                  <ul className="h6 col-4">
                    <li className="item ">
                      <i className="far fa-calendar-plus mr-2"></i>
                      <Link to="" className="text-dark">
                        驚喜廚房
                      </Link>
                    </li>
                    <li className="item ">
                      <i className="fas fa-utensils mr-2"></i>
                      <Link to="" className="text-dark">
                        我的餐點
                      </Link>
                    </li>
                    <li className="item ">
                      <i className="fas fa-clipboard mr-2"></i>
                      <Link to="" className="text-dark">
                        我的餐卷
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="d-block d-xl-none">
              <div className="h3 text-rightt ml-2 mb-5 mt-5 text-center">
                會員中心
              </div>
              <div className=" col-12">
                <div className="col-12 ">
                  <div className="col- d-flex ">
                    <div className="">
                      <img
                        src="../../../public/img/member-center/fish4.jpeg"
                        className="rounded-circle box1 mr-1"
                      />
                    </div>
                    <span className="item1  txt-cap mt-3  ">小明</span>
                  </div>

                  <div className="">
                    <ul className=" mt-3 txt-cap d-flex">
                      <li className="col-7 col-sm-8">
                        會員編號
                        <span>2020011201</span>
                      </li>
                      <li className="col-7 ">
                        餐卷數量:
                        <span>999</span>
                      </li>
                    </ul>
                  </div>

                  <div className="">
                    <ul className="mt-3 d-flex txt-cap">
                      <li className="col-7 col-sm-8">
                        會員等級:
                        <>VIP</>
                      </li>
                      <li className="col-7 ">
                        剩餘點數:
                        <span>999</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="btn border txt-cap1 col-12">回上頁</div>
              </div>

              <div className="col-12 ">
                <div className="col-12">
                  <ul className="h6 item1  mt-4 mb-1 ">
                    <li className="bt">
                      <i className="far fa-address-card mr-1 mb-2"></i> 我 的 帳
                      戶
                    </li>
                    <li className="txt-sub2 mt-2 ml-4 text3">
                      <Link to="" className="text-dark">
                        個人資料
                      </Link>
                    </li>
                    <li className="txt-sub2 ml-4 text3">
                      <Link to="" className="text-dark">
                        密碼變更
                      </Link>
                    </li>
                    <li className="txt-sub2 ml-4 text3">
                      <Link to="" className="text-dark">
                        信用卡
                      </Link>
                    </li>
                    <li className="txt-sub2 ml-4 text3">
                      <Link to="" className="text-dark">
                        地址
                      </Link>
                    </li>
                    <li className="txt-sub2 ml-4 text3">
                      <Link to="" className="text-dark">
                        分級資訊
                      </Link>
                    </li>
                  </ul>
                  <ul className="h6 ">
                    <li className="bt bob item1">
                      <i className="fas fa-heart mr-2 "></i>
                      <Link to="" className="text-dark">
                        我 的 專 屬 菜 單
                      </Link>
                    </li>
                    <li className="bt item1 ">
                      <i className="fas fa-carrot mr-2"></i>
                      <Link to="" className="text-dark">
                        我 的 共 享 食 譜
                      </Link>
                    </li>
                    <li className="bt item1">
                      <i className="fas fa-medal mr-2"></i>
                      <Link to="" className="text-dark">
                        我 的 成 就
                      </Link>
                    </li>
                    <li className="bt item1">
                      <i className="fas fa-ticket-alt mr-1"></i>
                      <Link to="" className="text-dark">
                        我 的 優 惠 卷
                      </Link>
                    </li>
                  </ul>
                  <ul className="h6">
                    <li className="bt item1">
                      <i className="far fa-calendar-plus mr-2"></i>
                      <Link to="" className="text-dark">
                        驚 喜 廚 房
                      </Link>
                    </li>
                    <li className="bt item1">
                      <i className="fas fa-utensils mr-2"></i>
                      <Link to="" className="text-dark">
                        我 的 餐 點
                      </Link>
                    </li>
                    <li className="bt item1">
                      <i className="fas fa-clipboard mr-2"></i>
                      <Link to="" className="text-dark">
                        我 的 餐 卷
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberCenterIndex
