import React, { useEffect, useState, useCallback } from 'react'
import { Redirect, Route, withRouter, Link, Switch } from 'react-router-dom'
// import DropdownItem from '../components/DropdownItem'
import { Collapse } from 'react-collapse'
import Calendar from '../../pages/Calendar'

function SurpriseContent(props) {
  // 有沒有登入
  const { loginBool } = props

  // 接收預約日期值
  const [dateStr, setDateObj] = useState('')

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

  //接收資料庫資料　↓↓↓
  const [timesData, setTimesData] = useState([])

  //讀取資料　↓↓↓
  const handleGetData = () => {
    const url = 'http://localhost:4000/reservationTimes/getReservationTimes'
    fetch(url, {
      method: 'get',
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((obj) => {
        console.log(obj)
        setTimesData(obj)
      })
  }

  useEffect(() => {
    handleGetData()
  }, [])
  //讀取資料 ↑↑↑

  //點擊場次　↓↓↓
  const [isActive, setActive] = useState({ ...timesData })
  const handleToggleClass = (v) => {
    setActive(v)
  }
  //點擊場次 ↑↑↑

  //預約內容選擇
  const [appoint, setAppoint] = useState({
    reservation_date: '',
    reservation_time: '',
    num_adult: 0,
    num_child: 0,
    adult_price: 500,
    child_price: 200,
    num_meal: 0,
    remark: '',
    reservation_price: 0,
  })

  //清空選項***
  // const handleSetAppoint = () => {
  //   setAllPrice(0)

  // }

  //成人數量選擇
  const [num_adult, setNum_adult] = useState(0)
  const handleNum_adult = (bool) => {
    if (bool) {
      if (num_adult < 7) {
        setNum_adult(num_adult + 1) //範圍1~7
        handleSetPrice(num_adult + 1, num_child)
      }
    } else {
      if (num_adult !== 0) {
        setNum_adult(num_adult - 1) //>0
        handleSetPrice(num_adult - 1, num_child)
      }
    }
  }

  //兒童數量選擇
  const [num_child, setNum_child] = useState(0)
  const handleNum_child = (bool) => {
    if (bool) {
      if (num_child < 7) {
        setNum_child(num_child + 1) //範圍1~7
        handleSetPrice(num_adult, num_child + 1)
      }
    } else {
      if (num_child !== 0) {
        setNum_child(num_child - 1)
        handleSetPrice(num_adult, num_child - 1)
      } //>0
    }
  }

  const [textarea, setTextarea] = useState('')

  //金額顯示
  function handleSetPrice(num_adult, child_price) {
    const Price = num_adult * 500 + child_price * 100

    // const allPrice = AdultPrice + ChildPrice

    setAppoint({
      reservation_date: '',
      reservation_time: '',
      num_adult: 0,
      num_child: 0,
      adult_price: 500,
      child_price: 200,
      num_meal: 0,
      remark: '',
      reservation_price: Price,
    })
  }

  //餐點數量選擇
  const [num_meal, setNum_meal] = useState(0)
  const handleNum_meal = (bool) => {
    if (bool) {
      if (num_meal < 9) {
        setNum_meal(num_meal + 1) //範圍1~10
      }
    } else {
      if (num_meal !== 0) setNum_meal(num_meal - 1) //>0
    }
  }

  const handlePostOrder = async () => {
    const fd = new FormData(document.querySelector('#reservation_kitchen'))

    if (!loginBool) {
      console.log('滾去登入再說')
      return <Redirect to="/MemberCenter" />
    } else {
      await fetch('http://localhost:4000/surprisekitchenOrder/addreservation', {
        method: 'post',
        body: fd,
        credentials: 'include',
      })
        .then((r) => r.json())
        .then((obj) => {
          console.log(obj)
          alert(`您的訂單編號為 ${obj.order_sid}, 請前往購物車進行結帳。 `)
        })
    }
  }

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
            <Link className="lll-grey">
              <i className="fas fa-redo-alt lll-pr20"></i>全部重選
            </Link>
          </div>
        </div>
        {/* 選擇日期、選項 / 全部重選 ↑↑↑ */}

        <div class="col p-0 d-flex">
          {/* 左半部 ↓↓↓ */}
          <div class="mr-auto">
            <p className="m-0 txt-sub1 lll-black">請選擇預約日期</p>

            <Calendar setDateObj={setDateObj} />
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
                {timesData.map((v, i) => (
                  <div className="lll-pr30">
                    <div
                      key={i}
                      className="lll-select-btn-white txt-btn lll-cursor"
                      onClick={() => handleToggleClass(v)}
                      // onClick={(event) => {
                      //   console.log(v.reservation_time)
                      // }}
                      className={
                        isActive === v
                          ? 'lll-select-btn-white-active txt-btn lll-cursor'
                          : 'lll-select-btn-white txt-btn lll-cursor'
                      }
                    >
                      {v.reservation_time}
                    </div>
                  </div>
                ))}
                {/* <div className="lll-pr30">
                    <Link to="" className="lll-select-btn-white txt-btn">
                      {v.reservation_time}
                    </Link>
                  </div>
                  <div>
                    <Link
                      to=""
                      className="lll-select-btn-tryover lll-txt-btndel"
                    >
                      {v.reservation_time}
                    </Link>
                  </div> */}
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
                <a
                  className={`mx-3 ${num_adult === 0 && 'lll-grey'}`}
                  onClick={() => {
                    handleNum_adult(false)
                  }}
                >
                  <i className="fas fa-minus-circle lll-cursor"></i>
                </a>
                <span className="txt-sub1 lll-black">{num_adult}</span>
                <a
                  className={`ml-3 ${num_adult === 7 && 'lll-grey'}`}
                  onClick={() => {
                    handleNum_adult(true)
                  }}
                >
                  <i className="fas fa-plus-circle lll-cursor"></i>
                </a>
              </div>
            </div>
            {/* 選擇兒童數量 ↓↓↓ */}
            <div className="d-flex">
              <p className="m-0 mr-3 txt-sub1 lll-black lll-pb30">兒童</p>
              <span className="txt-sub1 lll-grey">(4-11歲)</span>

              <div className="ml-auto">
                <span className="txt-sub1 lll-grey">100/每人</span>
                <a
                  className={`mx-3 ${num_child === 0 && 'lll-grey'}`}
                  onClick={() => {
                    handleNum_child(false)
                  }}
                >
                  <i className="fas fa-minus-circle lll-cursor"></i>
                </a>
                <span className="txt-sub1 lll-black">{num_child}</span>
                <a
                  className={`ml-3 ${num_child === 7 && 'lll-grey'}`}
                  onClick={() => {
                    handleNum_child(true)
                  }}
                >
                  <i className="fas fa-plus-circle lll-cursor"></i>
                </a>
              </div>
            </div>
            {/* 選擇餐點數量 ↓↓↓ */}
            <div className="d-flex">
              <p className="m-0 txt-sub1 lll-black lll-pb30">請選擇餐點數量</p>

              <div className="ml-auto">
                <a
                  className={`mx-3 ${num_meal === 0 && 'lll-grey'}`}
                  onClick={() => {
                    handleNum_meal(false)
                  }}
                >
                  <i className="fas fa-minus-circle lll-cursor"></i>
                </a>
                <span className="txt-sub1 lll-black">{num_meal}</span>
                <a
                  className={`ml-3 ${num_meal === 9 && 'lll-grey'}`}
                  onClick={() => {
                    handleNum_meal(true)
                  }}
                >
                  <i className="fas fa-plus-circle lll-cursor"></i>
                </a>
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
                value={textarea}
                onChange={(e) => {
                  setTextarea(e.target.value)
                }}
              />
            </div>
            {/* 選填備註欄 ↑↑↑ */}

            {/* 顯示價格 ↓↓↓ */}
            <div className="d-flex justify-content-end text-center lll-price-line">
              <p className="m-0 txt-sub2 lll-grey lll-center">依人數計價</p>
              <span className="px-3 txt-sub2 lll-black lll-center">
                預約金額
              </span>
              <h4 className="lll-red lll-pb30">
                <span>TWD</span>
                {appoint.reservation_price}
              </h4>
            </div>
            {/* 顯示價格 ↑↑↑ */}
            <div className="d-flex justify-content-end mt-1 lll-pt20">
              <Link
                onClick={() => {
                  handlePostOrder()
                }}
                className="btn-green txt-btn"
              >
                立即預約
              </Link>
            </div>
          </div>
          {/* 右半部 ↑↑↑ */}
        </div>
      </Collapse>
      <form id="reservation_kitchen" hidden>
        <input type="date" name="reservation_date" value={dateStr} />
        <input
          type="text"
          name="reservation_time"
          value={isActive.reservation_time}
        />
        <input type="text" name="num_adult" value={num_adult} />
        <input type="text" name="num_child" value={num_child} />
        {/* <input type="text" name="adult_price" value={500} />
        <input type="text" name="child_price" value={200} /> */}
        <input type="text" name="num_meal" value={num_meal} />
        <input type="text" name="remark" value={textarea} />
        <input
          type="text"
          name="reservation_price"
          value={appoint.reservation_price}
        />
      </form>
    </>
  )
}

export default SurpriseContent
