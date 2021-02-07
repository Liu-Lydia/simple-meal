import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

import ReserveKitchenPayment from './ReserveKitchenPayment'
import ReserveKitchenCheck from './ReserveKitchenCheck'

function ReserveKitchen(props) {
  // {流程, 流程轉換設定, 方案id, 方案物件, 預設方案內容}
  const { flowchart, setFlowchart } = props

  // 卸載時轉成流程1
  useEffect(() => {
    return () => {
      setFlowchart(1)
    }
  }, [])
  return (
    <>
      {flowchart === 1 && <Redirect to="/cart" />}

      {/* 流程2時 */}
      {flowchart === 2 && (
        <ReserveKitchenPayment
          flowchart={flowchart}
          setFlowchart={setFlowchart}
        />
      )}
      {/* 流程3時 */}
      {flowchart === 3 && (
        <ReserveKitchenCheck
          flowchart={flowchart}
          setFlowchart={setFlowchart}
        />
      )}
    </>
  )
}

export default ReserveKitchen
