import React, { useEffect, useState } from 'react'
import { Route, withRouter, Link, Switch, Redirect } from 'react-router-dom'

function ReserveKitchenCheck(props) {
  const { flowchart, setFlowchart, paymentObj, coupon, reservationInfo } = props

  // 是否結帳完成
  const [checkBool, setCheckBool] = useState(false)

  // 拿資料庫的預約資料出來放
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

  const handlePostcheck = async () => {
    const fd = new FormData(document.querySelector('#surprisekitchen_order'))
    await fetch('http://localhost:4000/reservekitchen/ordercheck', {
      method: 'post',
      body: fd,
    })
      .then((r) => r.json())
      .then((obj) => {
        alert(`您的訂單已完成, 訂單編號 ${obj.order_sid}`)
        setCheckBool(true)
      })
  }

  return (
    <>
      {/* 完成結帳跳轉 */}
      {checkBool && <Redirect to="/" />}

      {/* 預約明細頁籤 */}
      <div className="row justify-content-center poe-bookmark">
        <div className="col-12 col-md-8 col-xl-6">
          <div className="d-flex justify-content-between txt-btn">
            <div className="col poe-bookmark-label poe-bookmark-label-active">
              預約明細
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>

          <div className="poe-bookmark-content txt-btn">
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
            </div>
            <div className="text-right poe-mb30">
              <span>共計 </span>
              <span className="poe-red">
                {' '}
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
            {coupon.cost !== 0 && (
              <div className="text-right poe-mb30">
                <span>折扣 </span>
                <span className="poe-red">-{coupon.cost}</span>
                <span>
                  {' '}
                  元, <br className="d-block d-sm-none" />
                  金額小計NT${' '}
                </span>
                <span className="poe-red">
                  {Intl.NumberFormat().format(
                    orderObj.num_adult * orderObj.adult_price +
                      orderObj.num_child * orderObj.child_price -
                      coupon.cost
                  )}
                </span>
                <span> 元</span>
              </div>
            )}
            <div className="text-right poe-mb30">
              <span>共計 </span>
              <span className="poe-red">
                {' '}
                {orderObj.num_adult + orderObj.num_child}
              </span>
              <span>
                {' '}
                人, <br className="d-inline d-sm-none" />
                金額小計NT${' '}
              </span>
              <span className="poe-h6 poe-red">
                {Intl.NumberFormat().format(
                  orderObj.num_adult * orderObj.adult_price +
                    orderObj.num_child * orderObj.child_price -
                    coupon.cost
                )}
              </span>
              <span> 元</span>
            </div>
            <div className="row d-flex txt-cap poe-red poe-mb30">
              <div className="col-12 col-md-6 poe-mb15">
                <i className="fas fa-circle"></i>　預約費用以人頭計算
              </div>
              <div className="col-12 col-md-6 poe-mb15">
                <i className="fas fa-circle"></i>
                　成人500/人、兒童100/人(4-11歲)
              </div>
              <div className="col-12 col-md-6 poe-mb15">
                <i className="fas fa-circle"></i>　每個時段使用時間為3小時
              </div>
              <div className="col-12 col-md-6 poe-mb15">
                <i className="fas fa-circle"></i>
                　備註用餐特殊需求會以信件方式給予聯繫
              </div>
            </div>
            {/* <table className="table table-borderless table-hover">
              <tbody>
                <tr>
                  <td>
                    {paymentObj.proj}
                    <span className="txt-cap poe-red">
                      {paymentObj.discript}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </div>
      </div>

      {/* 寄送資訊 */}
      <div className="row justify-content-center poe-bookmark">
        <div className="col-12 col-md-8 col-xl-6">
          <div className="d-flex justify-content-between txt-btn">
            <div className="col poe-bookmark-label poe-bookmark-label-active">
              寄送資訊
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>

          <div className="poe-bookmark-content txt-btn">
            <div className="row poe-mb30">
              <div className="col-4 col-sm-3 text-right">收件人</div>
              <div className="col-8 col-sm-9 poe-green">
                {reservationInfo.reservation_name}
              </div>
            </div>
            <div className="row poe-mb30">
              <div className="col-4 col-sm-3 text-right">連絡電話</div>
              <div className="col-8 col-sm-9 poe-green">
                {reservationInfo.reservation_tel}
              </div>
            </div>
            <div className="row poe-mb30">
              <div className="col-4 col-sm-3 text-right">Email</div>
              <div className="col-8 col-sm-9 poe-green">
                {reservationInfo.reservation_email}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 購物車頁籤(餐券/驚喜廚房-選擇付款方式) */}
      <div className="row justify-content-center poe-bookmark">
        <div className="col-12 col-md-8 col-xl-6">
          <div className="d-flex justify-content-between txt-btn">
            <div className="col poe-bookmark-label poe-bookmark-label-active">
              選擇付款方式
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>

          <div className="poe-bookmark-content txt-btn">
            <table className="table table-borderless table-hover">
              <tbody>
                <tr>
                  <td>
                    {paymentObj.proj}
                    <span className="txt-cap poe-red">
                      {paymentObj.discript}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 上下一步 */}
      <div className="row justify-content-center text-center text-sm-right poe-bookmark-btn-group">
        <div className="col-12 col-md-8 col-xl-6">
          <Link
            onClick={() => setFlowchart(2)}
            className="btn-green txt-btn mx-2 poe-mb20"
          >
            <i className="fas fa-chevron-left"></i>　上一步
          </Link>
          <Link
            onClick={() => {
              handlePostcheck()
            }}
            className="btn-green txt-btn mx-2 poe-mb20"
          >
            送出訂單　<i className="fas fa-check"></i>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ReserveKitchenCheck
