import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
function CardTest() {
  const CustomLeftArrow = ({ onClick }) => (
    <i onClick={() => onClick()} className="custom-left-arrow" />
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
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  function CustomRightArrow2({ onClick }) {
    function handleClick() {
      // do whatever you want on the right button click
      console.log('Right button clicked, go to next slide')
      // ... and don't forget to call onClick to slide
      onClick()
    }

    return (
      <button>
        <i
          onClick={handleClick}
          aria-label="Go to next slide"
          class="fas fa-chevron-circle-right cha-rigth-icon cha-green"
        />
      </button>
    )
  }
  function CustomLeftArrow2({ onClick }) {
    function handleClick() {
      // do whatever you want on the right button click
      console.log('Right button clicked, go to next slide')
      // ... and don't forget to call onClick to slide
      onClick()
    }

    return (
      <button>
        <i
          onClick={handleClick}
          aria-label="Go to next slide"
          class="fas fa-chevron-circle-left cha-left-icon cha-green"
        />
      </button>
    )
  }
  return (
    <>
      <Carousel
        arrows={true}
        // renderButtonGroupOutside={true}
        // customButtonGroup={<MealMultiButton />}
        responsive={responsive}
        customRightArrow={<CustomRightArrow2 />}
        customLeftArrow={<CustomLeftArrow2 />}
        itemClass="d-flex justify-content-center "
        containerClass="mx-auto col-10 cha-px0"
      >
        <div className="cha-rec-card">
          <div className="cha-card-img1">
            <img
              className="cha-card-img2"
              src="http://localhost:3015/img/meal/china02.png"
              alt=""
            />
            <p className="txt-cap cha-gray cha-mb1">羅勒鮮蔬通心麵</p>
            <div className="cha-star cha-green">
              <div className="cha-mb1">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="txt-cap">
                <i className="far fa-clock cha-star-small cha-green"></i>
                <span className="cha-gray cha-mr4">40分鐘</span>
                <i className="fas fa-tag cha-star-small cha-green"></i>
                <span className="cha-gray">義式料理</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cha-rec-card">
          <div className="cha-card-img1">
            <img
              className="cha-card-img2"
              src="http://localhost:3015/img/meal/italy02.png"
              alt=""
            />
            <p className="txt-cap cha-gray cha-mb1">羅勒鮮蔬通心麵</p>
            <div className="cha-star cha-green">
              <div className="cha-mb1">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="txt-cap">
                <i className="far fa-clock cha-star-small cha-green"></i>
                <span className="cha-gray cha-mr4">40分鐘</span>
                <i className="fas fa-tag cha-star-small cha-green"></i>
                <span className="cha-gray">義式料理</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cha-rec-card">
          <div className="cha-card-img1">
            <img
              className="cha-card-img2"
              src="http://localhost:3015/img/meal/italy01.png"
              alt=""
            />
            <p className="txt-cap cha-gray cha-mb1">羅勒鮮蔬通心麵</p>
            <div className="cha-star cha-green">
              <div className="cha-mb1">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="txt-cap">
                <i className="far fa-clock cha-star-small cha-green"></i>
                <span className="cha-gray cha-mr4">40分鐘</span>
                <i className="fas fa-tag cha-star-small cha-green"></i>
                <span className="cha-gray">義式料理</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cha-rec-card">
          <div className="cha-card-img1">
            <img
              className="cha-card-img2"
              src="http://localhost:3015/img/meal/italy03.png"
              alt=""
            />
            <p className="txt-cap cha-gray cha-mb1">羅勒鮮蔬通心麵</p>
            <div className="cha-star cha-green">
              <div className="cha-mb1">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="txt-cap">
                <i className="far fa-clock cha-star-small cha-green"></i>
                <span className="cha-gray cha-mr4">40分鐘</span>
                <i className="fas fa-tag cha-star-small cha-green"></i>
                <span className="cha-gray">義式料理</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cha-rec-card">
          <div className="cha-card-img1">
            <img
              className="cha-card-img2"
              src="http://localhost:3015/img/meal/china03.png"
              alt=""
            />
            <p className="txt-cap cha-gray cha-mb1">羅勒鮮蔬通心麵</p>
            <div className="cha-star cha-green">
              <div className="cha-mb1">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="txt-cap">
                <i className="far fa-clock cha-star-small cha-green"></i>
                <span className="cha-gray cha-mr4">40分鐘</span>
                <i className="fas fa-tag cha-star-small cha-green"></i>
                <span className="cha-gray">義式料理</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cha-rec-card">
          <div className="cha-card-img1">
            <img
              className="cha-card-img2"
              src="http://localhost:3015/img/meal/china01.png"
              alt=""
            />
            <p className="txt-cap cha-gray cha-mb1">羅勒鮮蔬通心麵</p>
            <div className="cha-star cha-green">
              <div className="cha-mb1">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="txt-cap">
                <i className="far fa-clock cha-star-small cha-green"></i>
                <span className="cha-gray cha-mr4">40分鐘</span>
                <i className="fas fa-tag cha-star-small cha-green"></i>
                <span className="cha-gray">義式料理</span>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  )
}
export default CardTest
