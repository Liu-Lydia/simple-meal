import React, { useContext, useEffect, useState } from 'react'
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

  return (
    <>
      <div className="lll-green lll-body-list">
        {weekContentList.map((week, wIndex) => {
          let aWeek = []
          aWeek = week.map((day, dIndex) => (
            <li className="lll-body-list-item" key={`${day}-${dIndex}`}>
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
