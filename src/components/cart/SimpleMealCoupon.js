import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

import SimpleMealCouponPayment from './SimpleMealCouponPayment'
import SimpleMealCouponCheck from './SimpleMealCouponCheck'

function SimpleMealCoupon(props) {
  // {流程, 流程轉換設定, 方案id, 方案物件, 預設方案內容}
  const { flowchart, setFlowchart, choice, choiceObj, choiceArray } = props

  // 付款選項
  const paymentArray = [
    {
      proj: '信用卡線上刷卡一次付清',
      discript: '(可接受VISA, Master, JCB, 聯合信用卡)',
    },
    {
      proj: '銀聯卡',
      discript:
        '(支付成功頁面僅為銀聯卡回覆訊息，交易是否完成請需以本商店通知為準)',
    },
    { proj: 'LINE PAY', discript: '(可用LINE POINTS折抵)' },
  ]
  // 最後付款選擇
  const [paymentObj, setPaymentObj] = useState({ proj: '', discript: '' })

  // 設定付款選項
  const [paymentValue, setPaymentValue] = useState(null)

  // 優惠券使用
  const [coupon, setCoupon] = useState({ stiring: '', cost: 0 })

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
        <SimpleMealCouponPayment
          flowchart={flowchart}
          setFlowchart={setFlowchart}
          choice={choice}
          choiceObj={choiceObj}
          choiceArray={choiceArray}
          paymentArray={paymentArray}
          paymentObj={paymentObj}
          setPaymentObj={setPaymentObj}
          paymentValue={paymentValue}
          setPaymentValue={setPaymentValue}
          coupon={coupon}
          setCoupon={setCoupon}
        />
      )}
      {/* 流程3時 */}
      {flowchart === 3 && (
        <SimpleMealCouponCheck
          flowchart={flowchart}
          setFlowchart={setFlowchart}
          choice={choice}
          choiceObj={choiceObj}
          choiceArray={choiceArray}
          paymentObj={paymentObj}
          coupon={coupon}
        />
      )}
      <form id="cart_simplemealcoupon">
        <input type="text" name="combination_sid" value={choice} hidden></input>
        <input
          type="text"
          name="combination_name"
          value={choiceObj.combination}
          hidden
        ></input>
        <input
          type="text"
          name="description"
          value={choiceObj.discription}
          hidden
        ></input>
        <input
          type="text"
          name="quantity"
          value={choiceObj.quantity}
          hidden
        ></input>
        <input
          type="text"
          name="total_coupon_num"
          value={choiceObj.couponNum}
          hidden
        ></input>
        <input
          type="text"
          name="total_price"
          value={choiceObj.price - coupon.cost}
          hidden
        ></input>
        <input
          type="text"
          name="couponString"
          value={coupon.string}
          hidden
        ></input>
        <input
          type="text"
          name="payment_method"
          value={paymentObj.proj}
          hidden
        ></input>
      </form>
    </>
  )
}

export default SimpleMealCoupon
