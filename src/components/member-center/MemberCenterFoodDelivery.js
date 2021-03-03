import React, { useEffect, useState, nav } from 'react'
import MemberCenterNavbar from './MemberCenterNavbar'
import FoodDeliverys1 from './FoodDeliverys1'
import FoodDeliverys2 from './FoodDeliverys2'
import { Link } from 'react-router-dom'

function MemberCenterFoodDelivery() {
  const [Coupon1, setCoupon1] = useState([])
  const [tittle, setTittle] = useState('testa')
  const [tittleStyleOne, setTittleStyleOne] = useState(
    'col-3 cha-rec-sel1-active'
  )
  const [tittleStyleTwo, setTittleStyleTwo] = useState('col-3 cha-rec-sel1')

  const selected = () => {
    switch (tittle) {
      case 'testa':
        return <FoodDeliverys1 />
      case 'testb':
        return <FoodDeliverys2 />
    }
  }
  const getDataFromServer1 = async () => {
    //模擬和伺服器要資料
    const response = await fetch('http://localhost:4000/membercenter/info', {
      method: 'get',
      credentials: 'include',
    })
    const data = await response.json()
    //最後設定要到狀態中
    setCoupon1(data)
  }

  useEffect(() => {
    getDataFromServer1()
  }, [])
  const text = (
    <>
      <div className="h4 ee d-none d-xl-block mb-3 ml-3 mt-3">配送餐點</div>
      <div className="mt-5 h4 ee col-12 text-center  d-block d-xl-none">
        配送餐點
      </div>
      <div className="d-flex offset-3 mb-2 ">
        {Coupon1.map((v) => (
          <li className="d-bolck d-lg-none box1 mr-4 mx-auto mx-sm-0 mx-lg-0 mb-2">
            <img
              className="cha-cart-user-img "
              src={`http://localhost:3015/img/member-center/${v.avater}`}
              alt=""
            />
          </li>
        ))}

        {Coupon1.map((v) => (
          <li className="d-block d-lg-none text-nowrap col-8 col-sm-10 mx-md-0 mx-auto">
            會員姓名:
            <span>{v.name}</span>
          </li>
        ))}
      </div>{' '}
      <div className="btn border dropdown-toggle txt-cap1 mr-2 mb-4  col-12 d-block d-sm-block d-md-none d-lg-none d-xl-none ">
        回上頁
      </div>
    </>
  )

  return (
    <>
      <div className="container">
        <div className="row ml-2">
          <MemberCenterNavbar />
          <div className="col-12 col-xl-8 ml-5">
            <div className="col-10 mx-auto mx-xl-0 ">
              {text}

              <div className="col-12 ">
                <div className="d-flex  txt-btn mb-4 mt-5 ">
                  <Link
                    className={tittleStyleOne}
                    onClick={() => {
                      setTittle('testa')
                      setTittleStyleOne('col-3 cha-rec-sel1-active')
                      setTittleStyleTwo('col-3 cha-rec-sel1')
                    }}
                  >
                    未配送
                  </Link>
                  <Link
                    className={tittleStyleTwo}
                    onClick={() => {
                      setTittle('testb')
                      setTittleStyleOne('col-3 cha-rec-sel1')
                      setTittleStyleTwo('col-3 cha-rec-sel1-active')
                    }}
                  >
                    已配送
                  </Link>
                </div>
                <div className="">{selected()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MemberCenterFoodDelivery
