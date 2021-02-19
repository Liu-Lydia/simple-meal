import { tr } from 'date-fns/locale'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CartMealDelivery(props) {
  const { setFlowchart, setCartMode } = props

  // 接取資料庫的資料
  const [deliveryData, setDeliveryData] = useState({
    thisTime: [],
    nextTime: [],
    simpleMealCoupon: {
      now: 0,
      cost: 0,
      remain: 0,
    },
  })

  // 當有任何刷新時+1, 讓didupdate監控
  const [clickNum, setClickNum] = useState(0)

  // 紀錄checkbox的SID
  const [checkSid, setCheckSid] = useState({
    thisTime: '0',
    nextTime: '0',
    simpleMealCoupon: 0,
  })

  // 紀錄是否check
  const [checkBool, setCheckBool] = useState({})

  // 紀錄是否all check
  const [allCheckBool, setAllCheckBool] = useState({
    thisTime: false,
    nextTime: false,
  })

  // 讀取資料庫
  const handleGetData = () => {
    const url = 'http://localhost:4000/mealdelivery/getdeliverycart'
    fetch(url, {
      method: 'get',
    })
      .then((r) => r.json())
      .then((obj) => {
        // console.log(obj)
        setDeliveryData(obj)
        let newCheckBool = {}
        obj.thisTime.map((v, i) => {
          // console.log(v)
          newCheckBool[v.sid] = false
        })
        obj.nextTime.map((v, i) => {
          // console.log(v)
          newCheckBool[v.sid] = false
        })
        console.log(newCheckBool)
        setCheckBool({ ...newCheckBool })
        setAllCheckBool({ thisTime: false, nextTime: false })
      })
  }

  // 要全選
  const handleSelectAll = (Bool) => {
    let newCheckBool = { ...checkBool }
    let newCheckSid = { thisTime: '0', nextTime: '0' }
    if (Bool) {
      deliveryData.thisTime.map((v, i) => {
        // console.log(v)
        newCheckBool[v.sid] = !allCheckBool.thisTime
        if (!allCheckBool.thisTime) {
          newCheckSid.thisTime += `,${v.sid}`
        }
      })
    } else {
      deliveryData.nextTime.map((v, i) => {
        // console.log(v)
        newCheckBool[v.sid] = !allCheckBool.nextTime
        if (!allCheckBool.nextTime) {
          newCheckSid.nextTime += `,${v.sid}`
        }
      })
    }
    setCheckBool({ ...newCheckBool })
    setCheckSid({ ...newCheckSid })
  }
  // 增減數量
  const handleSetMealNum = (sid, quantity) => {
    const url = `http://localhost:4000/mealdelivery/setmealquantity?sid=${sid}&quantity=${quantity}`
    if (quantity >= 1 && quantity <= 10) {
      fetch(url, {
        method: 'get',
      }).then(setClickNum(clickNum + 1))
    }
  }

  // 改變勾選
  const handleSetCheckboxSid = (e, deliveryTime) => {
    if (deliveryTime === 'thisTime') {
      if (checkSid.thisTime.search(e.target.value) === -1) {
        setCheckSid({
          ...checkSid,
          thisTime: checkSid.thisTime + `,${e.target.value}`,
        })
      } else {
        setCheckSid({
          ...checkSid,
          thisTime: checkSid.thisTime.replace(`,${e.target.value}`, ''),
        })
      }
    }
    if (deliveryTime === 'nextTime') {
      if (checkSid.nextTime.search(e.target.value) === -1) {
        setCheckSid({
          ...checkSid,
          nextTime: checkSid.nextTime + `,${e.target.value}`,
        })
      } else {
        setCheckSid({
          ...checkSid,
          nextTime: checkSid.nextTime.replace(`,${e.target.value}`, ''),
        })
      }
    }
    // console.log(checkSid)
  }

  // 刪除勾選
  const handleDelete = (timeBool) => {
    let url = ''
    if (timeBool) {
      url = `http://localhost:4000/mealdelivery/deletecheckbox?str=${checkSid.thisTime}`
    } else {
      url = `http://localhost:4000/mealdelivery/deletecheckbox?str=${checkSid.nextTime}`
    }

    fetch(url, {
      method: 'get',
    })
      // .then((r) => r.json())
      // .then((obj) => console.log(obj))
      .then(setClickNum(clickNum + 1))
      .then(setCheckSid({ thisTime: '0', nextTime: '0' }))
    // .then(setCheckBool({}))
  }

  // 移到下次
  const handleSetNextTime = () => {
    const url = `http://localhost:4000/mealdelivery/tonexttime?str=${checkSid.thisTime}`
    fetch(url, {
      method: 'get',
    })
      .then(setClickNum(clickNum + 1))
      .then(setCheckSid({ thisTime: '0', nextTime: '0' }))
    // .then(setCheckBool({}))
  }

  // 移到這次
  const handleSetThisTime = () => {
    const url = `http://localhost:4000/mealdelivery/tothistime?str=${checkSid.nextTime}`
    fetch(url, {
      method: 'get',
    })
      .then(setClickNum(clickNum + 1))
      .then(setCheckSid({ thisTime: '0', nextTime: '0' }))
    // .then(setCheckBool({}))
  }

  // 裝載時轉成流程1
  useEffect(() => {
    setFlowchart(1)
    handleGetData()
    // console.log(deliveryData.thisTime)
  }, [])

  // 當有任何點擊時
  useEffect(() => {
    handleGetData()
  }, [clickNum])

  return (
    <>
      {/* <input type="text" value={checkSid.thisTime} />
      <input type="text" value={checkSid.nextTime} /> */}
      {/* 本次配送 */}
      <div className="">
        <h5>配送餐點</h5>
        <table className="table table-borderless table-hover">
          <thead>
            <tr>
              <th scope="col">
                <input
                  type="checkbox"
                  onChange={() => {
                    handleSelectAll(true)
                    setAllCheckBool({
                      ...allCheckBool,
                      thisTime: !allCheckBool.thisTime,
                    })
                  }}
                  checked={allCheckBool.thisTime}
                />
              </th>
              <th scope="col"></th>
              <th className="text-center" scope="col">
                餐點明細
              </th>
              <th
                className="d-none d-sm-block text-center text-nowrap"
                style={{ width: '150px' }}
              >
                數量
              </th>
            </tr>
          </thead>
          <tbody>
            {/* 商品卡 */}
            {deliveryData.thisTime.length === 0 && (
              <tr className="text-center">
                <td colspan="4">
                  <h5 className="poe-mt15 poe-mb15">您沒有本次配送的餐點</h5>
                </td>
              </tr>
            )}
            {deliveryData.thisTime.map((v, i) => (
              <tr key={i}>
                <th className="poe-pr15 align-middle" scope="row">
                  <input
                    type="checkbox"
                    value={v.sid}
                    onChange={(event) => {
                      handleSetCheckboxSid(event, 'thisTime')
                      const key = event.target.value
                      setCheckBool({ ...checkBool, [key]: !checkBool[key] })
                      // console.log(checkBool)
                    }}
                    checked={checkBool[v.sid]}
                  />
                </th>
                <td className="align-middle px-0 poe-pr15 poe-cart-product-img">
                  <img
                    className="w-100"
                    src={`http://localhost:3015/img/meal/未去背/${v.product_id}.jpg`}
                    alt=""
                  />
                </td>
                <td>
                  <p className="txt-btn">{v.meal_name}</p>
                  <p className="txt-cap poe-gray poe-ellipsis">
                    {v.description}
                  </p>
                  {/* 手機時的數量按鈕 */}
                  <div className="text-right d-block d-sm-none ">
                    <a
                      onClick={() => {
                        const sid = v.sid
                        const quantity = v.quantity - 1
                        handleSetMealNum(sid, quantity)
                      }}
                      className={`px-3 ${
                        v.quantity > 1 ? 'poe-green' : 'poe-gray'
                      }`}
                    >
                      <i className="fas fa-minus-circle"></i>
                    </a>
                    <span>{v.quantity}</span>
                    <a
                      onClick={() => {
                        const sid = v.sid
                        const quantity = v.quantity + 1
                        handleSetMealNum(sid, quantity)
                      }}
                      className={`px-3 ${
                        v.quantity < 10 ? 'poe-green' : 'poe-gray'
                      }`}
                    >
                      <i className="fas fa-plus-circle"></i>
                    </a>
                  </div>
                </td>
                {/* 正常的數量按鈕 */}
                <td className="text-center align-middle d-none d-sm-table-cell">
                  <div>
                    <a
                      onClick={() => {
                        const sid = v.sid
                        const quantity = v.quantity - 1
                        handleSetMealNum(sid, quantity)
                      }}
                      className={`px-3 ${
                        v.quantity > 1 ? 'poe-green' : 'poe-gray'
                      }`}
                    >
                      <i className="fas fa-minus-circle"></i>
                    </a>
                    <span>{v.quantity}</span>
                    <a
                      onClick={() => {
                        const sid = v.sid
                        const quantity = v.quantity + 1
                        handleSetMealNum(sid, quantity)
                      }}
                      className={`px-3 ${
                        v.quantity < 10 ? 'poe-green' : 'poe-gray'
                      }`}
                    >
                      <i className="fas fa-plus-circle"></i>
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="poe-bookmark-content-result text-right">
          <div className="text-center text-sm-left">
            <Link
              onClick={() => handleSetNextTime()}
              className="select-btn-green txt-btn mx-1 mx-sm-3 poe-mb20"
            >
              移到下次
            </Link>
            <Link
              onClick={() => handleDelete(true)}
              className="select-btn-green txt-btn mx-1 mx-sm-3 poe-mb20"
            >
              刪除餐點
            </Link>
          </div>
          <div>
            <span>您的帳戶現有 </span>
            <span className="poe-red">{deliveryData.simpleMealCoupon.now}</span>
            <span> 張餐券,</span>
            <br className="d-block d-sm-none" />
            <span>配送將消耗 </span>
            <span className="poe-red">
              {deliveryData.simpleMealCoupon.cost}
            </span>
            <span> 張餐券,</span>
            <br className="d-block d-sm-none" />
            <span>您尚有 </span>
            <span className="poe-red">
              {deliveryData.simpleMealCoupon.remain}
            </span>
            <span> 張餐券可以使用</span>
          </div>
          {/* <div>
            <span>您的帳戶現有 </span>
            <span className="poe-red">0</span>
            <span>
              {' '}
              張餐券,
              <br className="d-block d-sm-none" /> 請先購買餐券再進行餐點配送
            </span>
          </div> */}
        </div>
        <div className="text-center text-sm-right poe-bookmark-btn-group">
          <Link
            onClick={() => setCartMode('SimpleMealCoupon')}
            // 如果持有餐券數量小於消耗, 按鈕轉紅, 否則綠
            className={`${
              deliveryData.simpleMealCoupon.now <
              deliveryData.simpleMealCoupon.cost
                ? 'btn-red'
                : 'btn-green'
            } txt-btn mx-3 poe-mb20`}
          >
            購買餐券
          </Link>
          {/* 當本次配送沒東西或持有餐券數小於消耗數時不給按 */}
          {(deliveryData.thisTime.length === 0 ||
            deliveryData.simpleMealCoupon.now <
              deliveryData.simpleMealCoupon.cost) && (
            <span className="btn-gray txt-btn mx-3 poe-mb20">
              下一步　<i className="fas fa-chevron-right"></i>
            </span>
          )}
          {/* 當本次配送有東西且持有餐券數大於等於消耗數時給按 */}
          {deliveryData.thisTime.length > 0 &&
            deliveryData.simpleMealCoupon.now >=
              deliveryData.simpleMealCoupon.cost && (
              <Link
                to="/cart/mealdelivery"
                onClick={() => setFlowchart(2)}
                className="btn-green txt-btn mx-3 poe-mb20"
              >
                下一步　<i className="fas fa-chevron-right"></i>
              </Link>
            )}
          {/* <Link
            to="/cart/mealdelivery"
            onClick={() => setFlowchart(2)}
            className="btn-green txt-btn mx-3 poe-mb20"
          >
            下一步　<i className="fas fa-chevron-right"></i>
          </Link> */}
        </div>
      </div>
      {/* 分隔紅線 */}
      <div className="poe-red-line"></div>
      {/* 下次配送 */}
      <div className="">
        <h5>下次配送</h5>
        <table className="table table-borderless table-hover">
          <thead>
            <tr>
              <th scope="col">
                <input
                  type="checkbox"
                  onChange={() => {
                    handleSelectAll(false)
                    setAllCheckBool({
                      ...allCheckBool,
                      nextTime: !allCheckBool.nextTime,
                    })
                  }}
                  checked={allCheckBool.nextTime}
                />
              </th>
              <th scope="col"></th>
              <th className="text-center" scope="col">
                餐點明細
              </th>
              <th
                className="d-none d-sm-block text-center text-nowrap"
                style={{ width: '150px' }}
              >
                數量
              </th>
            </tr>
          </thead>
          <tbody>
            {/* 商品卡 */}
            {deliveryData.nextTime.length === 0 && (
              <tr className="text-center">
                <td colspan="4">
                  <h5 className="poe-mt15 poe-mb15">您沒有下次配送的餐點</h5>
                </td>
              </tr>
            )}
            {deliveryData.nextTime.map((v, i) => (
              <tr key={i}>
                <th className="poe-pr15 align-middle" scope="row">
                  <input
                    type="checkbox"
                    value={v.sid}
                    onChange={(event) => {
                      handleSetCheckboxSid(event, 'nextTime')
                      const key = event.target.value
                      setCheckBool({ ...checkBool, [key]: !checkBool[key] })
                      // console.log(checkBool)
                    }}
                    checked={checkBool[v.sid]}
                  />
                </th>
                <td className="align-middle px-0 poe-pr15 poe-cart-product-img">
                  <img
                    className="w-100"
                    src={`http://localhost:3015/img/meal/未去背/${v.product_id}.jpg`}
                    alt=""
                  />
                </td>
                <td>
                  <p className="txt-btn">{v.meal_name}</p>
                  <p className="txt-cap poe-gray poe-ellipsis">
                    {v.description}
                  </p>
                  {/* 手機時的數量按鈕 */}
                  <div className="d-block d-sm-none text-right">
                    <a
                      onClick={() => {
                        const sid = v.sid
                        const quantity = v.quantity - 1
                        handleSetMealNum(sid, quantity)
                      }}
                      className={`px-3 ${
                        v.quantity > 1 ? 'poe-green' : 'poe-gray'
                      }`}
                    >
                      <i className="fas fa-minus-circle"></i>
                    </a>
                    <span>{v.quantity}</span>
                    <a
                      onClick={() => {
                        const sid = v.sid
                        const quantity = v.quantity + 1
                        handleSetMealNum(sid, quantity)
                      }}
                      className={`px-3 ${
                        v.quantity < 10 ? 'poe-green' : 'poe-gray'
                      }`}
                    >
                      <i className="fas fa-plus-circle"></i>
                    </a>
                  </div>
                </td>
                {/* 正常的數量按鈕 */}
                <td className="text-center align-middle d-none d-sm-table-cell">
                  <div>
                    <a
                      onClick={() => {
                        const sid = v.sid
                        const quantity = v.quantity - 1
                        handleSetMealNum(sid, quantity)
                      }}
                      className={`px-3 ${
                        v.quantity > 1 ? 'poe-green' : 'poe-gray'
                      }`}
                    >
                      <i className="fas fa-minus-circle"></i>
                    </a>
                    <span>{v.quantity}</span>
                    <a
                      onClick={() => {
                        const sid = v.sid
                        const quantity = v.quantity + 1
                        handleSetMealNum(sid, quantity)
                      }}
                      className={`px-3 ${
                        v.quantity < 10 ? 'poe-green' : 'poe-gray'
                      }`}
                    >
                      <i className="fas fa-plus-circle"></i>
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="poe-bookmark-content-result text-right">
          <div className="text-center text-sm-left">
            <Link
              onClick={() => handleSetThisTime()}
              className="select-btn-green txt-btn mx-1 mx-sm-3 poe-mb20"
            >
              移到本次
            </Link>
            <Link
              onClick={() => handleDelete(false)}
              className="select-btn-green txt-btn mx-1 mx-sm-3 poe-mb20"
            >
              刪除餐點
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartMealDelivery
