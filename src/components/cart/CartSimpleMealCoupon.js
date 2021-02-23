// import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CartSimpleMealCoupon(props) {
  // {流程轉換設定, 方案id, 設定方案id, 方案物件, 設定方案物件, 預設方案內容, 組合數量, 設定組合數量}
  const {
    setFlowchart,
    choice,
    setChoice,
    choiceObj,
    setChoiceObj,
    choiceArray,
    quantity,
    setQuantity,
  } = props

  // 餐券方案選擇
  // const [choice, setChoice] = useState('')
  // const [choiceObj, setChoiceObj] = useState({
  //   combination: '',
  //   discription: '',
  //   quantity: 0,
  //   couponNum: 0,
  //   price: 0,
  // })

  // // 方案內容
  // const choiceArray = [
  //   {
  //     combination: '',
  //     discription: '',
  //     couponNum: 0,
  //     price: 0,
  //   },
  //   {
  //     combination: '吃飽飽沒煩惱組合',
  //     discription: '(包含20張餐卷, 加贈5張免費餐券)',
  //     couponNum: 25,
  //     price: 3500,
  //   },
  //   {
  //     combination: '食在很滿足組合',
  //     discription: '(包含10張餐卷, 加贈2張免費餐券)',
  //     couponNum: 12,
  //     price: 1700,
  //   },
  //   {
  //     combination: '經濟實惠組',
  //     discription: '(包含5張餐卷, 加贈1張免費餐券)',
  //     couponNum: 6,
  //     price: 850,
  //   },
  // ]
  // // 組合數量
  // const [quantity, setQuantity] = useState(0)

  // 改變方案
  const handleSetChoice = (event) => {
    setChoice(event.target.value)
    setQuantity(1)
    handleSetChoiceObj(event.target.value, 1)
  }

  // 改變組合文字
  function handleSetChoiceObj(choice, quantity) {
    const newCouponNum = choiceArray[+choice].couponNum * quantity
    const newPrice = choiceArray[+choice].price * quantity
    const newQuantity = quantity
    setChoiceObj({
      combination: choiceArray[+choice].combination,
      discription: choiceArray[+choice].discription,
      quantity: newQuantity,
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

  // useEffect(() => {
  //   handleSetChoiceObj(choice, quantity)
  //   quantity === 0 && setChoice('')
  // }, [quantity])

  return (
    <>
      {/* 選購方案表 */}
      <h5>選購方案</h5>
      <table className="table table-borderless table-hover poe-cartTable">
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
              <span>{choiceArray[1].combination}</span>
              <br className="d-block d-sm-none" />
              <span className="txt-cap poe-red">
                {choiceArray[1].discription}
              </span>
              <br className="d-block d-sm-none" />
              <div className="d-block d-sm-none d-flex txt-cap">
                <span className="poe-bookmark-content-m">優惠價</span>
                <span className="poe-red">
                  {Intl.NumberFormat().format(choiceArray[1].price)}
                </span>
              </div>
            </td>
            <td className="d-none d-sm-block poe-red text-right">
              {Intl.NumberFormat().format(choiceArray[1].price)}
            </td>
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
              <span>{choiceArray[2].combination}</span>
              <br className="d-block d-sm-none" />
              <span className="txt-cap poe-red">
                {choiceArray[2].discription}
              </span>
              <br className="d-block d-sm-none" />
              <div className="d-block d-sm-none d-flex txt-cap">
                <span className="poe-bookmark-content-m">優惠價</span>
                <span className="poe-red">
                  {Intl.NumberFormat().format(choiceArray[2].price)}
                </span>
              </div>
            </td>
            <td className="d-none d-sm-block poe-red text-right">
              {Intl.NumberFormat().format(choiceArray[2].price)}
            </td>
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
              <span>{choiceArray[3].combination}</span>
              <br className="d-block d-sm-none" />
              <span className="txt-cap poe-red">
                {choiceArray[3].discription}
              </span>
              <br className="d-block d-sm-none" />
              <div className="d-block d-sm-none d-flex txt-cap">
                <span className="poe-bookmark-content-m">優惠價</span>
                <span className="poe-red">
                  {Intl.NumberFormat().format(choiceArray[3].price)}
                </span>
              </div>
            </td>
            <td className="d-none d-sm-block poe-red text-right">
              {Intl.NumberFormat().format(choiceArray[3].price)}
            </td>
          </tr>
        </tbody>
      </table>
      {/* 組合數量按鈕 */}
      <div className="poe-bookmark-content-choice text-right">
        <span className="">組合數量</span>
        <button
          onClick={() => handleSetQuantity(false)}
          className="px-3 border-0 poe-bgcTransparent"
        >
          <i
            className={`fas fa-minus-circle ${quantity <= 1 && 'poe-gray'}`}
          ></i>
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => handleSetQuantity(true)}
          className="px-3 border-0 poe-bgcTransparent"
        >
          <i
            className={`fas fa-plus-circle ${quantity === 10 && 'poe-gray'}`}
          ></i>
        </button>
      </div>
      {/* 小計 */}
      <div className="poe-bookmark-content-result text-right">
        <div>
          <span>共 </span>
          <span className="poe-red">{choiceObj.quantity}</span>
          <span> 組, 包含 </span>
          <span className="poe-red">{choiceObj.couponNum}</span>
          <span>
            {' '}
            張餐券, <br className="d-block d-sm-none" />
            金額小計NT${' '}
          </span>
          <span className="poe-red">
            {Intl.NumberFormat().format(choiceObj.price)}
          </span>
          <span> 元</span>
        </div>
      </div>
      {/* 下一步 */}
      <div className="text-right poe-bookmark-btn-group">
        {choice ? (
          <Link
            to="/cart/simplemealcoupon"
            onClick={() => setFlowchart(2)}
            className="btn-green txt-btn"
          >
            下一步　<i className="fas fa-chevron-right"></i>
          </Link>
        ) : (
          <span className="btn-gray txt-btn">
            下一步　<i className="fas fa-chevron-right"></i>
          </span>
        )}
      </div>
    </>
  )
}

export default CartSimpleMealCoupon
