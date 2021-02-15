import React from 'react'

function Test() {
  return (
    <>
      <div className="row">
        <h1 className="poe-red">測試用的</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-6">
          <h3>直接在react寫style</h3>
          <div
            className="w-100 my-5"
            style={{
              background:
                'url(/img/cart/bg/lemonUFO-Go.PNG) center center no-repeat',
              backgroundSize: 'contain',
              height: '200px',
            }}
          ></div>

          <h3>掛CSS Class(CSS對應public資料夾路徑?)?</h3>
          <div className="poe-test my-5"></div>
          <h3>圖片(絕對路徑)</h3>

          <img
            className="w-100 my-5"
            src="/img/cart/bg/lemonUFO-Go.PNG"
            alt=""
          />
        </div>
      </div>

      {/* <div className="poe-cart-bg01"></div>
      <div className="row justify-content-center my-5 poe-red">
        <div className="col-6 poe-red">
          <h1>這裡輸入</h1>
          <input type="text" />
          <img className="w-100" src="/img/cart/bg/lemonUFO-Go.PNG" alt="" />
          <div
            className="w-100"
            style={{
              background: '/img/cart/bg/lemonUFO-Go.PNG',
              height: '300px',
            }}
          ></div>
        </div>
      </div>
      <div className="row justify-content-center my-5">
        <div className="col-6">
          <div></div>
        </div>
      </div> */}
    </>
  )
}

export default Test
