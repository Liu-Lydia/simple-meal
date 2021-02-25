import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { withRouter, Link } from 'react-router-dom'

function CartCarousel() {
  const [data, setData] = useState([
    {
      category_id: '',
      category_name: '',
      cooktime: '',
      created_at: '',
      ingredient_id: '',
      introduction: '',
      on_sale: 0,
      price: 0,
      product_id: '',
      product_name: '',
      recipe_id: '',
      sid: 0,
      vegetarian_food: 0,
    },
  ])
  // const [order, setOrder] = useState(Math.floor(data.length / 2))
  const [order, setOrder] = useState(0)
  const btnClickColor = 'green'
  const btnUnClickColor = 'gray'

  // 左右移動
  const handleDirectBtn = (bool) => {
    if (bool && order < data.length - 1) {
      setOrder(order + 1)
    }
    if (!bool && order > 0) {
      setOrder(order - 1)
    }
  }

  // 自動移動
  const handleAutoDirection = () => {
    console.log(1)
    if (order > 0) {
      setOrder(order - 1)
      return
    }
    if (order === 0) {
      setOrder(data.length - 1)
      return
    }
  }
  // sweetalert2定義
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      cancelButton: 'select-btn-green txt-btn',
      title: 'cha-text cha-green',
      popup: 'msg-style',
    },
    buttonsStyling: false,
  })

  // 送到購物車
  const handleGetMealToDelivery = (sid) => {
    const url = `http://localhost:4000/mealdelivery/getmealtodelivery?sid=${sid}`

    fetch(url, {
      method: 'get',
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((obj) => {
        swalWithBootstrapButtons.fire({
          icon: 'success',
          title: obj.msg,
          showConfirmButton: false,
          padding: '25px',
          showCancelButton: true,
          cancelButtonText: '確定',
        })
      })
  }

  // 讀取localstorage
  const handleGetLocalStorage = async () => {
    const localData = JSON.parse(localStorage.getItem('recent')) || []
    setData(localData)
    setOrder(localData.length - 1)
  }

  // 載入時讀取localstorage
  useEffect(() => {
    handleGetLocalStorage()
  }, [])

  // // 當order改變自動移動
  useEffect(() => {
    //  每3秒動一次
    setTimeout(() => {
      handleAutoDirection()
      // console.log(1)
    }, 5000)
  }, [order])

  return (
    <>
      {/* 如果有資料 */}
      {data.length >= 1 && (
        <div className="poe-carousel">
          <button
            className="poe-carousel-btn"
            onClick={() => handleDirectBtn(true)}
            style={{
              background: `${
                order < data.length - 1 ? btnClickColor : btnUnClickColor
              }`,
            }}
          >
            <i class="fas fa-chevron-left"></i>
          </button>

          <div className="poe-carousel-wrap">
            <ul
              className="poe-carousel-flex"
              style={{
                width: `${data.length * 100}%`,
                left: `-${order * 100}%`,
              }}
            >
              {/* poe-carousel-card */}
              {data.map((v, i) => (
                <li key={i} className="poe-carousel-card" style={{ order: -i }}>
                  <img
                    src={`http://localhost:3015/img/meal/未去背/${v.product_id}.jpg`}
                    className="poe-carousel-img"
                    alt="..."
                  />
                  <div className="poe-carousel-card-body">
                    <h5 className="card-title text-center">{v.product_name}</h5>
                    <p className="text-center">{v.introduction}</p>
                    <dir className="w-100 d-flex justify-content-end">
                      <button
                        className="select-btn-green mx-auto"
                        onClick={() => {
                          handleGetMealToDelivery(v.sid)
                        }}
                      >
                        加入配送
                      </button>
                    </dir>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="poe-carousel-btn"
            onClick={() => handleDirectBtn(false)}
            style={{
              background: `${order > 0 ? btnClickColor : btnUnClickColor}`,
            }}
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
      {data.length === 0 && (
        <>
          <div className="w-100 text-center poe-bbgreen poe-mb20">
            <h5 className="text-center">近期沒有瀏覽商品</h5>
          </div>
          <div className="w-100 text-center">
            <Link
              to="/meal"
              // onClick={() => setFlowchart(1)}
              className={`btn-green txt-btn mx-4 poe-mb20`}
            >
              <i className="fas fa-chevron-left"></i>　返回菜單
            </Link>
          </div>
        </>
      )}
    </>
  )
}

export default CartCarousel
