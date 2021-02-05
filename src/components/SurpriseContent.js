import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
// import DropdownItem from '../components/DropdownItem'
import { Collapse } from 'react-collapse'
import Calendar from '../pages/Calendar'

function SurpriseContent() {
  //Collapse　↓↓↓
  const buttonCollapseId = {
    button: 'accessible',
  }

  const [isButtonCollapseOpen, setIsButtonCollapseOpen] = useState(false)

  const onClick = useCallback(
    () => setIsButtonCollapseOpen(!isButtonCollapseOpen),
    [isButtonCollapseOpen]
  )
  //Collapse ↑↑↑

  return (
    <>
      <div className="container lll-appoint col-sm-center">
        <div className="row justify-content-center">
          <div className="col-8 lll-appoint-w100">
            {/* 驚喜廚房title, 3項內容 ↓↓↓ */}
            <h3 className="lll-title-style">驚喜廚房</h3>
            <div className="d-flex p-0 lll-trans-block">
              <p className="txt-sub1 lll-grey lll-pr30">6日前可免費取消</p>
              <p className="txt-sub1 lll-grey lll-pr30">立即發送電子憑證</p>
              <p className="txt-sub1 lll-grey">備註即有專人核對確認</p>
            </div>
            {/* 驚喜廚房title, 3項內容 ↑↑↑ */}

            {/* 展開預約Button ↓↓↓ */}
            <div className="col p-0 lll-textalign-right">
              <button
                className="lll-btn-hidden txt-sub1 justify-content-end"
                aria-controls={buttonCollapseId.button}
                aria-expanded={isButtonCollapseOpen}
                onClick={onClick}
                type="button"
              >
                展開預約
              </button>
            </div>
            <div className="col lll-hidden-line"></div>
            {/* 展開預約Button ↑↑↑ */}

            <Collapse isOpened={isButtonCollapseOpen}>
              <div id={buttonCollapseId.button} />
              {/* 選擇日期、選項 / 全部重選 ↓↓↓ */}
              <div className="col p-0 d-flex">
                <div className="mr-auto txt-sub1 lll-selected-position lll-black">
                  選擇日期、選項
                </div>
                <div className="ml-auto txt-sub1 lll-selected-position lll-grey">
                  <i className="fas fa-redo-alt lll-pr30"></i>全部重選
                </div>
              </div>
              {/* 選擇日期、選項 / 全部重選 ↑↑↑ */}

              <div class="col p-0 d-dlex">
                {/* 左半部 ↓↓↓ */}
                <div class="mr-auto">
                  <p className="txt-sub1 lll-black">請選擇預約日期</p>

                  <Calendar />
                  {/* 標示名額顏色 ↓↓↓ */}
                  <div className="lll-option-position">
                    <ul className="m-0 list-unstyled txt-sub1 lll-black">
                      <li className="lll-li-grey">尚未開放</li>
                      <li className="lll-li-green">尚有名額</li>
                      <li className="lll-li-red">已額滿</li>
                    </ul>
                  </div>
                  {/* 標示名額顏色 ↑↑↑ */}

                  {/* 請選擇場次 ↓↓↓ */}
                  <div className="lll-times-position">
                    <p className="txt-sub1 lll-black">請選擇場次</p>
                    <div className="d-flex">
                      <div className="lll-pr30">
                        <Link to="" className="lll-select-btn-white txt-btn">
                          10:00
                        </Link>
                      </div>
                      <div className="lll-pr30">
                        <Link to="" className="lll-select-btn-white txt-btn">
                          14:00
                        </Link>
                      </div>
                      <div>
                        <Link
                          to=""
                          className="lll-select-btn-tryover lll-txt-btndel"
                        >
                          18:00
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* 請選擇場次 ↑↑↑ */}
                </div>
                {/* 左半部 ↑↑↑ */}
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </>
  )
}

export default SurpriseContent
