import React, { props } from 'react'
import '../../styles/public.css'
import '../../styles/fff.css'

//<ExchangeDialog dialogStyle={dialogStyle} setDialogStyle={setDialogStyle} detailContext={detailContext}/>
function ExchangeDialog(props) {
  return (
    <div className="fff-exchange" style={props.dialogStyle}>
      <div className="fff-exchange-content-box">
        <div className="row">
          {/* 圖片放置位置 先占高 mobo關閉 */}

          {/* 關閉頁面的Ｘ */}
          <div
            className=" justify-content-end col-12 "
            style={{ marginBottom: '25px' }}
          >
            <h6 className="fff-no-mr-and-pad">
              <i
                className="fas fa-times aboutCloseBtn"
                onClick={() => {
                  props.setDialogStyle({ display: 'none' })
                }}
              ></i>
            </h6>
          </div>
          <form>
            <div className="col fff-exchange-content ">
              <div className="d-flex justify-content-between">
                <span classname="txt-h6">你點選了</span>
                <span style={{ color: '#627E2A' }}>
                  {props.detailContext.good_name}
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <span classname="txt-body" style={{ color: '#627E2A' }}>
                  選擇數量
                </span>
                <select></select>
              </div>
              <div className="d-flex justify-content-between">
                <span>花費點數</span>
                <span>50點</span>
              </div>
              <div className="d-flex justify-content-between">
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

              <div
                className="d-flex justify-content-center"
                style={{ marginTop: '25px' }}
              >
                <button
                  type="button"
                  className="btn-green txt-btn aboutCloseBtn"
                  onClick={() => {
                    props.setDialogStyle({ display: 'none' })
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
