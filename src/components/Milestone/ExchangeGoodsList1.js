import React, { useState, useEffect } from 'react'
import '../../styles/public.css'
import '../../styles/fff.css'
//對話框
import ExchangeDialog from './ExchangeDialog'

function ExchangeGoodsList1(props) {
  // getPoint={getPoint} totalPoint={totalPoint}
  const { getPoint, totalPoint } = props

  //兌換項目清單
  const [goodList, setGoodList] = useState([])

  //彈跳視窗是不是要顯示
  const [dialogStyle, setDialogStyle] = useState({ visibility: 'hidden' })

  //彈跳視窗要顯示的內容（被點擊的那筆資料）
  const [detailContext, setDetailContext] = useState({})

  //選擇的個數
  const [count, setCount] = useState(0)

  //取得兌換項目清單
  const getGoodList = async () => {
    //good_type=1 合作廠商優惠 2現金折價卷
    const url = 'http://localhost:4000/reward/getGooDList?good_type=1'
    await fetch(url, {
      method: 'get',
      credentials: 'include',
    })
      //then 是會接前方拋出的結果
      .then((r) => r.json())
      .then((obj) => {
        setGoodList(obj)
      })
  }

  //DidMount
  useEffect(() => {
    //執行後端撈資料
    getGoodList()
  }, [])

  return (
    <>
      {/* <!-- 整個成就清單區 --> */}
      <div className="row fff-no-mr-and-pad">
        {/* <!--保留空格 --> */}
        <div className="col fff-no-mr-and-pad"></div>
        {/* <!-- 左翻按鍵 --> */}
        <div className="fff-ms-web col-1 col-xl-1 d-flex align-items-center fff-no-mr-and-pad">
          <i className="fas fa-chevron-circle-left fff-stone-item-forword"></i>
        </div>
        {/* <!-- 獎勵display4個 --> */}
        <div
          className="col-10 col-sm-8 col-xl-10 fff-no-mr-and-pad"
          style={{ height: '210px' }}
        >
          {/* <!-- 獎勵項目 --> */}
          <div className="row fff-no-mr-and-pad d-flex align-items-center justify-content-space-between ">
            {goodList.map((value, index) => (
              <div
                className="col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center"
                key={index}
                onClick={() => {
                  //開啟視窗
                  setDialogStyle({ visibility: 'visible' })
                  //將點擊的內容打包 送入視窗中
                  setDetailContext(value)
                }}
              >
                <div className="exchange">
                  <img
                    className="fff-reward-pic"
                    src={
                      'http://localhost:3015/img/rewarditems/' + value.good_pic
                    }
                    alt=""
                  />
                  <span className="d-flex justify-content-center">
                    {value.good_name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <!-- 右翻按鍵 --> */}
        <div className=" fff-ms-web col-1 col-xl-1 d-flex align-items-center flex-row-reverse fff-no-mr-and-pad">
          <i className="fas fa-chevron-circle-right fff-stone-item-forword"></i>
        </div>
        {/* <!--保留空格 --> */}
        <div className="col fff-no-mr-and-pad"></div>
      </div>
      {/* 彈跳視窗 傳入值：dialogStyle要不要顯示  setDialogStyle對話框中的關閉 detailContext顯示的內容*/}
      <ExchangeDialog
        dialogStyle={dialogStyle}
        setDialogStyle={setDialogStyle}
        detailContext={detailContext}
        setCount={setCount}
        count={count}
        getPoint={getPoint}
        totalPoint={totalPoint}
      />
    </>
  )
}

export default ExchangeGoodsList1
