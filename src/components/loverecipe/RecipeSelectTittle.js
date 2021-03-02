import { Link } from 'react-router-dom'
import { useState } from 'react'
function RecipeSelectTittle(porps) {
  const { setMealType } = porps
  const [changeLine, setChangeLine] = useState(
    ' col-4 col-lg-1 cha-rec-select-bar-line2-love'
  )

  return (
    <>
      <div className=" row justify-content-center cha-rec-select-bar cha-gray">
        <div className="col-12 col-lg-7 justify-content-between row">
          <button
            onClick={() => {
              setChangeLine(
                'col-4 col-lg-1 cha-rec-select-bar-line2-love cha-rec-select-bar-line2-1'
              )
              setMealType('loveall')
            }}
            className="cha-button txt-sub1 cha-rec-select-bar-txt cha-gray "
          >
            所有餐點
          </button>
          <button
            onClick={() => {
              setChangeLine(
                ' col-4 col-lg-1 cha-rec-select-bar-line2 cha-rec-select-bar-line2-2'
              )
              setMealType('loveTypeA')
            }}
            className="cha-button txt-sub1 cha-rec-select-bar-txt cha-gray "
          >
            素食餐點
          </button>
          <button
            onClick={() => {
              setChangeLine(
                ' col-4 col-lg-1 cha-rec-select-bar-line2 cha-rec-select-bar-line2-3'
              )
              setMealType('loveTypeB')
            }}
            className="cha-button txt-sub1 cha-rec-select-bar-txt cha-gray "
          >
            美式料理
          </button>
          <button
            onClick={() => {
              setChangeLine(
                ' col-4 col-lg-1 cha-rec-select-bar-line2 cha-rec-select-bar-line2-4'
              )
              setMealType('loveTypeC')
            }}
            className="cha-button txt-sub1 cha-rec-select-bar-txt cha-gray "
          >
            中式料理
          </button>
          <button
            onClick={() => {
              setChangeLine(
                ' col-4 col-lg-1 cha-rec-select-bar-line2 cha-rec-select-bar-line2-5'
              )
              setMealType(' loveTypeD')
            }}
            className="cha-button txt-sub1 cha-rec-select-bar-txt cha-gray "
          >
            法式料理
          </button>
          <button
            onClick={() => {
              setChangeLine(
                ' col-4 col-lg-1 cha-rec-select-bar-line2 cha-rec-select-bar-line2-6'
              )
              setMealType(' loveTypeE')
            }}
            className="cha-button txt-sub1 cha-rec-select-bar-txt cha-gray"
          >
            義式料理
          </button>
        </div>
        <div className="col-12 cha-rec-select-bar-line"></div>
        <div className={changeLine}></div>
      </div>
    </>
  )
}
export default RecipeSelectTittle
