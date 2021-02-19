import React, { useEffect, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'

function CartReserveKitchen(props) {
  const { flowchart, setFlowchart } = props

  const [orderObj, setOrderObj] = useState({
    reservation_date: '',
    reservation_time: '',
    num_adult: 0,
    num_child: 0,
    adult_price: 0,
    child_price: 0,
    num_meal: 0,
    remark: '',
  })

  // 跟後端拿預約資料
  const handleGetData = async () => {
    fetch('http://localhost:4000/reservekitchen/getorder', {
      method: 'get',
    })
      .then((r) => r.json())
      .then((array) => {
        setOrderObj(array[0])
      })
  }

  useState(() => {
    handleGetData()
  }, [])

  return (
    <>
      {orderObj.sid !== 0 ? (
        <>
          <h5>預約明細</h5>
          <div className="w-100 poe-bbgreen poe-mb20">
            <div className="d-flex poe-mb30">
              <div className="text-right poe-w100px poe-mr30">預約日期</div>
              <div className="poe-green">{orderObj.reservation_date}</div>
            </div>
            <div className="d-flex poe-mb30">
              <div className="text-right poe-w100px poe-mr30">預約時段</div>
              <div className="poe-green">{orderObj.reservation_time}</div>
            </div>
            <div className="d-flex poe-mb30">
              <div className="text-right poe-w100px poe-mr30">成人</div>
              <div className="poe-green">
                {orderObj.num_adult} 人 / NT${' '}
                {Intl.NumberFormat().format(
                  orderObj.num_adult * orderObj.adult_price
                )}
                <span className="d-none d-sm-inline txt-cap poe-ml30 poe-red">
                  成人500/人
                </span>
              </div>
            </div>
            <div className="d-flex poe-mb30">
              <div className="text-right poe-w100px poe-mr30">兒童</div>
              <div className="poe-green">
                {orderObj.num_child} 人 / NT${' '}
                {Intl.NumberFormat().format(
                  orderObj.num_child * orderObj.child_price
                )}
                <span className="d-none d-sm-inline txt-cap poe-ml30 poe-red">
                  兒童100/人(4-11歲)
                </span>
              </div>
            </div>
            <div className="d-flex poe-mb30">
              <div className="text-right poe-w100px poe-mr30">餐點數量</div>
              <div className="poe-green">{orderObj.num_meal}</div>
            </div>
            <div className="d-flex poe-mb30">
              <div className="text-right poe-w100px poe-mr30">備註</div>
              <div className="poe-green">{orderObj.remark}</div>
            </div>
            <div className="text-right poe-mb20">
              <span>共計 </span>
              <span className="poe-red">
                {orderObj.num_adult + orderObj.num_child}
              </span>
              <span>
                {' '}
                人, <br className="d-inline d-sm-none" />
                金額小計NT${' '}
              </span>
              <span className="poe-red">
                {Intl.NumberFormat().format(
                  orderObj.num_adult * orderObj.adult_price +
                    orderObj.num_child * orderObj.child_price
                )}
              </span>
              <span> 元</span>
            </div>
          </div>
          <div className="row d-flex txt-cap poe-red poe-mb30">
            <div className="col-12 col-md-6 poe-mb15">
              <i className="fas fa-circle"></i>　預約費用以人頭計算
            </div>
            <div className="col-12 col-md-6 poe-mb15">
              <i className="fas fa-circle"></i>　成人500/人、兒童100/人(4-11歲)
            </div>
            <div className="col-12 col-md-6 poe-mb15">
              <i className="fas fa-circle"></i>　每個時段使用時間為3小時
            </div>
            <div className="col-12 col-md-6 poe-mb15">
              <i className="fas fa-circle"></i>
              　備註用餐特殊需求會以信件方式給予聯繫
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-100 text-center poe-bbgreen poe-mb20">
            <h5 className="">您還沒有任何預約, 請先前往驚喜廚房</h5>
          </div>
        </>
      )}
      <div className="w-100 text-center">
        <Link
          to="/surprisekitchen"
          // onClick={() => setFlowchart(1)}
          className={`${
            orderObj.sid !== 0 ? 'btn-gray' : 'btn-green'
          } txt-btn mx-4 poe-mb20`}
        >
          <i className="fas fa-chevron-left"></i>　返回預約
        </Link>

        {orderObj.sid !== 0 && (
          <Link
            to="/cart/reservekitchen"
            onClick={() => setFlowchart(2)}
            className="btn-green txt-btn mx-4 poe-mb20"
          >
            下一步　<i className="fas fa-chevron-right"></i>
          </Link>
        )}
      </div>
    </>
  )
}

export default CartReserveKitchen
