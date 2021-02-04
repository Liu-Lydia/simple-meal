import React, {useReducer, createContext} from 'react'
import moment from 'moment'
import calendar from '../reducers/calendar'

// import GetWeeksInMonth from '../components/GetWeeksInMonth'
import CalendarHeader from '../components/CalendarHeader'
import CalendarWeekDay from '../components/CalendarWeekDay'
import CalendarDate from '../components/CalendarDate'

export const AppStore = createContext();

function Calendar() {
  const mmt = new moment();
  const timeReducer = useReducer(calendar, mmt.format('YYYY-MM-DD'))
  // let result = GetWeeksInMonth();
  // console.log('result', result)

  return (
    <>
      <AppStore.Provider value = {{timeReducer:timeReducer}}>
      <div>
        <h1>{'Calendar Demo'}</h1>
        
        <div className="lll-calendar">
        {/* <h1>{moment().format('YYYY-MM-DD')}</h1> */}
        <CalendarHeader />
        <div className="lll-pt30">
        <CalendarWeekDay />
        <CalendarDate />
        </div>
        </div>
      </div>
      </AppStore.Provider>
    </>
  )
}

export default Calendar
