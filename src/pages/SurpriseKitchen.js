import React, { useReducer, createContext } from 'react'
import moment from 'moment'
import calendar from '../reducers/calendar'

// import GetWeeksInMonth from '../components/GetWeeksInMonth'
import CalendarHeader from '../components/CalendarHeader'
import CalendarWeekDay from '../components/CalendarWeekDay'
import CalendarDate from '../components/CalendarDate'
import SurpriseFirst from '../components/SurpriseFirst'
import SurpriseContent from '../components/SurpriseContent'

export const AppStore = createContext()

function SurpriseKitchen() {
  const mmt = new moment()
  const timeReducer = useReducer(calendar, mmt.format('YYYY-MM-DD'))
  // let result = GetWeeksInMonth();
  // console.log('result', result)

  return (
    <>
      <SurpriseFirst />
      <SurpriseContent />
    </>
  )
}

export default SurpriseKitchen
