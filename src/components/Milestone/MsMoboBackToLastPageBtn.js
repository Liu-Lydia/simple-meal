//手機版內回前頁的按鈕
import React, { props } from 'react'
// 須從父親那邊接收“props”要引入{ props }，因為{ props }非extend default所以要{}包起來。

function MsMoboBackToLastPageBtn(props) {
    // 如果在成就清單
  if (props.setPage == 'Milestone') {
    return (
      <>
        <div className="row fff-ms-mobo d-flex justify-content-center align-items-center">
          <div
            className="fff-btn-mobo-style"
            onClick={() => {
              props.setMoboMsPage2(false)
            }}
          >
            {/* setMoboMsPage2()：設定為false時父層Milestone會隱藏第二頁 */}
            {/* 在infoBar中只會設定關閉第二頁 所以不用傳入moboMsPage2 的值*/}
            回前頁
          </div>
        </div>
      </>
    )
  }
  // 如果在兌換獎勵畫面
  if (props.setPage == 'RewardExchange') {
    return (
      <>
        <div className="row fff-ms-mobo d-flex justify-content-center align-items-center">
          <div className="fff-btn-mobo-style" onClick={()=>{window.location.href='./Milestone'}}>
            回前頁
          </div>
        </div>
      </>
    )
  }
}

export default MsMoboBackToLastPageBtn
