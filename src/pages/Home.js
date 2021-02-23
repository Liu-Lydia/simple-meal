import { BrowserRouter as Link, NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Carousel from '../components/home/Carousel'
import Carousel2 from '../components/home/Carousel2'
import '../components/home/carousel3d.css'
import HomeP3 from '../components/home/HomeP3'

function Home(props) {
  // 吉祥物定位
  const [lemonScrollObj, setLemonScrollObj] = useState({
    lemon01: false,
  })

  // 偵測視窗位置
  useEffect(() => {
    window.addEventListener('scroll', function () {
      console.log(window.pageYOffset)
      if (window.pageYOffset > 500 && window.pageYOffset < 2000) {
        setLemonScrollObj({ ...lemonScrollObj, lemon01: true })
      }
      if (window.pageYOffset < 500 || window.pageYOffset > 2000) {
        setLemonScrollObj({ ...lemonScrollObj, lemon01: false })
      }
    })
  }, [])

  return (
    <>
      {/* p1 */}
      <div className="container xxx-p1-h">
        <div className="row">
          <div className="p1-bg col-12">
            <div className="p1-left-div offset-1 float-left">
              <div className="p1-text-size">
                <h2 className="text-right">
                  Simple <br />
                  Meal
                </h2>
              </div>
              <p className="txt-sub1 col-gray text-right">
                極簡煮易隨時都準備好食材供予 <br />
                為自己準備一頓美好的餐點
              </p>
              <div className="p1-line"></div>
              <br />

              <NavLink to="/meal" className="btn-green txt-sub1">
                開始訂製
              </NavLink>
            </div>
            {/* 圈圈 */}
            <svg
              className="circle-spin d-none d-sm-block"
              xmlns="http://www.w3.org/2000/svg"
              width="630"
              height="625"
              viewBox="0 0 405.354 401.759"
            >
              <g id="圈圈" transform="translate(3240.999 -1867.719) rotate(90)">
                <path
                  id="Path_94"
                  data-name="Path 94"
                  d="M373.314,185.968c-1.105,82.5-60.351,159.091-140.179,180.4C149.124,388.795,55.373,343.117,17.482,265.691q-2.62-5.352-4.874-10.872c-35.639-87.338,7.575-187.329,88.185-232.249A181.259,181.259,0,0,1,129.155,9.784a178.606,178.606,0,0,1,27.287-7.144c86.432-15.565,174.964,39.4,205.894,120.351a167.189,167.189,0,0,1,8.221,29.735A172.538,172.538,0,0,1,373.314,185.968Z"
                  transform="translate(1869.73 3235.981) rotate(-90)"
                  fill="none"
                  stroke="#FFFFFF"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
                <path
                  id="Path_95"
                  data-name="Path 95"
                  d="M367.515,184.641c-1.176,82.6-63.352,156.565-142.361,177.174a176.875,176.875,0,0,1-33.964,5.437q-1.639.1-3.28.168C91.956,371.442,6.31,293.131.335,197.8-3.987,128.838,33.874,60.773,93.061,25.765A184.826,184.826,0,0,1,167.44.885C256.5-8.534,343.854,58.447,363.358,144.852A169.528,169.528,0,0,1,367.515,184.641Z"
                  transform="translate(1900.445 2871.927)"
                  fill="none"
                  stroke="#FFFFFF"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
                <path
                  id="Path_96"
                  data-name="Path 96"
                  d="M389.415,194.45A197.454,197.454,0,0,0,343.4,69.182c-55.015-65.319-155.542-89.2-233.183-50.668C53.007,46.907,10.168,103.852,1.66,167.459c-9.084,67.913,19.666,137.388,72.5,180.649a190.148,190.148,0,0,0,29.188,19.725c87.831,48.031,206.472,10.925,258.219-72.716q1.918-3.1,3.714-6.274A188.424,188.424,0,0,0,389.415,194.45Z"
                  transform="translate(1869.234 3226.566) rotate(-90)"
                  fill="none"
                  stroke="#FFFFFF"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
              </g>
            </svg>
            <div className="p1-img-div">
              <img
                className="img-size"
                src="http://localhost:3015/img/index/index-p1-img.png"
                alt=""
              />
            </div>

            <NavLink
              to="/Milestone"
              className="btn-meun-big-gray d-flex txt-btn p1-right-but ml-auto xxx-miss"
            >
              <div className="btn-meun-big-gray2">
                <i className="fas fa-medal"></i>
              </div>
              立即獲取優惠
            </NavLink>
          </div>
          <div className="col-4 mx-auto d-flex justify-content-center d-flex align-items-center mb-5">
            <button className="col-gray p1-but-change1">
              <i className="fas fa-chevron-circle-left col-black"></i>{' '}
              &nbsp;Prev
            </button>
            <div className="p1-change-line"></div>
            <div className="p1-change"></div>
            <button className="col-gray p1-but-change2">
              Next &nbsp;{' '}
              <i className="fas fa-chevron-circle-right col-black"></i>
            </button>
          </div>
        </div>
        <div className="row">
          <button className="p1-scroll-btn mx-auto d-flex align-items-center">
            &nbsp; scroll
          </button>
        </div>
        <div class="xxx-p1-hello d-none d-sm-block">Hello!</div>
        <div className="xxx-450x540">
          <img
            className="xxx-boom d-none d-sm-block img-size"
            src="http://localhost:3015/img/index/five.gif"
          />
        </div>
      </div>
      {/* p2 */}
      <div className="container-fluid">
        <div className="row">
          <h1 className="mb-5 col-12 txt-h1 text-center col-green d-none d-xl-block">
            極簡煮易帶來全新的烹飪體驗
          </h1>
          <h4 className="mb-5 col-12 txt-h1 text-center col-green d-block d-sm-none">
            極簡煮易帶來全新的烹飪體驗
          </h4>
        </div>
        {/* 水平對齊 : d-flex align-items-center */}
        <div className="row d-flex align-items-center p2-mb">
          {/* <img className="col-6" src="./img/index-p2-img.png" alt="" /> */}
          <div className="p2-img-div">
            <img
              className="img-size"
              src="http://localhost:3015/img/index/index-p2-img.png"
              alt=""
            />
          </div>
          {/* 空一個col : offset-1 */}
          <div className="col-4 offset-1">
            <h5 className="col-black">給喜歡做菜的你 帶來新鮮、美味、方便</h5>
            <br />
            <p className="txt-sub1 col-gray">
              與在地農產合作，嚴選當季食材配送到府的服務 <br />
              不需出門，不需煩惱吃什麼 <br />
              我們幫你一次搞定。
            </p>
            <br />
            <NavLink to="/meal" className="btn-red txt-sub1">
              開始訂製
            </NavLink>
          </div>
        </div>
      </div>

      {/* p3 */}
      <HomeP3 />

      {/* p5 */}
      <div className="container mb-5 mt-5">
        <div className="row p5-mb">
          <div className="col-xl-8 offset-xl-4 p5-bg col-12">
            <div className="offset-xl-5 offset-0 p5-bg-t">
              <h3 className="txt-h3 col-green">食譜介紹</h3>
              <br />
              <p className="col-gray">
                您是否正在尋找味道鮮美，易於烹飪且輕而易舉的菜餚？
                <br />
                探索我們多樣化的食譜收藏，讓我們由廚師策​​劃的創意滿足您的所有求！
                <br />
                快點來解鎖你的專屬食譜
              </p>
              <br />

              <NavLink
                to="/meal"
                className="btn-red txt-sub1 d-none d-sm-block"
              >
                馬上出發
              </NavLink>
            </div>
            <NavLink
              to="/meal"
              className="btn-red txt-sub1 d-block d-sm-none mx-auto"
            >
              馬上出發
            </NavLink>
            {/* image要用div包起來才有rwd效果 */}
            <div>
              <div className="p5-img-div d-none d-sm-block">
                <img
                  className="img-size"
                  src="http://localhost:3015/img/index/index-p5-img.png"
                  alt=""
                />
              </div>
              <div className="p5-change d-flex justify-content-center d-flex align-items-center ">
                <button className="col-gray p5-but-change1">
                  <i className="fas fa-chevron-circle-left col-black"></i>{' '}
                  &nbsp;Prev
                </button>
                <div className="p1-change-line"></div>
                <div className="p1-change"></div>
                <button className="col-gray p5-but-change2">
                  Next &nbsp;
                  <i className="fas fa-chevron-circle-right col-black"></i>
                </button>
              </div>
            </div>

            <div>
              <div className="p5-leaf1-div d-none d-sm-block">
                <img
                  className="img-size"
                  src="http://localhost:3015/img/index/index-p5-leaf1.png"
                  alt=""
                />
              </div>
              <div className="p5-leaf2-div d-none d-sm-block">
                <img
                  className="img-size"
                  src="http://localhost:3015/img/index/index-p5-leaf2.png"
                  alt=""
                />
              </div>
              <div className="p5-leaf3-div d-none d-sm-block">
                <img
                  className="img-size"
                  src="http://localhost:3015/img/index/index-p5-leaf3.png"
                  alt=""
                />
              </div>
              <div className="p5-leaf4-div d-none d-sm-block">
                <img
                  className="img-size"
                  src="http://localhost:3015/img/index/index-p5-leaf4.png"
                  alt=""
                />
              </div>
              <div className="p5-leaf5-div d-none d-sm-block">
                <img
                  className="img-size"
                  src="http://localhost:3015/img/index/index-p5-leaf5.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* p6-x */}
      <div className="container d-none d-sm-block">
        <div className="row mb-5">
          <div className="mx-auto col-xl-12 col">
            <h3 className="col-green text-center mb-3">驚喜廚房</h3>
            <p className="txt-sub1 col-gray text-center xxx-p6-mb">
              我們提供舒適的場地以及齊全的食材和器具，等著你來製作自己的餐點
              <br />
              只需要帶上期待的心情，等待著預約日那天直接來到現場 <br />
              快點來預約我們的驚喜廚房吧 !
            </p>
          </div>
        </div>

        <Carousel className="row mb-5 mx-auto " />
        <NavLink
          to="/surprisekitchen"
          className="btn-green txt-btn xxx-center d-none d-sm-block"
        >
          立即預約
        </NavLink>
      </div>
      {/* p6-s */}
      <div className="container d-block d-sm-none">
        <div className="row mb-5">
          <div className="mx-auto col-xl-12 col">
            <h3 className="col-green text-center mb-3">驚喜廚房</h3>
            <p className="txt-sub1 col-gray text-center xxx-p6-mb">
              我們提供舒適的場地以及齊全的食材和器具，等著你來製作自己的餐點
              <br />
              只需要帶上期待的心情，等待著預約日那天直接來到現場 <br />
              快點來預約我們的驚喜廚房吧 !
            </p>
          </div>
        </div>

        <Carousel2 className="row mb-5 mx-auto " />
        <NavLink
          to="/surprisekitchen"
          className="btn-green txt-btn xxx-center d-block d-sm-none mx-auto"
        >
          立即預約
        </NavLink>
      </div>

      {/* p7 */}
      <div className="container">
        <div className="row mb-5">
          <div className="p7-left-div col-xl-3 offset-1 d-none d-xl-block">
            <p className="txt-sub col-red text-center  txt-body">
              Tel. 02-6631 6666 <br />
              台北市大安區復興南路一段390號2樓 <br />
              Open. 10:00 ~ 21:00 <br />
              <br />
            </p>
            <div className="p7-font-div d-flex justify-content-between col-red">
              <i className="far fa-envelope"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-line"></i>
            </div>
          </div>
          <iframe
            className="col-xl-7 mb-3"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.2718198865737!2d121.5398673153787!3d25.024847844811454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa29379b8db9%3A0x6c7f37e71cce4568!2z6LOH562W5pyD!5e0!3m2!1szh-TW!2stw!4v1611819063119!5m2!1szh-TW!2stw"
            width="600"
            height="450"
            frameborder="0"
            style={{ border: '0' }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          {/* 手機版 */}
          <div className="p7-left-div d-block d-sm-none mx-auto">
            <p className="txt-sub col-red text-center  txt-body xxx-m0">
              Tel. 02-6631 6666 <br />
              台北市大安區復興南路一段390號2樓 <br />
              Open. 10:00 ~ 21:00 <br />
              <br />
            </p>
            <div className="p7-font-div d-flex justify-content-between col-red">
              <i className="far fa-envelope"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-line"></i>
            </div>
          </div>
        </div>
      </div>
      <div
        className="poe-indexLemon01"
        style={lemonScrollObj.lemon01 ? { right: '0' } : {}}
      ></div>
    </>
  )
}

export default Home
