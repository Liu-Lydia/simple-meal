import React, { useEffect, useState } from 'react'
import RecipeMain from '../components/loverecipe/RecipeMain'
import RecipeSearchBar from '../components/loverecipe/RecipeSearchBar'
import RecipeSelectTittle from '../components/loverecipe/RecipeSelectTittle'
import MealCart from '../components/meal/MealCart'
import RecipeCards from '../components/loverecipe/RecipeCards'
import RecipeStep from '../components/loverecipe/RecipeStep'
function LoveRecipe(props) {
  //切換麵包屑顯示
  const { breadCrumbBool, setBreadCrumbBool, meunForRecipe } = props
  //把所有餐點叫出來
  const [allmeal, setAllmeal] = useState([])
  //計數器，用來及時更新右側購物車資料
  const [updateNum, setUpdateNum] = useState(0)
  const [dataLoadingforTittle, setDataLoadingforTittle] = useState(false)
  //紀錄預設給的資訊，還有meal送過來的props(meunForRecipe)也是
  //設定點選菜單卡，送一個dataloading給主標題和圖片
  //兩個都是要來改食譜資料了useState
  const [sidAndIngredient, setSidAndIngredient] = useState([
    1,
    '1,2,3,4,5,6,7,8,9,10',
  ])
  const [mealType, setMealType] = useState('loveall')
  // const sid = props.meunForRecipe.sid || '2'
  // const sid2 = props.meunForRecipe.ingredient_id || '1,2'
  //   const url = `http://localhost:4000/meal/getmealtodelivery?sid=${sid}&ingredient_id=${sid2}`
  function handleGetAllMeal() {
    const url = `http://localhost:4000/meal/${mealType}`

    fetch(url, {
      method: 'get',
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((obj) => {
        setAllmeal(obj)
      })
  }

  useEffect(() => {
    handleGetAllMeal()
    meunForRecipe.length !== 0 && setSidAndIngredient(meunForRecipe)
  }, [])
  useEffect(() => {
    handleGetAllMeal()
    meunForRecipe.length !== 0 && setSidAndIngredient(meunForRecipe)
  }, [mealType])

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
          <RecipeMain
            meunForRecipe={meunForRecipe}
            allmeal={allmeal}
            sidAndIngredient={sidAndIngredient}
            updateNum={updateNum}
            setUpdateNum={setUpdateNum}
            dataLoadingforTittle={dataLoadingforTittle}
            setDataLoadingforTittle={setDataLoadingforTittle}
          />
          <RecipeSelectTittle setMealType={setMealType} />
          <RecipeCards
            allmeal={allmeal}
            setAllmeal={setAllmeal}
            setSidAndIngredient={setSidAndIngredient}
            setDataLoadingforTittle={setDataLoadingforTittle}
          />
          <MealCart updateNum={updateNum} />
        </div>
      </div>
    </>
  )
}
export default LoveRecipe
