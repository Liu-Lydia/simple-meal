import React, { props, useEffect, useState } from 'react'

function MilestoneInfoBar(props) {
  useEffect(() => {
    // 取得對話框 等等要控制顯示或關閉
    //ClassName 會回陣列 所以要取單個元件時 要給陣列值
    var modal = document.getElementsByClassName("modal")[0];

    // 兩個按鈕都要加入事件
    var openDialogbtn = document.getElementsByClassName("howToGetPoints")[0];
    var openDialogbtnMobo = document.getElementsByClassName("howToGetPoints")[1];

    var closeBtnMobo = document.getElementsByClassName("aboutCloseBtn")[0];
    var closeBtn = document.getElementsByClassName("aboutCloseBtn")[1];

    // When the user clicks the button, open the modal 
    openDialogbtn.onclick = function () {
      modal.style.display = "block";
    }
    openDialogbtnMobo.onclick = function () {
      modal.style.display = "block";
    }

    // When the user clicks closeBtn, close the modal
    closeBtn.onclick = function () {
      modal.style.display = "none";
    }
    closeBtnMobo.onclick = function () {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  })
  return (
    <>
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
              className="fff-btn-white fff-txt-btn howToGetPoints"
            >
              集點方式
            </div>
          </div>
          <div className="fff-btn-white fff-txt-btn" onClick={() => { window.location.href = props.href }}>
            {props.btnText}
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
          <div id="moboMsPage2" className="fff-btn-mobo-style" onClick={() => { props.setMoboMsPage2(true) }}>
            {/* 在infoBar中只會設定開啟第二頁 所以不用傳入moboMsPage2 的值*/}
            我的成就
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <a
            className="fff-btn-mobo-style howToGetPoints"
          >
            集點方式
          </a>
        </div>

        <div className="d-flex justify-content-center">
          <div className="fff-btn-mobo-style" onClick={() => { window.location.href = props.href }}>
            {props.btnText}
          </div>
        </div>
      </div>

      <div
        className="modal justify-content-center col-10 offset-1"
        id="about"
      >
        <div className="modal-content fff-dialog">
          <div className="modal-body row">

            {/* 圖片放置位置 先占高 mobo關閉 */}
            <div className="fff-ms-web" style={{ height: '200px' }}></div>
            <div className="fff-ms-mobo justify-content-end col-12">
              <h6><i className="fas fa-times aboutCloseBtn"></i></h6>
            </div>
            <div className="fff-ms-mobo justify-content-center col-12">
              <h4>集點方式</h4>
            </div>

            <div className="row d-flex justify-content-center  flex-row">
              <span
                className="col-12"
                style={{ padding: '0 75px 0 75px' }}
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
              <div className="col-12 d-flex justify-content-center fff-ms-web" ><span className="d-flex justify-content-center fff-ms-web"
                style={{ padding: '0 75px 90px 75px' }} /></div>

              <div className="col-12 d-flex justify-content-center fff-ms-web" >
                <button
                  type="button"
                  className="btn-white txt-btn aboutCloseBtn"
                  data-dismiss="modal"
                >
                  知道了！
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MilestoneInfoBar
