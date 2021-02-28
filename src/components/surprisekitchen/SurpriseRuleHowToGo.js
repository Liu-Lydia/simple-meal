import React from 'react'

function SurpriseRuleHowToGo() {
  return (
    <>
      {/* 如何到達 ↓↓↓ */}
      <div className="lll-mobile-block">
        <div className="col-6 p-0 lll-max100-center">
          <p className="txt-btn lll-grey">
            台北捷運 : 大安站下車，4號出口對面約徒步約8分鐘
            <br />
            自行開車（附近不好停車，建議搭乘大眾交通工具前往）
          </p>
        </div>
        <div className="col-6 p-0 text-right lll-mobile-lemon">
          <img
            className="lll-lemon-howtogo"
            src="http://localhost:3015/img/lemon/LemonSayHi.GIF"
            alt=""
          />
        </div>
      </div>
      {/* 如何到達 ↑↑↑ */}
    </>
  )
}

export default SurpriseRuleHowToGo
