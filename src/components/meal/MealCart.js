import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function MealCart(props) {
  const { data, updateNum } = props
  const [addRightCart, setAddRightCart] = useState([])

  //切換右側購物車顯示或隱藏
  const style0 = 'cha-cart'
  const style1 = 'cha-cart-hidden cha-cart'
  const style2 = 'cha-cart-hidden-smell'
  const style3 = 'cha-cart-open'
  const [classStyleBig, setClassStyleBig] = useState('cha-cart')
  const [classStyleSmall, setclassStyleSmall] = useState(
    'cha-cart-hidden-smell'
  )

  //連到後端抓會員加入購物車的資料
  const handleGetMealToRightCart = () => {
    const url = 'http://localhost:4000/mealDelivery/getdeliverycart'
    fetch(url, {
      method: 'get',
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((obj) => {
        // console.log(obj.thisTime)
        setAddRightCart(obj.thisTime)
      })
  }

  useEffect(() => {
    handleGetMealToRightCart()
  }, [])

  //計數器，加入定單後觸發，渲染購物車畫面
  useEffect(() => {
    handleGetMealToRightCart()
  }, [updateNum])

  return (
    <>
      <Link
        className="cha-gray cha-icon"
        onClick={() => {
          setClassStyleBig(style0)
          setclassStyleSmall(style2)
        }}
      >
        <div className={classStyleSmall}>
          <i className="fas fa-minus-circle cha-icon"></i>
        </div>
      </Link>
      <div className={classStyleBig}>
        <div className="cha-cart-all">
          <div className="cha-cart-head d-flex justify-content-between">
            <Link
              className=" cha-gray cha-icon"
              onClick={() => {
                setClassStyleBig(style1)
                setclassStyleSmall(style3)
              }}
            >
              <i className="fas fa-minus-circle cha-icon"></i>
            </Link>

            <Link to="" className="cha-cart-user"></Link>
            <span className="cha-cart-user-txt txt-sub1">Lydia Liu</span>
            <Link to="" className="cha-yellow cha-icon">
              <i className="fas fa-pen"></i>
            </Link>
          </div>
          <div className="cha-cart-main">
            <div className="d-flex txt-sub2 cha-green justify-content-between cha-cart-main-title px-4">
              <span className="cha-cart-main-title1">餐點名稱</span>
              <span className="cha-cart-main-title2">餐數</span>
            </div>
            <div className="cha-cart-user-meal txt-sub2 cha-green pl-4">
              {addRightCart.map((v, i) => (
                <div className="justify-content-between d-flex" key={v.sid}>
                  <span className="cha-cart-main-name">{v.meal_name}</span>
                  <span className="cha-cart-main-count">x{v.quantity}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="cha-cart-meal-only txt-sub2 cha-green">
            <span className="cha-mr1">剩餘可選餐數</span>
            <span>3</span>
            <br />
            <h5 className="cha-gray">------------------</h5>
          </div>
        </div>
        <div className="cha-cart-footer justify-content-center d-flex">
          <Link to="/cart" className="btn-green txt-btn">
            直接購買
          </Link>
        </div>
      </div>
    </>
  )
}

export default MealCart
