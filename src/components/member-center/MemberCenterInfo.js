import MemberCenterNavbar from './MemberCenterNavbar'
import React, { useEffect, useState } from 'react'
import { Redirect, Link } from 'react-router-dom'

function MemberCenterInfo(props) {
  const { loginBool, setLoginBool, status } = props
  useEffect(() => {
    status && setLoginBool(true)
    // console.log(status, !loginBool)
  }, [status])

  const [Memberinfo, setMemberinfo] = useState([])

  const [inputs, setInputs] = useState('')

  // 切換開始作檢查的旗標
  const [startToChecked, setStartToChecked] = useState(false)
  // 錯誤陣列，記錄有錯誤的欄位名稱
  const [errors, setErrors] = useState([])

  const onChangeForField = (fieldName) => (event) => {
    setInputs((state) => ({ ...state, [fieldName]: event.target.value }))
  }

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
  // 按了提交按鈕用的
  const handleSubmit = (e) => {
    //開啟開始觸發檢查的旗標
    setStartToChecked(true)
    const newErrors = []

    // if (inputs.name.trim().length < 20) {
    //   newErrors.push('name')
    // }

    setErrors(newErrors)

    if (newErrors.length == 0) {
      const fd = new FormData(document.querySelector('#test'))
      fetch('http://localhost:4000/membercenter/information', {
        method: 'post',
        body: fd,
        credentials: 'include',
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
              <form id="test">
                {Memberinfo.map((v) => (
                  <div className="form-group">
                    <label htmlFor="inputName">電子郵件</label>
                    <input
                      type="text"
                      className="form-control"
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
                      defaultValue={v.name}
                      onChange={onChangeForField('name')}
                    />
                  </div>
                ))}

                {Memberinfo.map((v) => (
                  <div className="form-group">
                    <label htmlFor="inputName">暱稱</label>
                    <input
                      type="text"
                      className={`form-control ${fieldValidCSS('ikename')}`}
                      id="inputNikename"
                      name="nickname"
                      defaultValue={v.nickname}
                      onChange={onChangeForField('nikename')}
                    />
                  </div>
                ))}
                {Memberinfo.map((v) => (
                  <div className="form-group">
                    <label htmlFor="inputbirthday">生日</label>
                    <input
                      type="date"
                      className={`form-control ${fieldValidCSS('birthday')}`}
                      id="inputbirthday"
                      name="birthday"
                      onChange={onChangeForField('birthday')}
                      defaultValue={v.birthday}
                    />
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
                      defaultValue={v.mobile}
                    />
                  </div>
                ))}
                {Memberinfo.map((v) => (
                  <div className="form-group txt-cap d-flex flex-column ">
                    <label>
                      <input type="checkbox" name="rule1" />
                      我同意網站服務條款及隱私政策
                    </label>
                  </div>
                ))}
                {Memberinfo.map((v) => (
                  <div className="mx-auto col-6">
                    <button
                      type="button"
                      className="btn btn-primary"
                      className="btn-green txt-btn  mb-5"
                      onClick={handleSubmit}
                    >
                      修改資料
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
export default MemberCenterInfo
