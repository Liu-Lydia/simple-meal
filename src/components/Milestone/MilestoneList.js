// 成就顯示
import React, { useState, useEffect } from 'react'

function MilestoneList() {
  /*資料庫回來的東西 */
  //milstonelist []陣列包{}每筆資料
  const [milstonelist, setMilestoneList] = useState([])
  //連結資料庫
  const getMilestoneList = () => {
    const url = 'http://localhost:4000/milestone/getMilestoneList?sid=1'; //session要帶 這樣傳好危險 sid 要從session來
    fetch(url, {
      method: 'get',
    })
      //then 是會接前方拋出的結果
      .then((r) => r.json())
      .then((obj) => {
        setMilestoneList(obj);
      })
  }

  useEffect(() => {
    getMilestoneList()
  }, [])

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
                  
                  <svg className="fff-svg-painting" style={{ backgroundImage: 'url(http://localhost:3015/img/fff/'+((v.AddProgress >= v.progress_goal) ?v.finished_goal_pic :v.unfinished_goal_pic)+')'}}>
                    <circle
                      className="fff-milestone-background-svg d-flex justify-content-center"
                      style={{ display: 'block' }}
                    />
                    <circle
                      className="fff-milestone-progress-svg d-flex justify-content-center"
                      transform="rotate(-90)"
                      style={{ display: 'block' }}
                    >
                      <animate
                        className="fff-milestone-progress-ani"
                        attributeName="stroke-dasharray"
                        values="0,4000;150,4000"
                        dur="1s"
                        repeatCount="1"
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
