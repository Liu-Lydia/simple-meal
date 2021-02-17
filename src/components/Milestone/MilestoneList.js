// 成就顯示
import React, { useState, useEffect } from 'react'

function MilestoneList() {
  /*資料庫回來的東西 */
  //milstonelist []陣列包{}每筆資料
  const [milstonelist, setMilestoneList] = useState([])
  const [styleArray, setStyleArray] = useState([])
  //連結資料庫
  const progresStyleArray = [] //儲存各milestone的進度與顏色
  const getMilestoneList = () => {
    const url = 'http://localhost:4000/milestone/getMilestoneList?sid=1' //session要帶 這樣傳好危險 sid 要從session來
    fetch(url, {
      method: 'get',
    })
      //then 是會接前方拋出的結果
      .then((r) => r.json())
      .then((obj) => {
        setMilestoneList(obj)
        //前期處理各成就的進度style
        const xs_r = 40
        const md_r = 70
        const xl_r = 80
        obj.map((v, i) => {
          if (v.AddProgress >= v.progress_goal) {
            const xs_style = { display: 'block', stroke: '#627E2A'}
            const md_style = { display: 'block', stroke: '#627E2A'}
            const xl_style = { display: 'block', stroke: '#627E2A'}
            progresStyleArray.push({xs:xs_style, md:md_style, xl:xl_style})
          } else {
            let xs_L = xs_r * 2 * Math.PI * (v.AddProgress / v.progress_goal)
            let md_L = md_r * 2 * Math.PI * (v.AddProgress / v.progress_goal)
            let xl_L = xl_r * 2 * Math.PI * (v.AddProgress / v.progress_goal)

            const xs_style = { display: 'block', stroke: '#f3e575', strokeDasharray: xs_L + ',4000'}
            const md_style = { display: 'block', stroke: '#f3e575', strokeDasharray: md_L + ',4000'}
            const xl_style = { display: 'block', stroke: '#f3e575', strokeDasharray: xl_L + ',4000'}
            progresStyleArray.push({xs:xs_style, md:md_style, xl:xl_style})
          }
        })
        setStyleArray(progresStyleArray)
      })
  }

  useEffect(() => {
    getMilestoneList();
    window.addEventListener('resize', webMoboExchange);
  }, [])

  const webMoboExchange = ()=>{
    styleArray.map((value,index)=>{
      const stone = document.getElementById("cycle"+index);
      if(window.innerWidth>1200)
      {
        stone.style.stroke = value.xl.stroke;
        stone.style.strokeDasharray= value.xl.strokeDasharray;
      }
      else if(window.innerWidth<576)
      {
        stone.style.stroke = value.xs.stroke;
        stone.style.strokeDasharray= value.xs.strokeDasharray;
      }
      else
      {
        stone.style.stroke = value.md.stroke;
        stone.style.strokeDasharray= value.md.strokeDasharray;
      }
    });
    }
    

  useEffect(() => {
    styleArray.map((value,index)=>{
      const stone = document.getElementById("cycle"+index);
      const animate = document.getElementById("animate"+index);
      if(window.innerWidth>1200)
      {
        stone.style.stroke = value.xl.stroke;
        stone.style.strokeDasharray= value.xl.strokeDasharray;
        animate.value = "0,4000;"+ value.xl.strokeDasharray;
      }
      else if(window.innerWidth<576)
      {
        stone.style.stroke = value.xs.stroke;
        stone.style.strokeDasharray= value.xs.strokeDasharray;
        animate.value = "0,4000;"+ value.xs.strokeDasharray;
      }
      else
      {
        stone.style.stroke = value.md.stroke;
        stone.style.strokeDasharray= value.md.strokeDasharray;
        animate.value = "0,4000;"+ value.md.strokeDasharray;
      }
    });
  }, [styleArray])

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
                        'url(http://localhost:3015/img/milestonelist/'+
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
                    id={"cycle"+i}
                      className="fff-milestone-progress-svg d-flex justify-content-center"
                      transform="rotate(-90)"
                    >
                      <animate
                    id={"animate"+i}
                        className="fff-milestone-progress-ani"
                        attributeName="stroke-dasharray"
                        dur="1s"
                        repeatCount="1"
                        value = "0,4000;141,4000"
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

export default MilestoneList
