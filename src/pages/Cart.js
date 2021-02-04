import React, { useEffect, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import CartBg from '../components/CartBg'
import CartSimpleMealCoupon from '../components/CartSimpleMealCoupon'
import CartMealDelivery from '../components/CartMealDelivery'
import CartReserveKitchen from '../components/CartReserveKitchen'

function Cart() {
  // 切換購物車
  const [cartMode, setCartMode] = useState('SimpleMealCoupon')

  const handleCartmode = () => {
    switch (cartMode) {
      case 'SimpleMealCoupon':
        return <CartSimpleMealCoupon />
      case 'MealDelivery':
        return <CartMealDelivery />
      case 'ReserveKitchen':
        return <CartReserveKitchen />
      default:
    }
  }

  useEffect(() => {
    console.log(cartMode)
  }, [cartMode])

  return (
    <>
      <CartBg />
      {/* {handleCartmode()} */}
      <div className="row justify-content-center poe-bookmark">
        <div className="col-12 col-md-8 col-xl-6">
          {/* 頁籤按鈕 */}
          <div className="d-flex justify-content-between txt-btn">
            <button
              onClick={() => setCartMode('SimpleMealCoupon')}
              className={`col poe-bookmark-label ${
                cartMode === 'SimpleMealCoupon' && 'poe-bookmark-label-active'
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
          <div className="poe-bookmark-content txt-btn">{handleCartmode()}</div>
        </div>
      </div>
    </>
  )
}

export default Cart
