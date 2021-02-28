import React, { useState, useReducer, createContext, useCallback } from 'react'
import moment from 'moment'
import calendar from '../reducers/calendar'

// import GetWeeksInMonth from '../components/GetWeeksInMonth'
// import CalendarHeader from '../components/CalendarHeader'
// import CalendarWeekDay from '../components/CalendarWeekDay'
// import CalendarDate from '../components/CalendarDate'
import SurpriseFirst from '../components/surprisekitchen/SurpriseFirst'
import SurpriseContent from '../components/surprisekitchen/SurpriseContent'
import SurpriseRule from '../components/surprisekitchen/SurpriseRule'

export const AppStore = createContext()

function SurpriseKitchen(props) {
  // {有沒有登入, 非購物車頁面改變購物車模式}
  const { loginBool, setCartModeByRedirectFrom } = props

  //切換分頁
  const [optionTab, setOptionTab] = useState(1)

  const mmt = new moment()
  const timeReducer = useReducer(calendar, mmt.format('YYYY-MM-DD'))
  // let result = GetWeeksInMonth();
  // console.log('result', result)

  return (
    <>
      <SurpriseFirst loginBool={loginBool} />
      <div className="container lll-appoint col-sm-center">
        <div className="row justify-content-center">
          <div className="col-8 lll-appoint-w100">
            <SurpriseContent
              loginBool={loginBool}
              setCartModeByRedirectFrom={setCartModeByRedirectFrom}
            />
            <SurpriseRule setOptionTab={setOptionTab} optionTab={optionTab} />
          </div>
        </div>
      </div>
    </>
  )
}

export default SurpriseKitchen
