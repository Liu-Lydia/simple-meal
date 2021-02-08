function MemberCenterLogin() {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-6  mx-auto">
            <div className="cc  d-none d-md-none d-sm-none d-lg-none d-xl-block">
              <div className="col-10 d-flex justify-content-end ">
                <i className="fas fa-times"></i>
              </div>
              <div className="">
                <div className="h3  text-center">登入</div>
                <div className="col-8 mx-auto">
                  <div className="mb-2">電子郵件</div>
                  <input
                    type="email"
                    className="form-control mb-3 br "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>

                <div className="col-8 mx-auto">
                  <div className="mb-2">密碼</div>
                  <input
                    type="email"
                    className="form-control br "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Password"
                  />
                  <div className="txt-cap d-flex justify-content-end">
                    <a href="#" className="text-dark">
                      忘記密碼？
                    </a>
                  </div>
                </div>

                <div className="col-8 mx-auto">
                  <div className="mb-2">驗證碼</div>
                </div>

                <div className="col-10 col-md-8 mx-auto d-flex justify-content-between">
                  <input
                    type=""
                    className="form-control mr-2 col-6 col-sm-8  br "
                    id="exampleInputEmail1"
                    placeholder="驗證碼"
                  />
                  <input
                    type=""
                    className="form-control mb-3  col-4 col-sm-4 br text-center"
                    id="exampleInputEmail1"
                    placeholder="驗證碼"
                  />
                </div>
                <div className="col-8 mx-auto d-flex justify-content-center mb-2">
                  <a href="" className="btn-green txt-btn mt-2 ">
                    送出
                  </a>
                  .
                </div>
                <div className="txt-cap col-8  mb-4 mx-auto">
                  還沒註冊會員嗎？
                  <a
                    href="../member-center/member-registered.html"
                    className=""
                  >
                    註冊
                  </a>
                </div>

                <div className="col-8 col-xs-8 mx-auto d-flex justify-content-between mb-5">
                  <div className=" col-6 text-cent-2 mr-2 select-btn-white txt-cap">
                    {' '}
                    GooGle登入
                  </div>
                  <div className=" col-6 text-center select-btn-white txt-cap">
                    {' '}
                    Facebook登入
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className=" d-block d-md-block d-sm-block d-lg-block d-xl-none">
              <div className="">
                <div className="h3  text-center mt-3">登入</div>

                <div className="col-12 col-sm-10 mx-auto mt-5">
                  <div className="mb-2">電子郵件</div>
                  <input
                    type="email"
                    className="form-control mb-3 br "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>

                <div className="col-12 col-sm-10 mx-auto">
                  <div className="mb-2">密碼</div>
                  <input
                    type="email"
                    className="form-control br "
                    id="exampleInputEmail1"
                    placeholder="Enter Password"
                  />

                  <div className="txt-cap d-flex justify-content-end">
                    <a href="#" className="text-dark">
                      忘記密碼？
                    </a>
                  </div>
                </div>

                <div className="col-12 col-sm-10 mx-auto">
                  <div className="mb-2">驗證碼</div>
                </div>

                <div className="col-12 col-sm-10 mx-auto d-flex ">
                  <input
                    type=""
                    className="form-control mr-2 col-7 col-sm-8  br "
                    id="exampleInputEmail1"
                    placeholder="驗證碼"
                  />
                  <input
                    type=""
                    className="form-control mb-3  col-5 col-sm-4 br text-center"
                    id="exampleInputEmail1"
                    placeholder="驗證碼"
                  />
                </div>
                <div className="col-12 col-sm-10 mx-auto d-flex justify-content-center mb-4">
                  <a href="" className="btn-green txt-btn mt-2 ">
                    送出
                  </a>
                </div>
                <div className="txt-cap mr-5 d-flex justify-content-center mb-3">
                  還沒註冊會員嗎？
                  <a
                    href="../member-center/member-registered.html"
                    className=""
                  >
                    註冊
                  </a>
                </div>
                <div className="col-12 col-sm-10  d-flex flex-column mb-5 mx-auto">
                  <div className="  select-btn-white1 txt-cap mb-2">
                    {' '}
                    GooGle登入{' '}
                  </div>
                  <div className="  text-center select-btn-white1 txt-cap">
                    {' '}
                    Facebook登入
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
export default MemberCenterLogin
