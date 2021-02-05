import React, { useEffect, useState } from 'react'

function CartBg() {
  const cssObjNone = [
    {
      transition: '0s',
      opacity: '1',
      transform: 'translate(-100px, -200px) rotate(30deg) scaleX(-1)',
    },
    { transition: '0s', opacity: '0' },
    { transition: '0s', opacity: '0' },
  ]
  const cssObjShow = [
    {
      transition: '3s',
      opacity: '1',
      transform: 'translate(60px, 100px) rotate(-10deg) scaleX(-1)',
    },
    { transition: '2s', opacity: '1' },
    { transition: '3s', opacity: '1' },
  ]

  const [cssObj, setCssObj] = useState(cssObjNone)

  useEffect(() => {
    // console.log(1)
    setCssObj(cssObjShow)
  }, [])
  useEffect(() => {
    // console.log(2)
    return () => setCssObj(cssObjNone)
  }, [])

  return (
    <>
      <div style={{}}></div>
      {/* 雙圓背景03 */}
      <div id="poe-cart-bg03" style={cssObj[2]}></div>
      {/* 紅圓背景02 */}
      <div id="poe-cart-bg02" style={cssObj[1]}></div>
      {/* 吉祥物背景01 */}
      <div id="poe-cart-bg01" style={cssObj[0]}></div>
    </>
  )
}

export default CartBg
