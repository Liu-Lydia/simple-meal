import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
// import DropdownItem from '../components/DropdownItem'
// import { Collapse } from 'react-collapse'
// import Calendar from '../../pages/Calendar'
import GoogleMap from '../GoogleMap'

function SurpriseRule() {
  return (
    <>
      {/* 驚喜廚房規則說明 ↓↓↓ */}
      <div className="col lll-explain">
        <p className="col-10 mx-auto mb-0 txt-sub1 lll-grey lll-pt30 lll-pb30">
          無論是家庭還是情侶亦或是朋友都適合來我們的驚喜廚房，我們提供俱全的廚房器具，和品質優良的食材，只需要線上預約，來到現場若需要指導也有專人服務，快來為自己準備一頓驚奇的餐點吧
        </p>

        <ul className="col-10 mx-auto d-flex m-0 justify-content-between list-unstyled txt-sub1 lll-grey">
          <li className="lll-li-green">盲選料理</li>
          <li className="lll-li-green">QRcode入場</li>
          <li className="lll-li-green">線上預約</li>
          <li className="lll-li-green">會員積點</li>
        </ul>
      </div>
      {/* 驚喜廚房規則說明 ↑↑↑ */}

      {/* 預約規則說明 ↓↓↓ */}
      <div className="col p-0">
        <h3 className="lll-title-style lll-mt110 lll-pb45">預約規則說明</h3>
        <div className="lll-title-line">
          <p className="m-0 txt-sub1 lll-grey">
            僅提供線上預約
            <br />
            僅提供線上刷卡支付
            <br />
            預約費用以人頭計算
            <br />
            成人500/人、兒童100/人(4-11歲)
            <br />
            備註用餐特殊需求會以信件方式給予聯繫
            <br />
            驚喜廚房每個預約日僅提供3個時段、各時段僅有1組名額
            <br />
            每個時段使用時間為3小時
            <br />
            驚喜廚房開放週日至周六、若有特殊公休日會另行公告
          </p>
        </div>
      </div>
      {/* 預約規則說明 ↑↑↑ */}

      {/* 地理位置 ↓↓↓ */}
      <div class="col p-0 ">
        <h3 class="lll-title-style lll-mt110 lll-pb45">地理位置</h3>
        <div class="lll-title-line lll-mobile-block">
          <div class="col-8 p-0 lll-max100">
            {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.2718198865737!2d121.5398673153787!3d25.024847844811454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa29379b8db9%3A0x6c7f37e71cce4568!2z6LOH562W5pyD!5e0!3m2!1szh-TW!2stw!4v1611819063119!5m2!1szh-TW!2stw"
                  width="100%"
                  height="400px"
                  frameborder="0"
                  style="border: 0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                  class="bb"
                ></iframe> */}
            <GoogleMap />
          </div>
          <div class="col-4 p-0 lll-max100-center">
            <p class="m-0 text-center txt-sub1 lll-red lll-12px">
              Tel. 02-6631 6666 <br />
              台北市大安區復興南路一段390號2樓 <br />
              Open. 10:00 ~ 21:00 <br />
            </p>

            <div className="text-center txt-sub1 lll-red">
              <i className="far fa-envelope lll-pr30"></i>
              <i className="fab fa-instagram lll-pr30"></i>
              <i className="fab fa-facebook-square lll-pr30"></i>
              <i className="fab fa-line"></i>
            </div>
          </div>
        </div>
      </div>
      {/* 地理位置 ↑↑↑ */}

      {/* 取消政策 ↓↓↓ */}
      <div className="col p-0">
        <h3 className="lll-title-style lll-mt110 lll-pb45">取消政策</h3>
        <div className="lll-title-line">
          <p className="m-0 txt-sub1 lll-grey">
            所選日期 6 天（含）之前取消，收取手續費 0%
            <br />
            所選日期 2-5 天之間取消，收取手續費 10%
            <br />
            所選日期 0-1 天之間取消，收取手續費 100%
            <br />
            注意取消之退費金額約莫需要7-14天個工作天
          </p>
        </div>
      </div>
      {/* 取消政策 ↑↑↑ */}

      {/* 顧客評論 ↓↓↓ */}
      <div className="col p-0">
        <h3 className="lll-title-style lll-mt110 lll-pb45">顧客評論</h3>
        <div className="lll-title-line">
          <div className="lll-section" id="scroll">
            <div className="col-6 p-0 lll-change-max100">
              <div className="d-flex">
                <span className="txt-sub1 lll-black lll-lineheigh">Lydia</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fas fa-star lll-green lll-lineheigh"></i>
                <i className="fas fa-star lll-green lll-lineheigh"></i>
                <i className="fas fa-star lll-green lll-lineheigh"></i>
                <i className="fas fa-star lll-green lll-lineheigh"></i>
                <i className="fas fa-star lll-green lll-lineheigh"></i>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                  <span className="txt-sub2 lll-grey">使用日期</span>
                  <span className="txt-sub2 lll-grey">2021/02/18</span>
                  <br />
                </div>
              </div>
              <br />
              <p className="m-0 txt-sub1 lll-black">
                試放評語試放評語試放評語試放評語
                試放評語試放評語試放評語試放評語試
                放評語試放評語試放評語試放評語試放
                評語試放評語試放評語試放評語試放評 語試放評語試放評語試放評語
                試放評語試放評語試放評語試放評語
                試放評語試放評語試放評語試放評語試
                放評語試放評語試放評語試放評語試放
                評語試放評語試放評語試放評語試放評 語試放評語試放評語試放評語
                試放評語試放評語試放評語試放評語
                試放評語試放評語試放評語試放評語試
                放評語試放評語試放評語試放評語試放
                評語試放評語試放評語試放評語試放評 語試放評語試放評語試放評語
                試放評語試放評語試放評語試放評語
                試放評語試放評語試放評語試放評語試
                放評語試放評語試放評語試放評語試放
                評語試放評語試放評語試放評語試放評 語試放評語試放評語試放評語
                試放評語試放評語試放評語試放評語
                試放評語試放評語試放評語試放評語試
                放評語試放評語試放評語試放評語試放
                評語試放評語試放評語試放評語試放評 語試放評語試放評語試放評語
              </p>
              <br />
              <span className="txt-sub2 lll-grey">於</span>
              <span className="txt-sub2 lll-grey">2020/03/30</span>
              <span className="txt-sub2 lll-grey">評價</span>
            </div>
          </div>
        </div>
      </div>
      {/* 顧客評論 ↑↑↑ */}
    </>
  )
}

export default SurpriseRule
