import { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function MemberCenterRegiStered(props) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      cancelButton: 'select-btn-green txt-btn',
    },
    buttonsStyling: false,
  })

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

    if (inputs.name.trim().length > 10) {
      newErrors.push('name')
    }

    if (inputs.password.trim().length < 6) {
      newErrors.push('password')
    }
    if (inputs.password1.trim().length !== inputs.password.length) {
      newErrors.push('password1')
    }
    if (inputs.mobile.trim().length > 6) {
      newErrors.push('mobile')
    }
    if (inputs.addr.trim().length < 6) {
      newErrors.push('addr')
    }
    const re = /\S+@\S+\.\S+/
    if (!re.test(inputs.email.toLowerCase())) {
      newErrors.push('email')
    }

    setErrors(newErrors)

    if (newErrors.length !== 0) {
      swalWithBootstrapButtons.fire({
        icon: 'error',
        text: '有欄位未填寫 請再檢查',
        showConfirmButton: false,
        padding: '25px',
        showCancelButton: true,
        cancelButtonText: '確定',
        showCloseButton: true,
      })
    }

    if (newErrors.length == 0) {
      swalWithBootstrapButtons.fire({
        icon: 'success',
        text: '註冊成功',
        showConfirmButton: false,
        padding: '25px',
        showCancelButton: true,
        cancelButtonText: '確定',
        showCloseButton: true,
      })
    }
    const fd = new FormData(document.querySelector('#test'))

    fetch('http://localhost:4000/membercenter/registered', {
      method: 'post',
      body: fd,
      credentials: 'include',
    })
  }

  // 切換合法不合法的css與提示字詞
  const fieldValidCSS = (fieldName) => {
    if (!startToChecked) return ''

    return errors.includes(fieldName) ? 'is-invalid' : 'is-valid'
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto cc d-none d-xl-block">
            <div className="col-10 d-flex justify-content-end ">
              <Link to="/MemberCenter">
                <i className="fas fa-times" style={{ color: 'red' }}></i>
              </Link>
            </div>
            <div className="txt-body">
              <div className="h3 text-center mb-4">註冊</div>
            </div>

            <form id="test" className="col-8 mx-auto mb-2 mr-2 txt-body">
              <div className="form-group ">
                <label htmlFor="inputEmail" className="">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className={`form-control ${fieldValidCSS('email')}`}
                  id="inputEmail"
                  name="email"
                  onChange={onChangeForField('email')}
                />
                <div class="valid-feedback">email正確</div>
                <div class="invalid-feedback">email格式錯了</div>
              </div>

              <div className="form-group">
                <label htmlFor="inputPassword">密碼</label>
                <input
                  type="password"
                  name="password"
                  onChange={onChangeForField('password')}
                  className={`form-control ${fieldValidCSS('password')}`}
                  id="inputPassword"
                />

                <div class="valid-feedback">密碼輸入正確</div>
                <div class="invalid-feedback">密碼格式錯了</div>
                <div className="txt-cap ">
                  密碼長度需為 6 個以上的英數字元，大小寫有區別。
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword1">確認密碼</label>
                <input
                  type="password"
                  name="password1"
                  onChange={onChangeForField('password1')}
                  className={`form-control ${fieldValidCSS('password1')}`}
                  id="inputPassword1"
                  required
                  minLength="6"
                />
                <div class="valid-feedback">密碼輸入正確</div>
                <div class="invalid-feedback">密碼與確認密碼不符合</div>
              </div>
              <div className="form-group">
                <label htmlFor="inputName">姓名</label>
                <input
                  type="text"
                  className={`form-control ${fieldValidCSS('name')}`}
                  id="inputName"
                  name="name"
                  onChange={onChangeForField('name')}
                />
                <div class="valid-feedback">姓名輸入正確</div>
                <div class="invalid-feedback">姓名最多可輸入10個中英文字</div>
              </div>
              <div className="form-group">
                <label htmlFor="inputMoblie">電話</label>
                <input
                  type="text"
                  className={`form-control ${fieldValidCSS('mobile')}`}
                  id="inputMoblie"
                  name="moblie"
                  onChange={onChangeForField('moblie')}
                />
                <div class="valid-feedback">電話格式正確</div>
                <div class="invalid-feedback">電話格式錯誤</div>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddr">配送地址</label>
                <input
                  type="text"
                  className={`form-control ${fieldValidCSS('addr')}`}
                  id="inputAddr"
                  name="addr"
                  onChange={onChangeForField('addr')}
                />

                <div class="valid-feedback">地址格式正確</div>
                <div class="invalid-feedback">地址格式錯誤</div>
                <div className="txt-cap">
                  本地址將作為您日後購物預設寄送地址
                </div>
              </div>

              <div className="form-group txt-cap d-flex flex-column ">
                <label>
                  <input type="checkbox" name="rule" />
                  訂閱電郵與簡訊
                </label>
                <label>
                  <input type="checkbox" name="rule1" />
                  我同意網站服務條款及隱私政策
                </label>
              </div>
              <div className="form-group txt-cap"></div>
              <div className="col-6 mx-auto">
                <button
                  type="button"
                  className="btn btn-primary"
                  className="btn-green txt-btn  mb-5"
                  onClick={handleSubmit}
                >
                  註冊
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberCenterRegiStered
