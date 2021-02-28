import { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CustomRightArrow from '../meal/CustomRightArrow'
import CustomLeftArrow from '../meal/CustomLeftArrow'
import { Link } from 'react-router-dom'
function RecipeCards(props) {
  const {
    allmeal,
    setAllmeal,
    setSidAndIngredient,
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
  console.log(allmeal)

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
        {allmeal.map((value, index) => {
          return (
            <Link
              onClick={() => {
                setDataLoadingforTittle(true)
                setTimeout(() => {
                  setSidAndIngredient([value.sid, value.ingredient_id])
                }, 400)
              }}
              className="cha-rec-card"
              key={value.sid}
            >
              <div className="cha-card-img1">
                <img
                  className="cha-card-img2"
                  src={`http://localhost:3015/img/meal/${value.product_id}.png`}
                  alt=""
                />
                <p className="txt-cap cha-gray cha-mb1 cha-dl">
                  {value.product_name}
                </p>
                <div className="cha-star cha-green">
                  <div className="cha-mb1">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="txt-cap">
                    <i className="far fa-clock cha-star-small cha-green"></i>
                    <span className="cha-gray cha-mr4">{value.cooktime}</span>
                    <i className="fas fa-tag cha-star-small cha-green"></i>
                    <span className="cha-gray">{value.category_name}</span>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </Carousel>
    </>
  )
}
export default RecipeCards
