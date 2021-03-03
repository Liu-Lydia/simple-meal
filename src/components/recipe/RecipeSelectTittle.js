import { Link } from 'react-router-dom'
import { useState } from 'react'
function RecipeSelectTittle() {
  const [changeLine, setChangeLine] = useState(
    'col-4 col-lg-1 cha-rec-select-bar-line2'
  )

  return (
    <>
      <div className=" row justify-content-center cha-rec-select-bar cha-gray">
        <div className="col-12 col-lg-2 justify-content-between row">
          <button
            onClick={() => {
              setChangeLine(
                'cha-button col-4 col-lg-1 cha-rec-select-bar-line2 cha-rec-select-bar-line2-left'
              )
            }}
            className="cha-button txt-sub1 cha-rec-select-bar-txt cha-gray "
          >
            相似餐點
          </button>
          <button
            onClick={() => {
              setChangeLine(
                'cha-button col-4 col-lg-1 cha-rec-select-bar-line2 cha-rec-select-bar-line2-right'
              )
            }}
            className="cha-button txt-sub1 cha-rec-select-bar-txt cha-gray"
          >
            瀏覽紀錄
          </button>
        </div>
        <div className="col-12 cha-rec-select-bar-line"></div>
        <div className={changeLine}></div>
      </div>
    </>
  )
}
export default RecipeSelectTittle
