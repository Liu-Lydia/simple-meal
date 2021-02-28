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
          <div
            id="fff-ms-detail-subs"
            className="col fff-txt-ms-detail align-self-center"
          >
            {/* 成就名稱 */}
            <span className="fff-txt-ms-detail-title">
              {props.detailContext.stone_name}
            </span>

            {/* 獎勵點數 */}
            <span className="" style={{ color: '#627e2a' }}>
              {' '}
              獎勵點數：{props.detailContext.reward_point}點
            </span>

            {/* 達成方法 */}
            <div className="">
              <p className="fff-ms-web">達成方式：</p>
              <p className="fff-ms-mobo fff-txt-ms-detail">
                -----達成方式-----
              </p>
              {props.detailContext.subs}
            </div>
            {/* 目前進度 */}
            <p style={{ color: '#B9433B' }} className="fff-ms-web">
              目前進度:<div>{props.detailContext.TriggerSubs}</div>
            </p>
            <p className="fff-txt-ms-detail-title" style={{ color: '#B9433B' }}>
              {props.detailContext.AddProgress == null
                ? 0
                : props.detailContext.AddProgress}
              /{props.detailContext.progress_goal}{props.detailContext.unit}
            </p>

            <div style={{ marginTop: '1rem' }}>
              <ProgressBar animated now={props.msProgressNow} />
            </div>
          </div>
        </div>
        {/* 關閉的按鈕 */}
        <div className="row justify-content-center fff-no-mr-and-pad">
          <button
            type="button"
            className="btn-white txt-btn aboutCloseBtn"
            style={{ marginTop: '30px' }}
            onClick={() => {
              props.setDetailStyle({ visibility: 'hidden' })
            }}
            data-dismiss="modal"
          >
            好的！
          </button>
        </div>
      </div>
    </div>
  )
}

export default MilestoneDialog
