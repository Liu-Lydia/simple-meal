import React from 'react'
import '../../styles/public.css'
import '../../styles/fff.css'

function MilestoneListOption(props) {
  //選單文字
  const tabClassArrayActive =
    'd-flex fff-no-mr-and-pad justify-content-center col col-sm-2 mx-1 mx-sm-auto px-0 fff-txt-selected'
  const tabClassArrayNonActive =
    'd-flex fff-no-mr-and-pad justify-content-center col col-sm-2 mx-1 mx-sm-auto px-0 fff-txt-unselected'
  const tabClassArray = [
    //選擇到0限時活動
    [
      tabClassArrayActive, //0限時活動
      tabClassArrayNonActive, //1全部成就
      tabClassArrayNonActive, //2已達成成就
      tabClassArrayNonActive, //3未達成成就
    ],
    //選擇到1全部成就
    [
      tabClassArrayNonActive,
      tabClassArrayActive,
      tabClassArrayNonActive,
      tabClassArrayNonActive,
    ],
    //選擇到2已達成成就
    [
      tabClassArrayNonActive,
      tabClassArrayNonActive,
      tabClassArrayActive,
      tabClassArrayNonActive,
    ],
    //選擇到3未達成成就
    [
      tabClassArrayNonActive,
      tabClassArrayNonActive,
      tabClassArrayNonActive,
      tabClassArrayActive,
    ],
  ]

  //lineBar
  const lineBarClassArray = [
    ['', '', ' col-3 fff-option-selected', ' col'],
    [' col-3', '', ' col-3 fff-option-selected', ' col'],
    [' col', ' col-3 fff-option-selected', ' ', ' col-3'],
    [' col', ' col-3 fff-option-selected', '', ''],
  ]

  return (
    <>
      {/* web virsion */}
      <div
        className="row justify-content-center"
        // 手機版是15px未改
      >
        {/* 成就分類文字*/}
        <div className="col-10 col-sm-12 col-md-11 col-xl-10 d-flex justify-content-center fff-txt-selected">
          <div className="col-12 col-lg-8 col-xl-7 d-flex justify-content-between">
            <div
              className={tabClassArray[props.milestoneFilter][0]}
              onClick={() => {
                props.setMilestoneFilter(0)
              }}
            >
              <div className="fff-no-mr-and-pad">限時</div>
              <div className="fff-ms-web fff-no-mr-and-pad">活動</div>
            </div>
            <div
              className={tabClassArray[props.milestoneFilter][1]}
              onClick={() => {
                props.setMilestoneFilter(1)
              }}
            >
              &nbsp;全部<div className="fff-ms-web fff-no-mr-and-pad">成就</div>
              &nbsp;
            </div>
            <div
              className={tabClassArray[props.milestoneFilter][2]}
              onClick={() => {
                props.setMilestoneFilter(2)
              }}
            >
              已達成<div className="fff-ms-web fff-no-mr-and-pad">成就</div>
            </div>
            <div
              className={tabClassArray[props.milestoneFilter][3]}
              onClick={() => {
                props.setMilestoneFilter(3)
              }}
            >
              未達成<div className="fff-ms-web fff-no-mr-and-pad">成就</div>
            </div>
          </div>
        </div>
        {/*那條Bar*/}
        <div className="col-10 col-sm-12 col-md-11 col-xl-10 d-flex justify-content-center fff-select-line">
          <div className="col-12  col-lg-8 col-xl-7 d-flex justify-content-between align-items-center">
            <div
              className={lineBarClassArray[props.milestoneFilter][0]}
              style={{ transition: '1.5s' }}
            ></div>
            <div
              className={lineBarClassArray[props.milestoneFilter][1]}
              style={{ transition: '1.5s' }}
            ></div>
            <div
              className={lineBarClassArray[props.milestoneFilter][2]}
              style={{ transition: '1.5s' }}
            ></div>
            <div
              className={lineBarClassArray[props.milestoneFilter][3]}
              style={{ transition: '1.5s' }}
            ></div>
          </div>
        </div>
        {/*過濾器*/}
        <div className="ms-check-bar col-12 col-md-11 col-xl-9 d-flex">
          <div className="">
            <input
              type="checkbox"
              onChange={() => {
                props.setShowEndedMs(!props.showEndedMs)
              }}
              // 勾勾的樣式要跟原本的不一樣
              checked={props.showEndedMs}
            ></input>
            <span className="fff-checkbox-gap">不過濾已結束活動</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default MilestoneListOption
