import React, { useEffect, useState } from 'react'
import GetWeeksInMonth from '../components/GetWeeksInMonth'

function CalendarDate(props){
    let weekContentList = GetWeeksInMonth();
    let result = [];

    return(
        <>
         <div className="lll-green lll-body-list">
         {weekContentList.map((week, wIndex) => {
             let aWeek = [];
             week.map((day, dIndex) => 
             aWeek.push(<li className="lll-body-list-item" 
             key = {`${day}-${dIndex}`}>{day === 0? "": day}</li>))
             result.push(<div className="col p-0 m-0 txt-sub1" key = {`{week}-${wIndex}`}>{aWeek}</div>);
         })}
             {result}
         </div>
        </>
    )
}

export default CalendarDate