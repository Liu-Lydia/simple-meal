import React, { useEffect, useState } from 'react'
import SimpleMealCouponPayment from './SimpleMealCouponPayment'
import SimpleMealCouponCheck from './SimpleMealCouponCheck'

function SimpleMealCoupon(props) {
  // {流程, 流程轉換設定, 方案id, 方案物件, 預設方案內容}
  const { flowchart, setFlowchart, choice, choiceObj, choiceArray } = props

  // 卸載時轉成流程1
  useEffect(() => {
    return () => {
      setFlowchart(1)
    }
  }, [])

  return (
    <>
      {/* 流程1時 */}
      {flowchart === 2 && (
        <SimpleMealCouponPayment
          flowchart={flowchart}
          setFlowchart={setFlowchart}
          choice={choice}
          choiceObj={choiceObj}
          choiceArray={choiceArray}
        />
      )}
      {/* 流程2時 */}
      {flowchart === 3 && (
        <SimpleMealCouponCheck
          flowchart={flowchart}
          setFlowchart={setFlowchart}
          choice={choice}
          choiceObj={choiceObj}
          choiceArray={choiceArray}
        />
      )}
    </>
  )
}

export default SimpleMealCoupon
