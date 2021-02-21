import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function MealMeun(props) {
  const [meunIconBig, setMealIconBig] = useState('cha-meun')
  const [meunIconSmell, setMealIconSmell] = useState(
    'cha-meun-icon cha-meun-hidden'
  )
  const mealiconbig = 'cha-meun'
  const mealiconsmell = 'cha-meun-icon cha-meun-open'
  const mealiconsmellhidden = 'cha-meun-icon cha-meun-hidden'
  const mealicobighidden = 'cha-meun cha-meun-hidden'
  const { type, setType } = props

  return (
    <>
      <Link
        className="cha-gray cha-icon"
        onClick={() => {
          setMealIconBig(mealiconbig)
          setMealIconSmell(mealiconsmellhidden)
        }}
      >
        <div className={meunIconSmell}>
          <i className="fas fa-minus-circle cha-icon"></i>
        </div>
      </Link>
      <div className={meunIconBig}>
        <Link
          className="cha-gray cha-icon"
          onClick={() => {
            setMealIconBig(mealicobighidden)
            setMealIconSmell(mealiconsmell)
          }}
        >
          <div className="cha-meun-icon">
            <i className="fas fa-minus-circle cha-icon"></i>
          </div>
        </Link>
        <ul className="txt-sub2 cha-meun-li text-center">
          <li className="">
            <Link
              className="cha-meun-txt1 cha-gray"
              onClick={() => setType('all')}
            >
              所有餐點
            </Link>
          </li>
          <li className="">
            <Link
              className="cha-meun-txt1 cha-gray"
              onClick={() => setType('typeE')}
            >
              素食專區
            </Link>
          </li>
          <li className=" ">
            <Link
              className="cha-meun-txt1 cha-gray"
              onClick={() => setType('typeB')}
            >
              中式料理
            </Link>
          </li>
          <li className="">
            <Link
              className="cha-meun-txt1 cha-gray"
              onClick={() => setType('typeA')}
            >
              美式料理
            </Link>
          </li>
          <li className=" ">
            <Link
              className="cha-meun-txt1 cha-gray"
              onClick={() => setType('typeC')}
            >
              法式料理
            </Link>
          </li>
          <li className=" ">
            <Link
              className="cha-meun-txt1 cha-gray"
              onClick={() => setType('typeD')}
            >
              義式料理
            </Link>
          </li>
        </ul>
        <div className="cha-meun-input">
          <input
            type="text"
            placeholder="搜尋餐點"
            className="input-pic-style cha-search-put txt-sub2"
          />
          <i className="fas fa-search cha-search-icon cha-gray"></i>
        </div>
      </div>
    </>
  )
}

export default MealMeun
