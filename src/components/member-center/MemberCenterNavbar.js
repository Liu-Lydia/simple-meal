import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
function MemberCenterNavbar() {
  const [Memberinfo, setMemberinfo] = useState([])

  const getDataFromServer = async () => {
    //模擬和伺服器要資料
    const response = await fetch(`http://localhost:4000/getmemberinfo`, {
      method: 'get',
      credentials: 'include',
    })
    const data = await response.json()
    //最後設定要到狀態中
    setMemberinfo(data)
  }

  useEffect(() => {
    getDataFromServer()
  }, [])

  return (
    <>
      <div className="aa d-none d-xl-block col-2 offset-1 mt-2  ">
        <div className="txt-cap col-10 col-xl-12  style={{ color: '#434341' }}">
          <li className="d-none d-xl-block box1 mx-auto mb-2">
            <img
              className="cha-cart-user-img "
              src={`http://localhost:3015/img/member-center/${Memberinfo.avater}`}
              alt=""
            />
          </li>
          <li className="d-none d-xl-block ml-3 col-10 mx-auto">
            會員姓名:
            <span>{Memberinfo.name}</span>
          </li>
          <li className="d-none d-xl-block mb-3 ml-3 col-8 mx-auto">
            會員等級:
            <span style={{ color: 'red' }}>{Memberinfo.level}</span>
          </li>
        </div>

        <div className="">
          <div className="h6 align-middle">
            <div className="d-flex">
              <ul className="mt-1 h6 mx-auto">
                <ul
                // data-target="#collapseExample"
                // aria-expanded="false"
                // aria-controls="collapseExample"
                // data-toggle="collapse"
                >
                  <i className="far fa-address-card mr-1"></i>我的帳戶
                </ul>
                <div
                  className="txt-sub2 ml-2 col-10"
                  // id="collapseExample"
                >
                  <li>
                    <Link to="/MemberCenter/info" className="text-dark">
                      個人資料
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/MemberCenter/PasswordChange"
                      className="text-dark"
                    >
                      密碼變更
                    </Link>
                  </li>
                  <li>
                    <Link to="/MemberCenter/CreditCard" className="text-dark">
                      信用卡
                    </Link>
                  </li>
                  <li>
                    <Link to="/MemberCenter/addr" className="text-dark">
                      地址
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="text-dark">
                      分級資訊
                    </Link>
                  </li>
                </div>
                <li className="mb-3 mt-3">
                  <i className="fas fa-heart mr-1"></i>
                  <Link to="/meal" className="text-dark">
                    我的專屬菜單
                  </Link>
                </li>
                <li className="mb-3">
                  <i className="fas fa-utensils mr-2"></i>
                  <Link to="/MemberCenter/FoodDelivery" className="text-dark">
                    我的餐點
                  </Link>
                </li>
                <li className="mb-3">
                  <i className="fas fa-clipboard mr-2"></i>
                  <Link
                    to="/MemberCenter/SimpleMealCoupon"
                    className="text-dark"
                  >
                    我的餐卷
                  </Link>
                </li>
                <li className="mb-3">
                  <i className="fas fa-carrot "></i>{' '}
                  <Link to="/MemberCenter/MyRecipe" className="text-dark">
                    我的共享食譜
                  </Link>
                </li>
                <li className="mb-3">
                  <i className="fas fa-carrot "></i>{' '}
                  <Link to="/MemberCenter/addrecipe" className="text-dark">
                    新增共享食譜
                  </Link>
                </li>
                <li className="mb-3">
                  <i className="far fa-calendar-plus mr-1"></i>{' '}
                  <Link
                    to="/MemberCenter/SurpriseKitchen"
                    className="text-dark"
                  >
                    驚喜廚房
                  </Link>
                </li>
                <li className="mb-3">
                  <i className="fas fa-medal mr-2"></i>
                  <Link to="/RewardExchange" className="text-dark">
                    我的成就
                  </Link>
                </li>
                <li className="mb-3">
                  <i className="fas fa-ticket-alt "></i>{' '}
                  <Link to="" className="text-dark">
                    我的優惠卷
                  </Link>
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
