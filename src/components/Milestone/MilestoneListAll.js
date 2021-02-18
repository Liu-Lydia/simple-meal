// 成就顯示
import React, { useState, useEffect } from 'react'

function MilestoneListAll() {
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

  //連結資料庫
  const progresStyleArray = [] //儲存各milestone的進度與顏色 push完成後再塞入屬性值
  const progressAnimateValueArray = []//儲存個動畫的值 push完成後再塞入屬性值
  const getMilestoneList = () => {
    const url = 'http://localhost:4000/milestone/getMilestoneList?sid=1' //sid 要從session來
    fetch(url, {
      method: 'get',
    })
      //then 是會接前方拋出的結果
      .then((r) => r.json())
      .then((obj) => {
        setMilestoneList(obj)
        //前期處理各成就的進度style 含不同的大小
        const xs_r = 40
        const md_r = 70
        const xl_r = 80
        obj.map((v, i) => {
          if (v.AddProgress >= v.progress_goal) {//進度大於等於目標 該成就完成
            let xs_L = xs_r * 2 * Math.PI //計算小圖弧長
            let md_L = md_r * 2 * Math.PI //計算中圖弧長
            let xl_L = xl_r * 2 * Math.PI //計算大圖弧長
            const style = { display: 'block', stroke: '#627E2A' }//綠色

            //動畫的起始跟終點
            const ani_xs_L = '0,4000;' + xs_L + ',4000'
            const ani_md_L = '0,4000;' + md_L + ',4000'
            const ani_xl_L = '0,4000;' + xl_L + ',4000'

            progresStyleArray.push({ xs: style, md: style, xl: style })
            progressAnimateValueArray.push({ xs: ani_xs_L, md: ani_md_L, xl: ani_xl_L })
          } else { //進度條尚未完成
            let xs_L = xs_r * 2 * Math.PI * (v.AddProgress / v.progress_goal)//百分比的弧長
            let md_L = md_r * 2 * Math.PI * (v.AddProgress / v.progress_goal)
            let xl_L = xl_r * 2 * Math.PI * (v.AddProgress / v.progress_goal)

            const xs_style = {
              display: 'block',
              stroke: '#f3e575',//黃色
              strokeDasharray: xs_L + ',4000',//顯示的弧長
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
            progressAnimateValueArray.push({ xs: ani_xs_L, md: ani_md_L, xl: ani_xl_L })
          }
        })
        setStyleArray(progresStyleArray)
        setAnimateValueArray(progressAnimateValueArray)
      })
  }

   // 當陣列值有變動時 更新畫面
   /*正常來說應該不用這麼麻煩
   但是不指定這兩個的時候不是每次rander都會刷新*/
   useEffect(() => {
    webMoboExchange()
    console.log("webMoboExchange");
  }, [styleArray, animateValueArray]);

  useEffect(() => {
    getMilestoneList()
    window.addEventListener('resize', webMoboExchange)//畫面大小有更動時
  }, []);

  const webMoboExchange = () => {//style 選擇器 因應視窗大小決定要使用哪一個樣式
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
  }

  return (
    <>
      <div className="row fff-no-mr-and-pad d-flex flex-shrink-0">
        {/* <!--保留空格 --> */}
        <div className="col-1 fff-no-mr-and-pad"></div>
        {/* <!-- 左翻按鍵 --> */}
        <div className="fff-ms-web col-1 d-flex align-items-center fff-no-mr-and-pad">
          <i className="fas fa-chevron-circle-left fff-stone-item-forword"></i>
        </div>
        {/* <!-- 成就display8個 --> */}
        <div className="col-10 col-sm-8 fff-no-mr-and-pad ">
          <div className="row fff-no-mr-and-pad d-flex align-items-center justify-content-around">
            {/* 單個成就 */}
            {milstonelist.map((v, i) => (
              <div
                className="col-4 col-sm-6 col-lg-3 d-flex justify-content-center"
                key={i}
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
                  <span className=" fff-ms-web d-flex justify-content-center">
                    {v.stone_name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <!-- 右翻按鍵 --> */}
        <div className="fff-ms-web col-1 d-flex align-items-center flex-row-reverse fff-no-mr-and-pad">
          <i className="fas fa-chevron-circle-right fff-stone-item-forword"></i>
        </div>
        {/* <!--保留空格 --> */}
        <div className="col-1 fff-no-mr-and-pad"></div>
      </div>
    </>
  )
}

export default MilestoneListAll
