// import React from 'react'
// import moment from 'moment'

const sevenDays = 7; //建立通用變數, 存放一週

//處理每週的資訊
function processWeekDays(mmt, isFirstWeek=false){
    const totalDays = mmt.daysInMonth();

    //取得第一週的第一天, 在星期幾
    const startDay = isFirstWeek?
    mmt.startOf('month').day() : 0;

    //建立一週的Array,  內容先放0
    const weekDays = Array(sevenDays).fill(0);

    let isFinished = false;

    for (let d = startDay; d < sevenDays; d++){
        weekDays[d] = mmt.date();

        //使用moment函式, 一天一天加
        if(mmt.date() !== totalDays)
        mmt.add(1, 'day');
        else{
            isFinished = true;

            break;
        }
    }

    return {weekDays, isFinished};
}

// 接收Calendar的moment***

//取得當月每週資訊
function GetWeeksInMonth(mmt){
    // const mmt = new moment();
    const weekDayList = []; //存放每週的日期

    //處理第一週
    const {weekDays} = processWeekDays(mmt, true);
    weekDayList.push(weekDays);

    
    let loopStatus = false;
    while(!loopStatus){
        let result = processWeekDays(mmt);
        const {weekDays} = result;
        weekDayList.push(weekDays);

        loopStatus = result['isFinished'];
    }

    return weekDayList;
}

export default GetWeeksInMonth