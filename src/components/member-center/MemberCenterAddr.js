import MemberCenterNavbar from './MemberCenterNavbar'
import React, { useEffect, useState } from 'react'
import { Redirect, Link } from 'react-router-dom'

import Moment from 'react-moment'

function MemberCenterAddr(props) {
  const { loginBool, setLoginBool, status } = props

  // 如果Status為true, 登入loginBool改為true
  useEffect(() => {
    status && setLoginBool(true)
    // console.log(status, !loginBool)
  }, [status])

  const [Memberinfo, setMemberinfo] = useState([])

  const getDataFromServer = async () => {
    //模擬和伺服器要資料
    const response = await fetch(`http://localhost:4000/membercenter/info`, {
      method: 'get',
      credentials: 'include',
    })
    const data = await response.json()
    //最後設定要到狀態中
    setMemberinfo(data)
  }

  useEffect(() => {
    getDataFromServer()
  }, [])

  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    password: '',
    password1: '',
    mobile: '',
    addr: '',
  })

  // 切換開始作檢查的旗標
  const [startToChecked, setStartToChecked] = useState(false)
  // 錯誤陣列，記錄有錯誤的欄位名稱
  const [errors, setErrors] = useState([])

  const onChangeForField = (fieldName) => (event) => {
    setInputs((state) => ({ ...state, [fieldName]: event.target.value }))
  }

  // 按了提交按鈕用的
  const handleSubmit = (e) => {
    //開啟開始觸發檢查的旗標
    setStartToChecked(true)
    const newErrors = []

    // if (inputs.name.trim().length < 20) {
    //   newErrors.push('name')
    // }

    // if (inputs.mobile.trim().length < 20) {
    //   newErrors.push('mobile')
    // }
    // if (inputs.addr.trim().length < 6) {
    //   newErrors.push('addr')
    // }

    setErrors(newErrors)

    if (newErrors.length == 0) {
      const fd = new FormData(document.querySelector('#test'))
      fetch('http://localhost:4000/membercenter/addr', {
        method: 'post',
        body: fd,
        credentials: 'include',
      }).then((obj) => {
        console.log(obj)
        alert('已修改')
        return window.location.reload()
      })
    }
  }

  const fieldValidCSS = (fieldName) => {
    if (!startToChecked) return ''

    return errors.includes(fieldName) ? 'is-invalid' : 'is-valid'
  }

  return (
    <>
      {loginBool && <Redirect to="/" />}
      <div className="container">
        <div className="row ml-2">
          {' '}
          <MemberCenterNavbar />
          <div className="col-12 col-lg-8  mx-auto ">
            <div className="col-12 col-sm-10  col-md-10 col-lg-12 col-xl-7 mx-md-auto mx-lg-0">
              <div className="mb-5 mt-3 d-none d-xl-block h3 ee">地址</div>

              <div
                className="btn border  txt-cap1 mr-2 mb-5  col-12
                 d-block d-sm-none d-md-none d-lg-none d-xl-none "
              >
                回上頁
              </div>

              <form id="test">
                {Memberinfo.map((v) => (
                  <div className="form-group txt-body ">
                    <label htmlFor="inputAddr">配送地址</label>
                    <button className=" box6   ml-2 ">預 設</button>

                    <input
                      type="text"
                      className="form-control mt-2"
                      id="inputemail"
                      name="addr"
                      onChange={onChangeForField('addr')}
                      value={v.addr}
                      disabled
                    />
                  </div>
                ))}
                {Memberinfo.map((v) => (
                  <div className="form-group ">
                    <label htmlFor="inputAddr">修改預設地址</label>
                    <input
                      type="text"
                      className={`form-control ${fieldValidCSS('addr')}`}
                      id="inputemail"
                      name="addr"
                      onChange={onChangeForField('addr')}
                    />
                  </div>
                ))}
                {Memberinfo.map((v) => (
                  <div className="d-flex justify-content-between mb-5 mt-3">
                    <button
                      className="btn-white txt-btn mb-5"
                      onClick={handleSubmit}
                    >
                      重新設定
                    </button>
                    <button
                      className="btn-green txt-btn mb-5"
                      onClick={handleSubmit}
                    >
                      修改地址
                    </button>
                  </div>
                ))}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MemberCenterAddr
