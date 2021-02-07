function MealTittle() {
  return (
    <>
      <div className="cha-main-txt col-12 col-lg-7">
        <div className="cha-main-txt1 txt-sub1">
          <p>首頁 123 菜單介紹 123 義式料理</p>
        </div>
        <div className="cha-main-txt2 d-flex justify-content-center">
          <div className="cha-main-txt3  ">
            <h3 className="cha-mb3 cha-black cha-main-txt-main">
              羅勒鮮蔬通心麵
            </h3>
            <h5 className="cha-gray cha-mb2 cha-main-txt-sub">
              有羅勒香和奶香的一頓餐點
            </h5>
            <div className="cha-star cha-green cha-mb2">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <div className="cha-mb2 cha-main-icon-sub d-flex">
              <div className="cha-mr3 cha-main-icon-sub1">
                <i className="far fa-clock cha-star-big cha-green"></i>
                <span className="cha-gray txt-sub1">40分鐘</span>
              </div>
              <div className="cha-mr3 cha-main-icon-sub2">
                <i className="fas fa-tag cha-star-big cha-green"></i>
                <span className="cha-gray txt-sub1">義式料理</span>
              </div>
              <div className=" cha-main-icon-sub3">
                <i className="fas fa-heart cha-star-big cha-green"></i>
                <span className="cha-gray txt-sub1">加入收藏</span>
              </div>
            </div>
            <div>
              <a
                href="http://google.com"
                className="cha-btn-cart btn-green txt-btn cha-mr5"
              >
                加入訂單
              </a>
              <a
                href="http://google.com"
                className="cha-btn-recipe txt-btn btn-white"
              >
                查看食譜
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MealTittle
