import MemberCenterNavbar from './MemberCenterNavbar'
import React, { useEffect, useState } from 'react'

// window.location.href = 'http://localhost:3015/'
function MemberCenterAddr() {
  const [Memberinfo, setMemberinfo] = useState([])

  const [inputs, setInputs] = useState({
    password: '',
    password1: '',
  })

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

    // if (inputs.password.trim().length < 6) {
    //   newErrors.push('password')
    // }
    // if (inputs.password1.trim().length < 6) {
    //   newErrors.push('password1')
    // }
    // if (inputs.mobile.trim().length < 20) {
    //   newErrors.push('mobile')
    // }

    setErrors(newErrors)

    if (newErrors.length == 0) {
      const fd = new FormData(document.querySelector('#test'))
      fetch('http://localhost:4000/membercenter/password', {
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
      <div className="container">
        <div className="row ml-2">
          {' '}
          <MemberCenterNavbar />
          <div className="col-12 col-lg-8  mx-auto">
            <div className="col-12 col-sm-10  col-md-10 col-lg-12 col-xl-7 mx-md-auto mx-lg-0">
              <div className="mb-5 mt-3  h3 text-center text-xl-left ee">
                變更密碼
              </div>
              <div
                className="btn border  txt-cap1 mr-2 mb-5  col-12
                 d-block d-sm-none d-md-none d-lg-none d-xl-none "
              >
                回上頁
              </div>

              <form id="test">
                {Memberinfo.map((v) => (
                  <div className="form-group txt-body">
                    <label htmlFor="inputAddr">新密碼</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      onChange={onChangeForField('password')}
                    />
                  </div>
                ))}

                {Memberinfo.map((v) => (
                  <div className="form-group ">
                    <label htmlFor="inputpassword">確認新密碼</label>
                    <input
                      type="text"
                      className={`form-control ${fieldValidCSS('password1')}`}
                      id="password1"
                      name="password1"
                    />
                    <span className="txt-cap">
                      輸入6個字元以上的英文字母及數字,不可使用特殊符號
                    </span>
                  </div>
                ))}
                {Memberinfo.map((v) => (
                  <div className="d-flex justify-content-between mb-5 mt-3">
                    <button className="btn-white txt-btn">重新設定</button>
                    <button
                      className="btn-green txt-btn "
                      onClick={handleSubmit}
                    >
                      密碼變更
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
