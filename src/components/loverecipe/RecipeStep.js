import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function RecipeStep(props) {
  const [pageButton, setPageButton] = useState(1)
  const { setRecipeStepDisplay, getrecipeData } = props
//   console.log(pageButton)
  //   const recipeStepData = () => {
  //     switch (pageButton) {
  //       case 1:
  //         return [getrecipeData.recipeData[0].recipe01, getrecipeData.recipeData[0].recipe_pic_01]
  //       case 2:
  //         return [getrecipeData.recipeData[0].recipe02, getrecipeData.recipeData[0].recipe_pic_02]
  //       case 3:
  //         return [getrecipeData.recipeData[0].recipe03, getrecipeData.recipeData[0].recipe_pic_03]
  //       case 4:
  //         return [getrecipeData.recipeData[0].recipe04, getrecipeData.recipeData[0].recipe_pic_04]
  //       case 5:
  //         return [getrecipeData.recipeData[0].recipe05, getrecipeData.recipeData[0].recipe_pic_05]
  //       case 6:
  //         return [getrecipeData.recipeData[0].recipe06, getrecipeData.recipeData[0].recipe_pic_06]
  //       case 7:
  //         return [getrecipeData.recipeData[0].recipe07, getrecipeData.recipeData[0].recipe_pic_07]
  //     }
  //   }

  const a = getrecipeData.recipeData[0]
  //a[b] = getrecipeData.recipeData[0].recipe07
  const b = 'recipe0' + pageButton.toString()
  //a[c] = getrecipeData.recipeData[0].recipe_pic_07
  const c = 'recipe_pic_0' + pageButton.toString()

  //   const test = recipeStepData()
  //   console.log(test[0])
  //   console.log(getrecipeData.recipeData[0].recipe01)
  //   useEffect(() => {
  //     recipeStepData()
  //   }, [pageButton])
  return (
    <>
      <div
        className="cha-recipe-step d-flex justify-content-center"
        style={props.recipeStepDisplay}
      >
        <div className="msg-style cha-step-msg col-6 my-auto px-5 py-4">
          <div className="col cha-step-top d-flex justify-content-between">
            <h6 className=" cha-gray">step {pageButton}</h6>
            <div>
              <button className="cha-button"
                onClick={() => {
                  setRecipeStepDisplay({
                    visibility: 'hidden',
                    opacity: '0',
                    transition: '.5s',
                  })
                }}
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
          <div className="col cha-step-mid d-flex ">
            <div className="col-6 cha-step-mid my-auto ">
              <img
                className=" "
                style={{ width: '100%' }}
                src={`http://localhost:3015/img/recipe/${a[c]}.jpg`}
                alt=""
              />
            </div>
            <div className="col-6 cha-step-mid my-auto cha-text cha-green">
              {/* <p>{test[0]}</p> */}
              <p className="txt-sub1">{a[b]}</p>
            </div>
          </div>
          <div className="col cha-step-bottom d-flex justify-content-between ">
            <button
              className="cha-button cha-step-left-bottom my-auto txt-body"
              onClick={() => {
                setPageButton(pageButton > 1 ? pageButton - 1 : 1)
              }}
            >
              Prev step
            </button>
            <button
              className="cha-button cha-step-right-bottom my-auto txt-body"
              onClick={() => {
                setPageButton(pageButton < 7 ? pageButton + 1 : 7)
              }}
            >
              Next step
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default RecipeStep
