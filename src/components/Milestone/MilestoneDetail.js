import React, { props, useState } from 'react'

//detailStyle={detailStyle} setDetailStyle={setDetailStyle} detailContext={detailContext}
function MilestoneDetail(props) {

  return (
      <div className="fff-mshowto" style={props.detailStyle}>
        <div className="fff-ms-detail-content ">
          <div className="row justify-content-center">
            <div className="fff-ms-mobo justify-content-end col-12">
              {/* 關閉頁面的Ｘ */}
              <h6>
                <i
                  className="fas fa-times aboutCloseBtn"
                  onClick={() => {
                    props.setDetailStyle({ display: 'none' })
                  }}
                ></i>
              </h6>
            </div>

              <img className="col-4" src={'http://localhost:3015/img/milestonelist/' +
                        (props.detailContext.AddProgress >= props.detailContext.progress_goal
                          ? props.detailContext.finished_goal_pic
                          : props.detailContext.unfinished_goal_pic)}/>
              <div className="col-8">
                <h6>{props.detailContext.stone_name}</h6>
                {props.detailContext.TriggerSubs}
                獎勵點數：{props.detailContext.reward_point}點
                達成方式{props.detailContext.subs}
                目前進度{props.detailContext.AddProgress}/{props.detailContext.progress_goal}
              </div>
              <div className="col-12 d-flex justify-content-center fff-ms-web">
                {/* 關閉的按鈕 */}
                <button
                  type="button"
                  className="btn-white txt-btn aboutCloseBtn"
                  onClick={() => {
                    props.setDetailStyle({ display: 'none' })
                  }}
                  data-dismiss="modal"
                >
                  知道了！
                </button>
              </div>
           
          </div>
        </div>
      </div>
  )
}

export default MilestoneDetail
