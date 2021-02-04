import React from 'react'
import moment from 'moment'

function Calendar() {
  return (
    <>
      <div>
        <h1>{'Calendar Demo'}</h1>
        <h1>{moment().format('YYYY-MM-DD')}</h1>
      </div>
    </>
  )
}

export default Calendar
