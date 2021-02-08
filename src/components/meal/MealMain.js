import MealPic from './MealPic'
import MealTittle from './MealTittle'
function MealMain(props) {
  const { breadCrumbBool } = props
  return (
    <div class="row cha-main">
      <MealPic />
      <MealTittle breadCrumbBool={breadCrumbBool} />
    </div>
  )
}
export default MealMain
