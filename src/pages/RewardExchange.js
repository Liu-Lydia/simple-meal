import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import '../styles/public.css'
import '../styles/fff.css'
import MilestoneInfoBar from '../components/Milestone/MilestoneInfoBar'
import ExchangeOption from '../components/Milestone/ExchangeOption'
import ExangeGoodsList1 from '../components/Milestone/ExchangeGoodsList1'
import ExangeGoodsList2 from '../components/Milestone/ExchangeGoodsList2'
import ExchangeRecord from '../components/Milestone/ExchangeRecord'
import MsMoboPointInfo from '../components/Milestone/MsMoboPointInfo'
import MsMoboBackToLastPageBtn from '../components/Milestone/MsMoboBackToLastPageBtn'

function RewardExchange(props) {
  //切換分頁
  const [optionTab, setOptionTab] = useState(1)

  // 控制手機版“我的成就”按鈕按下去來顯示成就清單 在兌換獎勵沒有使用 單純放著
  const [mobomspage2, setMoboMsPage2] = useState(false)

  //使用者點數
  const [totalPoint, setTotalPoint] = useState(0)

  //解構賦值 取得登入資訊
  const { loginBool } = props

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

  return (
    <>
      {/* 沒登入時, 跳轉登入 */}
      {!loginBool && <Redirect to="/MemberCenter" />}
      <div className="fff-ms-web">
        <div className="container">
          <MilestoneInfoBar
            btnText="我的成就"
            href="./Milestone"
            totalPoint={totalPoint}
            setMoboMsPage2={setMoboMsPage2}
          />
        </div>
      </div>
      <div className="fff-ms-mobo">
        <div className="container">
          <MsMoboPointInfo
            setMoboMsPage2={setMoboMsPage2}
            mobomspage2={mobomspage2}
            setPage="RewardExange"
            totalPoint={totalPoint}
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
        {optionTab === 0 && (
          <ExangeGoodsList1 getPoint={getPoint} totalPoint={totalPoint} />
        )}
        {optionTab === 1 && (
          <ExangeGoodsList2 getPoint={getPoint} totalPoint={totalPoint} />
        )}

        {optionTab === 2 && <ExchangeRecord />}
      </div>
    </>
  )
}

export default RewardExchange
