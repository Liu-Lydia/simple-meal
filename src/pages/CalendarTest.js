import React, { Component } from 'react'

class CalendarTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentDay: '',
      currentMonth: '',
      currentYear: '',
      weekList: [
        { name: '一', className: '' },
        { name: '二', className: '' },
        { name: '三', className: '' },
        { name: '四', className: '' },
        { name: '五', className: '' },
        { name: '六', className: '' },
        { name: '日', className: '' },
      ],
      dayList: [],
    }

    this.initCalendar = this.initCalendar.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
    this.renderBody = this.renderBody.bind(this)
    this.preMonth = this.preMonth.bind(this)
    this.nextMonth = this.nextMonth.bind(this)
  }

  componentDidMount() {
    this.initCalendar()
  }

  //獲取現在date的當月第一天的字符串形式
  getMonthFirstDate(date) {
    let nowYear = date.getFullYear() // 獲取年份
    let nowMonth = date.getMonth() + 1 // 獲取月份
    return `${nowYear}-${nowMonth}-01`
  }

  // 獲取當前date的字符串形式
  getDateString(date) {
    let nowYear = date.getFullYear() // 獲取年份
    let nowMonth = date.getMonth() + 1 // 獲取月份
    let day = date.getDate()
    day = day < 10 ? '0' + day : day
    return `${nowYear}-${nowMonth}-${day}`
  }

  // 上個月
  preMonth() {
    let date = new Date(
      `${this.state.currentYear}-${this.state.currentMonth}-${this.state.currentDay}`
    )
    let preMonthFirstDate = new Date(
      this.getMonthFirstDate(new Date(date.setDate(0)))
    ) // 0 是上個月最後一天
    this.initCalendar(preMonthFirstDate)
  }

  // 下個月
  nextMonth() {
    let date = new Date(
      `${this.state.currentYear}-${this.state.currentMonth}-${this.state.currentDay}`
    )
    let nextMonthFirstDate = new Date(
      this.getMonthFirstDate(new Date(date.setDate(33)))
    )
    this.initCalendar(nextMonthFirstDate)
  }

  // 初始化日曆
  initCalendar(currentDate) {
    let nowDate = currentDate ? currentDate : new Date()
    let nowMonthFirstDate = this.getMonthFirstDate(nowDate) // 獲取當月1號日期
    let nowWeek = new Date(nowMonthFirstDate).getDay()
      ? new Date(nowMonthFirstDate).getDay()
      : 7 // 獲取星期
    let newDateList = [] // 創建日期數組
    let startDay = 2 - nowWeek // 開始日期的下標  以为 setDate(0)是上个月最后一天  所以是2-nowWeek

    let showDayLength = nowWeek < 6 ? 35 : 42 // 如果5行能显示下一个月 就只显示5行
    // 循环处理 获取日历上应该显示的日期
    for (let i = startDay; i < startDay + showDayLength; i++) {
      let date = new Date(new Date(nowMonthFirstDate).setDate(i)) // 获取时间对象
      let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() // 小于9的数字前面加0
      let dayObject = {
        date: this.getDateString(date),
        day,
        className: '',
      }
      // new Date(str).toDateString() === new Date().toDateString()
      if (date.toDateString() === new Date().toDateString()) {
        dayObject.className = 'today'
      }
      newDateList.push(dayObject)
    }

    this.setState((pre) => {
      return {
        dayList: newDateList,
        currentDay: nowDate.getDate(),
        currentMonth:
          nowDate.getMonth() + 1 >= 10
            ? nowDate.getMonth() + 1
            : '0' + (nowDate.getMonth() + 1),
        currentYear: nowDate.getFullYear(),
      }
    })
  }

  renderHeader() {
    return (
      <>
        <div className="lll-calendar-title d-flex align-items-center justify-content-between">
          <span id="lll-prev" className="lll-cursor" onClick={this.preMonth}>
            <i className="fas fa-angle-left lll-black"></i>
          </span>
          <p className="m-0 txt-sub1 lll-black" id="lll-calendar-year">
            {this.state.currentYear}年
          </p>
          <p className="m-0 txt-sub1 lll-black" id="lll-calendar-title">
            {this.state.currentMonth}月
          </p>
          <span id="lll-next" className="lll-cursor" onClick={this.nextMonth}>
            <i className="fas fa-angle-right lll-black"></i>
          </span>
        </div>
      </>
    )
  }

  renderBody() {
    return (
      <>
        <div className="lll-black lll-body-list">
          <ul className="list-unstyled d-flex justify-content-between txt-sub1 lll-black">
            {this.state.weekList.map((week) => {
              return (
                <li key={week.name} className={`week ${week.className}`}>
                  {week.name}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="lll-green lll-body-list">
          {this.state.dayList.map((dayObject, index) => {
            return (
              <li key={index} className={`day ${dayObject.className}`}>
                {dayObject.day}
              </li>
            )
          })}
        </div>
      </>
    )
  }

  render() {
    return (
      <>
        <div className="lll-calendar">
          {this.renderHeader()}
          <div className="lll-pt30">{this.renderBody()}</div>
        </div>
      </>
    )
  }
}

export default CalendarTest
