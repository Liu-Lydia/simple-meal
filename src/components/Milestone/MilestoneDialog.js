import React, { props, useState, useEffect } from 'react'

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
        <div className="row justify-content-end fff-ms-mobo">
          {/* 關閉頁面的Ｘ */}
          <h6>
            <i
              className="fas fa-times aboutCloseBtn"
              onClick={() => {
                props.setDetailStyle({ visibility: 'hidden' })
              }}
            ></i>
          </h6>
        </div>

        <div className="row justify-content-center ">
          <div className="fff-ms-web row justify-content-between">
            <div className="col-4 align-self-center">
              <img
                src={
                  'http://localhost:3015/img/milestonelist/' +
                  (props.detailContext.AddProgress >=
                  props.detailContext.progress_goal
                    ? props.detailContext.finished_goal_pic
                    : props.detailContext.unfinished_goal_pic)
                }
                alt=""
              />
            </div>

            <div className="col-6">
              <div
                className="row d-flex align-items-center"
                style={{ height: '100%' }}
              >
                <div className="col">
                  <h3 style={{ marginBottom: '30px' }}>
                    {props.detailContext.stone_name}
                  </h3>{' '}
                  <p className="txt-h6" style={{ color: '#627e2a' }}>
                    {' '}
                    獎勵點數：{props.detailContext.reward_point}點
                  </p>
                  <p className="txt-h6">達成方式{props.detailContext.subs}</p>
                  <p className="txt-h6">
                    目前進度:{props.detailContext.TriggerSubs}
                    {props.detailContext.AddProgress == null
                      ? 0
                      : props.detailContext.AddProgress}
                    /{props.detailContext.progress_goal}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="fff-ms-mobo row justify-content-center">
            <img
              className="align-center"
              src={
                'http://localhost:3015/img/milestonelist/' +
                (props.detailContext.AddProgress >=
                props.detailContext.progress_goal
                  ? props.detailContext.finished_goal_pic
                  : props.detailContext.unfinished_goal_pic)
              }
              width="150px"
              height="150px"
              alt="s"
            />
            <h6>{props.detailContext.stone_name}</h6>
            <br />
            <span className="txt-h6">{props.detailContext.TriggerSubs}</span>
            <span className="txt-sub1" style={{ color: '#627e2a' }}>
              {' '}
              獎勵點數：{props.detailContext.reward_point}點
            </span>
            <span className="txt-sub1" style={{ color: '#B9433B' }}>
              目前進度
              {props.detailContext.AddProgress == null
                ? 0
                : props.detailContext.AddProgress}
              /{props.detailContext.progress_goal}
            </span>
            <span className="txt-h6">{props.detailContext.subs}</span>
          </div>

          <div className="col-12 d-flex justify-content-center fff-ms-web">
            {/* 關閉的按鈕 */}
            <button
              type="button"
              className="btn-white txt-btn aboutCloseBtn"
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
    </div>
  )
}

export default MilestoneDialog
