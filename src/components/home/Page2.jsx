import React from 'react'
import PropTypes from 'prop-types'
import TweenOne from 'rc-tween-one'
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack'
// import { Icon, Button } from 'antd';
import QueueAnim from 'rc-queue-anim'
import { BrowserRouter as Link, NavLink } from 'react-router-dom'

export default function Page2({ isMobile }) {
  return (
    <div className="container-fluid">
      
        <ScrollOverPack
          className="row"
          id="Page2"
          className="content-wrapper page"
        >
          <QueueAnim
            className="text-wrapper-bottom mb-5 col-12 txt-h1 text-center col-green d-none d-xl-block "
            key="text"
            leaveReverse
            type="bottom"
          >
            <h1 key="h1">極簡煮易帶來全新的烹飪體驗</h1>
          </QueueAnim>
          <div className="row d-flex align-items-center p2-mb">
            <TweenOne
              key="image"
              className="xxx-p2-image image-wrapper p2-img-div"
              animation={{ x: 0, opacity: 1, ease: 'easeOutQuad' }}
              style={{ transform: 'translateX(-100px)', opacity: 0 }}
            />
            {/* 空一個col : offset-1 */}
            {/* xl */}
            <div className="col-4 offset-1 d-none d-xl-block">
              <QueueAnim
                type="right"
                className="text-wrapper"
                key="text"
                leaveReverse
              >
                <h5 key="h5" className="col-black">
                  給喜歡做菜的你 帶來新鮮、美味、方便
                </h5>
                <br />
                <p
                  key="p"
                  style={{ maxWidth: 200 }}
                  className="txt-sub1 col-gray"
                >
                  與在地農產合作，嚴選當季食材配送到府的服務 <br />
                  不需出門，不需煩惱吃什麼 <br />
                  我們幫你一次搞定。
                </p>
                <br />
                <NavLink key="button" to="/meal" className="btn-red txt-sub1">
                  開始訂製
                </NavLink>
              </QueueAnim>
            </div>
          </div>
        </ScrollOverPack>
      
    </div>
  )
}
Page2.propTypes = {
  isMobile: PropTypes.bool,
}
