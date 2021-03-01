import React, { useEffect, useState } from 'react'
// 須從父親那邊接收“props”要引入{ props }，因為{ props }非extend default所以要{}包起來。

function MsMoboPointInfo(props) {
  const [userInfo, setUserInfo] = useState([])
  const { totalPoint } = props


  const getUserInfo = async () => {
    const url = 'http://localhost:4000/milestone/getUserInfo'
    //sid 要從session來
    await fetch(url, {
      method: 'get',
      credentials: 'include',
    })
      //then 是會接前方拋出的結果
      .then((r) => r.json())
      .then((obj) => {
        setUserInfo(obj)
      })
  }
  useEffect(() => {
    getUserInfo()
  }, [])

  useEffect(() => { }, [userInfo])
  return (
    <>
      <div
        className="row fff-ms-mobo d-flex justify-content-center align-items-center"
        style={{ marginBottom: '30px' }}
      >
        <div className="col d-flex justify-content-center align-items-center">
          <img
            src={
              userInfo.length === 1 &&
              'http://localhost:3015/img/member-center/' + userInfo[0].avater
            }
            className="fff-mobo-info-pic"
            alt=""
          />
          <span className="fff-mobo-txt-info">
            {userInfo.length === 1 && userInfo[0].name}
          </span>
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
