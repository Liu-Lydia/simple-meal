import React, { props, useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'
import { string } from 'yup'

function MilestoneInfoBar(props) {
  //集點說明要不要渲染(虛擬Dom)
  const [totalPoint, setTotalPoint] = useState(0)
  const [userInfo, setUserInfo] = useState([])

  const getMilestoneList = async () => {
    const url = 'http://localhost:4000/milestone/getPoint'
    //sid 要從session來
    await fetch(url, {
      method: 'get',
      credentials: 'include',
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

  const getUserInfo = async () => {
    const url = 'http://localhost:4000/milestone/getUserInfo'
    //sid 要從session來
    await fetch(url, {
      method: 'get',
      credentials: 'include',
    })
      //then 是會接前方拋出的結果
      .then((r) => r.json())
      .then((obj) => {
        setUserInfo(obj)
      })
  }
  // sweet alert集點按鈕
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      popup: 'poe-alert',
      title: 'poe-green my-0',
      content: 'txt-btn',
      confirmButton: 'btn-green txt-btn mx-2 my-2',
      cancelButton: 'btn-red txt-btn mx-2 my-2',
      denyButton: 'btn-red txt-btn mx-2 my-2',
    },
    buttonsStyling: false,
  })

  useEffect(() => {
    getUserInfo()
    getMilestoneList()
  }, [])

  useEffect(() => {
    console.log('update userInfo')
    console.log('userInfo', userInfo)
  }, [userInfo])

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
              src={
                userInfo.length == 1 &&
                'http://localhost:4000/img/profile/' + userInfo[0].avater
              }
              className="fff-info-pic"
              alt=""
            />
            <span className="fff-txt-info">
              {userInfo.length == 1 && userInfo[0].name}
            </span>
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
                swalWithBootstrapButtons.fire({
                  // icon: 'success',
                  imageUrl: 'http://localhost:3015/img/fff/SimpleMilestone.SVG',
                  // imageHeight: 200,
                  title: '<h6>在極簡煮易輕鬆獲取優惠</h6>',
                  text: `我們用輕鬆活潑的方式記錄您在極簡煮易當中的冒險故事！並提供許多成就目標讓您可以用有趣的方式獲得額外的優惠！
                  每一個達成的成就會提供相對應得獎勵點數，您可以使用點數換取站內或是相關企業的優惠卷！
                  站內優惠會歸入您的會員資料方便您於購餐時選用，而兌換相關企業優惠會寄送QR
                  Code至您的信箱，您也可以列印出來！
                  詳細的優惠兌換紀錄可於會員中心查詢喔！`,
                  padding: '25px',
                  showConfirmButton: true,
                  confirmButtonText: '知道了',
                  // showDenyButton: true,
                  denyButtonText: '前往購物車',
                  // showCloseButton: true,
                  backdrop: `rgba(255,255,255,0.4)`,
                })
              }}
            >
              集點方式
            </div>
          </div>
          {/* 在成就清單以及兌換獎勵區切換的按鈕 */}
          <Nav.Link
            className="fff-btn-white fff-txt-btn justify-content-center"
            as={NavLink}
            to={props.href}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div>{props.btnText}</div>
          </Nav.Link>
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
            src={
              userInfo.length == 1 &&
              'http://localhost:3015/img/member-center/' + userInfo[0].avater
            }
            className="fff-mobo-info-pic"
            alt=""
          />
          <span className="fff-mobo-txt-info">
            {userInfo.length == 1 && userInfo[0].name}
          </span>
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
          <div
            className="fff-btn-mobo-style howToGetPoints"
            onClick={() => {
              swalWithBootstrapButtons.fire({
                // icon: 'success',
                imageUrl: 'http://localhost:3015/img/fff/SimpleMilestone.SVG',
                // imageHeight: 200,
                title: '<h6>在極簡煮易輕鬆獲取優惠</h6>',
                text: `我們用輕鬆活潑的方式記錄您在極簡煮易當中的冒險故事！並提供許多成就目標讓您可以用有趣的方式獲得額外的優惠！
                每一個達成的成就會提供相對應得獎勵點數，您可以使用點數換取站內或是相關企業的優惠卷！
                站內優惠會歸入您的會員資料方便您於購餐時選用，而兌換相關企業優惠會寄送QR
                Code至您的信箱，您也可以列印出來！
                詳細的優惠兌換紀錄可於會員中心查詢喔！`,
                padding: '25px',
                showConfirmButton: true,
                confirmButtonText: '知道了',
                // showDenyButton: true,
                denyButtonText: '前往購物車',
                // showCloseButton: true,
                backdrop: `rgba(255,255,255,0.4)`,
              })
            }}
          >
            集點方式
          </div>
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
    </>
  )
}

export default MilestoneInfoBar
