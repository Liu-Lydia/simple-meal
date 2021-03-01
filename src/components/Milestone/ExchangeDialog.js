import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
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

  const [DBreturn, setDBReturn] = useState({ success: false, msg: 'init' })

  // sweet alert集點按鈕
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      popup: 'poe-alert',
      title: 'poe-green my-0',
      content: 'txt-btn',
      confirmButton: 'btn-green txt-btn mx-2 my-2',
      cancelButton: 'btn-red txt-btn mx-2 my-2',
      denyButton: 'btn-red txt-btn mx-2 my-2',
    },
    buttonsStyling: false,
  })

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
  useEffect(() => { }, [count])

  //當確認兌換時 更新
  useEffect(async () => {
    if (commit) {
      await setExchange()
    }
  }, [commit])

  useEffect(() => {
    if (commit) {
      //彈出結果視窗
      if (DBreturn.success) {
        swalWithBootstrapButtons.fire({
          icon: 'success',
          title: '<h6>兌換成功</h6>',
          padding: '75px',
          showConfirmButton: true,
          confirmButtonText: '知道了',
          // showDenyButton: true,
          // showCloseButton: true,
          backdrop: `rgba(0,0,0,.5)`,
        })
      } else {
        swalWithBootstrapButtons.fire({
          icon: 'error',
          title: '<h6>兌換失敗</h6>',
          text: `${DBreturn.msg}`,
          padding: '75px',
          showConfirmButton: true,
          confirmButtonText: '知道了',
          // showDenyButton: true,
          denyButtonText: '前往購物車',
          // showCloseButton: true,
          backdrop: `rgba(0,0,0,.5)`,
        })
      }

      setCommit(false) //復位 讓後面的兌換也能按
    }
  }, [DBreturn])

  return (

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
  )
}

export default ExchangeDialog
