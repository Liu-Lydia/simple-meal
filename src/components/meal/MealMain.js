import { useState, useEffect } from 'react'

import MealPic from './MealPic'
import MealTittle from './MealTittle'

function MealMain(props) {
  const { breadCrumbBool } = props
  const { selectMeal } = props

  const [data, setData] = useState({})

  const handleGetData = () => {
    const url = `http://localhost:4000/meal/selectMeal?sid=${selectMeal}`
    fetch(url, {
      method: 'get',
    })
      .then((r) => r.json())
      .then((obj) => {
        console.log(obj)
        setData({ ...obj })
      })
  }

  useEffect(() => {
    handleGetData()
  }, [selectMeal])
  return (
    <div class="row cha-main">
      <MealPic selectMeal={selectMeal} data={data} />
      <MealTittle
        breadCrumbBool={breadCrumbBool}
        selectMeal={selectMeal}
        data={data}
      />
      {/* {console.log(selectMeal)} */}
    </div>
  )
}
export default MealMain
