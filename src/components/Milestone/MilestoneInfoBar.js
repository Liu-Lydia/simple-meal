import React from 'react'

function MilestoneInfoBar() {
  return (
    <>
      {/* web virsion */}
      <div className="row fff-ms-info-bar-web">
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
            <div id="howToGetPoints" className="fff-btn-white fff-txt-btn">
              集點方式
            </div>
          </div>
          <div className="">
            <a href="./reward-exchange.html" className="fff-btn-white fff-txt-btn">
              兌換獎勵
            </a>
          </div>
        </div>

        {/* 佔空位的 */}
        <div className="col-1"></div>
      </div>

      {/* mobo virsion */}
      <div class="fff-ms-info-bar-mobo d-flex flex-column">
        <div className="d-flex justify-content-center">
          <img
            src="http://localhost:3015/img/fff/fff-info-pic.png"
            className="fff-info-pic"
          ></img>
          <span className="fff-txt-info">Lydia Liu</span>
        </div>

        <div className="d-flex justify-content-center">
          <div>
            <span className="fff-txt-info">目前累積點數:</span>
          </div>
          <div>
            <span className="fff-txt-points">10000</span>
            <span className="fff-txt-info">點</span>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div id="howToGetPoints" className="fff-btn-mobo-style  ">
            集點方式
          </div>
        </div>
        
        <div className="d-flex justify-content-center">
          <a href="./reward-exchange.html" className="fff-btn-mobo-style ">
            兌換獎勵
          </a>
        </div> 
      </div>

    </>
  )
}

export default MilestoneInfoBar
