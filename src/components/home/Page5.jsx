import React from 'react'
import PropTypes from 'prop-types'
import TweenOne from 'rc-tween-one'
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack'
// import { Icon, Button } from 'antd';
import QueueAnim from 'rc-queue-anim'
import { BrowserRouter as Link, NavLink } from 'react-router-dom'

export default function Page5({ isMobile }) {
  return (
    <ScrollOverPack id="Page5" className="content-wrapper page">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-4 p5-bg col-12">
            {/* <QueueAnim
              className="text-wrapper-bottom"
              key="text"
              leaveReverse
              type="right"
            > */}
              <div key="aa" className="offset-xl-5 offset-0 p5-bg-t">
                <h3 className="txt-h3 col-green d-none d-xl-block">食譜介紹</h3>
                <h6 className="txt-h3 col-green d-block d-sm-none">食譜介紹</h6>
                <br />
                <p className="col-gray d-none d-xl-block txt-body">
                  您是否正在尋找味道鮮美，易於烹飪且輕而易舉的菜餚？
                  <br />
                  探索我們多樣化的食譜收藏，讓我們由廚師策​​劃的創意滿足您的所有求！
                  <br />
                  快點來解鎖你的專屬食譜
                </p>
                <p className="col-gray d-block d-sm-none txt-cap">
                  您是否正在尋找味道鮮美，易於烹飪且輕而易舉的菜餚？
                  <br />
                  探索我們多樣化的食譜收藏，讓我們由廚師策​​劃的創意滿足您的所有求！
                  <br />
                  快點來解鎖你的專屬食譜
                </p>
                <br />

                <NavLink
                  to="/meal"
                  className="btn-red txt-sub1 d-none d-sm-block"
                >
                  馬上出發
                </NavLink>
              </div>
            {/* </QueueAnim> */}

            <NavLink
              to="/meal"
              className="btn-red txt-sub1 d-block d-sm-none mx-auto mb-4"
            >
              馬上出發
            </NavLink>

           
              <div key="bb" className="p5-img-divxs d-block d-sm-none mx-auto">
                <img
                  className="img-size100"
                  src="http://localhost:3015/img/index/index-p5-img.png"
                  alt=""
                />
              </div>
           
            {/* image要用div包起來才有rwd效果 */}

            <div>
              <QueueAnim
                className="text-wrapper-bottom"
                key="text"
                leaveReverse
                type="left"
                ease={['easeOutQuart']}
              >
                <div key="cc" className="p5-img-div d-none d-sm-block">
                  <img
                    className="img-size"
                    src="http://localhost:3015/img/index/index-p5-img.png"
                    alt=""
                  />
                </div>
              </QueueAnim>
              <div className="xxx-miss">
                <div className="p5-change d-flex justify-content-center d-flex align-items-center ">
                  <button className="col-gray p5-but-change1">
                    <i className="fas fa-chevron-circle-left col-black"></i>{' '}
                    &nbsp;Prev
                  </button>
                  <div className="p1-change-line"></div>
                  {/* <div className="p1-change"></div> */}
                  <button className="col-gray p5-but-change2">
                    Next &nbsp;
                    <i className="fas fa-chevron-circle-right col-black"></i>
                  </button>
                </div>
              </div>
            </div>
            <QueueAnim
              className="text-wrapper-bottom"
              key="text"
              leaveReverse
              type="left"
              ease={['easeOutQuart']}
            >
              <div key="ee" className="p5-leaf1-div d-none d-sm-block">
                <img
                  className="img-size"
                  src="http://localhost:3015/img/index/index-p5-leaf1.png"
                  alt=""
                />
              </div>
            </QueueAnim>

            <QueueAnim
              className="text-wrapper-bottom"
              key="text"
              leaveReverse
              type="left"
              ease={['easeOutQuart']}
              delay="300"
            >
              <div key="ff" className="p5-leaf2-div d-none d-sm-block">
                <img
                  className="img-size"
                  src="http://localhost:3015/img/index/index-p5-leaf2.png"
                  alt=""
                />
              </div>
            </QueueAnim>

            <QueueAnim
              className="text-wrapper-bottom"
              key="text"
              leaveReverse
              type="left"
              ease={['easeOutQuart']}
              delay="200"
            >
              <div key="hh" className="p5-leaf3-div d-none d-sm-block">
                <img
                  className="img-size"
                  src="http://localhost:3015/img/index/index-p5-leaf3.png"
                  alt=""
                />
              </div>
            </QueueAnim>

            <QueueAnim
              className="text-wrapper-bottom"
              key="text"
              leaveReverse
              type="left"
              ease={['easeOutQuart']}
              delay="200"
            >
              <div key="uu" className="p5-leaf4-div d-none d-sm-block">
                <img
                  className="img-size"
                  src="http://localhost:3015/img/index/index-p5-leaf4.png"
                  alt=""
                />
              </div>
            </QueueAnim>
            <QueueAnim
              className="text-wrapper-bottom"
              key="text"
              leaveReverse
              type="left"
              ease={['easeOutQuart']}
              delay="150"
            >
              <div key="ii" className="p5-leaf5-div d-none d-sm-block">
                <img
                  className="img-size"
                  src="http://localhost:3015/img/index/index-p5-leaf5.png"
                  alt=""
                />
              </div>
            </QueueAnim>
            {/* xs */}
            <div className="d-block d-sm-none">
              <div className="p5s-leaf1-90x61">
                <img
                  className="img-size"
                  src="http://localhost:3015/img/index/index-p5-leaf1.png"
                  alt=""
                />
              </div>
              <div className="p5s-leaf2-74x51">
                <img
                  className="img-size"
                  src="http://localhost:3015/img/index/index-p5-leaf2.png"
                  alt=""
                />
              </div>
              <div className="p5s-leaf3-37x71">
                <img
                  className="img-size100"
                  src="http://localhost:3015/img/index/index-p5-leaf3.png"
                  alt=""
                />
              </div>
              <div className="p5s-leaf4-59x47">
                <img
                  className="img-size"
                  src="http://localhost:3015/img/index/index-p5-leaf4.png"
                  alt=""
                />
              </div>
              <div className="p5s-leaf5-172x132">
                <img
                  className="img-size"
                  src="http://localhost:3015/img/index/index-p5-leaf5.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollOverPack>
  )
}
Page5.propTypes = {
  isMobile: PropTypes.bool,
}
