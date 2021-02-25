import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

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
      items: 3,
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
        <div className="row">
          <div className="p3-img-div col-xl-4">
            <img className="img-size" src={p3src} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-10 p3-line offset-1"></div>
          <div className="d-flex align-items-center p3LineButtonDiv">
            <div className="mr-5">
              <p className="txt-btn col-gray text-center">熱門餐點</p>
              <button className="p3-line-button ml-auto mr-auto col-black"></button>
            </div>
            <div className="ml-5">
              <p className="txt-btn col-gray text-center">最新餐點</p>
              <button className="p3-line-button ml-auto mr-auto"></button>
            </div>
          </div>
        </div>
        <Carousel responsive={responsive}>
          <div className="col ">
            <div className="p3-simg-div ml-auto mr-auto ">
              <img
                onClick={() => {
                  setP3src('http://localhost:3015/img/index/index-p3-simg1.png')
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
              <i className="far fa-clock col-green"></i>&nbsp; 40分鐘&nbsp;
              <i className="fas fa-tag col-green"></i>&nbsp;義式料理
            </div>
          </div>

          <div className="col">
            <div className="p3-simg-div ml-auto mr-auto">
              <img
                onClick={() => {
                  setP3src('http://localhost:3015/img/index/index-p3-simg2.png')
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
              <i className="far fa-clock col-green"></i>&nbsp; 40分鐘&nbsp;
              <i className="fas fa-tag col-green"></i>&nbsp;義式料理
            </div>
          </div>
          <div className="col">
            <div className="p3-simg-div ml-auto mr-auto">
              <img
                onClick={() => {
                  setP3src('http://localhost:3015/img/index/index-p3-simg3.png')
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
              <i className="far fa-clock col-green"></i>&nbsp; 40分鐘&nbsp;
              <i className="fas fa-tag col-green"></i>&nbsp;義式料理
            </div>
          </div>
          <div className="col">
            <div className="p3-simg-div ml-auto mr-auto">
              <img
                onClick={() => {
                  setP3src('http://localhost:3015/img/index/index-p3-simg4.png')
                }}
                className="img-size"
                src="http://localhost:3015/img/index/index-p3-simg4.png"
                alt=""
              />
            </div>
            <br />
            <p className="xxx-txt-cap col-green text-center ml-auto mr-auto p3-name mb-1 txt-body">
              羅勒培根奶焗飯
            </p>
            <div className="col-green text-center mb-2">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <div className="col-green p3-timesize txt-body">
              <i className="far fa-clock col-green"></i>&nbsp; 40分鐘&nbsp;
              <i className="fas fa-tag col-green"></i>&nbsp;義式料理
            </div>
          </div>
        </Carousel>
        ;
      </div>
    </>
  )
}
export default HomeP3
