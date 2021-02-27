import React, { useState, useEffect } from 'react'
import '../../styles/public.css'
import '../../styles/fff.css'
import QRCodeDialog from './QRCodeDialog'

function ExchangeRecord(props) {
  const {loginBool} = props
  const [exchangeRecord, setExchangeRecord] = useState([])
  const [qrcodeStyle, setqrcodeStyle] = useState({ visibility: 'hidden' })
  const [couponKey, setCouponKey] = useState('')
  const getExchangeRecord = async () => {
    const url = 'http://localhost:4000/reward/getExchangeRecord'
    //sid 要從session來
    await fetch(url, {
      method: 'get',
      credentials: 'include',
    })
      //then 是會接前方拋出的結果
      .then((r) => r.json())
      .then((obj) => {
        setExchangeRecord(obj)
      })
  }

  useEffect(() => {
    if( loginBool)
    {getExchangeRecord()}
    
  }, [])

  return (
    <>
      <div className="row fff-no-mr-and-pad d-none d-md-flex">
        {/* <!--保留空格 --> */}
        <div className="col-2 fff-no-mr-and-pad"></div>

        <div className="col-8 fff-no-mr-and-pad" style={{ height: ' 210px' }}>
          <div className="row d-flex align-items-center justify-content-around fff-no-mr-and-pad">
            <table id="fff-record-table">
              <tr>
                <th>項次</th>
                <th>兌換項目</th>
                <th>兌換日期</th>
                <th>到期日期</th>
                <th>兌換張數</th>
                <th>優惠條碼</th>
              </tr>
              {exchangeRecord.map((value, index) => (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{value.good_name}</td>
                  <td>{value.event_time}</td>
                  <td>{value.end_date}</td>
                  <td>{value.spend_point / value.need_point}</td>
                  <td>
                    <div
                      className="record"
                      onClick={() => {
                        setqrcodeStyle({ visibility: 'visible' })
                        setCouponKey(`${value.key}`)
                      }}
                    >
                      檢視
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>

        {/* <!--保留空格 --> */}
        <div className="col-2 fff-no-mr-and-pad"></div>
      </div>

      <div className="row fff-no-mr-and-pad d-flex d-md-none">
        {/* <!--保留空格 --> */}
        <div className="col-2 fff-no-mr-and-pad"></div>

        <div className="col-8 fff-no-mr-and-pad" style={{ height: ' 210px' }}>
          <div className="row d-flex align-items-center justify-content-around fff-no-mr-and-pad">
            <table id="fff-record-table">
              {exchangeRecord.map((value, index) => (
                <div key={index}>
                  <tr>
                    <td rowSpan="4">{index + 1}</td>
                    <th>兌換項目</th>
                    <td>{value.good_name}</td>
                    <td rowSpan="4" className="d-flex align-items-center">
                      <div
                        className="record"
                        onClick={() => {
                          setqrcodeStyle({ visibility: 'visible' })
                          setCouponKey(value.key)
                        }}
                      >
                        優惠條碼
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>兌換日期</th>

                    <td>{value.event_time}</td>
                  </tr>
                  <tr>
                    <th>到期日期</th>
                    <td>{value.end_date}</td>
                  </tr>
                  <tr>
                    {/* <th>使用狀況</th>
                    {value.used_date == null ? (
                      <td className="fff-reward-unuse">可使用</td>
                    ) : (
                      <td className="fff-reward-used">已使用</td>
                    )} */}
                    <th>兌換張數</th>
                    <td>{value.spend_point / value.need_point}</td>
                  </tr>
                </div>
              ))}
            </table>
          </div>
        </div>

        {/* <!--保留空格 --> */}
        <div className="col-2 fff-no-mr-and-pad"></div>
      </div>
      <QRCodeDialog
        qrcodeStyle={qrcodeStyle}
        setqrcodeStyle={setqrcodeStyle}
        couponKey={couponKey}
      />
    </>
  )
}

export default ExchangeRecord
