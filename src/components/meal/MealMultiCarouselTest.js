import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CustomRightArrow from './CustomRightArrow'
import CustomLeftArrow from './CustomLeftArrow'
import { useState, useEffect } from 'react'
function MealMultiCarousel(props) {
  const { type } = props
  const { setSelectMeal } = props
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
  const [meal, setMeal] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  async function getUsersFromServer(props) {
    // 開啟載入指示
    setDataLoading(true)
    // 連接的伺服器資料網址
    const url = `http://localhost:4000/meal/${type}`
    // const url = 'http://localhost:4000/meal/typeA'
    console.log(type)
    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    // 設定資料
    setMeal(data)
  }

  useEffect(() => {
    getUsersFromServer()
  }, [])

  useEffect(() => {
    getUsersFromServer()
  }, [type])

  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 1000)
  }, [meal])

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )
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
          {meal.length &&
            meal.map((value, index) => {
              return (
                <Link
                  className="cha-dl"
                  onClick={() => {
                    setSelectMeal(value.sid)
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
                            <i class="far fa-star"></i>
                          </div>
                          <div class="txt-cap  cha-card-hidden">
                            <i class="far fa-clock cha-star-small cha-green"></i>
                            <span class="cha-gray cha-mr4">40分鐘</span>
                            <i class="fas fa-tag cha-star-small cha-green"></i>
                            <span class="cha-gray">義式料理</span>
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
