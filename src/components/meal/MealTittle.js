import MultiLevelBreadCrumb from '../MultiLevelBreadCrumb'
import { Link } from 'react-router-dom'
import 'react-multi-carousel/lib/styles.css'
import { useState, useEffect } from 'react'
function MealTittle(props) {
  const { breadCrumbBool, selectMeal, data } = props
  const mealData = selectMeal
  console.log(data)
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
              有羅勒香和奶香的一頓餐點{props.data.introduction}
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
              <Link
                to="/cart"
                className="cha-btn-cart btn-green txt-btn cha-mr5"
              >
                加入訂單
              </Link>
              <Link to="/recipe" className="cha-btn-recipe txt-btn btn-white">
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
