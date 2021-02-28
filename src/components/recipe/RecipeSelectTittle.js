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
          <Link
            onClick={() => {
              setChangeLine(
                'col-4 col-lg-1 cha-rec-select-bar-line2 cha-rec-select-bar-line2-left'
              )
            }}
            className="txt-sub1 cha-rec-select-bar-txt cha-gray "
          >
            相似餐點
          </Link>
          <Link
            onClick={() => {
              setChangeLine(
                'col-4 col-lg-1 cha-rec-select-bar-line2 cha-rec-select-bar-line2-right'
              )
            }}
            className="txt-sub1 cha-rec-select-bar-txt cha-gray"
          >
            瀏覽紀錄
          </Link>
        </div>
        <div className="col-12 cha-rec-select-bar-line"></div>
        <div className={changeLine}></div>
      </div>
    </>
  )
}
export default RecipeSelectTittle
