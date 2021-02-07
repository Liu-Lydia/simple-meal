function MealCart() {
  return (
    <>
      <div className="cha-cart">
        <div className="cha-cart-all">
          <div className="cha-cart-head d-flex justify-content-between">
            <a href="" className="cha-gray cha-icon">
              <i className="fas fa-minus-circle cha-icon"></i>
            </a>
            <a href="" className="cha-cart-user"></a>
            <span className="cha-cart-user-txt txt-sub1">Lydia Liu</span>
            <a href="" className="cha-yellow cha-icon">
              <i className="fas fa-pen"></i>
            </a>
          </div>
          <div className="cha-cart-main">
            <div className="d-flex txt-sub2 cha-green justify-content-between cha-cart-main-title px-4">
              <span className="cha-cart-main-title1">餐點名稱</span>
              <span className="cha-cart-main-title2">餐數</span>
            </div>
            <div className="cha-cart-user-meal txt-sub2 cha-green pl-4">
              <div className="justify-content-between d-flex">
                <span className="cha-cart-main-name">羅勒鮮蔬通心麵</span>
                <span className="cha-cart-main-count">x1</span>
              </div>
              <div className="justify-content-between d-flex">
                <span className="cha-cart-main-name">羅勒鮮蔬通心</span>
                <span className="cha-cart-main-count">x23</span>
              </div>
              <div className="justify-content-between d-flex">
                <span className="cha-cart-main-name">羅勒鮮蔬通</span>
                <span className="cha-cart-main-count">x4</span>
              </div>
              <div className="justify-content-between d-flex">
                <span className="cha-cart-main-name">羅勒鮮蔬</span>
                <span className="cha-cart-main-count">x4</span>
              </div>
              <div className="justify-content-between d-flex">
                <span className="cha-cart-main-name">羅勒鮮</span>
                <span className="cha-cart-main-count">x4</span>
              </div>
              <div className="justify-content-between d-flex">
                <span className="cha-cart-main-name">羅勒鮮蔬通心麵</span>
                <span className="cha-cart-main-count">x4</span>
              </div>
              <div className="justify-content-between d-flex">
                <span className="cha-cart-main-name">羅勒鮮蔬通心麵</span>
                <span className="cha-cart-main-count">x4</span>
              </div>
              <div className="justify-content-between d-flex">
                <span className="cha-cart-main-name">羅勒鮮蔬通心麵</span>
                <span className="cha-cart-main-count">x4</span>
              </div>
              <div className="justify-content-between d-flex">
                <span className="cha-cart-main-name">羅勒鮮蔬通心麵</span>
                <span className="cha-cart-main-count">x4</span>
              </div>
              <div className="justify-content-between d-flex">
                <span className="cha-cart-main-name">羅勒鮮蔬通心麵</span>
                <span className="cha-cart-main-count">x4</span>
              </div>
              <div className="justify-content-between d-flex">
                <span className="cha-cart-main-name">羅勒鮮蔬通心麵</span>
                <span className="cha-cart-main-count">x4</span>
              </div>
              <div className="justify-content-between d-flex">
                <span className="cha-cart-main-name">羅勒鮮蔬通心麵</span>
                <span className="cha-cart-main-count">x4</span>
              </div>
              <div className="justify-content-between d-flex">
                <span className="cha-cart-main-name">羅勒鮮蔬通心麵</span>
                <span className="cha-cart-main-count">x4</span>
              </div>
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
          <a href="" className="btn-green txt-btn">
            選項視窗
          </a>
        </div>
      </div>
    </>
  )
}

export default MealCart