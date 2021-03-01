import { Link } from 'react-router-dom'
import { useState } from 'react'
function RecipeSelectTittle(porps) {
  const { setMealType } = porps
  const [changeLine, setChangeLine] = useState(
    'col-4 col-lg-1 cha-rec-select-bar-line2-love'
  )

  return (
    <>
      <div className=" row justify-content-center cha-rec-select-bar cha-gray">
        <div className="col-12 col-lg-7 justify-content-between row">
          <Link
            onClick={() => {
              setChangeLine(
                'col-4 col-lg-1 cha-rec-select-bar-line2-love cha-rec-select-bar-line2-1'
              )
              setMealType('loveall')
            }}
            className="txt-sub1 cha-rec-select-bar-txt cha-gray "
          >
            所有餐點
          </Link>
          <Link
            onClick={() => {
              setChangeLine(
                'col-4 col-lg-1 cha-rec-select-bar-line2 cha-rec-select-bar-line2-2'
              )
              setMealType('loveTypeA')
            }}
            className="txt-sub1 cha-rec-select-bar-txt cha-gray "
          >
            素食餐點
          </Link>
          <Link
            onClick={() => {
              setChangeLine(
                'col-4 col-lg-1 cha-rec-select-bar-line2 cha-rec-select-bar-line2-3'
              )
              setMealType('loveTypeB')
            }}
            className="txt-sub1 cha-rec-select-bar-txt cha-gray "
          >
            美式料理
          </Link>
          <Link
            onClick={() => {
              setChangeLine(
                'col-4 col-lg-1 cha-rec-select-bar-line2 cha-rec-select-bar-line2-4'
              )
              setMealType('loveTypeC')
            }}
            className="txt-sub1 cha-rec-select-bar-txt cha-gray "
          >
            中式料理
          </Link>
          <Link
            onClick={() => {
              setChangeLine(
                'col-4 col-lg-1 cha-rec-select-bar-line2 cha-rec-select-bar-line2-5'
              )
              setMealType('loveTypeD')
            }}
            className="txt-sub1 cha-rec-select-bar-txt cha-gray "
          >
            法式料理
          </Link>
          <Link
            onClick={() => {
              setChangeLine(
                'col-4 col-lg-1 cha-rec-select-bar-line2 cha-rec-select-bar-line2-6'
              )
              setMealType('loveTypeE')
            }}
            className="txt-sub1 cha-rec-select-bar-txt cha-gray"
          >
            義式料理
          </Link>
        </div>
        <div className="col-12 cha-rec-select-bar-line"></div>
        <div className={changeLine}></div>
      </div>
    </>
  )
}
export default RecipeSelectTittle
