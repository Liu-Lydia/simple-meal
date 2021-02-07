import React, { useEffect, useState } from 'react'
import { Route, withRouter, Link, Switch } from 'react-router-dom'

import CartBg from '../components/cart/CartBg'
import CartFlow from '../components/cart/CartFlow'
import CartSimpleMealCoupon from '../components/cart/CartSimpleMealCoupon'
import CartMealDelivery from '../components/cart/CartMealDelivery'
import CartReserveKitchen from '../components/cart/CartReserveKitchen'
import SimpleMealCoupon from '../components/cart/SimpleMealCoupon'
import MealDelivery from '../components/cart/MealDelivery'
import ReserveKitchen from '../components/cart/ReserveKitchen'

function Cart() {
  // 切換購物車
  const [cartMode, setCartMode] = useState('SimpleMealCoupon')
  // 流程轉換
  const [flowchart, setFlowchart] = useState(1)

  // ----餐券使用(開始)----
  // 餐券方案選擇
  const [choice, setChoice] = useState('')
  const [choiceObj, setChoiceObj] = useState({
    combination: '',
    discription: '',
    quantity: 0,
    couponNum: 0,
    price: 0,
  })
  // 方案內容
  const choiceArray = [
    {
      combination: '',
      discription: '',
      couponNum: 0,
      price: 0,
    },
    {
      combination: '吃飽飽沒煩惱組合',
      discription: '(包含20張餐卷, 加贈5張免費餐券)',
      couponNum: 25,
      price: 3500,
    },
    {
      combination: '食在很滿足組合',
      discription: '(包含10張餐卷, 加贈2張免費餐券)',
      couponNum: 12,
      price: 1700,
    },
    {
      combination: '經濟實惠組',
      discription: '(包含5張餐卷, 加贈1張免費餐券)',
      couponNum: 6,
      price: 850,
    },
  ]
  // 組合數量
  const [quantity, setQuantity] = useState(0)
  // ----餐券使用(結束)----

  // 切換購買餐券/配送餐點/預約廚房
  const handleCartmode = () => {
    switch (cartMode) {
      case 'SimpleMealCoupon':
        return (
          <CartSimpleMealCoupon
            setFlowchart={setFlowchart}
            choice={choice}
            setChoice={setChoice}
            choiceObj={choiceObj}
            setChoiceObj={setChoiceObj}
            choiceArray={choiceArray}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        )
      case 'MealDelivery':
        return (
          <CartMealDelivery
            setFlowchart={setFlowchart}
            setCartMode={setCartMode}
          />
        )
      case 'ReserveKitchen':
        return <CartReserveKitchen setFlowchart={setFlowchart} />
      default:
    }
  }

  // 當購物車改變時切換流程到階段1
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
          {/* 購物車切換 */}
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
          <SimpleMealCoupon
            flowchart={flowchart}
            setFlowchart={setFlowchart}
            choice={choice}
            choiceObj={choiceObj}
            choiceArray={choiceArray}
          />
        </Route>
        <Route path="/cart/mealdelivery">
          <MealDelivery flowchart={flowchart} setFlowchart={setFlowchart} />
        </Route>
        <Route path="/cart/reservekitchen">
          <ReserveKitchen flowchart={flowchart} setFlowchart={setFlowchart} />
        </Route>
      </Switch>
    </>
  )
}

export default withRouter(Cart)
