import React from 'react'
import { withFormik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'

const errMsg = {
  color: 'red',
  fontSize: '12px',
}

const MemberCenterRegiStered = ({ values, isSubmitting }) => (
  <div className="container">
    <div className="row">
      <div className="col-6 mx-auto">
        <div className="cc d-none d-sm-none d-md-none d-lg-none d-xl-block">
          <div className="col-10 d-flex justify-content-end ">
            <Link to="/MemberCenter">
              <i className="fas fa-times" style={{ color: 'red' }}></i>
            </Link>
          </div>
          <div className="txt-body">
            <div className="h4 text-center mb-4 lll-green">註冊</div>
          </div>

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
            </div>
            <div className="col-8 mx-auto">
              <label className="mb-2 mr-2 mt-2">確認密碼</label>
              <ErrorMessage name="password1" component="span" style={errMsg} />
              <Field
                type="password"
                name="password1"
                className="form-control br"
              />

              <div className="txt-cap ">
                密碼長度需為 6 個以上的英數字元，大小寫有區別。
              </div>
            </div>
            <div className="col-8 mx-auto ">
              <label className="mb-2 mr-2 mt-2">姓名</label>
              <ErrorMessage name="name" component="span" style={errMsg} />
              <Field type="text" name="name" className="form-control br " />
            </div>
            <div className="col-8 mx-auto ">
              <label className="mb-2 mr-2 mt-2">手機</label>
              <ErrorMessage name="phone" component="span" style={errMsg} />
              <Field type="text" name="phone" className="form-control br " />
            </div>
            <div className="col-8 mx-auto mt-2">
              <label className="mb-2 mr-2">地址</label>
              <ErrorMessage name="addr" component="span" style={errMsg} />
              <Field type="text" name="addr" className="form-control br " />
              <div className="txt-cap ">本地址將作為您日後購物預設寄送地址</div>
            </div>
            <div className="col-8 mx-auto txt-cap mt-3 ">
              <label>
                <Field type="checkbox" name="rule1" checked={values.rule1} />
                訂閱電郵與簡訊
              </label>
              <ErrorMessage name="rule1" component="span" style={errMsg} />
            </div>
            <div className="col-8 mx-auto txt-cap ">
              <label>
                <Field type="checkbox" name="rule" checked={values.rule} />
                我同意網站服務條款及隱私政策
              </label>
              <ErrorMessage name="rule" component="span" style={errMsg} />
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
          </Form>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-6 mx-auto">
        <div className="d-block d-xl-none">
          <div className="txt-body">
            <div className="h3 text-center mb-4">註冊</div>
          </div>

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
            </div>

            <div className="col-12 col-sm-10 mx-auto">
              <label className="mb-2 mr-2">確認密碼</label>
              <ErrorMessage name="password1" component="span" style={errMsg} />
              <Field
                type="password"
                name="password1"
                className="form-control br"
              />

              <div className="txt-cap ">
                密碼長度需為 6 個以上的英數字元，大小寫有區別。
              </div>
            </div>

            <div className="col-12 col-sm-10 mx-auto ">
              <label className="mb-2 mr-2">姓名</label>
              <ErrorMessage name="name" component="span" style={errMsg} />
              <Field type="text" name="name" className="form-control br " />
            </div>

            <div className="col-12 col-sm-10 mx-auto ">
              <label className="mb-2 mr-2">手機</label>
              <ErrorMessage name="phone" component="span" style={errMsg} />
              <Field type="text" name="phone" className="form-control br " />
            </div>
            <div className="col-12 col-sm-10 mx-auto ">
              <label className="mb-2 mr-2">地址</label>
              <ErrorMessage name="addr" component="span" style={errMsg} />
              <Field type="text" name="addr" className="form-control br " />
              <div className="txt-cap ">本地址將作為您日後購物預設寄送地址</div>
            </div>

            <div className="col-12 col-sm-10 mx-auto txt-cap">
              <label>
                <Field type="checkbox" name="rule" checked={values.rule} />
                同意註冊條款
              </label>
              <ErrorMessage name="rule" component="span" style={errMsg} />
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
          </Form>
        </div>
      </div>
    </div>
  </div>
)

export default withFormik({
  // input 預設值
  mapPropsToValues({ email, password, password1, name, addr, phone, rule }) {
    return {
      email: email || '',
      password: password || '',
      password1: password1 || '',
      name: name || '',
      addr: addr || '',
      phone: phone || '',
      rule: rule || false,
    }
  },

  // 表單驗證條件＆錯誤訊息
  validationSchema: yup.object().shape({
    email: yup.string().email('Email不符合格式').required('必填'),
    password: yup.string().min(6, '密碼至少大於6').required('必填'),
    password1: yup.string().min(6, '密碼至少大於6').required('必填'),
    name: yup.string().max(10, '最多只能輸入10個中英文字').required('必填'),
    addr: yup.string().required('必填'),
    phone: yup.string().required('必填'),
    rule: yup.boolean().oneOf([true], '一定要同意！'),
  }),

  // 點擊送出時
  handleSubmit(values, { resetForm, setSubmitting }) {
    setTimeout(() => {
      resetForm() //重設表單
      setSubmitting(false) //狀態更新(true:傳送中, false:傳送完成)
      fetch('http://localhost:4000/membercenter/registered', {
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
            alert('已註冊 請至會員中心填寫完整個人資訊')
          } else {
            alert('錯誤')
          }
        })
      // alert(JSON.stringify(values, null, 2)) //alert values
    }, 1000)
  },
})(MemberCenterRegiStered)
