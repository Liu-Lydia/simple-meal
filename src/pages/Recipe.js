import React, { useEffect, useState } from 'react'
import RecipeMain from '../components/recipe/RecipeMain'
import RecipeSearchBar from '../components/recipe/RecipeSearchBar'
import RecipeSelectTittle from '../components/recipe/RecipeSelectTittle'
import RecipeCards from '../components/recipe/RecipeCards'
import MealCart from '../components/meal/MealCart'
function Recipe(props) {
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
          <RecipeMain />
          <RecipeSelectTittle />
          <RecipeCards />
          <MealCart />
        </div>
      </div>
    </>
  )
}
export default Recipe
