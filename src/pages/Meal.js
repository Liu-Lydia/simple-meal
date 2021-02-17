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
  const [type, setType] = useState('all')
  const { breadCrumbBool, setBreadCrumbBool } = props
  const [selectMeal, setSelectMeal] = useState(1)
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
          <MealMain breadCrumbBool={breadCrumbBool} selectMeal={selectMeal} />
          {/* <MealMultiCarousel type={type} /> */}
          <MealMultiCarouselTest
            type={type}
            setType={setType}
            setSelectMeal={setSelectMeal}
          />
        </div>
      </div>
      {/* </div> */}
      <MealMeun type={type} setType={setType} />
      <MealCart />
    </>
  )
}
export default Meal
