// 成就顯示
import moment from 'moment'
import React, { useState, useEffect } from 'react'
import MilestoneDialog from './MilestoneDialog'

function MilestoneList(props) {
  //資料庫回來的東西 milstonelist []陣列包{}每筆資料
  const [milstonelist, setMilestoneList] = useState([])

  //含三種大小的圈圈格式 當畫面大小改變時要來這邊找適合的樣式
  const [styleArray, setStyleArray] = useState([])

  //含三種大小的動畫弧長 當畫面大小改變時要來這邊找適合的樣式
  const [animateValueArray, setAnimateValueArray] = useState([])

  //真正使用的style
  const [inUseStyle, setInUseStyle] = useState([])

  //真正使用的動畫值
  const [inUseAnimateValue, setInnUseAnimateValue] = useState([])

  //設定目前顯示頁數
  const [listPage, setListPage] = useState(1)

  //設定目前畫面顯示成就個數
  const [perPage, setPerPage] = useState(8)

  //取得總成就數量
  const [totalCount, setTotalCount] = useState(0)

  //detail的樣式 控制顯示不顯示
  const [detailStyle, setDetailStyle] = useState({ visibility: 'hidden' })

  //detail顯示的內容
  const [detailContext, setDetailContext] = useState({})

  //連結資料庫
  const progresStyleArray = [] //儲存各milestone的進度與顏色 push完成後再塞入屬性值
  const progressAnimateValueArray = [] //儲存個動畫的值 push完成後再塞入屬性值
  const getMilestoneList = async () => {
    //先取得總數量作為分頁使用
    await fetch(
      'http://localhost:4000/milestone/getMilestoneList?page=1&perpage=0',
      {
        method: 'get',
        credentials: 'include',
      }
    ) //then 是會接前方拋出的結果
      .then((r) => r.json())
      .then((obj) => {
        setTotalCount(obj.length)
      })

    const url = `http://localhost:4000/milestone/getMilestoneList?showEndedMs=${props.showEndedMs}&filter=${props.filter}&page=${listPage}&perpage=${perPage}`
    //sid 要從session來
    await fetch(url, {
      method: 'get',
      credentials: 'include',
    })
      //then 是會接前方拋出的結果
      .then((r) => r.json())
      .then((obj) => {
        //塞數量 讓物件靠左
        if (window.innerWidth < 576) {
          //手機版要三個
          for (let i = obj.length % 3; i != 0 && i < 3; i++) {
            obj.push({ milestone_sid: '-1' })
          }
        } else if (window.innerWidth >= 1200) {
          //特大要四個
          for (let i = obj.length % 8; i != 0 && i < 8; i++) {
            obj.push({ milestone_sid: '-1' })
          }
        } else {
          //兩個
          for (let i = obj.length % 4; i != 0 && i < 4; i++) {
            obj.push({ milestone_sid: '-1' })
          }
        }

        setMilestoneList(obj)
        //前期處理各成就的進度style 含不同的大小
        const xs_r = 40
        const md_r = 70
        const xl_r = 80
        obj.map((v, i) => {
          if (v.AddProgress >= v.progress_goal) {
            //進度大於等於目標 該成就完成
            let xs_L = xs_r * 2 * Math.PI //計算小圖弧長
            let md_L = md_r * 2 * Math.PI //計算中圖弧長
            let xl_L = xl_r * 2 * Math.PI //計算大圖弧長
            const style = { display: 'block', stroke: '#627E2A' } //綠色

            //動畫的起始跟終點
            const ani_xs_L = '0,4000;' + xs_L + ',4000'
            const ani_md_L = '0,4000;' + md_L + ',4000'
            const ani_xl_L = '0,4000;' + xl_L + ',4000'

            progresStyleArray.push({ xs: style, md: style, xl: style })
            progressAnimateValueArray.push({
              xs: ani_xs_L,
              md: ani_md_L,
              xl: ani_xl_L,
            })
          } else {
            //進度條尚未完成
            let xs_L = xs_r * 2 * Math.PI * (v.AddProgress / v.progress_goal) //百分比的弧長
            let md_L = md_r * 2 * Math.PI * (v.AddProgress / v.progress_goal)
            let xl_L = xl_r * 2 * Math.PI * (v.AddProgress / v.progress_goal)

            const xs_style = {
              display: 'block',
              stroke: '#f3e575', //黃色
              strokeDasharray: xs_L + ',4000', //顯示的弧長
            }
            const ani_xs_L = '0,4000;' + xs_L + ',4000'

            const md_style = {
              display: 'block',
              stroke: '#f3e575',
              strokeDasharray: md_L + ',4000',
            }
            const ani_md_L = '0,4000;' + md_L + ',4000'

            const xl_style = {
              display: 'block',
              stroke: '#f3e575',
              strokeDasharray: xl_L + ',4000',
            }
            const ani_xl_L = '0,4000;' + xl_L + ',4000'

            progresStyleArray.push({ xs: xs_style, md: md_style, xl: xl_style })
            progressAnimateValueArray.push({
              xs: ani_xs_L,
              md: ani_md_L,
              xl: ani_xl_L,
            })
          }
        })
        setStyleArray(progresStyleArray)
        setAnimateValueArray(progressAnimateValueArray)
      })
  }
  // 當陣列值有變動時 更新畫面
  /*正常來說應該不用這麼麻煩
   但是不指定的時候不是每次rander都會刷新*/
  useEffect(() => {
    webMoboExchange()
    getMilestoneList()
  }, [listPage, perPage, props.showEndedMs])

  useEffect(() => {
    webMoboExchange()
  }, [styleArray])

  useEffect(() => {
    webMoboExchange() //先去取得螢幕寬度決定每頁要呈現的數量
    getMilestoneList()
    window.addEventListener('resize', webMoboExchange) //畫面大小有更動時
    return () => {
      window.removeEventListener('resize', webMoboExchange)
    } //當DOM元素移除時要將監聽一併移除
  }, [])

  const webMoboExchange = () => {
    //style 選擇器 因應視窗大小決定要使用哪一個樣式
    let tmepStyle = []
    let tempValue = []
    if (window.innerWidth < 576) {
      styleArray.map((value, index) => {
        tmepStyle.push(value.xs)
      })
      animateValueArray.map((value, index) => {
        tempValue.push(value.xs)
      })
    } else if (window.innerWidth > 1200) {
      styleArray.map((value, index) => {
        tmepStyle.push(value.xl)
      })
      animateValueArray.map((value, index) => {
        tempValue.push(value.xl)
      })
    } else {
      styleArray.map((value, index) => {
        tmepStyle.push(value.md)
      })
      animateValueArray.map((value, index) => {
        tempValue.push(value.md)
      })
    }
    setInUseStyle(tmepStyle)
    setInnUseAnimateValue(tempValue)

    if (window.innerWidth < 576) {
      setPerPage(0)
    } else if (window.innerWidth >= 992) {
      setPerPage(8)
    } else {
      setPerPage(4)
    }
  }

  const Progress =
    detailContext.AddProgress == null
      ? 0
      : (detailContext.AddProgress / detailContext.progress_goal) * 100

  const [msProgressNow, setMsProgress] = useState(0)

  useEffect(() => {
    if (detailStyle.visibility === 'hidden') setMsProgress(0)
    // eslint-disable-next-line no-lone-blocks
    else {
      setMsProgress(Progress)
    }
  }, [detailStyle])

  return (
    <>
      <div className="row fff-no-mr-and-pad d-flex flex-shrink-0">
        {/* <!--保留空格 --> */}
        <div className="col-1 fff-no-mr-and-pad"></div>
        {/* <!-- 左翻按鍵 --> */}
        <div className="fff-ms-web col-1 d-flex align-items-center fff-no-mr-and-pad">
          <i
            className="fas fa-chevron-circle-left fff-stone-item-forword"
            onClick={() => {
              setListPage(listPage - 1 < 1 ? 1 : listPage - 1)
            }}
            style={listPage == 1 ? { color: '#d0d1d2' } : {}}
          ></i>
        </div>
        {/* <!-- 成就display --> */}
        <div className="col-10 col-sm-8 fff-no-mr-and-pad ">
          <div className="row fff-no-mr-and-pad d-flex align-items-center justify-content-around">
            {/* 單個成就 */}
            {milstonelist.map((v, i) =>
              v.milestone_sid == '-1' ? (
                <div
                  className="fff-row-height col-4 col-sm-6 col-lg-3 d-flex justify-content-center"
                  key={i}
                />
              ) : (
                <div
                  className="col-4 col-sm-6 col-lg-3 d-flex justify-content-center"
                  key={i}
                  onClick={() => {
                    setDetailStyle({ visibility: 'visible' })
                    setDetailContext(v)
                  }}
                >
                  <div className="fff-stone-item-box justify-content-center">
                    <svg
                      className="fff-svg-painting"
                      style={{
                        backgroundImage:
                          'url(http://localhost:3015/img/milestonelist/' +
                          (v.AddProgress >= v.progress_goal
                            ? v.finished_goal_pic
                            : v.unfinished_goal_pic) +
                          ')',
                      }}
                    >
                      {/* 檢查進度是否超過設定，超過顯示完成圖示，否則顯示未完成圖示 */}
                      <circle
                        className="fff-milestone-background-svg d-flex justify-content-center"
                        style={{ display: 'block' }}
                      />
                      <circle
                        className="fff-milestone-progress-svg d-flex justify-content-center"
                        transform="rotate(-90)"
                        style={inUseStyle[i]}
                      >
                        <animate
                          className="fff-milestone-progress-ani"
                          attributeName="stroke-dasharray"
                          dur="1s"
                          repeatCount="1"
                          value={inUseAnimateValue[i]}
                          begin="3s"
                        />
                      </circle>
                    </svg>
                    <span
                      style={{ color: '#627e2a' }}
                      className=" fff-ms-web d-flex justify-content-center"
                    >
                      {v.event_startime > moment().format('YYYY/MM/DD') &&
                        `將於${v.event_startime}開始`}
                    </span>
                    <span
                      style={{ color: '#627e2a' }}
                      className=" fff-ms-web d-flex justify-content-center"
                    >
                      {v.event_startime < moment().format('YYYY/MM/DD') &&
                        v.event_endtime === null &&
                        `常態活動`}
                    </span>
                    <span
                      style={{ color: '#a2a3a5' }}
                      className=" fff-ms-web d-flex justify-content-center"
                    >
                      {v.event_startime < moment().format('YYYY/MM/DD') &&
                        v.event_endtime < moment().format('YYYY/MM/DD') &&
                        `活動結束`}
                    </span>
                    <span
                      style={{ color: '#b9433b' }}
                      className=" fff-ms-web d-flex justify-content-center"
                    >
                      {v.event_endtime > moment().format('YYYY/MM/DD') &&
                        v.event_startime <= moment().format('YYYY/MM/DD') &&
                        `將於${moment(v.event_endtime, 'YYYY/MM/DD').diff(
                          moment(),
                          'days'
                        )}天後截止`}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        {/* <!-- 右翻按鍵 --> */}
        <div className="fff-ms-web col-1 d-flex align-items-center flex-row-reverse fff-no-mr-and-pad">
          <i
            className="fas fa-chevron-circle-right fff-stone-item-forword"
            onClick={() => {
              setListPage(
                listPage + 1 >
                  Math.ceil(totalCount / (perPage == 0 ? 4 : perPage))
                  ? Math.ceil(totalCount / (perPage == 0 ? 4 : perPage))
                  : listPage + 1
              )
            }}
            style={
              listPage == Math.ceil(totalCount / (perPage == 0 ? 4 : perPage))
                ? { color: '#d0d1d2' }
                : {}
            }
          ></i>
        </div>
        {/* <!--保留空格 --> */}
        <div className="col-1 fff-no-mr-and-pad"></div>
      </div>
      <MilestoneDialog
        detailStyle={detailStyle}
        setDetailStyle={setDetailStyle}
        detailContext={detailContext}
        msProgressNow={msProgressNow}
      />
    </>
  )
}

export default MilestoneList
