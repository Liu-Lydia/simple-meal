import React, { useEffect, useState } from 'react'

function ToTopButton(props) {
  // 吉祥物定位
  const [lemonScrollObj, setLemonScrollObj] = useState({
    lemon01: false,
  })

  // 到頂
  const handleScrollToTop = () => {
    console.log('click lemon')
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  // 偵測視窗位置改變出現效果
  const handleLemonAppearByScroll = () => {
    // console.log('i am scrolling')
    // window.pageYOffset > 500 && console.log(window.pageYOffset)
    if (window.pageYOffset > 1000 && window.pageYOffset < 6000) {
      setLemonScrollObj({ ...lemonScrollObj, lemon01: true })
    }
    if (window.pageYOffset < 1000 || window.pageYOffset > 6000) {
      setLemonScrollObj({ ...lemonScrollObj, lemon01: false })
    }
  }

  // 在載入階段加掛事件
  useEffect(() => {
    console.log('didMount')
    window.addEventListener('scroll', handleLemonAppearByScroll)
  }, [])

  // 在卸載階段移除事件
  useEffect(() => {
    return () => {
      console.log('unMount')
      window.removeEventListener('scroll', handleLemonAppearByScroll)
    }
  }, [])

  // 如果在[載入階段]執行'事件加掛', 卻沒有在[卸載階段]執行'事件移除', 在元件切換時, 會導致加掛的事件會藉由[卸載階段]重複被加掛執行

  return (
    <>
      <div
        className="poe-indexLemon01"
        style={lemonScrollObj.lemon01 ? { right: '3%' } : {}}
        // onclick={() => {
        //   console.log(1)
        //   handleScrollToTop()
        // }}
      ></div>
    </>
  )
}

export default ToTopButton
