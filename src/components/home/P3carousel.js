import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
function P3carousel() {
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
      <Carousel responsive={responsive}>
        <div className="col ">
          <div className="p3-simg-div ml-auto mr-auto">
            <img
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
    </>
  )
}
export default P3carousel
