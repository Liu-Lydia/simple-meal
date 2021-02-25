import React, { useEffect, useState } from 'react'

import SearchBarHidden from '../components/meal/SearchBarHidden'
import MealMain from '../components/meal/MealMain'
// import MealCards from '../components/meal/MealCards'
import MealMeun from '../components/meal/MealMeun'
import MealCart from '../components/meal/MealCart'
import MealMultiCarousel from '../components/meal/MealMultiCarousel'
import MealMultiCarouselTest from '../components/meal/MealMultiCarouselTest'
function Meal(props) {
  // {麵包屑bool, 改變麵包屑}
  //抓到的全部餐點資料
  const [meal, setMeal] = useState([])
  //抓到的全部餐點資料(只給搜尋用)
  const [mealDisplay, setMealDisplay] = useState([])
  //設定跟哪個路由要分類，預設是抓全部給meal
  const [type, setType] = useState('all')
  //麵包屑
  const { breadCrumbBool, setBreadCrumbBool,setMealForRecipe } = props
  //點餐點卡會拿到的sid，對應資料顯示在圖片，標題裡
  const [selectMeal, setSelectMeal] = useState(1)
  //計數器，用來及時更新右側購物車資料
  const [updateNum, setUpdateNum] = useState(0)
  //開啟載入指示
  const [dataLoading, setDataLoading] = useState(false)
//設定點選菜單卡，送一個dataloading給主標題和圖片
const  [dataLoadingforTittle, setDataLoadingforTittle] = useState(false)
  async function getUsersFromServer() {
    // 開啟載入指示
    setDataLoading(true)
    // 連接的伺服器資料網址
    const url = `http://localhost:4000/meal/${type}`
    // const url = 'http://localhost:4000/meal/typeA'
    console.log(type)
    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    // 設定資料
    setMeal(data)
    setMealDisplay(data)
  }

  useEffect(() => {
    getUsersFromServer()
  }, [])

  useEffect(() => {
    getUsersFromServer()
  }, [type])

  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 2000)
  }, [meal])

  // 掛載時改動麵包屑位置
  useEffect(() => {
    setBreadCrumbBool(false)
  }, [])

  // 卸載時還原麵包屑位置
  useEffect(() => {
    return () => {
      setBreadCrumbBool(true)
    }
  }, [])

  return (
    <>
      {/* <div className="container d-flex"> */}
      <div class="container justify-content-center d-flex">
        <div className="col-10">
          <SearchBarHidden />
          <MealMain
            breadCrumbBool={breadCrumbBool}
            selectMeal={selectMeal}
            updateNum={updateNum}
            setUpdateNum={setUpdateNum}
            setMealForRecipe={setMealForRecipe}
            dataLoadingforTittle={dataLoadingforTittle}
            setDataLoadingforTittle={setDataLoadingforTittle}
          />
          {/* <MealMultiCarousel type={type} /> */}
          <MealMultiCarouselTest
            setType={setType}
            setMeal={setMeal}
            meal={meal}
            dataLoading={dataLoading}
            mealDisplay={mealDisplay}
            setSelectMeal={setSelectMeal}
            setDataLoadingforTittle={setDataLoadingforTittle}
          />
        </div>
      </div>
      {/* </div> */}
      <MealMeun
        type={type}
        setType={setType}
        meal={meal}
        setMealDisplay={setMealDisplay}
        setDataLoading={setDataLoading}
      />
      <MealCart updateNum={updateNum} />
    </>
  )
}
export default Meal
