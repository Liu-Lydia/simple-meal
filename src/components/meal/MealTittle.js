import MultiLevelBreadCrumb from '../MultiLevelBreadCrumb'
import { Link } from 'react-router-dom'
import 'react-multi-carousel/lib/styles.css'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
function MealTittle(props) {
  const {
    breadCrumbBool,
    selectMeal,
    data,
    updateNum,
    setUpdateNum,
    setMealForRecipe,
  } = props
  const mealData = selectMeal
  const [meal, setMeal] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  // async function getUsersFromServer() {
  //   開啟載入指示
  //   setDataLoading(true)
  //   連接的伺服器資料網址
  //   const url = 'http://localhost:4000/meal/selectMeal'
  //   const url = 'http://localhost:4000/meal/typeA'
  //   注意header資料格式要設定，伺服器才知道是json格式
  //   const request = new Request(url, {
  //     method: 'get',
  //     // body: JSON.stringify(mealData),
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'appliaction/json',
  //     }),
  //   })

  //   const response = await fetch(request)
  //   const data = await response.json()
  //   console.log(data)
  //   // 設定資料
  //   setMeal(data)
  // }

  // useEffect(() => {
  //   getUsersFromServer()
  // }, [])

  // useEffect(() => {
  //   setTimeout(() => {
  //     setDataLoading(false)
  //   }, 1000)
  // }, [meal])

  // const loading = (
  //   <>
  //     <div className="d-flex justify-content-center">
  //       <div className="spinner-border" role="status">
  //         <span className="sr-only">Loading...</span>
  //       </div>
  //     </div>
  //   </>
  // )

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      cancelButton: 'select-btn-green txt-btn',
      title: 'cha-text cha-green',
      popup: 'msg-style',
    },
    buttonsStyling: false,
  })

  const handleGetMealToDelivery = (sid) => {
    const url = `http://localhost:4000/mealdelivery/getmealtodelivery?sid=${sid}`

    fetch(url, {
      method: 'get',
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((obj) => {
        setUpdateNum(updateNum + 1)
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
      {/* {data.length &&
        data.map((value, index) => {
          return ( */}
      <div className="cha-main-txt col-12 col-lg-7">
        <div className="cha-main-txt1 txt-sub1">
          {!breadCrumbBool && <MultiLevelBreadCrumb />}
        </div>
        <div className="cha-main-txt2 d-flex justify-content-center">
          <div className="cha-main-txt3  ">
            <h3 className="cha-mb3 cha-black cha-main-txt-main">
              {props.data.product_name}
            </h3>
            <h5 className="cha-gray cha-mb2 cha-main-txt-sub">
              {props.data.introduction}
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
                <span className="cha-gray txt-sub1">{props.data.cooktime}</span>
              </div>
              <div className="cha-mr3 cha-main-icon-sub2">
                <i className="fas fa-tag cha-star-big cha-green"></i>
                <span className="cha-gray txt-sub1">
                  {props.data.category_name}
                </span>
              </div>
              <div className=" cha-main-icon-sub3">
                <i className="fas fa-heart cha-star-big cha-green"></i>
                <span className="cha-gray txt-sub1">加入收藏</span>
              </div>
            </div>
            <div>
              <Link
                className="cha-btn-cart btn-green txt-btn cha-mr5"
                onClick={() => handleGetMealToDelivery(props.data.sid)}
              >
                加入訂單
              </Link>
              <Link
                to="/recipe"
                onClick={() =>
                  setMealForRecipe([props.data.sid, props.data.ingredient_id])
                }
                className="cha-btn-recipe txt-btn cha-rec-btn-bye btn-white"
              >
                查看食譜
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* )
        })} */}
    </>
  )
}

export default MealTittle
