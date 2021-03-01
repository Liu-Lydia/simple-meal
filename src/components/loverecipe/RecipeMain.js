import { useEffect, useState } from 'react'
import RecipePic from './RecipePic'
import RecipeTittle from './RecipeTittle'

function RecipeMain(props) {
  const {
    allmeal,
    meunForRecipe,
    sidAndIngredient,
    updateNum,
    setUpdateNum,
    dataLoadingforTittle,
    setDataLoadingforTittle,
  } = props

  const [getrecipeData, setGetRecipeData] = useState({
    mealData: [
      {
        sid: 0,
        product_name: '',
        product_id: '',
        price: 0,
        on_sale: 0,
        vegetarian_food: 0,
        introduction: '',
        category_id: '',
        category_name: '',
        ingredient_id: '',
        recipe_id: '',
        cooktime: '',
        created_at: '',
      },
    ],
    recipeData: [
      {
        sid: 0,
        recipe_name: '',
        recipe_pic_01: '',
        recipe01: '',
        recipe_pic_02: '',
        recipe02: '',
        recipe_pic_03: '',
        recipe03: '',
        recipe_pic_04: '',
        recipe04: '',
        recipe_pic_05: '',
        recipe05: '',
        recipe_pic_06: '',
        recipe06: '',
        recipe_pic_07: '',
        recipe07: '',
      },
    ],
    ingredientsData: [
      {
        sid: 0,
        ingredient_name: '',
        ingredient_id: '',
      },
      {
        sid: 9,
        ingredient_name: '',
        ingredient_id: '',
      },
    ],
  })
  const thisSid = meunForRecipe.sid || sidAndIngredient[0]

  const thisIngredientId = meunForRecipe.ingredient_id || sidAndIngredient[1]
  function handleGetOneMeal() {
    const url = `http://localhost:4000/meal/getmealtodelivery?sid=${sidAndIngredient[0]}&ingredient_id=${sidAndIngredient[1]}`

    fetch(url, {
      method: 'get',
      creadentials: 'include',
    })
      .then((r) => r.json())
      .then((obj) => {
        setGetRecipeData(obj)
      })
  }
  useEffect(() => {
    handleGetOneMeal()
  }, [sidAndIngredient])
  console.log(getrecipeData)
  return (
    <>
      <div className="cha-rec-main row">
        <RecipePic
          getrecipeData={getrecipeData}
          dataLoadingforTittle={dataLoadingforTittle}
          setDataLoadingforTittle={setDataLoadingforTittle}
        />
        <RecipeTittle
          getrecipeData={getrecipeData}
          updateNum={updateNum}
          setUpdateNum={setUpdateNum}
          dataLoadingforTittle={dataLoadingforTittle}
          setDataLoadingforTittle={setDataLoadingforTittle}
        />
      </div>
    </>
  )
}
export default RecipeMain
