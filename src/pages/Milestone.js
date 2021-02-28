import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import '../styles/public.css'
import '../styles/fff.css'
// 個人資料
import MilestoneInfoBar from '../components/Milestone/MilestoneInfoBar'
// 成就清單
import MilestoneList from '../components/Milestone/MilestoneList'
// 成就選項
import MilestoneListOption from '../components/Milestone/MilestoneListOption'
//手機版點數顯示
import MsMoboPointInfo from '../components/Milestone/MsMoboPointInfo'
//手機版回前頁
import MsMoboBackToLastPageBtn from '../components/Milestone/MsMoboBackToLastPageBtn'

// 主圖
import MsMainPic from '../components/Milestone/MsMainPic'

function Milestone(props) {
  // 控制手機版“我的成就”按鈕按下去來顯示成就清單
  const [mobomspage2, setMoboMsPage2] = useState(false)

  //0限時活動 1全部成就 2已達成成就 3未達成成就
  const [milestoneFilter, setMilestoneFilter] = useState(1)

  //解構賦值 取得登入資訊
  const { loginBool } = props

  // 過濾已結束成就的切換true的時候不過濾已結束活動
  const [showEndedMs, setShowEndedMs] = useState(false)

  //使用者點數
  const [totalPoint, setTotalPoint] = useState(0)

  const getPoint = async () => {
    const url = 'http://localhost:4000/milestone/getPoint'
    //sid 要從session來
    await fetch(url, {
      method: 'get',
      credentials: 'include',
    })
      //then 是會接前方拋出的結果
      .then((r) => r.json())
      .then((obj) => {
        //總獲得的點數
        const totalGetPoint = obj.totalGetPoiont
        //總花費的點數
        const totalSpendPoint = obj.totalSpendPoint
        //將目前有的點數設定成為屬性
        setTotalPoint(totalGetPoint - totalSpendPoint)
      })
  }

  useEffect(() => {
    getPoint()
  }, [])

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

  // 當app.js沒有Milestone.js出現的時候把showEndMs的值改為false避免crash
  useEffect(() => {return()=>{setShowEndedMs(false)}})

  return (
    <>
      {/* 沒登入時, 跳轉登入 */}
      {!loginBool && <Redirect to="/MemberCenter" />}
      <div id="ms-p1" className="container" style={display.p1}>
        <MilestoneInfoBar
          btnText="兌換獎勵"
          href="./RewardExchange"
          setMoboMsPage2={setMoboMsPage2}
          totalPoint={totalPoint}
        />
        <MsMainPic />
      </div>
      <div id="ms-p2" className="container" style={display.p2}>
        <MsMoboPointInfo
          //切換假分頁
          setMoboMsPage2={setMoboMsPage2}
          mobomspage2={mobomspage2}
          totalPoint={totalPoint}
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
          showEndedMs={showEndedMs}
          setShowEndedMs={setShowEndedMs}
        />
        {milestoneFilter === 0 && (
          <MilestoneList showEndedMs={showEndedMs} filter="limit" />
        )}
        {milestoneFilter === 1 && (
          <MilestoneList showEndedMs={showEndedMs} filter="all" />
        )}
        {milestoneFilter === 2 && (
          <MilestoneList showEndedMs={showEndedMs} filter="finished" />
        )}
        {milestoneFilter === 3 && (
          <MilestoneList showEndedMs={showEndedMs} filter="unfinished" />
        )}
      </div>
    </>
  )
}

export default Milestone
