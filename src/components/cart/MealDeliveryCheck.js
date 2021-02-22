import React, { useEffect, useState } from 'react'
import { Route, withRouter, Link, Switch, Redirect } from 'react-router-dom'
import Swal from 'sweetalert2'

function MealDeliveryCheck(props) {
  const { flowchart, setFlowchart, info } = props

  // 是否結帳完成
  const [checkBool, setCheckBool] = useState(false)

  // 接取資料庫的資料
  const [deliveryData, setDeliveryData] = useState({
    thisTime: [],
    nextTime: [],
    simpleMealCoupon: {
      now: 0,
      cost: 0,
      remain: 0,
    },
  })

  // 讀取資料庫
  const handleGetData = () => {
    const url = 'http://localhost:4000/mealdelivery/getdeliverycart'
    fetch(url, {
      method: 'get',
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((obj) => {
        console.log(obj)
        setDeliveryData(obj)
      })
  }

  // 定義SweetAlert2的按鈕
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      popup: 'poe-alert',
      title: 'poe-green my-0',
      content: 'txt-btn',
      confirmButton: 'btn-green txt-btn mx-2 my-2',
      cancelButton: 'btn-red txt-btn mx-2 my-2',
    },
    buttonsStyling: false,
  })

  // 第一階段送出前確認
  const handlePostAlert = () => {
    // sweetAlert 第1階段
    swalWithBootstrapButtons
      .fire({
        imageUrl: 'http://localhost:3015/img/lydia/lemonCooking.PNG.PNG',
        imageHeight: 200,
        title:
          '<h5 class="d-block d-sm-none">確定要送出訂單嗎?</h5>' +
          '<h4 class="d-none d-sm-block">確定要送出訂單嗎?</h4>',
        showCancelButton: true,
        confirmButtonText: `確定`,
        cancelButtonText: `再看一下`,
        padding: '25px',
      })
      .then((result) => {
        // 只有確認以後才連接資料庫
        if (result.isConfirmed) {
          handlePostcheck()
        }
      })
  }

  // 送出訂單
  // 第二階段送出資料並接收訂單編號
  const handlePostcheck = async () => {
    const fd = new FormData(document.querySelector('#cart_mealdelivery'))
    await fetch('http://localhost:4000/mealdelivery/ordercheck', {
      method: 'post',
      body: fd,
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((obj) => {
        // sweetAlert 第2階段
        swalWithBootstrapButtons
          .fire({
            // icon: 'success',
            imageUrl: 'http://localhost:3015/img/lydia/Omurice.GIF',
            imageHeight: 200,
            title: '<h4>完成訂單</h4>',
            text: `您的訂單已經完成, 訂單編號 ${obj.order_sid}`,
            padding: '25px',
            showConfirmButton: true,
            confirmButtonText: '確定',
            showCancelButton: false,
            // showCloseButton: true,
            backdrop: `rgba(0,0,0,0.4)`,
          })
          .then((result) => {
            setCheckBool(true)
          })
      })
  }

  // 裝載時轉成流程3
  useEffect(() => {
    setFlowchart(3)
    handleGetData()
    console.log(deliveryData.thisTime)
  }, [])

  return (
    <>
      {/* 完成結帳跳轉 */}
      {checkBool && <Redirect to="/" />}

      {/* 配送餐點 */}
      <div className="row justify-content-center poe-bookmark">
        <div className="col-12 col-md-8 col-xl-6">
          <div className="d-flex justify-content-between txt-btn">
            <div className="col poe-bookmark-label poe-bookmark-label-active">
              配送餐點
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>

          <div className="poe-bookmark-content txt-btn">
            <table className="table table-borderless table-hover">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th className="" scope="col">
                    餐點明細
                  </th>
                  <th className="text-center text-nowrap">數量</th>
                </tr>
              </thead>
              <tbody>
                {/* 商品卡 */}
                {deliveryData.thisTime.map((v, i) => (
                  <tr>
                    <td className="align-middle px-0 poe-pr15 poe-cart-product-img">
                      <img
                        className="w-100"
                        src={`http://localhost:3015/img/meal/未去背/${v.product_id}.jpg`}
                        alt=""
                      />
                    </td>
                    <td>
                      <p className="txt-btn">{v.meal_name}</p>
                      <p className="txt-cap poe-gray poe-ellipsis">
                        {v.description}
                      </p>
                    </td>
                    <td className="text-center align-middle">
                      <div>
                        <span>{v.quantity}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="poe-bookmark-content-result text-right">
              <div>
                <span>您的帳戶現有 </span>
                <span className="poe-red">
                  {deliveryData.simpleMealCoupon.now}
                </span>
                <span> 張餐券,</span>
                <br className="d-block d-sm-none" />
                <span>配送將消耗 </span>
                <span className="poe-red">
                  {deliveryData.simpleMealCoupon.cost}
                </span>
                <span> 張餐券,</span>
                <br className="d-block d-sm-none" />
                <span>您尚有 </span>
                <span className="poe-red">
                  {deliveryData.simpleMealCoupon.remain}
                </span>
                <span> 張餐券可以使用</span>
              </div>
            </div>
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
              <div className="col-8 col-sm-9 poe-green">{info.name}</div>
            </div>
            <div className="row poe-mb30">
              <div className="col-4 col-sm-3 text-right">連絡電話</div>
              <div className="col-8 col-sm-9 poe-green">{info.mobile}</div>
            </div>
            <div className="row poe-mb30">
              <div className="col-4 col-sm-3 text-right">Email</div>
              <div className="col-8 col-sm-9 poe-green">{info.email}</div>
            </div>
            <div className="row poe-mb30">
              <div className="col-4 col-sm-3 text-right">收件地址</div>
              <div className="col-8 col-sm-9 poe-green">{info.address}</div>
            </div>
            <div className="row poe-mb30">
              <div className="col-4 col-sm-3 text-right">配送日期</div>
              <div className="col-8 col-sm-9 poe-green">{info.date}</div>
            </div>
            <div className="row poe-mb30">
              <div className="col-4 col-sm-3 text-right">配送時間</div>
              <div className="col-8 col-sm-9 poe-green">{info.time}</div>
            </div>
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
              handlePostAlert()
            }}
            className="btn-green txt-btn mx-2 poe-mb20"
          >
            確認配送　<i className="fas fa-check"></i>
          </Link>
        </div>
      </div>
    </>
  )
}

export default MealDeliveryCheck
