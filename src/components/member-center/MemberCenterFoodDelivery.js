import React, { useEffect, useState, nav } from 'react'
import MemberCenterNavbar from './MemberCenterNavbar'
import FoodDeliverys1 from './FoodDeliverys1'
import FoodDeliverys2 from './FoodDeliverys2'
import { Link } from 'react-router-dom'

function MemberCenterFoodDelivery() {
  const [tittle, setTittle] = useState('testa')

  const selected = () => {
    switch (tittle) {
      case 'testa':
        return <FoodDeliverys1 />
      case 'testb':
        return <FoodDeliverys2 />
    }
  }

  const text = (
    <>
      <h4 className="mb-3 mt-3 ml-2 d-none d-sm-none d-md-none d-lg- d-xl-block ">
        配送餐點
      </h4>
      <div className="d-block d-sm-block d-md-block d-lg-block d-xl-none text-center">
        <h4>配送餐點</h4>
      </div>
      <div className="d-flex offset-3 mb-2 ">
        <img
          src="../../../public/img/member-center/fish4.jpeg"
          className="rounded-circle box1 mt-3 d-block d-sm-block d-md-none d-lg-none d-xl-none mb-2 mr-2"
        />
        <div className="mt-4 d-block d-sm-block d-md-none d-lg-none d-xl-none  d-inline">
          admin
        </div>
        <div className="btn border dropdown-toggle txt-cap1 mr-2 mb-4  col-12 d-block d-sm-block d-md-none d-lg-none d-xl-none ">
          回上頁
        </div>
      </div>{' '}
    </>
  )

  return (
    <>
      <div className="container">
        <div className="row ">
          <MemberCenterNavbar />

          <div className=" col-md-12 col-lg-12 col-sm-12 col-xl-8  col-12 ">
            <div className="col-md-10 col-lg-10 col-sm-10 col-xl-10 col-10 mx-auto">
              <div className="mt-4"></div>
              {text}

              <div className="col-12 col-sm-12 col-md-12 mt-">
                <div className="d-flex  txt-btn">
                  <Link
                    className="col-3 cha-rec-sel1 cha-rec-sel1-active"
                    onClick={() => setTittle('testa')}
                  >
                    已配送
                  </Link>
                  <Link
                    className="col-3 cha-rec-sel1"
                    onClick={() => setTittle('testb')}
                  >
                    未配送
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
