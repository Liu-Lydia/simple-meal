import React, { useEffect, useState } from 'react'

const WeekDayNameList = ['日', '一', '二', '三', '四', '五', '六']

function CalendarWeekDay() {
  let weekDayList = []

  return (
    <>
      <div className="lll-black lll-body-list">
        <ul className="list-unstyled d-flex justify-content-between txt-sub1 lll-black">
          {
            (weekDayList = WeekDayNameList.map((name, index) => (
              <li key={`name = ${index}`}>{name}</li>
            )))
          }
        </ul>
      </div>
    </>
  )
}

export default CalendarWeekDay
