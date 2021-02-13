import React, { useState } from 'react'
import '../styles/public.css'
import '../styles/fff.css'
import MilestoneInfoBar from '../components/Milestone/MilestoneInfoBar'
import ExchangeOption from '../components/Milestone/ExchangeOption'
import ExangeGoodsList from '../components/Milestone/ExchangeGoodsList'
import ExchangeRecord from '../components/Milestone/ExchangeRecord'
import MsMoboPointInfo from '../components/Milestone/MsMoboPointInfo'
import MsMoboBackToLastPageBtn from '../components/Milestone/MsMoboBackToLastPageBtn'

function RewardExchange() {
  //切換分頁
  const [optionTab, setOptionTab] = useState(1)
  //集點方式
  const [about, setAbout] = useState(0)

  // 控制手機版“我的成就”按鈕按下去來顯示成就清單 在兌換獎勵沒有使用 單純放著
  const [mobomspage2, setMoboMsPage2] = useState(false)

  return (
    <>
      <div className="fff-ms-web">
        <div className="container">
          <MilestoneInfoBar
            btnText="我的成就"
            href="./Milestone"
            setAbout={setAbout}
            about={about}
          />
        </div>
      </div>
      <div className="fff-ms-mobo">
        <div className="container">
          <MsMoboPointInfo
            setMoboMsPage2={setMoboMsPage2}
            mobomspage2={mobomspage2}
            setPage="RewardExange"
          />
        </div>
      </div>
      <div className="fff-ms-mobo">
        <div className="container">
          <MsMoboBackToLastPageBtn
            //控制回前頁的按鈕是做什麼
            setPage="RewardExchange"
          />
        </div>
      </div>
      <div className="container">
        <ExchangeOption setOptionTab={setOptionTab} optionTab={optionTab} />
        {optionTab == 1 && <ExangeGoodsList />}

        {optionTab == 2 && <ExchangeRecord />}
      </div>
    </>
  )
}

export default RewardExchange
