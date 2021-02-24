import React, { useState, useEffect, props } from 'react'
import { Redirect } from 'react-router-dom'
import '../styles/public.css'
import '../styles/fff.css'
// 個人資料
import MilestoneInfoBar from '../components/Milestone/MilestoneInfoBar'
// 成就清單
import MilestoneListAll from '../components/Milestone/MilestoneListAll'
// 成就選項
import MilestoneListOption from '../components/Milestone/MilestoneListOption'
//手機版點數顯示
import MsMoboPointInfo from '../components/Milestone/MsMoboPointInfo'
//手機版回前頁
import MsMoboBackToLastPageBtn from '../components/Milestone/MsMoboBackToLastPageBtn'
// 限時活動
import MilestoneListLimit from '../components/Milestone/MilestoneListLimit'
// 已達成成就
import MilestoneListFinish from '../components/Milestone/MilestoneListFinish'
// 未達成成就
import MilestoneListUnfinish from '../components/Milestone/MilestoneListUnfinish'
// 主圖
import MsMainPic from '../components/Milestone/MsMainPic'

function Milestone(props) {
  // 控制手機版“我的成就”按鈕按下去來顯示成就清單
  const [mobomspage2, setMoboMsPage2] = useState(false)

  const [milestoneFilter, setMilestoneFilter] = useState(1)
  //0限時活動 1全部成就 2已達成成就 3未達成成就

  //================================================================================================
  // 定義style物件，顯示預設網頁版配置
  const [display, setDisplay] = useState({
    // infobar mainpic
    p1: { display: 'block' },
    // ms mobo back to last past page btn, ms mobo points,
    p2: { display: 'none' },
    // ms option, ms list
    p3: { display: 'block' },
  })

  // 定義改變條件的函式, dom的style以變數操控 ex: <div id="ms-p1" className="container" style={display.p1}>...
  const webOrMoboVerControl = () => {
    let win = window
    // 只要寬度值576以上變成網頁版配置
    if (win.innerWidth >= 576) {
      setDisplay({
        p1: { display: 'block' },
        p2: { display: 'none' },
        p3: { display: 'block' },
      })
      //小於576但是是手機版第二頁的話
    } else if (mobomspage2) {
      setDisplay({
        p1: { display: 'none' },
        p2: { display: 'block' },
        p3: { display: 'block' },
      })
      // 手機第一頁
    } else {
      setDisplay({
        p1: { display: 'block' },
        p2: { display: 'none' },
        p3: { display: 'none' },
      })
    }
  }

  // 按下按鈕 更新畫面
  /*正常來說應該不用這麼麻煩
   但是不指定mobomspage2的時候不會刷新*/

  useEffect(() => {
    webOrMoboVerControl()
  }, [mobomspage2])

  //為什麼render算是畫面大小值有變動？
  useEffect(() => {
    window.addEventListener('resize', webOrMoboVerControl) //畫面大小有更動時
    // willunmount
    return () => {
      window.removeEventListener('resize', webOrMoboVerControl)
    }
    //當DOM元素移除時要將監聽一併移除(讓監聽器離開MileStone就就消失)
  }, [])

  return (
    <>
      {/* 沒登入時, 跳轉登入 */}
      {/* {!props.loginBool && <Redirect to="/MemberCenter" />} */}
      <div id="ms-p1" className="container" style={display.p1}>
        <MilestoneInfoBar
          btnText="兌換獎勵"
          href="./RewardExchange"
          setMoboMsPage2={setMoboMsPage2}
        />
        <MsMainPic />
      </div>
      <div id="ms-p2" className="container" style={display.p2}>
        <MsMoboPointInfo
          //切換假分頁
          setMoboMsPage2={setMoboMsPage2}
          mobomspage2={mobomspage2}
        />
        <MsMoboBackToLastPageBtn
          //控制回前頁的按鈕是做什麼
          setPage="Milestone"
          setMoboMsPage2={setMoboMsPage2}
        />
      </div>
      <div id="ms-p3" className="container" style={display.p3}>
        <MilestoneListOption
          setMilestoneFilter={setMilestoneFilter}
          milestoneFilter={milestoneFilter}
        />
        {milestoneFilter == 0 && <MilestoneListLimit />}
        {milestoneFilter == 1 && <MilestoneListAll />}
        {milestoneFilter == 2 && <MilestoneListFinish />}
        {milestoneFilter == 3 && <MilestoneListUnfinish />}
      </div>
    </>
  )
}

export default Milestone
