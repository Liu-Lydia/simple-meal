import React, { useEffect, useContext } from 'react'
import { AppStore } from '../pages/Calendar'
import moment from 'moment'

function CalendarHeader(props) {
  const { timeReducer } = useContext(AppStore)
  const dateInfo = timeReducer[0]
  const mmt = new moment(dateInfo)

  const dispatch = timeReducer[1]
  // let handleLastMonthEvent = () => {
  //     console.log('click last month')
  //     return (e) => {}
  // }

  // let handleNextMonthEvent = () => {
  //     console.log('click next month')
  //     return (e) => {}
  // }

  return (
    <>
      <div className="lll-calendar-title d-flex align-items-center justify-content-between">
        <span
          id="lll-prev"
          className="lll-cursor"
          onClick={() => dispatch({ type: 'LAST_MONTH' })}
        >
          <i className="fas fa-angle-left lll-black"></i>
        </span>
        <p className="m-0 txt-sub1 lll-black" id="lll-calendar-year">
          {mmt.format('YYYY')}
        </p>
        <p className="m-0 txt-sub1 lll-black" id="lll-calendar-title">
          {mmt.format('MM')}
        </p>
        <span
          id="lll-next"
          className="lll-cursor"
          onClick={() => dispatch({ type: 'NEXT_MONTH' })}
        >
          <i className="fas fa-angle-right lll-black"></i>
        </span>
      </div>
    </>
  )
}

export default CalendarHeader
