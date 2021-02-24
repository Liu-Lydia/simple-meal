import React, { props ,useState} from 'react'
// 須從父親那邊接收“props”要引入{ props }，因為{ props }非extend default所以要{}包起來。
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function MsMoboPointInfo(props) {
  const [totalPoint, setTotalPoint] = useState(0)
  const getMilestoneList = async () => {
    const url = 'http://localhost:4000/milestone/getPoint?sid=1' //sid 要從session來
    await fetch(url, {
      method: 'get',
    })
      //then 是會接前方拋出的結果
      .then((r) => r.json())
      .then((obj) => {
        //總獲得的點數
        const totalGetPoint = obj.totalGetPoiont
        //總花費的點數
        const totalSpendPoint = obj.totalSpendPoint
        //將目前有的點數設定成為屬性
        setTotalPoint(totalGetPoint - totalSpendPoint)
      })
  }
  return (
    <>
      <div
        className="row fff-ms-mobo d-flex justify-content-center align-items-center"
        style={{ marginBottom: '30px' }}
      >
        <div className="col d-flex justify-content-center align-items-center">
          <img
            src="http://localhost:3015/img/fff/fff-info-pic.png"
            className="fff-mobo-info-pic"
            alt=""
          />
          <span className="fff-mobo-txt-info">Lydia Liu</span>
          <span className="fff-mobo-txt-info" style={{ marginLeft: '15px' }}>
            點數:
          </span>
          <span className="fff-mobo-txt-info" style={{ color: '#b9433b' }}>
            {totalPoint}
          </span>
        </div>
      </div>
    </>
  )
}

export default MsMoboPointInfo
