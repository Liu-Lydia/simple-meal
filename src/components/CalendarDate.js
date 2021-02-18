import React, { useContext, useEffect, useState, Component } from 'react'
import { AppStore } from '../pages/Calendar'
import moment from 'moment'
import GetWeeksInMonth from './GetWeeksInMonth'

//連結到GeWeekInMonth(mmt), 使用到moment

function CalendarDate(props) {
  const { setDateObj } = props

  const { timeReducer } = useContext(AppStore)
  const date = timeReducer[0]
  const mmt = new moment(date)

  let weekContentList = GetWeeksInMonth(mmt)
  let result = []

  //點擊日期
  const [activeDindex, setActiveDindex] = useState(weekContentList)
  console.log(activeDindex)
  const handleOnClick = (day) => {
    setActiveDindex(`${day}`)

    let dayStr = ''
    day < 10 ? (dayStr = `0${day}`) : (dayStr = `${day}`)
    const NewDateStr = `${mmt.format('YYYY')}-${mmt.format('MM')}-${dayStr}`
    setDateObj(NewDateStr)
    console.log(NewDateStr)
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
              onClick={() => {
                handleOnClick(day)
              }}
              className={
                activeDindex === `${day}`
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
