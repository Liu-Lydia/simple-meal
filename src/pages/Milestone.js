import React, { useState, useEffect,props } from 'react'
import { Redirect } from 'react-router-dom'
import '../styles/public.css'
import '../styles/fff.css'
import MilestoneInfoBar from '../components/Milestone/MilestoneInfoBar'
import MilestoneListAll from '../components/Milestone/MilestoneListAll'
import MilestoneListOption from '../components/Milestone/MilestoneListOption'
import MsMoboPointInfo from '../components/Milestone/MsMoboPointInfo'
import MsMoboBackToLastPageBtn from '../components/Milestone/MsMoboBackToLastPageBtn'
import MilestoneListLimit from '../components/Milestone/MilestoneListLimit'
import MilestoneListFinish from '../components/Milestone/MilestoneListFinish'
import MilestoneListUnfinish from '../components/Milestone/MilestoneListUnfinish'
import MsMainPic from '../components/Milestone/MsMainPic'

function Milestone(props) {
  // 控制手機版“我的成就”按鈕按下去來顯示成就清單
  const [mobomspage2, setMoboMsPage2] = useState(false)
  const [milestoneFilter,setMilestoneFilter] = useState(1);//0限時活動 1全部成就 2已達成成就 3未達成成就

  //================================================================================================
  // 定義style物件
  const [display, setDisplay] = useState({
    p1: { display: 'block' },
    p2: { display: 'none' },
    p3: { display: 'block' },
  })

  // 定義改變條件的函式, dom的style以變數操控 ex: <div id="ms-p1" className="container" style={display.p1}>...
  const webMoboExchange = () => {
    let win = window
    if (win.innerWidth >= 576) {
      setDisplay({
        p1: { display: 'block' },
        p2: { display: 'none' },
        p3: { display: 'block' },
      })
    } else if (mobomspage2) {
      setDisplay({
        p1: { display: 'none' },
        p2: { display: 'block' },
        p3: { display: 'block' },
      })
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
    webMoboExchange()
  }, [mobomspage2])

  useEffect(() => {
    window.addEventListener('resize', webMoboExchange) //畫面大小有更動時
    return ()=>{window.removeEventListener('resize', webMoboExchange)}//當DOM元素移除時要將監聽一併移除
  }, []);

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
        <MilestoneListOption setMilestoneFilter={setMilestoneFilter} milestoneFilter={milestoneFilter}/>
        {milestoneFilter == 0 && <MilestoneListLimit/>}
        {milestoneFilter == 1 && <MilestoneListAll/>}
        {milestoneFilter == 2 && <MilestoneListFinish/>}
        {milestoneFilter == 3 && <MilestoneListUnfinish/>}
      </div>
    </>
  )
}

export default Milestone
