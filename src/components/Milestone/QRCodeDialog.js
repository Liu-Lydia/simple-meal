import React, { props, useState, useEffect } from 'react'
import QRCode from 'qrcode.react'
import '../../styles/public.css'
import '../../styles/fff.css'

//<QRCodeDialog qrcodeStyle={qrcodeStyle} setqrcodeStyle={setqrcodeStyle} qrcodeValue={qrcodeValue}/>
function QRCodeDialog(props) {

  return (
      <div className="fff-exchange" style={props.qrcodeStyle}>
        <div className="fff-exchange-content-box">
          <div className="row justify-content-end fff-no-mr-and-pad">
            {/* 圖片放置位置 先占高 mobo關閉 */}

            {/* 關閉頁面的Ｘ */}
            <div className="" style={{ marginBottom: '10px' }}>
              <h6 className="fff-no-mr-and-pad" style={{ color: '#627E2A' }}>
                <i
                  className="fas fa-times aboutCloseBtn"
                  onClick={() => {
                    props.setqrcodeStyle({ display: 'none' })
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
                 <QRCode value={`${props.qrcodeValue}`}/>
                </div><div
                  className="d-flex justify-content-center"
                  style={{ marginTop: '25px' }}
                >
                  <button
                    type="button"
                    className="btn-green txt-btn aboutCloseBtn"
                    onClick={() => {
                      
                    props.setqrcodeStyle({ display: 'none' })
                    }}
                    data-dismiss="modal"
                  >
                    關閉
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

  )
}

export default QRCodeDialog
