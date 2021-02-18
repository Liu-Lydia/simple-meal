import React, { useEffect, useState } from 'react'
import '../../styles/public.css'
import '../../styles/fff.css'

function ExchangeOption(props) {
  const [inUseLineBarStyle, setInuseLineBarStyle] = useState(['col-3', 'col-3 poe-cart-progress-active', 'col-3']);
  const [inUseTabStyle, setInUseTabStyle] = useState(["fff-txt-rw-unselect col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center", "fff-txt-rw-select-active col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center", "fff-txt-rw-unselect col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center"]);


  //二維陣列
  const lineBarClassArray = [['', 'col-3 poe-cart-progress-active', 'col'],
  ['col-3', 'col-3 poe-cart-progress-active', 'col-3'],
  ['col', 'col-3 poe-cart-progress-active', '']];

  const tabClassArray = [
    ["fff-txt-rw-select-active col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center", "fff-txt-rw-unselect col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center", "fff-txt-rw-unselect col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center"],
    ["fff-txt-rw-unselect col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center", "fff-txt-rw-select-active col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center", "fff-txt-rw-unselect col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center"],
    ["fff-txt-rw-unselect col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center", "fff-txt-rw-unselect col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center", "fff-txt-rw-select-active col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center"]
  ]

  useEffect(() => {
    setInuseLineBarStyle(lineBarClassArray[props.optionTab]);
    setInUseTabStyle(tabClassArray[props.optionTab]);
  }, [props.optionTab])
  return (
    <>
      <div className="row justify-content-center text-center">
        {/* 分類文字*/}
        <div className="col-10 col-sm-11 col-lg-10 col-xl-10 d-flex justify-content-center text-center fff-txt-ms-select">


          <a className={inUseTabStyle[0]} onClick={() => { props.setOptionTab(0) }}>
            合作<p className="fff-ms-web">廠商</p>優惠
          </a>
          <a className={inUseTabStyle[1]} onClick={() => { props.setOptionTab(1) }}>
            &nbsp;購物金<p className="fff-ms-web">回饋</p>&nbsp;
          </a>
          <a className={inUseTabStyle[2]} onClick={() => {props.setOptionTab(2)}}>
            兌換紀錄
          </a>
        </div>

        {/* 那條Bar */}
        <div className="col-10 col-sm-11 col-lg-10 col-xl-10 d-flex justify-content-center text-center align-items-center fff-rw-select-line">
          <div className={inUseLineBarStyle[0]} style={{ transition: '1.5s' }}></div>
          <div className={inUseLineBarStyle[1]} style={{ transition: '1.5s' }}></div>
          <div className={inUseLineBarStyle[2]} style={{ transition: '1.5s' }}></div>
        </div>
        <p className="fff-exchange-record-warning">僅顯示一週內兌換資料，詳細兌換資料請拜訪<a href="#">會員中心</a>查詢</p>
      </div>


    </>
  )
}
export default ExchangeOption
