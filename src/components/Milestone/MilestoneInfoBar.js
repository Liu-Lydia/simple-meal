import React, { props, useEffect } from 'react'
import $ from 'jquery'

function MilestoneInfoBar(props) {
  // useEffect(() => {
  //   $('#about').modal('show')
  // }, [props.about])
  return (
    <>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
      {/* web virsion */}
      <div className="row fff-ms-web">
        {/* 佔空位的 */}
        <div className="col-1"></div>
        <div className="col-xl-l0 col-lg-10 fff-my-info-box">
          <div className="d-flex align-items-center">
            <img
              src="http://localhost:3015/img/fff/fff-info-pic.png"
              className="fff-info-pic"
            ></img>
            <span className="fff-txt-info">Lydia Liu</span>
          </div>

          <div className="d-flex align-items: center">
            <div>
              <span className="fff-txt-info">目前累積點數:</span>
            </div>
            <div>
              <span className="fff-txt-points">10000</span>
              <span className="fff-txt-info">點</span>
            </div>
          </div>
          <div className="">
            <div
              id="howToGetPoints"
              className="fff-btn-white fff-txt-btn"
              onClick={() => {
                props.setAbout(!props.about)
              }}
            >
              集點方式
            </div>
          </div>
          <div className="">
            <a href={props.href} className="fff-btn-white fff-txt-btn">
              {props.btnText}
            </a>
          </div>
        </div>

        {/* 佔空位的 */}
        <div className="col-1"></div>
      </div>

    {/* 留空白 */}
    <div className="row fff-ms-web" style={{ height: '64px' }} />

      {/* mobo virsion */}
      <div className="fff-ms-mobo d-flex flex-column">
        <div
          className="d-flex justify-content-center"
          style={{ marginBottom: '40px' }}
        >
          <img
            src="http://localhost:3015/img/fff/fff-info-pic.png"
            className="fff-mobo-info-pic"
          ></img>
          <span className="fff-mobo-txt-info">Lydia Liu</span>
        </div>

        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center">
            <span className="fff-mobo-txt-info">目前累積點數</span>
          </div>
          <div className="d-flex justify-content-center">
            <span className="fff-mobo-txt-points">10000</span>
            <span className="fff-mobo-txt-info">點</span>
          </div>
        </div>
        <div style={{ height: '150px' }}></div>
        <div className="d-flex justify-content-center align-items-center">
          <div id="howToGetPoints" className="fff-btn-mobo-style">
            我的成就
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <div
            id="howToGetPoints"
            className="fff-btn-mobo-style"
            onClick={() => {
              props.setAbout(!props.about)
            }}
          >
            集點方式
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <a href={props.href} className="fff-btn-mobo-style ">
            {props.btnText}
          </a>
        </div>
      </div>

      <div
        className="modal justify-content-center"
        tabindex="-1"
        role="dialog"
        id="about"
        data-backdrop="false"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content fff-dialog">
            <div className="modal-body">
              <div style={{ height: '200px' }}></div>
              <div className="row d-flex justify-content-center  flex-row">
                <span
                  className="col-12"
                  style={{ padding: '0 75px 90px 75px' }}
                >
                  我們用輕鬆活潑的方式記錄您在極簡煮易當中的冒險故事！並提供許多成就目標讓您可以用有趣的方式獲得額外的優惠！
                  <br />
                  每一個達成的成就會提供相對應得獎勵點數，您可以使用點數換取站內或是相關企業的優惠卷！
                  <br />
                  站內優惠會歸入您的會員資料方便您於購餐時選用，而兌換相關企業優惠會寄送QR
                  Code至您的信箱，您也可以列印出來！
                  <br />
                  詳細的優惠兌換紀錄可於會員中心查詢喔！
                </span>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn-white txt-btn"
                    data-dismiss="modal"
                  >
                    知道了！
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MilestoneInfoBar
