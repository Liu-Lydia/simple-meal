import { useState } from 'react'

function Test(props) {
  const [inputs, setInputs] = useState({
    email: '',
    username: '',
    password: '',
    password2: '',
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

    if (inputs.name.trim().length < 6) {
      newErrors.push('name')
    }

    const re = /\S+@\S+\.\S+/

    if (!re.test(inputs.email.toLowerCase())) {
      newErrors.push('email')
    }

    setErrors(newErrors)
  }

  // 切換合法不合法的css與提示字詞
  const fieldValidCSS = (fieldName) => {
    if (!startToChecked) return ''

    return errors.includes(fieldName) ? 'is-invalid' : 'is-valid'
  }

  return (
    <>
      <h1>會員註冊</h1>

      <div className="form-group">
        <label htmlFor="inputName">姓名</label>
        {/*  每一個輸入框一定要加名稱，和定義的欄位狀態值最好一樣 */}
        <input
          type="text"
          className={`form-control ${fieldValidCSS('name')}`}
          id="inputName"
          name="name"
          onChange={onChangeForField('name')}
          required
          aria-describedby="nameHelp"
        />
        <div class="valid-feedback">您的尊名有如天仙下凡，音容動人</div>
        <div class="invalid-feedback">這裡填錯了，您眼花了</div>
      </div>
      <div className="form-group">
        <label htmlFor="inputEmail">Email</label>
        <input
          type="email"
          required
          className={`form-control ${fieldValidCSS('email')}`}
          id="inputEmail"
          name="email"
          onChange={onChangeForField('email')}
          aria-describedby="emailHelp"
        />
        <div class="valid-feedback">email正確</div>
        <div class="invalid-feedback">email格式錯了</div>
      </div>
      <div className="form-group">
        <label htmlFor="inputUsername">帳號</label>
        <input
          type="text"
          className="form-control"
          id="inputUsername"
          name="username"
          onChange={onChangeForField('username')}
          aria-describedby="emailHelp"
        />
      </div>

      <div className="form-group">
        <label htmlFor="inputPassword">密碼</label>
        <input
          type="password"
          name="password"
          onChange={onChangeForField('password')}
          className="form-control"
          id="inputPassword"
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputPasswordConfirm">驗証密碼</label>
        <input
          type="password"
          name="password2"
          onChange={onChangeForField('password2')}
          className="form-control"
          id="inputPasswordConfirm"
          required
          minLength="6"
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        註冊
      </button>
    </>
  )
}

export default Test
