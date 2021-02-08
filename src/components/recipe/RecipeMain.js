import RecipePic from './RecipePic'
import RecipeTittle from './RecipeTittle'

function RecipeMain(props) {
  const { mealSid } = props
  return (
    <>
      <div className="cha-rec-main row">
        <RecipePic />
        <RecipeTittle mealSid={mealSid} />
      </div>
    </>
  )
}
export default RecipeMain
