import React, { useState, useEffect } from 'react'
import '../styles/public.css'
import '../styles/fff.css'
import MilestoneInfoBar from '../components/Milestone/MilestoneInfoBar'
import MilestoneList from '../components/Milestone/MilestoneList'
import MilestoneListOption from '../components/Milestone/MilestoneListOption'
import MsMoboPointInfo from '../components/Milestone/MsMoboPointInfo'
import MsMoboBackToLastPageBtn from '../components/Milestone/MsMoboBackToLastPageBtn'

function Milestone() {
  // 控制手機版“我的成就”按鈕按下去來顯示成就清單
  const [mobomspage2, setMoboMsPage2] = useState(false)

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

  // 當有任何render時呼叫
  useEffect(() => {
    webMoboExchange()
  }, [])
  //================================================================================================
  // //DidMount
  // useEffect(() => {
  //   window.addEventListener('resize', webMoboExchange)
  // }, [])
  // // 如果今天監聽到視窗大小被改變做“webMoboExchange”這個function

  // const webMoboExchange = () => {
  //   let win = window
  //   const p1 = document.getElementById('ms-p1')
  //   const p2 = document.getElementById('ms-p2')
  //   const p3 = document.getElementById('ms-p3')
  //   if (win.innerWidth >= 576) {
  //     p1.style.display = 'block'
  //     p2.style.display = 'none'
  //     p3.style.display = 'block'
  //   } else if (mobomspage2) {
  //     p1.style.display = 'none'
  //     p2.style.display = 'block'
  //     p3.style.display = 'block'
  //   } else {
  //     p1.style.display = 'block'
  //     p2.style.display = 'none'
  //     p3.style.display = 'none'
  //   }
  // }

  // //生命週期 監聽 mobomspage2 值有沒有改變 有改變的話就做裡面的事情
  // //useEffect(箭頭函式,[監聽對象])  這是生命週期中update的部分
  // useEffect(() => {
  //   const p1 = document.getElementById('ms-p1')
  //   const p2 = document.getElementById('ms-p2')
  //   const p3 = document.getElementById('ms-p3')
  //   if (window.innerWidth >= 576) {
  //     p1.style.display = 'block'
  //     p2.style.display = 'none'
  //     p3.style.display = 'block'
  //   } else if (mobomspage2) {
  //     p1.style.display = 'none'
  //     p2.style.display = 'block'
  //     p3.style.display = 'block'
  //   } else {
  //     p1.style.display = 'block'
  //     p2.style.display = 'none'
  //     p3.style.display = 'none'
  //   }
  // }, [mobomspage2])

  return (
    <>
      <div id="ms-p1" className="container" style={display.p1}>
        <MilestoneInfoBar
          btnText="兌換獎勵"
          href="./RewardExchange"
          setMoboMsPage2={setMoboMsPage2}
        />
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
        <MilestoneListOption />
        <MilestoneList />
      </div>
    </>
  )
}

export default Milestone
