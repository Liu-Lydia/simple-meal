import React from 'react'
import { withFormik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'

const errMsg = {
  color: 'red',
  fontSize: '12px',
}

const MemberCenterLogin = ({ values, isSubmitting }) => (
  <div className="container">
    <div className="row ">
      <div className="col-6  mx-auto">
        <div className="cc  d-none d-md-none d-sm-none d-lg-none d-xl-block">
          <div className="col-10 d-flex justify-content-end ">
            <Link to="/">
              <i className="fas fa-times" style={{ color: 'red' }}></i>
            </Link>
          </div>

          <div className="h3  text-center">登入</div>
          <Form>
            <div className="col-8 mx-auto ">
              <label className="mb-2 mr-2">電子郵件</label>
              <ErrorMessage name="email" component="span" style={errMsg} />
              <Field type="email" name="email" className="form-control br " />
            </div>

            <div className="col-8 mx-auto">
              <label className="mb-2 mr-2 mt-2">密碼</label>
              <ErrorMessage name="password" component="span" style={errMsg} />
              <Field
                type="password"
                name="password"
                className="form-control br"
              />
              <div className="txt-cap d-flex justify-content-end">
                <Link to="/MemberCenter/ResetPassword">忘記密碼</Link>
              </div>
            </div>

            <div className="col-8 mx-auto">
              <div className="mb-2">驗證碼</div>
            </div>

            <div className="col-10 col-md-8 mx-auto d-flex justify-content-between">
              <input
                type="text"
                className="form-control mr-2 col-6 col-sm-8  br "
                id="exampleInputEmail1"
                placeholder="驗證碼"
              />

              <input
                type="text"
                className="form-control mb-3  col-4 col-sm-4 br text-center"
                id="exampleInputEmail1"
                placeholder="驗證碼"
              />
            </div>

            <div className="col-4 mx-auto ">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-green txt-btn mt-4 mb-5 "
              >
                送出
              </button>
            </div>
            <div className="txt-cap col-8  mb-4 mx-auto">
              還沒註冊會員嗎？ <Link to="/MemberCenter/RegiStered">註冊</Link>
            </div>

            <div className="col-8 col-xs-8 mx-auto d-flex justify-content-between mb-5">
              <div className=" col-6 text-cent-2 mr-2 select-btn-white txt-cap">
                {' '}
                GooGle登入
              </div>
              <div className=" col-6 text-center select-btn-white txt-cap">
                {' '}
                Facebook登入
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <div className=" d-block d-md-block d-sm-block d-lg-block d-xl-none">
          <div className="h3  text-center mt-3">登入</div>
          <Form>
            <div className="col-12 col-sm-10  mx-auto  mt-5">
              <label className="mb-2">電子郵件</label>
              <ErrorMessage name="email" component="span" style={errMsg} />
              <Field
                type="email"
                name="email"
                className="form-control mb-3 br "
              />
            </div>

            <div className="col-12 col-sm-10 mx-auto">
              <label className="mb-2">密碼</label>
              <ErrorMessage name="password" component="span" style={errMsg} />
              <Field
                type="password"
                name="password"
                className="form-control mb-3 br"
              />
              <div className="txt-cap d-flex justify-content-end">
                <Link to="/MemberCenter/ResetPassword">忘記密碼</Link>
              </div>
            </div>

            <div className="col-12 col-sm-10 mx-auto">
              <div className="mb-2">驗證碼</div>
            </div>

            <div className="col-12 col-sm-10 mx-auto d-flex ">
              <input
                type=""
                className="form-control mr-2 col-7 col-sm-8  br "
                id="exampleInputEmail1"
                placeholder="驗證碼"
              />
              <input
                type=""
                className="form-control mb-3  col-5 col-sm-4 br text-center"
                id="exampleInputEmail1"
                placeholder="驗證碼"
              />
            </div>
            <div className="col-12 col-sm-10 mx-auto d-flex justify-content-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-green txt-btn mt-2 mb-3"
              >
                送出
              </button>
            </div>
            <div className="txt-cap mr-5 d-flex justify-content-center mb-3">
              還沒註冊會員嗎？ <Link to="/MemberCenter/RegiStered">註冊</Link>
            </div>
            <div className="col-12 col-sm-10  d-flex flex-column mb-5 mx-auto">
              <div className="select-btn-white1 txt-cap mb-2">GooGle登入</div>
              <div className="text-center select-btn-white1 txt-cap">
                Facebook登入
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
)

export default withFormik({
  // input 預設值
  mapPropsToValues({ email, password }) {
    return {
      email: email || '',
      password: password || '',
    }
  },

  // 表單驗證條件＆錯誤訊息
  validationSchema: yup.object().shape({
    email: yup.string().email('Email不符合格式').required('必填'),
    password: yup.string().min(6, '密碼至少大於6').required('必填'),
  }),

  // 點擊送出時
  handleSubmit(values, { resetForm, setSubmitting }) {
    setTimeout(() => {
      resetForm() //重設表單
      setSubmitting(false) //狀態更新(true:傳送中, false:傳送完成)

      fetch('http://localhost:4000/login', {
        method: 'post',
        body: JSON.stringify(values, null, 2),
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((obj) => {
          // console.log(obj)
          if (obj.success) {
            // window.location.href = 'http://localhost:3015/MemberCenter/Index'
            alert('已登入')
          } else {
            alert('你的帳號密碼錯誤')
          }
        })
      // alert(JSON.stringify(values, null, 2)) //alert values
    }, 1000)
  },
})(MemberCenterLogin)
