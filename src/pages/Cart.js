import React, { useEffect, useState } from 'react'
import { Route, withRouter, Link, Switch } from 'react-router-dom'

import CartBg from '../components/cart/CartBg'
import CartFlow from '../components/cart/CartFlow'
import CartSimpleMealCoupon from '../components/cart/CartSimpleMealCoupon'
import CartMealDelivery from '../components/cart/CartMealDelivery'
import CartReserveKitchen from '../components/cart/CartReserveKitchen'
import SimpleMealCoupon from '../components/cart/SimpleMealCoupon'

function Cart() {
  // 切換購物車
  const [cartMode, setCartMode] = useState('SimpleMealCoupon')
  // 流程轉換
  const [flowchart, setFlowchart] = useState(1)

  // 切換購買餐券/配送餐點/預約廚房
  const handleCartmode = () => {
    switch (cartMode) {
      case 'SimpleMealCoupon':
        return <CartSimpleMealCoupon setFlowchart={setFlowchart} />
      case 'MealDelivery':
        return <CartMealDelivery setFlowchart={setFlowchart} />
      case 'ReserveKitchen':
        return <CartReserveKitchen setFlowchart={setFlowchart} />
      default:
    }
  }

  useEffect(() => {
    // console.log(cartMode)
    setFlowchart(1)
  }, [cartMode])

  return (
    <>
      <CartBg />
      <CartFlow
        cartMode={cartMode}
        flowchart={flowchart}
        setFlowchart={setFlowchart}
      />
      <Switch>
        <Route exact path="/cart">
          {/* {handleCartmode()} */}
          <div className="row justify-content-center poe-bookmark">
            <div className="col-12 col-md-8 col-xl-6">
              {/* 頁籤按鈕 */}
              <div className="d-flex justify-content-between txt-btn">
                <button
                  onClick={() => setCartMode('SimpleMealCoupon')}
                  className={`col poe-bookmark-label ${
                    cartMode === 'SimpleMealCoupon' &&
                    'poe-bookmark-label-active'
                  }`}
                >
                  購買餐券
                </button>
                <button
                  onClick={() => setCartMode('MealDelivery')}
                  className={`col poe-bookmark-label ${
                    cartMode === 'MealDelivery' && 'poe-bookmark-label-active'
                  }`}
                >
                  餐點配送
                </button>
                <button
                  onClick={() => setCartMode('ReserveKitchen')}
                  className={`col poe-bookmark-label ${
                    cartMode === 'ReserveKitchen' && 'poe-bookmark-label-active'
                  }`}
                >
                  預約廚房
                </button>
              </div>
              {/* 頁籤內容 */}
              <div className="poe-bookmark-content txt-btn">
                {handleCartmode()}
              </div>
            </div>
          </div>
        </Route>
        <Route path="/cart/simplemealcoupon">
          <SimpleMealCoupon flowchart={flowchart} setFlowchart={setFlowchart} />
        </Route>
      </Switch>
    </>
  )
}

export default withRouter(Cart)
