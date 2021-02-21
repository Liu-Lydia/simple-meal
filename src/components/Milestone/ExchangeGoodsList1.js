import React, { useState, useEffect } from 'react'
import '../../styles/public.css'
import '../../styles/fff.css'

function ExchangeGoodsList1() {
  const [exchange, setExchange] = useState({ display: 'none' })

  const [goodList, setGoodList] = useState([])
  const getGoodList = () => {
    const url = 'http://localhost:4000/reward/getGooDList?good_type=1'
    fetch(url, {
      method: 'get',
    })
      //then 是會接前方拋出的結果
      .then((r) => r.json())
      .then((obj) => {
        setGoodList(obj)
      })
  }

  useEffect(() => {
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
                  setExchange({ display: 'flex' })
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
          <div className="fff-exchange" style={exchange}>
            <div className="fff-exchange-content-box">
              <div className="row">
                {/* 圖片放置位置 先占高 mobo關閉 */}

                {/* 關閉頁面的Ｘ */}
                <div className=" justify-content-end col-12 "style={{marginBottom:"25px"}}>
                  <h6 className="fff-no-mr-and-pad">
                    <i
                      className="fas fa-times aboutCloseBtn"
                      onClick={() => {
                        setExchange({ display: 'none' })
                      }}
                    ></i>
                  </h6>
                </div>

                <div className="col fff-exchange-content">
                  <div>
                    <span>你點選了</span>
                    <span>購物金100元</span>
                  </div>
                  <div>
                    <span>選擇數量</span>
                    <span>購物金100元</span>
                  </div>
                  <div>
                    <span>花費點數</span>
                    <span>50點</span>
                  </div>
                  <div>
                    <span>剩餘點數</span>
                    <span>1250點</span>
                  </div>
                  <div>
                    <span className="txt-btn">
                      兌換說明：
                      以五十點成就點數兌換站內購物金100元，可於購買餐卷的結帳畫面使用。
                      優惠卷兌換後使用期限為3個月
                    </span>
                  </div>

                  <div>
                    <span className="txt-btn">已兌換便無法退還點數喔！</span>
                  </div>

                  <div className="d-flex justify-content-center" style={{marginTop:"25px"}}>
                    <button
                      type="button"
                      className="btn-green txt-btn aboutCloseBtn"
                      onClick={() => {
                        setExchange({ display: 'none' })
                      }}
                      data-dismiss="modal"
                    >
                      確定兌換
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- 右翻按鍵 --> */}
        <div className=" fff-ms-web col-1 col-xl-1 d-flex align-items-center flex-row-reverse fff-no-mr-and-pad">
          <i className="fas fa-chevron-circle-right fff-stone-item-forword"></i>
        </div>
        {/* <!--保留空格 --> */}
        <div className="col fff-no-mr-and-pad"></div>
      </div>
    </>
  )
}

export default ExchangeGoodsList1
