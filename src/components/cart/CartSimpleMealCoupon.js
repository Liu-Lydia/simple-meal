import React, { useEffect, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'

function CartSimpleMealCoupon(props) {
  // {流程轉換設定}
  const { setFlowchart } = props

  // 方案選擇
  const [choice, setChoice] = useState('')
  const [choiceObj, setChoiceObj] = useState({
    couponNum: 0,
    price: 0,
  })
  // 方案內容
  const choiceArray = [
    { couponNum: 0, price: 0 },
    { couponNum: 25, price: 3500 },
    { couponNum: 12, price: 1700 },
    { couponNum: 6, price: 850 },
  ]
  // 組合數量
  const [quantity, setQuantity] = useState(0)

  // 改變方案
  const handleSetChoice = (event) => {
    setChoice(event.target.value)
    setQuantity(quantity || 1)
    handleSetChoiceObj(event.target.value, quantity || 1)
  }

  // 改變組合文字
  function handleSetChoiceObj(choice, quantity) {
    const newCouponNum = choiceArray[+choice].couponNum * quantity
    const newPrice = choiceArray[+choice].price * quantity
    setChoiceObj({
      couponNum: newCouponNum,
      price: newPrice,
    })
  }

  // 組合數量按鈕(true +1; false -1)
  const handleSetQuantity = (bool) => {
    if (bool) {
      if (quantity < 10) {
        setQuantity(quantity + 1)
        handleSetChoiceObj(choice, quantity + 1)
      }
    } else {
      if (quantity >= 2) {
        setQuantity(quantity - 1)
        handleSetChoiceObj(choice, quantity - 1)
      }
    }
  }

  return (
    <>
      <h5>選購方案</h5>
      <table className="table table-borderless table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">組合明細</th>
            <th
              className="d-none d-sm-block text-right text-nowrap"
              scope="col"
            >
              優惠價
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <input
                type="radio"
                value="1"
                checked={choice === '1'}
                onChange={(e) => {
                  handleSetChoice(e)
                }}
              />
            </th>
            <td>
              <span>吃飽飽沒煩惱組合</span>
              <br className="d-block d-sm-none" />
              <span className="txt-cap poe-red">
                (包含20張餐卷, 加贈5張免費餐券)
              </span>
              <br className="d-block d-sm-none" />
              <div className="d-block d-sm-none d-flex txt-cap">
                <span className="poe-bookmark-content-m">優惠價</span>
                <span className="poe-red">3500</span>
              </div>
            </td>
            <td className="d-none d-sm-block poe-red text-right">3500</td>
          </tr>
          <tr>
            <th scope="row">
              <input
                type="radio"
                value="2"
                checked={choice === '2'}
                onChange={(e) => {
                  handleSetChoice(e)
                }}
              />
            </th>
            <td>
              <span>食在很滿足組合</span>
              <br className="d-block d-sm-none" />
              <span className="txt-cap poe-red">
                (包含10張餐卷, 加贈2張免費餐券)
              </span>
              <br className="d-block d-sm-none" />
              <div className="d-block d-sm-none d-flex txt-cap">
                <span className="poe-bookmark-content-m">優惠價</span>
                <span className="poe-red">1700</span>
              </div>
            </td>
            <td className="d-none d-sm-block poe-red text-right">1700</td>
          </tr>
          <tr>
            <th scope="row">
              <input
                type="radio"
                value="3"
                checked={choice === '3'}
                onChange={(e) => {
                  handleSetChoice(e)
                }}
              />
            </th>
            <td>
              <span>經濟實惠組</span>
              <br className="d-block d-sm-none" />
              <span className="txt-cap poe-red">
                (包含5張餐卷, 加贈1張免費餐券)
              </span>
              <br className="d-block d-sm-none" />
              <div className="d-block d-sm-none d-flex txt-cap">
                <span className="poe-bookmark-content-m">優惠價</span>
                <span className="poe-red">850</span>
              </div>
            </td>
            <td className="d-none d-sm-block poe-red text-right">850</td>
          </tr>
        </tbody>
      </table>
      <div className="poe-bookmark-content-choice text-right">
        <span className="">組合數量</span>
        <Link onClick={() => handleSetQuantity(false)} className="mx-3">
          <i
            className={`fas fa-minus-circle ${quantity <= 1 && 'poe-gray'}`}
          ></i>
        </Link>
        <span>{quantity}</span>
        <Link onClick={() => handleSetQuantity(true)} className="mx-3">
          <i
            className={`fas fa-plus-circle ${quantity === 10 && 'poe-gray'}`}
          ></i>
        </Link>
      </div>
      <div className="poe-bookmark-content-result text-right">
        <div>
          <span>共 </span>
          <span className="poe-red">{quantity}</span>
          <span> 組, 包含 </span>
          <span className="poe-red">{choiceObj.couponNum}</span>
          <span>
            {' '}
            張餐券, <br className="d-block d-sm-none" />
            金額小計NT${' '}
          </span>
          <span className="poe-red">{choiceObj.price}</span>
          <span> 元</span>
        </div>
      </div>
      <div className="text-right poe-bookmark-btn-group">
        <Link
          to="/cart/simplemealcoupon"
          onClick={() => setFlowchart(2)}
          className="btn-green txt-btn"
        >
          下一步　<i className="fas fa-chevron-right"></i>
        </Link>
      </div>
    </>
  )
}

export default CartSimpleMealCoupon
