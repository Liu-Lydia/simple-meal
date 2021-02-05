import React from 'react'
import '../styles/public.css';
import '../styles/fff.css';

function Milestone() {
  return (
    <>
      <div class="row">
        {/* 佔空位的 */}
        <div className="col"></div>
        <div className="col-xl-9 col-lg-10 fff-my-info-box">
          <div className="d-flex align-items-center">
            <img
              src='http://localhost:3015/img/fff/fff-info-pic.png'
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
            <div id="howToGetPoints" class="btn-white txt-btn" v>
              集點方式
            </div>
          </div>
          <div className="">
            <a href="./reward-exchange.html" className="btn-white txt-btn">
              兌換獎勵
            </a>
          </div>
        </div>

        {/* 佔空位的 */}
        <div className="col"></div>
      </div>






      <div className="row">
        <h1 className="poe-red">測試用的</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-6">
          <h3>直接在react寫style</h3>
          <div
            className="w-100 my-5"
            style={{
              background:
                'url(/img/cart/bg/lemonUFO-Go.PNG) center center no-repeat',
              backgroundSize: 'contain',
              height: '200px',
            }}
          ></div>

          <h3>掛CSS Class(CSS對應public資料夾路徑?)</h3>
          <div className="poe-test my-5"></div>
          <h3>圖片(絕對路徑)</h3>

          <img
            className="w-100 my-5"
            src="/img/cart/bg/lemonUFO-Go.PNG"
            alt=""
          />
        </div>
      </div>
    </>
  )
}




export default Milestone
