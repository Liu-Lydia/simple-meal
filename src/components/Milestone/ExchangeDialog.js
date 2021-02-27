import React, { props, useState, useEffect } from 'react'
import '../../styles/public.css'
import '../../styles/fff.css'

//<ExchangeDialog
// dialogStyle={dialogStyle}
// setDialogStyle={setDialogStyle}
// detailContext={detailContext}
// setCount={setCount}
// count={count}
// getPoint={getPoint}
// totalPoint={totalPoint}
// />
function ExchangeDialog(props) {
  const {
    dialogStyle,
    setDialogStyle,
    detailContext,
    setCount,
    count,
    getPoint,
    totalPoint,
  } = props
  //選擇的個數
  //const [count, setCount] = useState(0) 交給父層 點擊兌換的商品時要先設定為0
  //select option 選項
  const [selectOption, setSelectOption] = useState([])

  //按下確認 要去傳送資料
  const [commit, setCommit] = useState(false)

  const [DBreturn, setDBReturn] = useState({})

  const [returnMsgDialog, setReturnMsgDialog] = useState({ display: 'none' })

  //打包資料送後台
  const setExchange = async () => {
    const fd = new FormData(document.querySelector('#dialog-form'))
    const url = 'http://localhost:4000/reward/setExchange'
    //sid 要從session來
    await fetch(url, {
      method: 'post',
      body: fd,
      credentials: 'include',
    })
      //then 是會接前方拋出的結果
      .then((r) => r.json())
      .then((obj) => {
        setDBReturn(obj)
        getPoint()
      })
  }

  const updateSelectOption = () => {
    const temparray = []
    for (let i = 0; i * detailContext.need_point <= totalPoint; i++) {
      temparray.push(i * detailContext.need_point)
    }
    setSelectOption(temparray)
  }

  useEffect(() => {
    updateSelectOption()
  }, [detailContext])

  //當選擇兌換時 更新
  useEffect(() => {}, [count])

  //當確認兌換時 更新
  useEffect(() => {
    if (commit) {
      setExchange()
      //彈出結果視窗
      setReturnMsgDialog({ visibility: 'visible' })

      setCommit(false) //復位 讓後面的兌換也能按
    }
  }, [commit])

  return (
    <>
      {/* 兌換視窗 */}
      <div className="fff-exchange" style={dialogStyle}>
        <div className="fff-exchange-content-box">
          <div className="row justify-content-end fff-no-mr-and-pad">
            {/* 圖片放置位置 先占高 mobo關閉 */}

            {/* 關閉頁面的Ｘ */}
            <div className="" style={{ marginBottom: '10px' }}>
              <h6 className="fff-no-mr-and-pad" style={{ color: '#627E2A' }}>
                <i
                  className="fas fa-times aboutCloseBtn"
                  onClick={() => {
                    setDialogStyle({ display: 'none' })
                  }}
                ></i>
              </h6>
            </div>
          </div>
          <div className="row fff-no-mr-and-pad">
            <form id="dialog-form">
              <div className="col fff-exchange-content txt-btn">
                <div
                  className="d-flex justify-content-between fff-txt-info
              "
                  style={{ lineHeight: '50px' }}
                >
                  <span style={{ color: '#707070' }}>你點選了</span>
                  <span style={{ color: '#627E2A' }}>
                    {detailContext.good_name}
                  </span>
                </div>
                <div
                  className="d-flex justify-content-between"
                  style={{
                    lineHeight: '25px',
                    marginBottom: '7px',
                    marginTop: '7px',
                  }}
                >
                  <span style={{ color: '#627E2A' }}>選擇數量</span>
                  <select
                    name="count"
                    onChange={(event) => {
                      setCount(event.target.value)
                    }}
                  >
                    {selectOption.map((value, index) => (
                      <option key={index}>{index}</option>
                    ))}
                  </select>
                </div>
                <div
                  className="d-flex justify-content-between"
                  style={{ lineHeight: '39px' }}
                >
                  <span>花費點數</span>
                  <span style={{ color: '#b9433b', fontSize: '21px' }}>
                    {count * detailContext.need_point}
                  </span>
                </div>
                <div
                  className="d-flex justify-content-between"
                  style={{ lineHeight: '39px' }}
                >
                  <span style={{ color: '#627E2A' }}>剩餘點數</span>
                  <span style={{ color: '#627E2A', fontSize: '21px' }}>
                    {totalPoint - count * detailContext.need_point}
                  </span>
                </div>
                <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                  <span className="txt-btn" style={{ color: '#A2A3A5' }}>
                    兌換說明：
                    {detailContext.good_subs}
                  </span>
                </div>

                <div className="d-flex justify-content-center">
                  <span className="txt-btn" style={{ color: '#b9433b' }}>
                    已兌換便無法退還點數喔！
                  </span>
                </div>
                <input
                  type="hidden"
                  name="good_ID"
                  value={detailContext.good_ID}
                ></input>
                <div
                  className="d-flex justify-content-center"
                  style={{ marginTop: '25px' }}
                >
                  <button
                    type="button"
                    className="btn-green txt-btn aboutCloseBtn"
                    onClick={() => {
                      setDialogStyle({ display: 'none' })
                      if (count > 0) {
                        setCommit(true)
                      }
                    }}
                    data-dismiss="modal"
                  >
                    確定兌換
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* 結果視窗 */}
      <div className="fff-exchange" style={returnMsgDialog}>
        <div className="fff-exchange-content-box">
          <div className="row justify-content-end fff-no-mr-and-pad">
            {/* 圖片放置位置 先占高 mobo關閉 */}

            {/* 關閉頁面的Ｘ */}
            <div className="" style={{ marginBottom: '10px' }}>
              <h6 className="fff-no-mr-and-pad" style={{ color: '#627E2A' }}>
                <i
                  className="fas fa-times aboutCloseBtn"
                  onClick={() => {
                    setReturnMsgDialog({ display: 'none' })
                  }}
                ></i>
              </h6>
            </div>
          </div>
          <div className="row fff-no-mr-and-pad">
            <form id="dialog-form">
              <div className="col fff-exchange-content txt-btn">
                <div
                  className="d-flex justify-content-between fff-txt-info"
                  style={{ lineHeight: '50px' }}
                >
                  {DBreturn.success ? (
                    <span className="txt-btn">成功圖樣放這裡</span>
                  ) : (
                    <span className="txt-btn">失敗訊息:{DBreturn.msg}</span>
                  )}
                </div>
                <div
                  className="d-flex justify-content-center"
                  style={{ marginTop: '25px' }}
                >
                  <button
                    type="button"
                    className="btn-green txt-btn aboutCloseBtn"
                    onClick={() => {
                      setReturnMsgDialog({ display: 'none' })
                    }}
                    data-dismiss="modal"
                  >
                    確定
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExchangeDialog
