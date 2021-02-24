import React, { props, useEffect, useState } from 'react'
function MilestoneInfoBar(props) {
  //集點說明要不要渲染(虛擬Dom)
  const [modalStyle, setModalStyle] = useState({ display: 'none' })
  const [totalPoint, setTotalPoint] = useState(0)

  const getMilestoneList = async () => {
    const url = 'http://localhost:4000/milestone/getPoint?sid=1' //sid 要從session來
    await fetch(url, {
      method: 'get',
    })
      //then 是會接前方拋出的結果
      .then((r) => r.json())
      .then((obj) => {
        //總獲得的點數
        const totalGetPoint = obj.totalGetPoiont
        //總花費的點數
        const totalSpendPoint = obj.totalSpendPoint
        //將目前有的點數設定成為屬性
        setTotalPoint(totalGetPoint - totalSpendPoint)
      })
  }

  useEffect(() => {
    getMilestoneList()
  }, [])

  return (
    <>
      {/* 網頁版個人資料web virsion */}
      <div className="row fff-ms-web">
        {/* 佔空位的 */}
        <div className="col-1"></div>
        {/*實際的框框 fff-my-info-box*/}
        <div className="col-xl-l0 col-lg-10 fff-my-info-box">
          {/* 使用者照片、使用者名稱(尚未連接資料庫)*/}
          <div className="d-flex align-items-center">
            <img
              src="http://localhost:3015/img/fff/fff-info-pic.png"
              className="fff-info-pic"
            ></img>
            <span className="fff-txt-info">Lydia Liu</span>
          </div>
          {/* 點數資料(尚未連接資料庫) */}
          <div className="d-flex align-items: center">
            <div>
              <span className="fff-txt-info">目前累積點數:</span>
            </div>
            <div>
              <span className="fff-txt-points">{totalPoint}</span>
              <span className="fff-txt-info">點</span>
            </div>
          </div>
          {/* 集點方式按鈕 */}
          <div className="">
            <div
              className="fff-btn-white fff-txt-btn howToGetPoints"
              onClick={() => {
                setModalStyle({ display: 'flex' })
              }}
            >
              集點方式
            </div>
          </div>
          {/* 在成就清單以及兌換獎勵區切換的按鈕 */}
          <div
            className="fff-btn-white fff-txt-btn"
            onClick={() => {
              window.location.href = props.href
            }}
          >
            {props.btnText}
          </div>
        </div>

        {/* 佔空位的 */}
        <div className="col-1"></div>
      </div>

      {/* 留空白 */}
      <div className="row fff-ms-web" style={{ height: '64px' }} />

      {/*手機版個人資料 mobo virsion */}
      <div className="fff-ms-mobo d-flex flex-column">
        {/* 使用者照片、使用者名稱(尚未連接資料庫)*/}
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

        {/* 點數資料(尚未連接資料庫) */}
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center">
            <span className="fff-mobo-txt-info">目前累積點數</span>
          </div>
          <div className="d-flex justify-content-center">
            <span className="fff-mobo-txt-points">{totalPoint}</span>
            <span className="fff-mobo-txt-info">點</span>
          </div>
        </div>
        <div style={{ height: '150px' }}></div>
        <div className="d-flex justify-content-center align-items-center">
          <div
            id="moboMsPage2"
            className="fff-btn-mobo-style"
            onClick={() => {
              props.setMoboMsPage2(true)
            }}
          >
            {/* 在infoBar中只會設定開啟第二頁 所以不用傳入moboMsPage2 的值*/}
            我的成就
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          {/* 按了集點方式按鈕把說明改成顯示 */}
          <a
            className="fff-btn-mobo-style howToGetPoints"
            onClick={() => {
              setModalStyle({ display: 'flex' })
            }}
          >
            集點方式
          </a>
        </div>

        <div className="d-flex justify-content-center">
          <div
            className="fff-btn-mobo-style"
            onClick={() => {
              window.location.href = props.href
            }}
          >
            {props.btnText}
          </div>
        </div>
      </div>

      <div className="fff-mshowto" style={modalStyle}>
        <div className="fff-mshowto-content">
          {/* 關閉頁面的Ｘ */}
          <div className="fff-ms-mobo justify-content-end col-12">
            <h6>
              <i
                className="fas fa-times aboutCloseBtn"
                onClick={() => {
                  setModalStyle({ display: 'none' })
                }}
              ></i>
            </h6>
          </div>
          {/* 圖片放置位置*/}
          <div className="row justify-content-center">
            <img src="http://localhost:3015/img/fff/SimpleMilestone.svg"></img>
          </div>
          {/*說明文字 */}
          <div className="row d-flex justify-content-center flex-row">
            <span className="col-12 txt-btn">
              我們用輕鬆活潑的方式記錄您在極簡煮易當中的冒險故事！並提供許多成就目標讓您可以用有趣的方式獲得額外的優惠！
              <br />
              每一個達成的成就會提供相對應得獎勵點數，您可以使用點數換取站內或是相關企業的優惠卷！
              <br />
              站內優惠會歸入您的會員資料方便您於購餐時選用，而兌換相關企業優惠會寄送QR
              Code至您的信箱，您也可以列印出來！
              <br />
              詳細的優惠兌換紀錄可於會員中心查詢喔！
            </span>

            <div className="col-12 d-flex justify-content-center">
              {/* 關閉集點説明的按鈕 */}
              <button
                type="button"
                className="btn-white txt-btn aboutCloseBtn"
                onClick={() => {
                  setModalStyle({ display: 'none' })
                }}
                data-dismiss="modal"
              >
                知道了！
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MilestoneInfoBar
