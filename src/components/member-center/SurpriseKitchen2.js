import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
function SurpriseKitchen2() {
  const [SurpriseKitchen, setSurpriseKitchen] = useState([])

  const [SurpriseKitchenSeach, setSurpriseKitchenSeach] = useState('null')
  const [SurpriseKitchenSeach1, setSurpriseKitchenSeach1] = useState('null')
  const getDataFromServer = async () => {
    //模擬和伺服器要資料
    const response = await fetch(
      `http://localhost:4000/membercenter/surprisekitchen_order?start=${SurpriseKitchenSeach}&end=${SurpriseKitchenSeach1}&status=1`,
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

  const Seach = (
    <>
      <div className="mt-2 txt-sub2 d-md-flex ">
        <div className=" mt-2 mr-2 txt-cap  d-none d-md-none d-lg-block ">
          輸入查詢區間
        </div>

        <input
          className="mr-2 d-none d-md-none d-lg-block"
          type="date"
          id="SurpriseKitchenSeach"
          name="SurpriseKitchenSeach"
          value={SurpriseKitchenSeach}
          onChange={(e) => setSurpriseKitchenSeach(e.target.value)}
        ></input>
        <small className="txt-cap mt-2 d-none d-md-none d-lg-block ">～</small>
        <input
          className="mr-2 d-none d-md-none d-lg-block"
          type="date"
          id="SurpriseKitchenSeach1"
          name="SurpriseKitchenSeach1"
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
            {SurpriseKitchen.map((v, i) => (
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
                  <button>1234</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default SurpriseKitchen2
