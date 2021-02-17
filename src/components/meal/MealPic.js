import { Link } from 'react-router-dom'

function MealPic(props) {
  const {  data } = props
  return (
    <>
      <div className="cha-main-pic col-12 col-lg-5">
        <img
          className="cha-main-pic2"
          src={`http://localhost:3015/img/meal/${props.data.product_id}.png`}
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
