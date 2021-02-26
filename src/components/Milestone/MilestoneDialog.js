import React, { props, useState, useEffect } from 'react'
import { ProgressBar } from 'react-bootstrap'

//detailStyle={detailStyle} setDetailStyle={setDetailStyle} detailContext={detailContext}
function MilestoneDialog(props) {
  return (
    <div className="fff-handmadepopup" style={props.detailStyle}>
      <div
        id="fff-ms-detail-content"
        className="fff-ms-detail-content"
        onClick={() => {
          props.setDetailStyle({ visibility: 'hidden' })
        }}
      >
        {/* 關閉頁面的Ｘ */}
        <div className="row justify-content-end fff-no-mr-and-pad fff-ms-mobo">
          <h6 style={{ color: '#627e2a' }}>
            <i
              className="fas fa-times aboutCloseBtn"
              onClick={() => {
                props.setDetailStyle({ visibility: 'hidden' })
              }}
            ></i>
          </h6>
        </div>
        {/* 兌換內容 */}
        <div className="row fff-no-mr-and-pad fff-txt-ms-detail">
          {/*圖片區 */}
          <div className="col align-self-center">
            <img
              src={
                'http://localhost:3015/img/milestonelist/' +
                (props.detailContext.AddProgress >=
                props.detailContext.progress_goal
                  ? props.detailContext.finished_goal_pic
                  : props.detailContext.unfinished_goal_pic)
              }
              width="80%"
              height="80%"
              alt="s"
            />
          </div>
          {/* 文字區 */}
          <div className="col fff-txt-ms-detail align-self-center">
            {/* 成就名稱 */}
            <p>{props.detailContext.stone_name}</p>

            {/* 獎勵點數 */}
            <span className="" style={{ color: '#627e2a' }}>
              {' '}
              獎勵點數：{props.detailContext.reward_point}點
            </span>
            <br />
            {/* 達成方法 */}
            <span className="">
              達成方式：
              <br />
              {props.detailContext.subs}
            </span>

            <br />
            <span className="" style={{ color: '#B9433B' }}>
              目前進度:
              <span className="">{props.detailContext.TriggerSubs}</span>
              {props.detailContext.AddProgress == null
                ? 0
                : props.detailContext.AddProgress}
              /{props.detailContext.progress_goal}
            </span>
            <div style={{marginTop:'1rem'}}>
              <ProgressBar animated now={45} />
            </div>
          </div>
        </div>
        {/* 關閉的按鈕 */}
        <div className="row justify-content-center fff-no-mr-and-pad">
          <button
            type="button"
            className="btn-white txt-btn aboutCloseBtn"
            style={{marginTop:'30px'}}
            onClick={() => {
              props.setDetailStyle({ visibility: 'hidden' })
            }}
            data-dismiss="modal"
          >
            知道了！
          </button>
        </div>
      </div>
    </div>
  )
}

export default MilestoneDialog
