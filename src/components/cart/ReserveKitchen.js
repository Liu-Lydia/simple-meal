import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

import ReserveKitchenPayment from './ReserveKitchenPayment'
import ReserveKitchenCheck from './ReserveKitchenCheck'

function ReserveKitchen(props) {
  // {流程, 流程轉換設定, 方案id, 方案物件, 預設方案內容}
  const { flowchart, setFlowchart } = props

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

  const [reservationInfo, setReservationInfo] = useState({
    reservation_name: '',
    reservation_tel: '',
    reservation_email: '',
  })

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
          paymentArray={paymentArray}
          paymentObj={paymentObj}
          setPaymentObj={setPaymentObj}
          paymentValue={paymentValue}
          setPaymentValue={setPaymentValue}
          coupon={coupon}
          setCoupon={setCoupon}
          reservationInfo={reservationInfo}
          setReservationInfo={setReservationInfo}
        />
      )}
      {/* 流程3時 */}
      {flowchart === 3 && (
        <ReserveKitchenCheck
          flowchart={flowchart}
          setFlowchart={setFlowchart}
          paymentObj={paymentObj}
          coupon={coupon}
          reservationInfo={reservationInfo}
        />
      )}
      <form id="surprisekitchen_order">
        <input
          type="text"
          name="reservation_name"
          value={reservationInfo.reservation_name}
          hidden
        />
        <input
          type="text"
          name="reservation_tel"
          value={reservationInfo.reservation_tel}
          hidden
        />
        <input
          type="text"
          name="reservation_email"
          value={reservationInfo.reservation_email}
          hidden
        />
        <input
          type="text"
          name="payment_method"
          value={paymentObj.proj}
          hidden
        />
        <input
          type="text"
          name="couponString"
          value={coupon.string}
          hidden
        ></input>
      </form>
    </>
  )
}

export default ReserveKitchen
