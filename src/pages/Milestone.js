import React, { useState, useEffect } from 'react'
import '../styles/public.css'
import '../styles/fff.css'
import MilestoneInfoBar from '../components/Milestone/MilestoneInfoBar'
import MilestoneList from '../components/Milestone/MilestoneList'
import MilestoneListOption from '../components/Milestone/MilestoneListOption'
import MsMoboPointInfo from '../components/Milestone/MsMoboPointInfo'

function Milestone() {
  //集點方式
  const [about, setAbout] = useState(0)
  // 控制手機版“我的成就”按鈕按下去來顯示成就清單
  const [mobomspage2, setMoboMsPage2] = useState(false)

  //生命週期 監聽 mobomspage2 值有沒有改變 有改變的話就做裡面的事情
  //useEffect(箭頭函式,[監聽對象])  這是生命週期中update的部分
  useEffect(() => {
    if (mobomspage2)//如果第二頁開啟了 
    {
      //關閉第一頁
      //ClassName 會回陣列 所以要取單個元件時 要給陣列值
      const page1 = document.getElementsByClassName("fff-ms-mobo-page-1")[0];
      page1.style.display = "none";

      //顯示第二頁
      const page2 = document.getElementsByClassName("fff-ms-mobo-page-2")[0];
      page2.style.display = "block";
    }
    else {
      //顯示第一頁
      const page1 = document.getElementsByClassName("fff-ms-mobo-page-1")[0];
      page1.style.display = "block";

      //關閉第二頁
      const page2 = document.getElementsByClassName("fff-ms-mobo-page-2")[0];
      page2.style.display = "none";
    }
  }, [mobomspage2])

  return (
    <>
      <div className="container fff-ms-mobo-page-1">
        <MilestoneInfoBar
          btnText="兌換獎勵"
          href="./RewardExchange"
          setAbout={setAbout}
          about={about}
          setMoboMsPage2={setMoboMsPage2}
        />
      </div>
      <div className="container fff-ms-mobo-page-2">
        <MsMoboPointInfo setMoboMsPage2={setMoboMsPage2}
          mobomspage2={mobomspage2} />
        <MilestoneListOption />
        <MilestoneList />
      </div>
    </>
  )
}

export default Milestone
