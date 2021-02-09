import React, { useEffect, useState } from 'react'
import TestOne from './TestOne'
import TestTwo from './TestTwo'
import RecipeIngredient from './RecipeIngredient'
import { Link } from 'react-router-dom'

function RecipeTittle(props) {
  //選擇標籤頁
  const [tittle, setTittle] = useState('testb')
  //選擇營養成分,使用器具,食材清單
  const { mealSid } = props

  const selected = () => {
    switch (tittle) {
      case 'testa':
        return <TestOne mealSid={mealSid} />
      case 'testb':
        return <TestTwo mealSid={mealSid} />
      case 'testc':
        return <RecipeIngredient mealSid={mealSid} />
    }
  }
  return (
    <>
      <div className="cha-rec-main-txt col-12 col-lg-7">
        <div className="px-0 px-sm-auto cha-rec-txt-up col-10 col-lg-7">
          <div className=" cha-rec-main-txt-all">
            <h3 className="cha-mb3 cha-black cha-rec-main-txt-main">
              羅勒鮮蔬通心麵
            </h3>
            <h5 className="cha-gray cha-mb2 cha-rec-txt12">
              有羅勒香和奶香的一頓餐點
            </h5>
            <div className="cha-rec-star cha-green cha-mb2">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <div className=" cha-mb2 cha-rec-main-icon-sub d-flex">
              <div className="cha-mr3">
                <i className="far fa-clock cha-rec-star-big cha-green cha-rec-icon12"></i>
                <span className="cha-gray txt-sub1 cha-rec-txt12">40分鐘</span>
              </div>
              <div className="cha-mr3">
                <i className="fas fa-tag cha-rec-star-big cha-green cha-rec-icon12"></i>
                <span className="cha-gray txt-sub1 cha-rec-txt12">
                  義式料理
                </span>
              </div>
              <div className="cha-main-icon-sub3">
                <i className="fas fa-heart cha-rec-star-big cha-green cha-rec-icon12"></i>
                <span className="cha-rec-add-txt cha-gray txt-sub1">
                  加入收藏
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="cha-rec-txt-down px-0 col-12 col-lg-7">
          <div className="d-flex justify-content-between txt-btn">
            <Link
              className="col-3 cha-rec-sel1 cha-rec-sel1-active"
              onClick={() => setTittle('testa')}
            >
              營養成分
            </Link>
            <Link
              className="col-3 cha-rec-sel1"
              onClick={() => setTittle('testb')}
            >
              使用器具
            </Link>
            <Link
              onClick={() => setTittle('testc')}
              className="col-3 cha-rec-sel1"
            >
              食材清單
            </Link>
          </div>
          <div className="cha-rec-sel-box  txt-body cha-gray">{selected()}</div>
          <div className="cha-rec-btns d-flex justify-content-between">
            <a href="" className="btn-white txt-btn">
              加入訂單
            </a>
            <a href="" className="btn-white txt-btn cha-rec-btn-bye">
              查看食譜步驟
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
export default RecipeTittle
