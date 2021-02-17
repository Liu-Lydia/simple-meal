import React from 'react'

function MemberCenterAddr() {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className=" aa  d-none d-mo-none d-sm-none d-lg-none d-xl-block col-lg-2  col-md-4 col-sm-none offset-1 c ">
            <div className="d-flex ml-4">
              <ul className="d-none d-mo-none d-sm-none d-lg-block d-xl-block    ">
                <img
                  src="../../../public/img/member-center/fish4.jpeg"
                  className="rounded-circle box1  "
                />
              </ul>
              <div className="txt-cap ">
                <li className="d-none d-md-none d-sm-none  d-lg-none d-xl-block">
                  會員姓名:
                </li>
                <li className="d-none d-md-none d-sm-none d-lg-none d-xl-block  ">
                  會員等級:
                </li>
              </div>
            </div>
            <div className="">
              <div className="txt-body align-middle">
                <div className="d-flex">
                  <ul className="mt-1 h6 mx-auto">
                    <ul
                      data-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      data-toggle="collapse"
                    >
                      <i className="far fa-address-card mr-1"></i>我的帳戶
                    </ul>
                    <div
                      className="collapse txt-sub2 ml-2 col-10"
                      id="collapseExample"
                    >
                      <li>個人資料</li>
                      <li>密碼變更</li>
                      <li>信用卡</li>
                      <li>地址</li>
                      <li>分級資訊</li>
                    </div>
                    <li className="mb-3 mt-3">
                      <i className="fas fa-heart mr-1"></i>我的專屬菜單
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-utensils mr-2"></i>我的餐點
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-clipboard mr-2"></i>我的餐卷
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-carrot mr-1"></i>我的共享食譜
                    </li>
                    <li className="mb-3">
                      <i className="far fa-calendar-plus mr-2"></i>驚喜廚房
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-medal mr-1"></i>我的成就
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-ticket-alt mr-1"></i>我的優惠卷
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className=" col-md-12 col-lg-12 col-sm-12 col-xl-6  col-12 ">
            <div className="col-md-8 col-lg-8 col-xl-8 col-sm-8 col-10 mx-auto">
              <form>
                <div className="form-group">
                  <h5 className="mb-5 mt-5 text-center  text-xl-left ">地址</h5>
                  <div className="btn border dropdown-toggle txt-cap1 mr-2 mb-4  col-12 d-block d-sm-none d-md-none d-lg-none d-xl-none ">
                    回上頁
                  </div>

                  <div className="d-flex ">
                    <label for="formGroupExampleInput" className="mt-2 ">
                      地址
                    </label>
                    <button
                      className="btn btn-success btn-sm box6  mb-2 ml-1 "
                      type="button"
                    >
                      預 設
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                  />
                </div>

                <div className="d-flex justify-content-between mb-5 mt-3 ">
                  <a href="" className="btn-green txt-btn ">
                    重新設定
                  </a>
                  <a href="" className="btn-green txt-btn">
                    修改
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberCenterAddr
