import React, { useEffect, useState } from 'react'

function FoodDeliverys2() {
  const [FoodDelivery, setFoodDelivery] = useState([])
  const [FoodDeliverySeach1, setFoodDeliverySeach1] = useState('')
  const [FoodDeliverySeach, setFoodDeliverySeach] = useState('')

  const Seach = (
    <>
      <div className="d-flex ">
        <div className=" mt-md-2  mt-2 txt-sub2 col-12 col-sm-12 d-flex ">
          <div className=" mt-2 mr-2 txt-cap d-none d-sm-none d-md-block d-lg-block d-xl-block">
            輸入查詢區間
          </div>
          <div className=" txt-sub2 mt-3 d-block d-sm-block d-md-none d-lg-none d-xl-none col-10  offset-3  offset-sm-4">
            輸入查詢區間
          </div>
          <input
            type="date"
            id="FoodDeliverySeach"
            name="FoodDeliverySeach"
            value={FoodDeliverySeach}
            onChange={(e) => setFoodDeliverySeach(e.target.value)}
            min="2020-08-31"
            max="2021-08-31"
          ></input>
          <small className="txt-cap mx-2 d-none d-sm-none d-md-block d-lg-block d-xl-block">
            ～
          </small>
          <input
            type="date"
            id="FoodDeliverySeach1"
            name="FoodDeliverySeach1"
            value={FoodDeliverySeach1}
            onChange={(e) => setFoodDeliverySeach1(e.target.value)}
            min="2020-08-31"
            max="2021-08-31"
          ></input>
          <button className="btn-green3 ml-2" onClick={() => {}}>
            送出
          </button>
        </div>
        <div className="col-12 col-sm-10 mx-auto"></div>{' '}
      </div>{' '}
    </>
  )
  const getDataFromServer = async () => {
    //模擬和伺服器要資料
    const response = await fetch(
      'http://localhost:4000/membercenter/cart_mealdelivery',
      {
        method: 'get',
      }
    )
    const data = await response.json()
    //最後設定要到狀態中
    setFoodDelivery(data)
  }

  useEffect(() => {
    getDataFromServer()
  }, [])

  return (
    <>
      {' '}
      {Seach}
      <div className=" txt-cap mt-2 ml-3 d-block d-sm-block d-md-block d-lg-none d-xl-none ">
        請點選項目以取得更詳細的訂單資訊
      </div>
      <div className=" mt-2 ml-3  txt-cap d-none d-sm-none d-md-none d-lg-block d-xl-block">
        請點選項目以取得更詳細的訂單資訊
      </div>
      <table className="txt-body  text-nowrap table col-10 mx-auto mx-xl-0 ">
        <thead className=" ">
          <tr className="text-center  ">
            <th>項次</th>
            <th className=" d-none d-md-block d-sm-none d-lg-block d-xl-block ">
              訂單編號
            </th>
            <th>訂單日期</th>
            <th className="d-none d-md-none d-sm-none d-lg-block d-xl-block  ">
              配送明細
            </th>
            <th>使用餐卷</th>
            <th className=" d-none d-md-none d-sm-none d-lg-block d-xl-block   ">
              配送日期
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="text-center ">
            <td>1</td>
            <td className=" d-none d-md-block d-sm-none d-lg-block d-xl-block">
              210106022925001
            </td>
            <td>2020/01/15</td>
            <td className=" d-none d-md-none d-sm-none d-lg-block d-xl-block">
              紅醬義大利麵 ...
            </td>
            <td>5</td>
            <td className=" d-none d-md-none d-sm-none d-lg-block d-xl-block">
              2020/01/15
            </td>
          </tr>
        </tbody>
      </table>{' '}
    </>
  )
}
export default FoodDeliverys2
