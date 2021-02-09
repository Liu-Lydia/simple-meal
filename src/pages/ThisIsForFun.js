import React, { useEffect, useState } from 'react'

function ThisIsForFun() {
  const [transX, setTransX] = useState(100)
  const [transY, setTransY] = useState(200)
  const [url, setUrl] = useState('http://localhost:3015/img/fun/129.gif')
  const [x, setX] = useState(1)

  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
  }
  useEffect(() => {
    setTransX(getRandomInt(0, 200))
    setTransY(getRandomInt(0, 200))
  }, [])
  useEffect(() => {
    transX === 500 &&
      setTimeout(() => {
        setUrl('http://localhost:3015/img/fun/130s.gif')
      }, 30000)
  }, [transX])

  return (
    <div style={{ overflow: 'hidden', height: '50vh' }}>
      <div
        style={{
          background: `url(${url}) center center no-repeat`,
          height: '100px',
          width: '450px',
          // height: '100px',
          // width: '100px',
          transition: `5s`,
          transform: `translate(${transX}%,${transY}%) scalex(${x})`,
        }}
        onMouseOver={() => {
          setUrl('http://localhost:3015/img/fun/130s.gif')
        }}
      >
        <h4 className="poe-mr30 txt-btn poe-red">新年快樂!!{'　'}</h4>
      </div>
    </div>
  )
}
export default ThisIsForFun
