import React, { useEffect, useState } from 'react'
import Nutrition from './Nutrition'
import Kitchenware from './Kitchenware'
import RecipeIngredient from './RecipeIngredient'
import { Link, useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
function RecipeTittle(props) {
  //getrecipeData,傳送到畫面的食譜全資料(一筆)
  //updateNum, setUpdateNum,更新cart畫面的計數器
  const { getrecipeData, updateNum, setUpdateNum } = props

  //選擇標籤頁
  const [tittle, setTittle] = useState('testa')
  //設定標籤頁class
  const [tittleStyleOne, setTittleStyleOne] = useState(
    'col-3 cha-rec-sel1-active'
  )
  const [tittleStyleTwo, setTittleStyleTwo] = useState('col-3 cha-rec-sel1')
  const [tittleStyleThree, setTittleStyleThree] = useState('col-3 cha-rec-sel1')

  //選擇營養成分,使用器具,食材清單
  const history = useHistory()
  const selected = () => {
    switch (tittle) {
      case 'testa':
        return <Nutrition />
      case 'testb':
        return <Kitchenware />
      case 'testc':
        return <RecipeIngredient getrecipeData={getrecipeData} />
    }
  }
  // console.log(getrecipeData.mealData[0].sid)
  // console.log(getrecipeData.recipeData[0])
  // console.log(getrecipeData.ingredientsData)

  //sweatalert2設定檔
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      cancelButton: 'select-btn-green txt-btn',
      title: 'cha-text cha-green',
      popup: 'msg-style',
    },
    buttonsStyling: false,
  })
  //傳送資料到cart
  const handleGetMealToDelivery = (sid) => {
    const url = `http://localhost:4000/mealdelivery/getmealtodelivery?sid=${sid}`

    fetch(url, {
      method: 'get',
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((obj) => {
        setUpdateNum(updateNum + 1)
        //送出sweatalert2
        swalWithBootstrapButtons.fire({
          icon: 'success',
          title: obj.msg,
          showConfirmButton: false,
          padding: '25px',
          showCancelButton: true,
          cancelButtonText: '確定',
        })
      })

    // .then(() => alert('以加入購物車'))
  }

  return (
    <>
      <div className="cha-rec-main-txt col-12 col-lg-7">
        <div className="px-0 px-sm-auto cha-rec-txt-up col-10 col-lg-7">
          <div className=" cha-rec-main-txt-all">
            <h3 className="cha-mb3 cha-black cha-rec-main-txt-main">
              {getrecipeData.mealData[0].product_name}
            </h3>
            <h5 className="cha-gray cha-mb2 cha-rec-txt12">
              {getrecipeData.mealData[0].introduction}
            </h5>
            <div className="cha-rec-star cha-green cha-mb2">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <Link
                onClick={() => {
                  history.goBack()
                }}
              >
                <i className="far fa-star"></i>
              </Link>
            </div>
            <div className=" cha-mb2 cha-rec-main-icon-sub d-flex">
              <div className="cha-mr3">
                <i className="far fa-clock cha-rec-star-big cha-green cha-rec-icon12"></i>
                <span className="cha-gray txt-sub1 cha-rec-txt12">
                  {getrecipeData.mealData[0].cooktime}
                </span>
              </div>
              <div className="cha-mr3">
                <i className="fas fa-tag cha-rec-star-big cha-green cha-rec-icon12"></i>
                <span className="cha-gray txt-sub1 cha-rec-txt12">
                  {getrecipeData.mealData[0].category_name}
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
              className={tittleStyleOne}
              onClick={() => {
                setTittle('testa')
                setTittleStyleOne('col-3 cha-rec-sel1-active')
                setTittleStyleTwo('col-3 cha-rec-sel1')
                setTittleStyleThree('col-3 cha-rec-sel1')
              }}
            >
              營養成分
            </Link>
            <Link
              className={tittleStyleTwo}
              onClick={() => {
                setTittle('testb')
                setTittleStyleOne('col-3 cha-rec-sel1')
                setTittleStyleTwo('col-3 cha-rec-sel1-active')
                setTittleStyleThree('col-3 cha-rec-sel1')
              }}
            >
              使用器具
            </Link>
            <Link
              className={tittleStyleThree}
              onClick={() => {
                setTittle('testc')
                setTittleStyleOne('col-3 cha-rec-sel1')
                setTittleStyleTwo('col-3 cha-rec-sel1')
                setTittleStyleThree('col-3 cha-rec-sel1-active')
              }}
            >
              食材清單
            </Link>
          </div>
          <div className="cha-rec-sel-box  txt-body cha-gray">{selected()}</div>
          <div className="cha-rec-btns d-flex justify-content-between">
            <Link
              onClick={() =>
                handleGetMealToDelivery(getrecipeData.mealData[0].sid)
              }
              className="btn-white txt-btn"
            >
              加入訂單
            </Link>
            <Link className="btn-white txt-btn cha-rec-btn-bye">
              查看食譜步驟
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default RecipeTittle
