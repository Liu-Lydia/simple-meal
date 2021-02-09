import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
function MealMultiCarousel() {
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
  return (
    <>
      <Carousel responsive={responsive}>
        <div class="cha-card">
          <div class="cha-card-yellow ">
            <div class="cha-card-img1">
              <img
                class="cha-card-img2"c
                src="../../public/img/meal/hero02.png"
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
                src="../../public/img/meal/hero02.png"
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
                src="../../public/img/meal/hero02.png"
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
                src="../../public/img/meal/hero02.png"
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
                src="../../public/img/meal/hero02.png"
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
                src="../../public/img/meal/hero02.png"
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
