import React, { useEffect, useState, useCallback } from 'react'
import Lemon from './Lemon'
import SurpriseRuleMap from './SurpriseRuleMap'
import SurpriseRuleHowToGo from './SurpriseRuleHowToGo'

function SurpriseRule(props) {
  //傳送切換地理位置和如何到達, 依靠父傳　↓↓↓
  const { optionTab, setOptionTab } = props

  //接收評論資料庫資料　↓↓↓
  const [commentObj, setCommentObg] = useState([])

  //讀取資料　↓↓↓
  const handleGetComment = () => {
    fetch('http://localhost:4000/reservationComment/getReservationComment', {
      method: 'get',
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((obj) => {
        console.log(obj)
        setCommentObg(obj)
      })
  }

  useEffect(() => {
    handleGetComment()
  }, [])
  //讀取資料 ↑↑↑

  //滾動到一定位置定住menu　↓↓↓
  useEffect(() => {
    const menu = document.getElementById('menuScroll')
    const sticky = 2948

    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        menu.classList.add('lll-sticky')
      } else {
        menu.classList.remove('lll-sticky')
      }
    })
    return () => {
      window.removeEventListener('scroll', scrollCallBack)
    }
  }, [])
  //滾動到一定位置定住menu ↑↑↑

  //這寫法頗愚蠢, 捲至區塊　↓↓↓
  const scrollToAnchorRule = (rule) => {
    if (rule) {
      let anchorElement = document.getElementById('rule')
      if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }
  const scrollToAnchorMap = (map) => {
    if (map) {
      let anchorElement2 = document.getElementById('map')
      if (anchorElement2) {
        anchorElement2.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }
  const scrollToAnchorPolicy = (policy) => {
    if (policy) {
      let anchorElement2 = document.getElementById('policy')
      if (anchorElement2) {
        anchorElement2.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }
  const scrollToAnchorComment = (comment) => {
    if (comment) {
      let anchorElement2 = document.getElementById('comment')
      if (anchorElement2) {
        anchorElement2.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }
  //這寫法頗愚蠢, 捲至區塊 ↑↑↑

  //地理位置跟如何到達切換　↓↓↓
  const [inUseLineBarStyle, setInuseLineBarStyle] = useState([
    'lll-barwidth fff-no-mr-and-pad',
    'lll-barwidth fff-no-mr-and-pad lll-rw-select-active',
  ])
  const [inUseTabStyle, setInUseTabStyle] = useState([
    'txt-btn lll-grey d-flex justify-content-center',
    'txt-btn lll-green d-flex justify-content-center',
  ])

  //二維陣列 lineBar [tab1[class,class,class],tab2[class,class,class],tab3[class,class,class]]
  const lineBarClassArray = [
    ['', 'lll-textposition lll-barwidth lll-rw-select-active', ''],
    ['', 'lll-barwidth lll-rw-select-active', ''],
  ]

  //tab classname的二維陣列
  const tabClassArray = [
    [
      'lll-txt-rw-select-active  d-flex justify-content-center',
      'd-flex justify-content-center',
    ],
    [
      'd-flex justify-content-center',
      'lll-txt-rw-select-active d-flex justify-content-center',
    ],
  ]

  //當 父層送來的optionTab改變時(optionTab 的修改也是在這個js中 為了去調整父層的顯示)
  useEffect(() => {
    //設定要套用的classname
    setInuseLineBarStyle(lineBarClassArray[props.optionTab])
    setInUseTabStyle(tabClassArray[props.optionTab])
  }, [props.optionTab])
  //地理位置跟如何到達切換 ↑↑↑

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
      <Lemon />
      {/* 預約規則說明 ↓↓↓ */}
      <div className="col p-0 w-100">
        <div className="lll-black float-right lll-onmenu" id="menu">
          <div id="menuScroll">
            <p
              className="m-0 lll-h5"
              onClick={() => scrollToAnchorRule('rule')}
            >
              預約規則說明
            </p>
            <br />
            <p className="m-0 lll-h5" onClick={() => scrollToAnchorMap('map')}>
              地理位置
            </p>
            <br />
            <p
              className="m-0 lll-h5"
              onClick={() => scrollToAnchorPolicy('policy')}
            >
              取消政策
            </p>
            <br />
            <p
              className="m-0 lll-h5"
              onClick={() => scrollToAnchorComment('comment')}
            >
              顧客評價
            </p>
            <br />
          </div>
        </div>
        <h3 className="lll-title-style lll-mt110 lll-pb45" id="rule">
          預約規則說明
        </h3>
        <div class="lll-rw-title-line"></div>
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
        <h3 class="lll-title-style lll-mt110 lll-pb1" id="map">
          地理位置
        </h3>

        {/* 分類文字*/}
        <div className="d-flex justify-content-end text-center lll-cursor">
          <a
            className={inUseTabStyle[0]}
            onClick={() => {
              props.setOptionTab(0)
            }}
          >
            {/* 吃屬性值 inuseTabStyle */}
            {/* 利用設定父層屬性去修改父層要顯示的components */}
            <p className="lll-pr30">如何到達</p>
          </a>
          <a
            className={inUseTabStyle[1]}
            onClick={() => {
              props.setOptionTab(1)
            }}
          >
            <p className="">地理位置</p>
            &nbsp;
          </a>
        </div>

        {/* 那條Bar */}
        <div className="lll-rw-select-line">
          <div className="d-flex justify-content-end text-center align-items-center">
            <div
              className={inUseLineBarStyle[0]}
              style={{ transition: '1.5s' }}
            ></div>
            <div
              className={inUseLineBarStyle[1]}
              style={{ transition: '1.5s' }}
            ></div>
          </div>
        </div>

        {optionTab === 0 && <SurpriseRuleHowToGo />}
        {optionTab === 1 && <SurpriseRuleMap />}
      </div>
      {/* 地理位置 ↑↑↑ */}

      {/* 取消政策 ↓↓↓ */}
      <div className="col p-0">
        <h3 className="lll-title-style lll-mt110 lll-pb45" id="policy">
          取消政策
        </h3>
        <div class="lll-rw-title-line"></div>
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
      <div className="col p-0 lll-mb110">
        <h3 className="lll-title-style lll-mt110 lll-pb45" id="comment">
          顧客評論
        </h3>
        <div class="lll-rw-title-line"></div>
        <div className="lll-title-line">
          <div className="lll-section" id="scroll">
            {commentObj.map((v, i) => (
              <div className="col-6 p-0 lll-change-max100 lll-mb110">
                <div className="d-flex">
                  <span className="txt-sub1 lll-black ">{v.nickname}</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {/* <i className="fas fa-star lll-green lll-lineheigh"></i>
                  <i className="fas fa-star lll-green lll-lineheigh"></i>
                  <i className="fas fa-star lll-green lll-lineheigh"></i>
                  <i className="fas fa-star lll-green lll-lineheigh"></i>
                  <i className="fas fa-star lll-green lll-lineheigh"></i> */}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div>
                    <span className="txt-sub2 lll-grey lll-lineheigh">
                      使用日期
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="txt-sub2 lll-grey lll-lineheigh">
                      {v.used_date}
                    </span>
                    <br />
                  </div>
                </div>
                <br />
                <p className="m-0 txt-sub1 lll-black">{v.comment}</p>
                <br />
                <span className="txt-sub2 lll-grey">於</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="txt-sub2 lll-grey">{v.builded_date}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="txt-sub2 lll-grey">評價</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 顧客評論 ↑↑↑ */}
    </>
  )
}

export default SurpriseRule
