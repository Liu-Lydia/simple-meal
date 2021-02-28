import React, { useEffect, useState } from 'react'
import '../../styles/public.css'
import '../../styles/fff.css'

function ExchangeOption(props) {
  const [inUseLineBarStyle, setInuseLineBarStyle] = useState([
    'col-4 fff-no-mr-and-pad',
    'col-4  fff-no-mr-and-pad fff-option-selected',
    'col-4 fff-no-mr-and-pad',
  ])
  const [inUseTabStyle, setInUseTabStyle] = useState([
    'fff-txt-unselected col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center',
    'fff-txt-selected col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center',
    'fff-txt-unselected col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center',
  ])

  //二維陣列 lineBar [tab1[class,class,class],tab2[class,class,class],tab3[class,class,class]]
  const lineBarClassArray = [
    ['', ' col-4 fff-option-selected', ' col'],
    [' col-4', ' col-4 fff-option-selected', ' col-4'],
    [' col', ' col-4 fff-option-selected', ''],
  ]

  //tab classname的二維陣列
  const tabClassArray = [
    [
      'fff-txt-selected col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center',
      'fff-txt-unselected col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center',
      'fff-txt-unselected col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center',
    ],
    [
      'fff-txt-unselected col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center',
      'fff-txt-selected col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center',
      'fff-txt-unselected col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center',
    ],
    [
      'fff-txt-unselected col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center',
      'fff-txt-unselected col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center',
      'fff-txt-selected col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center',
    ],
  ]

  //當 父層送來的optionTab改變時(optionTab 的修改也是在這個js中 為了去調整父層的顯示)
  useEffect(() => {
    //設定要套用的classname
    setInuseLineBarStyle(lineBarClassArray[props.optionTab])
    setInUseTabStyle(tabClassArray[props.optionTab])
  }, [props.optionTab])
  return (
    <>
      <div className="row justify-content-center text-center">
        {/* 分類文字*/}
        <div className="col-10 col-sm-11 col-lg-10 col-xl-10 d-flex justify-content-center text-center fff-txt-selected">
          <a
            className={inUseTabStyle[0]}
            onClick={() => {
              props.setOptionTab(0)
            }}
          >
            {/* 吃屬性值 inuseTabStyle */}
            {/* 利用設定父層屬性去修改父層要顯示的components */}
            合作<p className="fff-ms-web fff-no-mr-and-pad">廠商</p>優惠
          </a>
          <a
            className={inUseTabStyle[1]}
            onClick={() => {
              props.setOptionTab(1)
            }}
          >
            &nbsp;購物金<p className="fff-ms-web fff-no-mr-and-pad">回饋</p>
            &nbsp;
          </a>
          <a
            className={inUseTabStyle[2]}
            onClick={() => {
              props.setOptionTab(2)
            }}
          >
            兌換紀錄
          </a>
        </div>

        {/* 那條Bar */}
        <div className="col-10 col-sm-11 col-lg-10 col-xl-10 d-flex justify-content-center fff-select-line">
          <div className="fff-no-mr-and-pad col-xl-9 col-lg-12 d-flex justify-content-center text-center align-items-center ">
            <div
              className={inUseLineBarStyle[0]}
              style={{ transition: '1.5s' }}
            ></div>
            <div
              className={inUseLineBarStyle[1]}
              style={{ transition: '1.5s' }}
            ></div>
            <div
              className={inUseLineBarStyle[2]}
              style={{ transition: '1.5s' }}
            ></div>
          </div>
        </div>
        <p className="fff-exchange-record-warning">
          僅顯示一週內兌換資料，詳細兌換資料請拜訪<a href="#">會員中心</a>查詢
        </p>
      </div>
    </>
  )
}
export default ExchangeOption
