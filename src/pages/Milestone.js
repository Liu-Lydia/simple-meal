import React from 'react'
import '../styles/public.css';
import '../styles/fff.css';
import MilestoneList from '../components/Milestone/MilestoneList'
import MilestoneListOption from '../components/Milestone/MilestoneListOption';

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
            <div id="howToGetPoints" class="btn-white txt-btn">
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
      {/* 留空白 */}
      <div style={{height:"530px"}}></div>
      
      <MilestoneListOption />
      <MilestoneList />
  

    </>
  )
}




export default Milestone
