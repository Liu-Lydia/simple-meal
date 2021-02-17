import React from 'react'
function MemberCenterResetPassword() {
  return (
    <div class="container">
      <div className="row ">
        <div className="col-6  mx-auto">
          <div className="cc  d-none d-md-none d-sm-none d-lg-none d-xl-block">
            <div
              className="col-10 d-flex justify-content-end "
              style={{ color: 'red' }}
            >
              <i className="fas fa-times"></i>
            </div>
            <div className="">
              <div className="h4  text-center mb-5 ">忘記密碼</div>

              <div className="col-8 mx-auto">
                <div className="mb-1 txt-sub1">忘記密碼嗎？</div>
                <div className="mb-2 txt-sub1">輸入您的email 重置密碼吧！</div>
                <input
                  type="email"
                  className="form-control mb-3 br "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>

              <div className="col-8 mx-auto d-flex justify-content-end mb-4">
                <a href="" className="btn-green txt-btn mt-2 mb-3">
                  送出
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className=" d-block d-md-block d-sm-block d-lg-block d-xl-none">
            <div className="">
              <div className="h3  text-center mt-3">忘記密碼</div>

              <div className="col-12 col-sm-10 mx-auto mt-5">
                <div className="mb-1 txt-sub1">忘記密碼嗎？</div>
                <div className="mb-2 txt-sub1">輸入您的email 重置密碼吧！</div>
                <input
                  type="email"
                  className="form-control mb-3 br "
                  id="exampleInputEmail1"
                />
              </div>

              <div className="col-12 col-sm-10 mx-auto d-flex justify-content-center mb-4">
                <a href="" className="btn-green txt-btn mt-2 mb-3">
                  送出
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MemberCenterResetPassword
