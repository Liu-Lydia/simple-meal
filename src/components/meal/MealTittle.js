import MultiLevelBreadCrumb from '../MultiLevelBreadCrumb'
import { Link } from 'react-router-dom'
import 'react-multi-carousel/lib/styles.css'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
function MealTittle(props) {
  const {
    breadCrumbBool,
    selectMeal,
    data,
    updateNum,
    setUpdateNum,
    setMealForRecipe,
    dataLoadingforTittle,
    setDataLoadingforTittle,
  } = props
  const [meal, setMeal] = useState([])
  //fetch到的會員資料
  const [dataLoading, setDataLoading] = useState(false)
  const [memberData, setMemberData] = useState({
    id: 1,
    member_number: '',
    avater: '',
    level: '',
    email: '',
    password: '',
    name: '',
    nickname: '',
    mobile: '',
    birthday: '',
    credit＿card: '',
    addr: '',
    love: '',
    simplemeal_coupon: 0,
  })
  //按下切換最愛圖示
  const [heart, setHeart] = useState(false)
  // SELECT * FROM `membercenter` WHERE `id` = ?",
  // [req.query.sid]

  function handleGetLove() {
    const url = `http://localhost:4000/getmemberinfo`

    fetch(url, {
      medhod: 'get',
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((obj) => {
        setMemberData({ ...obj })
      })
      .then(() => {})
  }

  const thisMealSid = data.sid.toString()
  const thisMemberLoveId = memberData.love.split(',')

  const inLove = thisMemberLoveId.includes(thisMealSid)

  useEffect(() => {
    handleGetLove()
  }, [])

  console.log(inLove)

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      cancelButton: 'select-btn-green txt-btn',
      title: 'cha-text cha-green',
      popup: 'msg-style',
    },
    buttonsStyling: false,
  })

  const handleGetMealToDelivery = (sid) => {
    const url = `http://localhost:4000/mealdelivery/getmealtodelivery?sid=${sid}`

    fetch(url, {
      method: 'get',
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((obj) => {
        setUpdateNum(updateNum + 1)
        swalWithBootstrapButtons.fire({
          icon: 'success',
          title: obj.msg,
          showConfirmButton: false,
          padding: '25px',
          showCancelButton: true,
          cancelButtonText: '確定',
        })
      })

    // .then(() => alert('以加入購物車'))
  }

  const addlove = (mealsid) => {
    const url = `http://localhost:4000/meal/getlove?sid=${mealsid}`
    fetch(url, {
      medhod: 'get',
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((obj) => {
        alert(obj.msg)
        handleGetLove()
      })
  }

  useEffect(() => {
    // 初次預設值也不處理
    // 先開起載入指示器

    // 3秒後關閉指示器
    setTimeout(() => {
      setDataLoadingforTittle(false)
    }, 500)
  }, [dataLoadingforTittle])

  return (
    <>
      <div
        className={
          dataLoadingforTittle
            ? 'cha-main-txt col-12 col-lg-7 cha-loading'
            : 'cha-main-txt col-12 col-lg-7 '
        }
      >
        <div className="cha-main-txt1 txt-sub1">
          {!breadCrumbBool && <MultiLevelBreadCrumb />}
        </div>
        <div className="cha-main-txt2 d-flex justify-content-center">
          <div className="cha-main-txt3  ">
            <h3 className="cha-mb3 cha-black cha-main-txt-main">
              {props.data.product_name}
            </h3>
            <h5 className="cha-gray cha-mb2 cha-main-txt-sub">
              {props.data.introduction}
            </h5>
            <div className="cha-star cha-green cha-mb2">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <Link onClick={() => {}}>
                <i className="far fa-star"></i>
              </Link>
            </div>
            <div className="cha-mb2 cha-main-icon-sub d-flex">
              <div className="cha-mr3 cha-main-icon-sub1">
                <i className="far fa-clock cha-star-big cha-green"></i>
                <span className="cha-gray txt-sub1">{props.data.cooktime}</span>
              </div>
              <div className="cha-mr3 cha-main-icon-sub2">
                <i className="fas fa-tag cha-star-big cha-green"></i>
                <span className="cha-gray txt-sub1">
                  {props.data.category_name}
                </span>
              </div>
              <div className=" cha-main-icon-sub3">
                <Link
                  onClick={() => inLove !== true && addlove(props.data.sid)}
                >
                  <i
                    className={
                      inLove
                        ? 'fas fa-heart cha-star-big cha-green'
                        : 'far fa-heart cha-star-big cha-green'
                    }
                  ></i>

                  <span className="cha-gray txt-sub1">加入收藏</span>
                </Link>
              </div>
            </div>
            <div>
              <Link
                className="cha-btn-cart btn-green txt-btn cha-mr5"
                onClick={() => handleGetMealToDelivery(props.data.sid)}
              >
                加入訂單
              </Link>
              <Link
                to="/recipe"
                onClick={() =>
                  setMealForRecipe([props.data.sid, props.data.ingredient_id])
                }
                className="cha-btn-recipe txt-btn cha-rec-btn-bye btn-white"
              >
                查看食譜
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MealTittle
