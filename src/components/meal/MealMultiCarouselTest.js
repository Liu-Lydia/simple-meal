import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CustomRightArrow from './CustomRightArrow'
import CustomLeftArrow from './CustomLeftArrow'
import { useState, useEffect } from 'react'
function MealMultiCarousel(props) {
  const {
    setSelectMeal,
    meal,
    dataLoading,
    mealDisplay,
    setDataLoadingforTittle,
  } = props

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

  const loading = (
    <>
      <div className="d-flex justify-content-center mt-3">
        <div className="col-12 col-sm-6" style={{ height: '200px' }}>
          <div className="poe-spiner w-100 h-100"></div>
        </div>
      </div>
    </>
  )
  // console.log(mealDisplay)
  return (
    <>
      {dataLoading ? (
        loading
      ) : (
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
          {mealDisplay.length > 0 &&
            mealDisplay.map((value, index) => {
              return (
                <Link
                  className="cha-dl"
                  onClick={() => {
                    setDataLoadingforTittle(true)
                    setTimeout(() => {
                      setSelectMeal(value.sid)
                    }, 400)
                  }}
                >
                  <div class="cha-card" key={value.sid}>
                    <div class="cha-card-yellow ">
                      <div class="cha-card-img1">
                        <img
                          class="cha-card-img2"
                          src={`http://localhost:3015/img/meal/${value.product_id}.png`}
                          alt=""
                        />
                        <p class="txt-cap cha-gray cha-mb1 cha-card-hidden">
                          {value.product_name}
                        </p>
                        <div class="cha-star cha-green  cha-card-hidden">
                          <div class="cha-mb1">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                          <div class="txt-cap  cha-card-hidden">
                            <i class="far fa-clock cha-star-small cha-green"></i>
                            <span class="cha-gray cha-mr4">
                              {value.cooktime}
                            </span>
                            <i class="fas fa-tag cha-star-small cha-green"></i>
                            <span class="cha-gray">{value.category_name}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
        </Carousel>
      )}
    </>
  )
}
export default MealMultiCarousel
