import React, { useState, useEffect } from 'react'
import '../styles/public.css'
import '../styles/fff.css'
import MilestoneInfoBar from '../components/Milestone/MilestoneInfoBar'
import MilestoneList from '../components/Milestone/MilestoneList'
import MilestoneListOption from '../components/Milestone/MilestoneListOption'
import MsMoboPointInfo from '../components/Milestone/MsMoboPointInfo'
import MsMoboBackToLastPageBtn from '../components/Milestone/MsMoboBackToLastPageBtn'

function Milestone() {
  //BUG觸發條件:
  // 1. 進入首頁
  // 2. 從檢查切換成手機視窗
  // 3. 點選footer成就icon進入成就頁面
  // 4. 點選header logo進入首頁
  // 5. 從檢查切換成桌機視窗
  // 推測原因:操作真實DOM, 導致重新渲染時找不到DOM元素

  // 控制手機版“我的成就”按鈕按下去來顯示成就清單
  const [mobomspage2, setMoboMsPage2] = useState(false)

  //DidMount
  useEffect(() => {
    window.addEventListener('resize', webMoboExchange)
  })
  // 如果今天監聽到視窗大小被改變做“webMoboExchange”這個function

  const webMoboExchange = () => {
    let win = window
    const p1 = document.getElementById('ms-p1')
    const p2 = document.getElementById('ms-p2')
    const p3 = document.getElementById('ms-p3')
    if (win.innerWidth >= 576) {
      p1.style.display = 'block'
      p2.style.display = 'none'
      p3.style.display = 'block'
    } else if (mobomspage2) {
      p1.style.display = 'none'
      p2.style.display = 'block'
      p3.style.display = 'block'
    } else {
      p1.style.display = 'block'
      p2.style.display = 'none'
      p3.style.display = 'none'
    }
  }

  //生命週期 監聽 mobomspage2 值有沒有改變 有改變的話就做裡面的事情
  //useEffect(箭頭函式,[監聽對象])  這是生命週期中update的部分
  useEffect(() => {
    const p1 = document.getElementById('ms-p1')
    const p2 = document.getElementById('ms-p2')
    const p3 = document.getElementById('ms-p3')
    if (window.innerWidth >= 576) {
      p1.style.display = 'block'
      p2.style.display = 'none'
      p3.style.display = 'block'
    } else if (mobomspage2) {
      p1.style.display = 'none'
      p2.style.display = 'block'
      p3.style.display = 'block'
    } else {
      p1.style.display = 'block'
      p2.style.display = 'none'
      p3.style.display = 'none'
    }
  }, [mobomspage2])

  return (
    <>
      <div id="ms-p1" className="container">
        <MilestoneInfoBar
          btnText="兌換獎勵"
          href="./RewardExchange"
          setMoboMsPage2={setMoboMsPage2}
        />
      </div>
      <div id="ms-p2" className="container">
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
      <div id="ms-p3" className="container">
        <MilestoneListOption />
        <MilestoneList />
      </div>
    </>
  )
}

export default Milestone
