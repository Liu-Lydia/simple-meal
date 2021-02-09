function MemberCenterRegiStered() {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-6  mx-auto">
            <div className="cc  d-none d-md-none d-sm-none d-lg-none d-xl-block">
              <div className="col-10 d-flex justify-content-end ">
                <i className="fas fa-times"></i>
              </div>
              <div className="txt-body">
                <div className="h3  text-center mt-3">註冊</div>

                <div className="col-8 mx-auto">
                  <div className="mb-2">電子郵件</div>
                  <input
                    type="email"
                    className="form-control mb-3 br "
                    id="Email1"
                  />
                </div>

                <div className="col-8 mx-auto">
                  <div className="mb-2">密碼</div>
                  <input
                    type="password"
                    className="form-control mb-3 br "
                    id="PassWord"
                  />
                </div>

                <div className="col-8 mx-auto">
                  <div className="mb-2">確認密碼</div>
                  <input
                    type="password"
                    className="form-control  br "
                    id="PassWord2"
                  />
                  <div className="txt-cap  mb-3">
                    密碼長度需為 6 個以上的英數字元，大小寫有區別。
                  </div>
                </div>

                <div className="col-8 mx-auto">
                  <div className="mb-2">姓名</div>
                  <input
                    type="text"
                    className="form-control mb-3 br "
                    id="Name"
                  />
                </div>

                <div className="col-8 mx-auto ">
                  <div className="mb-2">手機</div>
                  <input
                    type="text"
                    className="form-control mb-3 br "
                    id="Phone"
                  />
                </div>

                <div className="col-8 mx-auto">
                  <div className="mb-2 ">配送地址</div>
                  <input type="text" className="form-control  br " id="Addr" />
                  <div className="txt-cap  mb-3">
                    本地址將作為您日後購物預設寄送地址
                  </div>
                </div>

                <div className="col-8 mx-auto">
                  <div className="form-check txt-cap">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="autoSizingCheck"
                    />
                    <label className="form-check-label" for="autoSizingCheck">
                      訂閱電郵與簡訊
                    </label>
                  </div>
                </div>
                <div className="col-8 mx-auto ">
                  <div className="form-check mb-3 txt-cap">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="autoSizingCheck"
                    />
                    <label className="form-check-label " for="autoSizingCheck">
                      我同意網站服務條款及隱私政策
                    </label>
                  </div>
                </div>

                <div className="col-8 mx-auto d-flex justify-content-center mb-4 ">
                  <div className="btn-green txt-btn mt-2 mb-3">送出</div>
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
                    aria-describedby="emailHelp"
                    placeholder="Enter Password"
                  />
                  <div className="txt-cap d-flex justify-content-end">
                    <div className="text-dark">忘記密碼？</div>
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
                  <div className="btn-green txt-btn mt-2 mb-3">送出</div>.
                </div>
                <div className="col-12 col-sm-10  d-flex flex-column mb-5 mx-auto">
                  <div className="  select-btn-white1 txt-cap mb-2">
                    GooGle登入
                  </div>
                  <div className="  text-center select-btn-white1 txt-cap">
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
export default MemberCenterRegiStered
