import React, { useEffect, useState } from 'react'
import RecipeMain from '../components/recipe/RecipeMain'
import RecipeSearchBar from '../components/recipe/RecipeSearchBar'
import RecipeSelectTittle from '../components/recipe/RecipeSelectTittle'
import MealCart from '../components/meal/MealCart'
import CardTest from '../components/recipe/CardTest'
function Recipe(props) {
  const [mealSid, setMealSid] = useState('1')

  //切換麵包屑顯示
  const { breadCrumbBool, setBreadCrumbBool } = props
  useEffect(() => {
    setBreadCrumbBool(false)
  }, [])
  useEffect(() => {
    return () => {
      setBreadCrumbBool(true)
    }
  }, [])
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="col-10">
          <RecipeSearchBar breadCrumbBool={breadCrumbBool} />
          <RecipeMain mealSid={mealSid} />
          <RecipeSelectTittle />
          <CardTest />
          <MealCart />
        </div>
      </div>
    </>
  )
}
export default Recipe
