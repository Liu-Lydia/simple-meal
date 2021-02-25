import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function MealPic(props) {
  const { data, dataLoadingforTittle, setDataLoadingforTittle } = props
  // const pic2 = [{ itemName: 'american01' }, { itemName: 'american02' }]

  useEffect(() => {}, [dataLoadingforTittle])
  return (
    <>
      <div
        className={
          dataLoadingforTittle
            ? 'cha-main-pic col-12 col-lg-5 cha-loading'
            : 'cha-main-pic col-12 col-lg-5'
        }
      >
        <img
          className="cha-main-pic2 "
          src={`http://localhost:3015/img/meal/${data.product_id}.png`}
          alt=""
        />
        <Link to="/recipe" className="cha-pic-txt-recipt txt-cap cha-white">
          點擊查看食譜
        </Link>
        {/* <a
                href="http://google.com"
                className="cha-pic-txt-recipt txt-cap cha-white"
              >
                點擊查看食譜
              </a> */}
      </div>
    </>
  )
}
export default MealPic
