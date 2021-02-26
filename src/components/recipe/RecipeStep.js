import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function RecipeStep(props) {
  const [pageButton, setPageButton] = useState(1)
  const { setRecipeStepDisplay } = props
  console.log(pageButton)
  return (
    <>
      <div
        className="cha-recipe-step d-flex justify-content-center"
        style={props.recipeStepDisplay}
      >
        <div className="msg-style cha-step-msg col-6 my-auto px-5 py-4">
          <div className="col cha-step-top d-flex justify-content-between">
            <div>step {pageButton}</div>
            <div>
              <Link
                onClick={() => {
                  setRecipeStepDisplay({ visibility: 'hidden' })
                }}
              >
                <i class="fas fa-times"></i>
              </Link>
            </div>
          </div>
          <div className="col cha-step-mid d-flex ">
            <div className="col-6 cha-step-mid my-auto ">
              <img
                className=" "
                style={{ width: '100%' }}
                src="http://localhost:3015/img/recipe/american01_01.jpg"
                alt=""
              />
            </div>
            <div className="col-6 cha-step-mid my-auto cha-text cha-green">
              <p>
                燒水壺 將烤箱預熱至220°C / 200°C（風扇）/ 425°F /氣體7
                將白土豆洗淨切成3厘米的立方體
                將它們放入帶有匹配蓋的大鍋中，加熱時要蓋上鍋蓋，鍋中要加2英寸長的鹽（開水）
              </p>
            </div>
          </div>
          <div className="col cha-step-bottom d-flex justify-content-between ">
            <Link
              className=" cha-step-left-bottom my-auto txt-body"
              onClick={() => {
                setPageButton(pageButton > 1 ? pageButton - 1 : 1)
              }}
            >
              Prev step
            </Link>
            <Link
              className=" cha-step-right-bottom my-auto txt-body"
              onClick={() => {
                setPageButton(pageButton < 7 ? pageButton + 1 : 7)
              }}
            >
              Next step
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default RecipeStep
