import React, { useEffect, useState } from 'react'

function ThisIsForFun() {
  const [transX, setTransX] = useState(500)
  const [transY, setTransY] = useState(200)
  const [time, setTime] = useState(5)
  const [x, setX] = useState(1)

  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
  }
  useEffect(() => {
    setTransX(getRandomInt(0, 1000))
    setTransY(getRandomInt(0, 400))
  }, [])

  return (
    <>
      <div
        className="d-flex align-items-center txt-btn"
        style={{
          // height: '100px',
          // width: '100px',
          transition: `5s`,
          transform: `translate(${transX}px,${transY}px) scalex(${x})`,
        }}
      >
        <div className="px-0">新年快樂!!</div>
        <div
          style={{
            background:
              'url(http://localhost:3015/img/fun/129.gif) center center no-repeat',
            height: '100px',
            width: '100px',
            transition: `5s`,
          }}
        ></div>
      </div>
    </>
  )
}
export default ThisIsForFun
