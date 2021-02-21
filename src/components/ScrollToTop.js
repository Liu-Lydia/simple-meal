import React from 'react'
import { withRouter } from 'react-router-dom'

// 頁面切換時要用捲軸讓頁面回到最上方 (behavior: 'smooth' 平滑捲動)
class ScrollToTop extends React.Component {
  // 在componentDidMount拿不到prevProps.location
  // componentDidMount(prevProps) {
  //   console.log(prevProps)
  // }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
