import MemberCenterNavbar from './MemberCenterNavbar'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

function MemberCenterInfo(props) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      cancelButton: 'select-btn-green txt-btn',
    },
    buttonsStyling: false,
  })

  const [Memberinfo, setMemberinfo] = useState([])

  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
    mobile: '',
    addr: '',
    birthday: '',
  })

  // 切換開始作檢查的旗標
  const [startToChecked, setStartToChecked] = useState(false)

  // 錯誤陣列，記錄有錯誤的欄位名稱
  const [errors, setErrors] = useState([])

  const onChangeForField = (fieldName) => (event) => {
    checkErrors()

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

  const checkErrors = () => {
    //開啟開始觸發檢查的旗標
    setStartToChecked(true)

    const newErrors = []

    if (inputs.name.trim().length > 6 && inputs.name.trim().length < 10) {
      newErrors.push('name')
    }
    if (inputs.nickname.trim().length > 6 && inputs.name.trim().length < 10) {
      newErrors.push('nickname')
    }
    // if (inputs.addr.trim().length < 6) {
    //   newErrors.push('addr')
    // }

    console.log(newErrors)

    setErrors(newErrors)
  }

  // 按了提交按鈕用的
  const handleSubmit = (e) => {
    // if (inputs.addr.trim().length < 6) {
    //   newErrors.push('addr')
    // }
    e.preventDefault()

    if (errors.length === 0) {
      const fd = new FormData(document.querySelector('#test'))
      fetch('http://localhost:4000/membercenter/information', {
        method: 'post',
        body: fd,
        credentials: 'include',
      })
      swalWithBootstrapButtons.fire({
        icon: 'success',
        text: '修改成功！！',
        showConfirmButton: false,
        padding: '45px',
        showCancelButton: true,
        cancelButtonText: '確定',
        // showCloseButton: true,
      })
    } else {
      // alert('has errors not submit')
      swalWithBootstrapButtons.fire({
        icon: 'error',
        text: '有欄位未填寫正確,請確認！',
        showConfirmButton: false,
        padding: '45px',
        showCancelButton: true,
        cancelButtonText: '確定',
        // showCloseButton: true,
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
            <div className="col-12 col-sm-10  col-lg-12 col-xl-7 mx-md-auto mx-lg-0">
              <div className="mb-5 mt-3  h4 text-center text-xl-left ee">
                個人資料
              </div>
              <div
                className="btn border  txt-cap1 mr-2 mb-5  col-12
                 d-block d-sm-none d-md-none d-lg-none d-xl-none "
              >
                回上頁
              </div>

              <form id="test" className="txt-body">
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

                    <div class="invalid-feedback">姓名格式錯誤</div>
                  </div>
                ))}

                {Memberinfo.map((v) => (
                  <div className="form-group">
                    <label htmlFor="inputName">暱稱</label>
                    <input
                      type="text"
                      className={`form-control ${fieldValidCSS('nickname')}`}
                      id="inputnickname"
                      name="nickname"
                      defaultValue={v.nickname}
                      onChange={onChangeForField('nickname')}
                    />
                    <div class="invalid-feedback">姓名格式錯誤</div>
                  </div>
                ))}
                {Memberinfo.map((v) => (
                  <div className="form-group">
                    <label htmlFor="inputbirthday">生日</label>
                    <input
                      type="date"
                      className="form-control"
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
                      className="form-control"
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
                  <div className="d-flex justify-content-center">
                    <button
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
