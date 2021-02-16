import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
function MealMultiCarousel(props) {
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
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  function CustomRightArrow({ onClick }) {
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
  function CustomLeftArrow({ onClick }) {
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
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        itemClass="d-flex justify-content-center "
        containerClass="mx-auto col-10 cha-px0"
      >
        <div class="cha-card">
          <div class="cha-card-yellow ">
            <div class="cha-card-img1">
              <img
                class="cha-card-img2"
                c
                src="http://localhost:3015/img/meal/italy01.png"
                alt=""
              />
              <p class="txt-cap cha-gray cha-mb1 cha-card-hidden">
                羅勒鮮蔬通心麵
              </p>
              <div class="cha-star cha-green  cha-card-hidden">
                <div class="cha-mb1">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <div class="txt-cap  cha-card-hidden">
                  <i class="far fa-clock cha-star-small cha-green"></i>
                  <i class="cha-gray cha-mr4">40分鐘</i>
                  <i class="fas fa-tag cha-star-small cha-green"></i>
                  <i class="cha-gray">義式料理</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cha-card">
          <div class="cha-card-yellow ">
            <div class="cha-card-img1">
              <img
                class="cha-card-img2"
                src="http://localhost:3015/img/meal/italy02.png"
                alt=""
              />
              <p class="txt-cap cha-gray cha-mb1 cha-card-hidden">
                羅勒鮮蔬通心麵
              </p>
              <div class="cha-star cha-green  cha-card-hidden">
                <div class="cha-mb1">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <div class="txt-cap  cha-card-hidden">
                  <i class="far fa-clock cha-star-small cha-green"></i>
                  <i class="cha-gray cha-mr4">40分鐘</i>
                  <i class="fas fa-tag cha-star-small cha-green"></i>
                  <i class="cha-gray">義式料理</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cha-card">
          <div class="cha-card-yellow ">
            <div class="cha-card-img1">
              <img
                class="cha-card-img2"
                src="http://localhost:3015/img/meal/italy03.png"
                alt=""
              />
              <p class="txt-cap cha-gray cha-mb1 cha-card-hidden">
                羅勒鮮蔬通心麵
              </p>
              <div class="cha-star cha-green  cha-card-hidden">
                <div class="cha-mb1">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <div class="txt-cap  cha-card-hidden">
                  <i class="far fa-clock cha-star-small cha-green"></i>
                  <i class="cha-gray cha-mr4">40分鐘</i>
                  <i class="fas fa-tag cha-star-small cha-green"></i>
                  <i class="cha-gray">義式料理</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cha-card">
          <div class="cha-card-yellow ">
            <div class="cha-card-img1">
              <img
                class="cha-card-img2"
                src="http://localhost:3015/img/meal/french03.png"
                alt=""
              />
              <p class="txt-cap cha-gray cha-mb1 cha-card-hidden">
                羅勒鮮蔬通心麵
              </p>
              <div class="cha-star cha-green  cha-card-hidden">
                <div class="cha-mb1">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <div class="txt-cap  cha-card-hidden">
                  <i class="far fa-clock cha-star-small cha-green"></i>
                  <i class="cha-gray cha-mr4">40分鐘</i>
                  <i class="fas fa-tag cha-star-small cha-green"></i>
                  <i class="cha-gray">義式料理</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cha-card">
          <div class="cha-card-yellow ">
            <div class="cha-card-img1">
              <img
                class="cha-card-img2"
                src="http://localhost:3015/img/meal/french02.png"
                alt=""
              />
              <p class="txt-cap cha-gray cha-mb1 cha-card-hidden">
                羅勒鮮蔬通心麵
              </p>
              <div class="cha-star cha-green  cha-card-hidden">
                <div class="cha-mb1">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <div class="txt-cap  cha-card-hidden">
                  <i class="far fa-clock cha-star-small cha-green"></i>
                  <i class="cha-gray cha-mr4">40分鐘</i>
                  <i class="fas fa-tag cha-star-small cha-green"></i>
                  <i class="cha-gray">義式料理</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cha-card">
          <div class="cha-card-yellow ">
            <div class="cha-card-img1">
              <img
                class="cha-card-img2"
                src="http://localhost:3015/img/meal/french01.png"
                alt=""
              />
              <p class="txt-cap cha-gray cha-mb1 cha-card-hidden">
                羅勒鮮蔬通心麵
              </p>
              <div class="cha-star cha-green  cha-card-hidden">
                <div class="cha-mb1">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <div class="txt-cap  cha-card-hidden">
                  <i class="far fa-clock cha-star-small cha-green"></i>
                  <i class="cha-gray cha-mr4">40分鐘</i>
                  <i class="fas fa-tag cha-star-small cha-green"></i>
                  <i class="cha-gray">義式料理</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cha-card">
          <div class="cha-card-yellow ">
            <div class="cha-card-img1">
              <img
                class="cha-card-img2"
                src="http://localhost:3015/img/meal/italy03.png"
                alt=""
              />
              <p class="txt-cap cha-gray cha-mb1 cha-card-hidden">
                羅勒鮮蔬通心麵
              </p>
              <div class="cha-star cha-green  cha-card-hidden">
                <div class="cha-mb1">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <div class="txt-cap  cha-card-hidden">
                  <i class="far fa-clock cha-star-small cha-green"></i>
                  <i class="cha-gray cha-mr4">40分鐘</i>
                  <i class="fas fa-tag cha-star-small cha-green"></i>
                  <i class="cha-gray">義式料理</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  )
}
export default MealMultiCarousel
