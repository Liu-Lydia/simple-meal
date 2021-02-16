import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

import MealDeliveryInfo from './MealDeliveryInfo'
import MealDeliveryCheck from './MealDeliveryCheck'

function MealDelivery(props) {
  const { flowchart, setFlowchart } = props

  const [info, setInfo] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    date: '',
    time: '',
  })

  return (
    <>
      {flowchart === 1 && <Redirect to="/cart" />}

      {/* 流程2時 */}
      {flowchart === 2 && (
        <MealDeliveryInfo
          flowchart={flowchart}
          setFlowchart={setFlowchart}
          info={info}
          setInfo={setInfo}
        />
      )}
      {/* 流程3時 */}
      {flowchart === 3 && (
        <MealDeliveryCheck
          flowchart={flowchart}
          setFlowchart={setFlowchart}
          info={info}
        />
      )}
      {/* 隱藏表單 */}
      <form id="cart_mealdelivery" hidden>
        <input type="text" name="name" value={info.name} />
        <input type="text" name="mobile" value={info.mobile} />
        <input type="text" name="email" value={info.email} />
        <input type="text" name="address" value={info.address} />
        <input type="text" name="date" value={info.date} />
        <input type="text" name="time" value={info.time} />
      </form>
    </>
  )
}

export default MealDelivery
