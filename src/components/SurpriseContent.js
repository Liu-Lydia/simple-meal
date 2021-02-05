import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SurpriseContent() {
  return (
    <>
      <div className="container lll-appoint col-sm-center">
        <div className="row justify-content-center">
          <div className="col-8 lll-appoint-w100">
            {/* 驚喜廚房title, 3項內容 */}
            <h3 className="lll-title-style">驚喜廚房</h3>
            <div className="d-flex p-0 lll-trans-block">
              <p className="txt-sub1 lll-grey lll-pr30">6日前可免費取消</p>
              <p className="txt-sub1 lll-grey lll-pr30">立即發送電子憑證</p>
              <p className="txt-sub1 lll-grey">備註即有專人核對確認</p>
            </div>
            {/* 驚喜廚房title, 3項內容 */}
          </div>
        </div>
      </div>
    </>
  )
}

export default SurpriseContent
