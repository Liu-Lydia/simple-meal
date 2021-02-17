import MemberCenterNavbar from './MemberCenterNavbar'

function MemberCenterInfo() {
  return (
    <>
      <div className="container">
        <div className="row ">
          <MemberCenterNavbar />
          <div className="col-md-12 col-lg-12 col-sm-12 col-xl-6  col-12 ">
            <div className="col-md-8 col-lg-8 col-xl-8 col-sm-8 col-10 mx-auto ">
              <form>
                <div className="mb-4 mt-5 offset-3 offset-sm-0 h3">
                  個人資料
                </div>
                <div
                  className="btn border  txt-cap1 mr-2 mb-5  col-12 
                d-block d-sm-none d-md-none d-lg-none d-xl-none "
                >
                  回上頁
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput ">電子郵件</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                  />
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput ">姓名</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                  />
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput ">暱稱</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                  />
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput ">生日</label>
                  <input
                    type="date"
                    className="form-control"
                    id="formGroupExampleInput"
                  />
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput ">地址</label>
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

export default MemberCenterInfo
