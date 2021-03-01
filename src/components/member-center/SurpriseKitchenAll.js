import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
import Swal from 'sweetalert2'
import { Redirect } from 'react-router-dom'

function SurpriseKitchenAll() {
  const [SurpriseKitchen, setSurpriseKitchen] = useState([])

  const [SurpriseKitchenSeach, setSurpriseKitchenSeach] = useState('null')
  const [SurpriseKitchenSeach1, setSurpriseKitchenSeach1] = useState('null')
  const getDataFromServer = async () => {
    //模擬和伺服器要資料
    const response = await fetch(
      `http://localhost:4000/membercenter/surprisekitchen_order?start=${SurpriseKitchenSeach}&end=${SurpriseKitchenSeach1}`,
      {
        method: 'get',
        credentials: 'include',
      }
    )
    const data = await response.json()
    //最後設定要到狀態中
    setSurpriseKitchen(data)
  }

  useEffect(() => {
    getDataFromServer()
  }, [])

  //Lydia加的 ***
  //轉址　↓↓↓
  const [shouldRedirectTo, setShouldRedirectTo] = useState('')

  //視窗狀態　↓↓↓
  const [dialogStyle, setDialogStyle] = useState({ visibility: 'hidden' })

  const [comment, setComment] = useState({
    nickname: '',
    used_date: '',
    comment: '',
  })

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
  const handleWriteComment = () => {
    // sweetAlert 第1階段
    swalWithBootstrapButtons
      .fire({
        imageUrl: 'http://localhost:3015/img/lemon/123.svg',
        imageHeight: 200,
        title:
          '<h5 class="d-block d-sm-none">確定要送出評論嗎?</h5>' +
          '<h4 class="d-none d-sm-block">確定要送出評論嗎?</h4>',
        showCancelButton: true,
        confirmButtonText: `確定`,
        cancelButtonText: `再編輯一下`,
        padding: '45px',
      })
      .then((result) => {
        // 只有確認以後才連接資料庫
        if (result.isConfirmed) {
          handleCheckComment()
        }
      })
  }
  //發送評論　↓↓↓
  const handleCheckComment = async () => {
    const fd = new FormData(document.querySelector('#kitchenComment'))

    await fetch('http://localhost:4000/surpriseKitchenHistory/getoverlist', {
      method: 'post',
      body: fd,
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((obj) => {
        console.log(obj)
        setComment(obj)
        // sweetAlert 第2階段
        swalWithBootstrapButtons
          .fire({
            // imageUrl: 'http://localhost:3015/img/lydia/Omurice.GIF',
            // imageHeight: 200,
            title: '<h4>評論完成</h4>',
            padding: '45px',
            showConfirmButton: true,
            confirmButtonText: '確認',
            backdrop: `rgba(0,0,0,.5)`,
          })
          .then((result) => {
            if (result.isConfirmed) {
              setShouldRedirectTo('index')
              return
            }
          })
        setDialogStyle({ visibility: 'hidden' })
      })
  }

  const Seach = (
    <>
      <div className="mt-2 txt-sub2 d-md-flex ">
        <div className=" mt-2 mr-2 txt-cap  d-none d-md-none d-lg-block ">
          輸入查詢區間
        </div>

        <input
          className="mr-2 d-none d-md-none d-lg-block"
          type="date"
          id="CouponSeach"
          name="CouponSeach"
          value={SurpriseKitchenSeach}
          onChange={(e) => setSurpriseKitchenSeach(e.target.value)}
        ></input>
        <small className="txt-cap mt-2 d-none d-md-none d-lg-block ">～</small>
        <input
          className="mr-2 d-none d-md-none d-lg-block"
          type="date"
          id="CouponSeach1"
          name="CouponSeach1"
          value={SurpriseKitchenSeach1}
          onChange={(e) => setSurpriseKitchenSeach1(e.target.value)}
        ></input>
        <button
          className="btn-green3 ml-2 txt-cap ml-2 d-none d-md-none d-lg-block "
          onClick={() => getDataFromServer()}
        >
          送出
        </button>
      </div>

      <div className="mt-2 txt-sub2 mx-auto">
        <div className="col-4 mx-auto txt-sub2 mt-3 d-block d-lg-none mb-3">
          輸入查詢區間
        </div>

        <input
          className="col-12 d-block  d-lg-none mb-3 "
          type="date"
          id="SurpriseKitchenSeach"
          name="SurpriseKitchenSeach"
          value={SurpriseKitchenSeach}
          onChange={(e) => setSurpriseKitchenSeach(e.target.value)}
        ></input>

        <input
          className="col-12 d-block  d-lg-none "
          type="date"
          id="SurpriseKitchenSeach1"
          name="SurpriseKitchenSeach1"
          value={SurpriseKitchenSeach1}
          onChange={(e) => setSurpriseKitchenSeach1(e.target.value)}
        ></input>
        <button
          className="btn-green3 mt-2  d-block d-md-none col-6  mx-auto"
          onClick={() => getDataFromServer()}
        >
          送出
        </button>
      </div>
    </>
  )
  return (
    <>
      {/* Lydia加的 */}
      {shouldRedirectTo === 'index' && <Redirect to="/" />}

      {/* 兌換視窗 */}
      <div className="fff-handmadepopup" style={dialogStyle}>
        <div className="lll-exchange-content-box">
          <div className="row justify-content-end fff-no-mr-and-pad">
            {/* 圖片放置位置 先占高 mobo關閉 */}

            {/* 關閉頁面的Ｘ */}
            <div className="" style={{ marginBottom: '10px' }}>
              <h6 className="fff-no-mr-and-pad" style={{ color: '#627E2A' }}>
                <i
                  className="fas fa-times aboutCloseBtn"
                  onClick={() => {
                    setDialogStyle({ display: 'none' })
                  }}
                ></i>
              </h6>
            </div>
          </div>
          <div className="row fff-no-mr-and-pad">
            <form id="kitchenComment">
              <div className="col fff-exchange-content txt-btn">
                <div
                  className="d-flex justify-content-between fff-txt-info"
                  style={{ lineHeight: '50px' }}
                >
                  <span className="lll-comment-info">
                    <h3 className="m-0 lll-green lll-pb45">給予評論</h3>
                    <div className="lll-title-line-bottom"></div>
                    <div className="lll-pt45 text-align-center">
                      <span className="lll-black txt-btn lll-pr30">暱稱</span>
                      <input
                        type="text"
                        className="input-style lll-input-width"
                        name="nickname"
                        value={comment.nickname}
                        onChange={(e) => {
                          setComment(e.target.value)
                        }}
                      />
                    </div>

                    <div>
                      <span className="lll-black txt-btn lll-pr30">
                        使用日期
                      </span>

                      <span className="txt-btn lll-grey">123</span>
                    </div>
                    <label
                      for="FormControlTextarea"
                      className="m-0 txt-sub1 lll-black lll-pb20"
                    >
                      留下評論
                    </label>
                    <div className="form-group m-0">
                      <div className="d-flex">
                        <div className="lll-comment-msg-width">
                          <textarea
                            className="form-control lll-comment-msg"
                            id="FormControlTextarea"
                            rows="5"
                            name="comment"
                            value={comment.comment}
                            onChange={(e) => {
                              setComment(e.target.value)
                            }}
                          />
                        </div>

                        <span className="txt-sub2 lll-red mt-auto pl-3">
                          評論送出後便無法再做任何更動 !
                        </span>
                        <button
                          type="button"
                          className="btn-green txt-btn aboutCloseBtn mt-auto ml-auto"
                          onClick={() => {
                            handleWriteComment()
                          }}
                          data-dismiss="modal"
                        >
                          送出評論
                        </button>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Lydia加的 */}
      {Seach}
      {/* <div className="tab-content" id="myTabContent">
        <div className=" txt-cap mt-2 ml-3 d-block d-sm-block d-md-block d-lg-none d-xl-none ">
          請點選項目以取得更詳細的訂單資訊
        </div>
        <div className=" mt-2 ml-3  txt-cap d-none d-sm-none d-md-none d-lg-block d-xl-block">
          請點選項目以取得更詳細的訂單資訊
        </div>
      </div> */}
      <div className="">
        <table className="txt-body  text-nowrap table col-10 mx-auto mx-xl-0">
          <thead>
            <tr className="text-center  ">
              <th>項次</th>
              <th className=" d-none d-md-block d-sm-none d-lg-block d-xl-block ">
                訂單編號
              </th>
              <th>預約日期</th>
              <th className="d-none d-md-none d-sm-none d-lg-block d-xl-block  ">
                預約時段
              </th>
              <th>付款方式</th>
              <th className=" d-none d-md-none d-sm-none d-lg-block d-xl-block   ">
                總金額
              </th>
            </tr>
          </thead>
          <tbody>
            {SurpriseKitchen.map((v, i) => {
              console.log(v)
              return (
                <tr key={i}>
                  <td>{v.sid}</td>
                  <td>{v.order_sid}</td>
                  <td className=" d-none d-sm-none d-xl-block ">
                    <Moment format="YYYY/MM/DD">{v.reservation_date}</Moment>
                  </td>
                  <td>{v.reservation_time}</td>
                  <td className="d-none d-sm-none  d-md-none d-lg-block ">
                    {v.payment_method}
                  </td>
                  <td>{v.reservation_price}</td>
                  <td>
                    {v.status ? (
                      <a
                        className="btn-yello txt-cap lll-cursor"
                        onClick={() => {
                          setDialogStyle({ visibility: 'visible' })
                        }}
                      >
                        給予評論
                      </a>
                    ) : (
                      ''
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default SurpriseKitchenAll
