function MemberCenterNavbar() {
  return (
    <>
      <div className=" aa d-none d-mo-none d-sm-none d-lg-none d-xl-block col-lg-2 offset-1 ">
        <div className="d-flex ml-4">
          <ul className="d-none d-mo-none d-sm-none d-lg-block d-xl-block ">
            <img
              src="../../../public/img/member-center/fish4.jpeg"
              className="rounded-circle box1  "
            />
          </ul>
          <div className="txt-cap ">
            <li className="d-none d-xl-block">會員姓名:</li>
            <li className="d-none d-xl-block  ">會員等級:</li>
          </div>
        </div>
        <div className="">
          <div className="txt-body align-middle">
            <div className="d-flex">
              <ul className="mt-1 h6 mx-auto">
                <ul
                  data-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  data-toggle="collapse"
                >
                  <i className="far fa-address-card mr-1"></i>我的帳戶
                </ul>
                <div
                  className="collapse txt-sub2 ml-2 col-10"
                  id="collapseExample"
                >
                  <li>個人資料</li>
                  <li>密碼變更</li>
                  <li>信用卡</li>
                  <li>地址</li>
                  <li>分級資訊</li>
                </div>
                <li className="mb-3 mt-3">
                  <i className="fas fa-heart mr-1"></i>我的專屬菜單
                </li>
                <li className="mb-3">
                  <i className="fas fa-utensils mr-2"></i>我的餐點
                </li>
                <li className="mb-3">
                  <i className="fas fa-clipboard mr-2"></i>我的餐卷
                </li>
                <li className="mb-3">
                  <i className="fas fa-carrot mr-1"></i>我的共享食譜
                </li>
                <li className="mb-3">
                  <i className="far fa-calendar-plus mr-2"></i>驚喜廚房
                </li>
                <li className="mb-3">
                  <i className="fas fa-medal mr-1"></i>我的成就
                </li>
                <li className="mb-3">
                  <i className="fas fa-ticket-alt mr-1"></i>我的優惠卷
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MemberCenterNavbar
