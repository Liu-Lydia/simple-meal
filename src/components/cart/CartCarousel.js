import React, { useEffect, useState } from 'react'

function CartCarousel() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6])
  // const [order, setOrder] = useState(Math.floor(data.length / 2))
  const [order, setOrder] = useState(data.length - 1)
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
    if (order > 0) {
      setOrder(order - 1)
      return
    }
    if (order === 0) {
      setOrder(data.length - 1)
      return
    }

    // order === data.length && setOrder(0)
  }

  // 載入時掛上自動移動
  useEffect(() => {
    //  每3秒動一次
    setTimeout(() => {
      handleAutoDirection()
      // console.log(1)
    }, 5000)
  }, [order])

  return (
    <>
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
            style={{ width: `${data.length * 100}%`, left: `-${order * 100}%` }}
          >
            {/* poe-carousel-card */}
            {data.map((v, i) => (
              <li key={i} className="poe-carousel-card" style={{ order: -i }}>
                <img
                  src="http://localhost:3015/img/meal/未去背/american01.jpg"
                  className="poe-carousel-img"
                  alt="..."
                />
                <div className="poe-carousel-card-body">
                  <h5 className="card-title text-center">Card title {v}</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatem quas et quibusdam iure, aperiam cumque,
                    praesentium officia laboriosam itaque beatae est voluptatum
                    dicta natus recusandae, nulla inventore saepe culpa
                    eligendi?
                  </p>
                  <dir className="w-100 d-flex justify-content-end">
                    <button className="select-btn-green mx-auto">
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
    </>
  )
}

export default CartCarousel
