import React from 'react'
import MemberCenterNavbar from './MemberCenterNavbar'
function MemberCenterAddr() {
  return (
    <>
      <div className="container">
        <div className="row ">
          <MemberCenterNavbar />
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