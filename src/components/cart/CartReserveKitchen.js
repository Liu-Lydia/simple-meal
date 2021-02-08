import React, { useEffect, useState } from 'react'

function CartReserveKitchen() {
  return (
    <>
      <h5>預約明細</h5>
      <div className="w-100 poe-bbgreen poe-mb20">
        <div className="d-flex poe-mb30">
          <div className="text-right poe-w100px poe-mr30">預約日期</div>
          <div className="poe-green">2021-06-18</div>
        </div>
        <div className="d-flex poe-mb30">
          <div className="text-right poe-w100px poe-mr30">預約時段</div>
          <div className="poe-green">15:00</div>
        </div>
        <div className="d-flex poe-mb30">
          <div className="text-right poe-w100px poe-mr30">成人</div>
          <div className="poe-green">
            5 人 / NT$ 2,500
            <span className="d-none d-sm-inline txt-cap poe-ml30 poe-red">
              成人500/人
            </span>
          </div>
        </div>
        <div className="d-flex poe-mb30">
          <div className="text-right poe-w100px poe-mr30">兒童</div>
          <div className="poe-green">
            3 人 / NT$ 300
            <span className="d-none d-sm-inline txt-cap poe-ml30 poe-red">
              兒童100/人(4-11歲)
            </span>
          </div>
        </div>
        <div className="d-flex poe-mb30">
          <div className="text-right poe-w100px poe-mr30">餐點數量</div>
          <div className="poe-green">5</div>
        </div>
        <div className="d-flex poe-mb30">
          <div className="text-right poe-w100px poe-mr30">備註</div>
          <div className="poe-green">不吃牛肉</div>
        </div>
      </div>
      <div className="text-right poe-mb20">
        <span>共計 </span>
        <span className="poe-red">8</span>
        <span>
          {' '}
          人, <br className="d-inline d-sm-none" />
          金額小計NT${' '}
        </span>
        <span className="poe-red">2,800</span>
        <span> 元</span>
      </div>
      <div className="row d-flex txt-cap poe-red">
        <div className="col-12 col-md-6 poe-mb15">
          <i className="fas fa-circle"></i>　預約費用以人頭計算
        </div>
        <div className="col-12 col-md-6 poe-mb15">
          <i className="fas fa-circle"></i>　成人500/人、兒童100/人(4-11歲)
        </div>
        <div className="col-12 col-md-6 poe-mb15">
          <i className="fas fa-circle"></i>　每個時段使用時間為3小時
        </div>
        <div className="col-12 col-md-6 poe-mb15">
          <i className="fas fa-circle"></i>
          　備註用餐特殊需求會以信件方式給予聯繫
        </div>
        {/* <span></span>
        <span>
          <i className="fas fa-circle"></i>　成人500/人、兒童100/人(4-11歲)
        </span>
        <span>
          <i className="fas fa-circle"></i>　每個時段使用時間為3小時
        </span>
        <span>
          <i className="fas fa-circle"></i>
          　備註用餐特殊需求會以信件方式給予聯繫
        </span> */}
      </div>
    </>
  )
}

export default CartReserveKitchen
