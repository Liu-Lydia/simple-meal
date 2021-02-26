import React, { useEffect, useState, nav } from 'react'
import MemberCenterNavbar from './MemberCenterNavbar'
import SurpriseKitchen1 from './SurpriseKitchen1'
import SurpriseKitchen2 from './SurpriseKitchen2'
import SurpriseKitchenAll from './SurpriseKitchenAll'
import { Link } from 'react-router-dom'

function MemberCenterSurpriseKitchen() {
  const [tittle, setTittle] = useState('testa')

  const selected = () => {
    switch (tittle) {
      case 'testa':
        return <SurpriseKitchenAll />
      case 'testb':
        return <SurpriseKitchen1 />
      case 'testc':
        return <SurpriseKitchen2 />
    }
  }

  const text = (
    <>
      <div className="h3 ee d-none d-xl-block mb-3 ml-3 mt-3">驚喜廚房</div>
      <div className="mt-5 h3 ee col-12 text-center  d-block d-xl-none">
        驚喜廚房
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

          <div className="col-12 col-xl-8 ml-5">
            <div className="col-10 mx-auto mx-xl-0 ">
              <div className="mt-4"></div>
              {text}

              <div className="col-12 col-sm-12 col-md-12 mt-5">
                <div className="d-flex  txt-btn">
                  <Link
                    className="col-3 cha-rec-sel1 cha-rec-sel1-active"
                    onClick={() => setTittle('testa')}
                  >
                    全部
                  </Link>
                  <Link
                    className="col-3 cha-rec-sel1 "
                    onClick={() => setTittle('testb')}
                  >
                    進行中
                  </Link>
                  <Link
                    className="col-3 cha-rec-sel1"
                    onClick={() => setTittle('testc')}
                  >
                    已完成
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
export default MemberCenterSurpriseKitchen
