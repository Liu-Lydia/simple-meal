import MemberCenterNavbar from './MemberCenterNavbar'
import React, { useEffect, useState } from 'react'

import Moment from 'react-moment'

function MemberCenterInfo() {
  const [Memberinfo, setMemberinfo] = useState([])

  const getDataFromServer = async () => {
    //模擬和伺服器要資料
    const response = await fetch(
      `http://localhost:4000/membercenter/info?id=1`,
      {
        method: 'get',
      }
    )
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

    if (inputs.password.trim().length < 6) {
      newErrors.push('password')
    }
    if (inputs.password1.trim().length < 6) {
      newErrors.push('password1')
    }
    // if (inputs.mobile.trim().length < 20) {
    //   newErrors.push('mobile')
    // }
    if (inputs.addr.trim().length < 6) {
      newErrors.push('addr')
    }
    const re = /\S+@\S+\.\S+/
    if (!re.test(inputs.email.toLowerCase())) {
      newErrors.push('email')
    }

    setErrors(newErrors)
  }

  const fieldValidCSS = (fieldName) => {
    if (!startToChecked) return ''

    return errors.includes(fieldName) ? 'is-invalid' : 'is-valid'
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {' '}
          <MemberCenterNavbar />
          <div className="col-7 mx-auto">
            <h4 className="mb-3 mt-3 ml-2 d-none d-xl-block ">個人資料</h4>
            <div
              className="btn border  txt-cap1 mr-2 mb-5  col-12
                 d-block d-sm-none d-md-none d-lg-none d-xl-none "
            >
              回上頁
            </div>
            <div className="col-6 ">
              <form>
                {Memberinfo.map((v) => (
                  <div className="form-group">
                    <label htmlFor="inputName">電子郵件</label>
                    <button
                      className="btn btn-success btn-sm box6 mb-2 ml-1 "
                      type="button"
                    >
                      預 設
                    </button>

                    <input
                      type="text"
                      className={`form-control ${fieldValidCSS('email')}`}
                      id="inputemail"
                      name="email"
                      onChange={onChangeForField('email')}
                      value={v.email}
                      disabled
                    />
                  </div>
                ))}

                {Memberinfo.map((v) => (
                  <div className="form-group">
                    <label htmlFor="inputName">姓名</label>
                    <input
                      type="text"
                      className={`form-control ${fieldValidCSS('name')}`}
                      id="inputName"
                      name="name"
                      value={v.name}
                      onChange={onChangeForField('name')}
                    />
                  </div>
                ))}
                <div className="form-group">
                  <label htmlFor="inputName">暱稱</label>
                  <input
                    type="text"
                    className={`form-control ${fieldValidCSS('Nikename')}`}
                    id="inputNikename"
                    name="Nikename"
                    onChange={onChangeForField('Nikename')}
                  />
                </div>
                {Memberinfo.map((v) => (
                  <div className="form-group">
                    <label htmlFor="inputbirthday">生日</label>
                    <input
                      type="text"
                      className={`form-control ${fieldValidCSS('birthday')}`}
                      id="inputbirthday"
                      name="birthday"
                      onChange={onChangeForField('birthday')}
                    />
                    <Moment format="YYYY/MM/DD">{v.birthday}</Moment>
                  </div>
                ))}
                {Memberinfo.map((v) => (
                  <div className="form-group">
                    <label htmlFor="inputmobile">電話</label>
                    <input
                      type="text"
                      className={`form-control ${fieldValidCSS('mobile')}`}
                      id="inputmobile"
                      name="mobile"
                      onChange={onChangeForField('mobile')}
                      value={v.mobile}
                    />
                  </div>
                ))}
                <div className="form-group txt-cap d-flex flex-column ">
                  <label>
                    <input type="checkbox" name="rule1" />
                    我同意網站服務條款及隱私政策
                  </label>
                </div>
                <div className="d-flex">
                  <button
                    type="button"
                    className="btn btn-primary"
                    className="btn-green txt-btn  mb-5"
                    onClick={handleSubmit}
                  >
                    重設
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    className="btn-green txt-btn  mb-5"
                    onClick={handleSubmit}
                  >
                    修改
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MemberCenterInfo
