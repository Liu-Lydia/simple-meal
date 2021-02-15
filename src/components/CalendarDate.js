import React, { useContext, useEffect, useState, Component } from 'react'
import { AppStore } from '../pages/Calendar'
import moment from 'moment'
import GetWeeksInMonth from './GetWeeksInMonth'

//連結到GeWeekInMonth(mmt), 使用到moment

function CalendarDate() {
  const { timeReducer } = useContext(AppStore)
  const date = timeReducer[0]
  const mmt = new moment(date)

  let weekContentList = GetWeeksInMonth(mmt)
  let result = []

  const [activeDindex, setActiveDindex] = useState(0)
  const handleOnClick = (day, dIndex) => {
    setActiveDindex(`${day}-${dIndex}`)
  }

  return (
    <>
      <div className="lll-green lll-body-list">
        {weekContentList.map((week, wIndex) => {
          let aWeek = []
          aWeek = week.map((day, dIndex) => (
            <li
              className="lll-body-list-item"
              key={`${day}-${dIndex}`} //日期 - , index
              value={day === 0 ? '' : day}
              // onClick={(event) => {
              //   console.log(event.target.value)
              // }}
              onClick={() => handleOnClick(day, dIndex)}
              className={
                activeDindex === `${day}-${dIndex}`
                  ? 'lll-green-active'
                  : 'lll-body-list-item'
              }
            >
              {day === 0 ? '' : day}
            </li>
          ))

          return (
            <div className="col p-0 m-0 txt-sub1" key={`{week}-${wIndex}`}>
              {aWeek}
            </div>
          )
          {
            /* week.map((day, dIndex) => 
             aWeek.push(<li className="lll-body-list-item" 
             key = {`${day}-${dIndex}`}>{day === 0? "": day}</li>))
             result.push(<div className="col p-0 m-0 txt-sub1" key = {`{week}-${wIndex}`}>{aWeek}</div>); */
          }
        })}
        {result}
      </div>
    </>
  )
}

export default CalendarDate
