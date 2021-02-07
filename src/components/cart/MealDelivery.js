import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

import MealDeliveryInfo from './MealDeliveryInfo'
import MealDeliveryCheck from './MealDeliveryCheck'

function MealDelivery(props) {
  const { flowchart, setFlowchart } = props

  return (
    <>
      {flowchart === 1 && <Redirect to="/cart" />}

      {/* 流程2時 */}
      {flowchart === 2 && (
        <MealDeliveryInfo flowchart={flowchart} setFlowchart={setFlowchart} />
      )}
      {/* 流程3時 */}
      {flowchart === 3 && (
        <MealDeliveryCheck flowchart={flowchart} setFlowchart={setFlowchart} />
      )}
      <form id="cart_mealdelivery"></form>
    </>
  )
}

export default MealDelivery
