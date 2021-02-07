import React, { useEffect, useState } from 'react'

function CartFlow(props) {
  const { cartMode, flowchart, setFlowchart } = props

  const step1 = ['', 'col-3 poe-cart-progress-active', 'col']
  const step2 = ['col-3', 'col-3 poe-cart-progress-active', 'col-3']
  const step3 = ['col', 'col-3 poe-cart-progress-active', '']

  const [classArray, setClassArray] = useState(step1)

  // 切換不同購物車的顯示流程
  const handleCartmodeFlowcart = () => {
    switch (cartMode) {
      case 'SimpleMealCoupon':
        return (
          <>
            <div class="col-3">選擇方案 </div>
            <div class="col-3">付款方式</div>
            <div class="col-3">確認訂單</div>
          </>
        )
      case 'MealDelivery':
        return (
          <>
            <div class="col-3">選擇方案 </div>
            <div class="col-3">配送資訊</div>
            <div class="col-3">確認訂單</div>
          </>
        )
      case 'ReserveKitchen':
        return (
          <>
            <div class="col-3">預約明細 </div>
            <div class="col-3">付款方式</div>
            <div class="col-3">確認訂單</div>
          </>
        )
      default:
    }
  }

  // 切換流程進度條位置
  const handleSetFlowchartBar = () => {
    switch (flowchart) {
      case 1:
        setClassArray(step1)
        break
      case 2:
        setClassArray(step2)
        break
      case 3:
        setClassArray(step3)
        break
      default:
    }
  }

  useEffect(() => {
    handleSetFlowchartBar()
  }, [flowchart])

  return (
    <>
      {/* 購物進度指示條 */}
      <div class="row justify-content-center poe-mb30 txt-btn poe-cart-progress">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="d-flex justify-content-between text-center">
            {handleCartmodeFlowcart()}
          </div>
          <div class="d-flex justify-content-between align-items-center poe-cart-progress-line">
            <div class={classArray[0]} style={{ transition: '1.5s' }}></div>
            <div class={classArray[1]} style={{ transition: '1.5s' }}></div>
            <div class={classArray[2]} style={{ transition: '1.5s' }}></div>
          </div>
        </div>
      </div>
      <div class="row poe-mb30"></div>
    </>
  )
}

export default CartFlow
