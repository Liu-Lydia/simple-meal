import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'

function HomeP3() {
  const [p3src, setP3src] = useState(
    'http://localhost:3015/img/index/index-p3-simg3.png'
  )

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <>
      <div className="container">
        <ScrollOverPack
          className="row"
          id="Page3"
          className="content-wrapper page"
        >
          <QueueAnim
            type="scale"
            className="text-wrapper"
            key="text"
            leaveReverse
          >
            <div key="a" className="p3-img-div col-xl-4">
              <img className="img-size" src={p3src} alt="" />
            </div>

            <div key="b" className="row px-auto">
              <div className="col-12 d-flex justify-content-center poe-mb30 txt-btn poe-cart-progress">
                <div className="col-12">
                  <div className="w-100 d-flex justify-content-center text-center mb-1">
                    <div className="col-5 col-md-2">熱門餐點</div>
                    <div className="col-5 col-md-2">最新餐點</div>
                  </div>
                  <div className="w-100 d-flex justify-content-center align-items-center poe-cart-progress-line">
                    <div className="col-5 col-md-2 poe-cart-progress-active"></div>
                    <div className="col-5 col-md-2"></div>
                  </div>
                </div>
              </div>
              <div className="row poe-mb30"></div>
              {/* <div className="col-10 p3-line offset-1"></div>
              <div className="d-flex align-items-center p3LineButtonDiv">
                <div className="mr-5 ">
                  <p className="txt-btn col-gray text-center">熱門餐點</p>
                  <button className="p3-line-button ml-auto mr-auto col-black"></button>
                </div>
                <div className="ml-5">
                  <p className="txt-btn col-gray text-center">最新餐點</p>
                  <button className="p3-line-button2 ml-auto mr-auto"></button>
                </div>
              </div> */}
            </div>

            <div key="c">
              <Carousel responsive={responsive}>
                <div className="col ">
                  <div className="p3-simg-div ml-auto mr-auto ">
                    <img
                      onClick={() => {
                        setP3src(
                          'http://localhost:3015/img/index/index-p3-simg1.png'
                        )
                      }}
                      className="img-size"
                      src="http://localhost:3015/img/index/index-p3-simg1.png"
                      alt=""
                    />
                  </div>
                  <br />
                  <p className="xxx-txt-cap col-green text-center ml-auto mr-auto p3-name mb-1 txt-body">
                    番茄肉醬起司麵
                  </p>
                  <div className="col-green text-center mb-2">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="col-green p3-timesize txt-body xxx-h50">
                    <i className="far fa-clock col-green"></i>&nbsp;
                    50分鐘&nbsp;
                    <i className="fas fa-tag col-green"></i>&nbsp;義式料理
                  </div>
                </div>

                <div className="col">
                  <div className="p3-simg-div ml-auto mr-auto">
                    <img
                      onClick={() => {
                        setP3src(
                          'http://localhost:3015/img/index/index-p3-simg2.png'
                        )
                      }}
                      className="img-size"
                      src="http://localhost:3015/img/index/index-p3-simg2.png"
                      alt=""
                    />
                  </div>
                  <br />
                  <p className="xxx-txt-cap col-green text-center ml-auto mr-auto p3-name mb-1 txt-body">
                    羅勒鮮蔬通心麵
                  </p>
                  <div className="col-green text-center mb-2">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <div className="col-green p3-timesize txt-body">
                    <i className="far fa-clock col-green"></i>&nbsp;
                    60分鐘&nbsp;
                    <i className="fas fa-tag col-green"></i>&nbsp;義式料理
                  </div>
                </div>
                <div className="col">
                  <div className="p3-simg-div ml-auto mr-auto">
                    <img
                      onClick={() => {
                        setP3src(
                          'http://localhost:3015/img/index/index-p3-simg3.png'
                        )
                      }}
                      className="img-size"
                      src="http://localhost:3015/img/index/index-p3-simg3.png"
                      alt=""
                    />
                  </div>
                  <br />
                  <p className="xxx-txt-cap col-green text-center ml-auto mr-auto p3-name mb-1 txt-body">
                    青檸嫩雞直管麵
                  </p>
                  <div className="col-green text-center mb-2">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="col-green p3-timesize txt-body">
                    <i className="far fa-clock col-green"></i>&nbsp;
                    45分鐘&nbsp;
                    <i className="fas fa-tag col-green"></i>&nbsp;義式料理
                  </div>
                </div>
                <div className="col">
                  <div className="p3-simg-div ml-auto mr-auto">
                    <img
                      onClick={() => {
                        setP3src('http://localhost:3015/img/index/china03.png')
                      }}
                      className="img-size"
                      src="http://localhost:3015/img/index/china03.png"
                      alt=""
                    />
                  </div>
                  <br />
                  <p className="xxx-txt-cap col-green text-center ml-auto mr-auto p3-name mb-1 txt-body">
                    鮮鱸魚醬油炒麵
                  </p>
                  <div className="col-green text-center mb-2">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <div className="col-green p3-timesize txt-body">
                    <i className="far fa-clock col-green"></i>&nbsp;
                    35分鐘&nbsp;
                    <i className="fas fa-tag col-green"></i>&nbsp;中式料理
                  </div>
                </div>
                <div className="col">
                  <div className="p3-simg-div ml-auto mr-auto">
                    <img
                      onClick={() => {
                        setP3src('http://localhost:3015/img/index/italy02.png')
                      }}
                      className="img-size"
                      src="http://localhost:3015/img/index/italy02.png"
                      alt=""
                    />
                  </div>
                  <br />
                  <p className="xxx-txt-cap col-green text-center ml-auto mr-auto p3-name mb-1 txt-body">
                    羅勒培根披薩
                  </p>
                  <div className="col-green text-center mb-2">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <div className="col-green p3-timesize txt-body">
                    <i className="far fa-clock col-green"></i>&nbsp;
                    60分鐘&nbsp;
                    <i className="fas fa-tag col-green"></i>&nbsp;義式料理
                  </div>
                </div>
              </Carousel>
            </div>
          </QueueAnim>
        </ScrollOverPack>
      </div>
    </>
  )
}
export default HomeP3
