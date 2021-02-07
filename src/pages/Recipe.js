import RecipeMain from '../components/recipe/RecipeMain'
import RecipeSearchBar from '../components/recipe/RecipeSearchBar'
import RecipeSelectTittle from '../components/recipe/RecipeSelectTittle'
import RecipeCards from '../components/recipe/RecipeCards'
import MealCart from '../components/meal/MealCart'
function Recipe() {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="col-10">
          <RecipeSearchBar />
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
