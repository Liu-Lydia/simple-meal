import SearchBarHidden from '../components/meal/SearchBarHidden'
import MealMain from '../components/meal/MealMain'
import MealCards from '../components/meal/MealCards'
import MealMeun from '../components/meal/MealMeun'
import MealCart from '../components/meal/MealCart'
function Meal() {
  return (
    <>
      <div className="container justify-content-center d-flex">
        <div className="col-10 ">
          <SearchBarHidden />
          <MealMain />
          <MealCards />
        </div>
      </div>
      <MealMeun />
      <MealCart />
    </>
  )
}
export default Meal
