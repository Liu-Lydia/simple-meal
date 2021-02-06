import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
// import DropdownItem from '../components/DropdownItem'
import { Collapse } from 'react-collapse'
import Calendar from '../../pages/Calendar'

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
      {/* 驚喜廚房title, 3項內容 ↓↓↓ */}
      <h3 className="lll-title-style">驚喜廚房</h3>
      <div className="lll-trans-block d-flex p-0 ">
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

        <div class="col p-0 d-flex">
          {/* 左半部 ↓↓↓ */}
          <div class="mr-auto">
            <p className="m-0 txt-sub1 lll-black">請選擇預約日期</p>

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
              <p className="m-0 txt-sub1 lll-black lll-pb30">請選擇場次</p>
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
                  <Link to="" className="lll-select-btn-tryover lll-txt-btndel">
                    18:00
                  </Link>
                </div>
              </div>
            </div>
            {/* 請選擇場次 ↑↑↑ */}
          </div>
          {/* 左半部 ↑↑↑ */}

          {/* 右半部 ↓↓↓ */}
          <div className="ml-auto lll-ml-position">
            <p className="m-0 txt-sub1 lll-black lll-pb30">請選擇人數</p>
            {/* 選擇成人數量 ↓↓↓ */}
            <div className="d-flex">
              <p className="m-0 txt-sub1 lll-black lll-pb20">成人</p>

              <div className="ml-auto">
                <span className="txt-sub1 lll-grey">500/每人</span>
                <Link to="" className="mx-3 lll-grey">
                  <i className="fas fa-minus-circle"></i>
                </Link>
                <span className="txt-sub1 lll-black">0</span>
                <Link to="" class="mx-3 lll-green">
                  <i className="fas fa-plus-circle"></i>
                </Link>
              </div>
            </div>
            {/* 選擇兒童數量 ↓↓↓ */}
            <div className="d-flex">
              <p className="m-0 mr-3 txt-sub1 lll-black lll-pb30">兒童</p>
              <span className="txt-sub1 lll-grey">(4-11歲)</span>

              <div className="ml-auto">
                <span className="txt-sub1 lll-grey">100/每人</span>
                <Link to="" className="mx-3 lll-grey">
                  <i className="fas fa-minus-circle"></i>
                </Link>
                <span className="txt-sub1 lll-black">0</span>
                <Link to="" className="mx-3 lll-green">
                  <i className="fas fa-plus-circle"></i>
                </Link>
              </div>
            </div>
            {/* 選擇餐點數量 ↓↓↓ */}
            <div className="d-flex">
              <p className="m-0 txt-sub1 lll-black lll-pb30">請選擇餐點數量</p>

              <div className="ml-auto">
                <Link to="" className="mx-3 lll-grey">
                  <i className="fas fa-minus-circle"></i>
                </Link>
                <span className="txt-sub1 lll-black">0</span>
                <Link to="" className="mx-3 lll-green">
                  <i className="fas fa-plus-circle"></i>
                </Link>
              </div>
            </div>
            {/* 選填備註欄 ↓↓↓ */}
            <div className="form-group lll-pb30">
              <label
                for="FormControlTextarea"
                className="m-0 txt-sub1 lll-black lll-pb30"
              >
                備註(葷、素、不吃牛等特殊要求)
              </label>
              <textarea
                className="form-control lll-msg"
                id="FormControlTextarea"
                rows="3"
              ></textarea>
            </div>
            {/* 選填備註欄 ↑↑↑ */}

            {/* 顯示價格 ↓↓↓ */}
            <div className="d-flex justify-content-end text-center lll-price-line">
              <p className="m-0 txt-sub2 lll-grey lll-center">依人數計價</p>
              <span className="px-3 txt-sub2 lll-black lll-center">
                預約金額
              </span>
              <h4 className="lll-red lll-pb30">TWD 500</h4>
            </div>
            {/* 顯示價格 ↑↑↑ */}

            <div className="d-flex justify-content-between mt-1 lll-pt20">
              <Link to="" className="btn-green txt-btn">
                加入購物車
              </Link>
              <Link to="" className="btn-green txt-btn">
                立即預約
              </Link>
            </div>
          </div>
          {/* 右半部 ↑↑↑ */}
        </div>
      </Collapse>
    </>
  )
}

export default SurpriseContent
