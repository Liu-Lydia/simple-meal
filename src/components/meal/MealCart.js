import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function MealCart(props) {
  const { data, updateNum } = props
  const [addRightCart, setAddRightCart] = useState({
    thisTime: [],
    nextTime: [],
    simpleMealCoupon: {},
    member_sid: 1,
    memberInfoObj: {},
  })

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
        setAddRightCart(obj)
      })
  }
  console.log(addRightCart)
  useEffect(() => {
    handleGetMealToRightCart()
  }, [])

  //計數器，加入定單後觸發，渲染購物車畫面
  useEffect(() => {
    handleGetMealToRightCart()
  }, [updateNum])

  //計算餐卷數量，並回傳顯示內容
  const now = addRightCart.simpleMealCoupon.now
  const cost = addRightCart.simpleMealCoupon.cost
  const amount = now - cost

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
          <i className="fas fa-plus-circle cha-icon"></i>
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
            {addRightCart.memberInfoObj.id ? (
              <Link to="/MemberCenter/Index" className="cha-cart-user">
                <img
                  className="cha-cart-user-img"
                  src={`http://localhost:3015/img/member-center/${addRightCart.memberInfoObj.avater}`}
                  alt=""
                />
              </Link>
            ) : (
              ''
            )}
            <span className="cha-cart-user-txt txt-sub1">
              {addRightCart.memberInfoObj.id ? (
                <>{addRightCart.memberInfoObj.name}</>
              ) : (
                ''
              )}
            </span>

            <Link to="" className="cha-yellow cha-icon">
              <i className="fas fa-pen"></i>
            </Link>
          </div>
          {addRightCart.memberInfoObj.id ? (
            <>
              <div className="cha-cart-main">
                <div className="d-flex txt-sub2 cha-green justify-content-between cha-cart-main-title px-4">
                  <span className="cha-cart-main-title1">餐點名稱</span>
                  <span className="cha-cart-main-title2">餐數</span>
                </div>
                <div
                  className="cha-cart-user-meal txt-sub2 cha-green pl-4"
                  id="scroll"
                >
                  {addRightCart.thisTime.map((v, i) => (
                    <div className="justify-content-between d-flex" key={v.sid}>
                      <span className="cha-cart-main-name">{v.meal_name}</span>
                      <span className="cha-cart-main-count">x{v.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cha-cart-meal-only txt-sub2 cha-green">
                {amount >= 0 ? (
                  <>
                    <span className="cha-mr1">剩餘可選餐數</span>
                    <span className="cha-red">{amount}</span>
                  </>
                ) : (
                  <span className=" cha-red">您餐卷不足，建議先行購買</span>
                )}

                <br />
                <h5 className="cha-gray">------------------</h5>
              </div>
            </>
          ) : (
            <>
              <div className="row justify-content-center pt-5">
                <div className="col-12 row justify-content-center cha-cart-none">
                  <h5 className="cha-green">還沒加入會員嗎?</h5>
                </div>
                <Link
                  to="/MemberCenter/RegiStered"
                  className="btn-green txt-btn mt-5"
                >
                  立即加入
                </Link>
              </div>
            </>
          )}
        </div>
        {addRightCart.memberInfoObj.id ? (
          <>
            <div className="cha-cart-footer justify-content-center d-flex">
              <Link to="/cart" className="btn-green txt-btn">
                直接購買
              </Link>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default MealCart
