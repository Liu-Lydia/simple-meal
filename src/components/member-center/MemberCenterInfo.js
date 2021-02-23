import MemberCenterNavbar from './MemberCenterNavbar'
import React from 'react'
import { withFormik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

const errMsg = {
  color: 'red',
  fontSize: '12px',
}

const MemberCenterInfo = ({ values, isSubmitting }) => (
  <div className="container">
    <div className="row ">
      <MemberCenterNavbar />
      <div className="col-md-12 col-lg-12 col-sm-12 col-xl-6  col-12">
        <div className="col-md-8 col-lg-8 col-xl-8 col-sm-8 col-10 mx-auto ">
          <Form>
            <div className="mb-4 offset-3 offset-sm-0 h3">個人資料</div>

            <div
              className="btn border  txt-cap1 mr-2 mb-5  col-12
                 d-block d-sm-none d-md-none d-lg-none d-xl-none "
            >
              回上頁
            </div>

            <div className="form-group ">
              <div className="form-group">
                <label>頭像</label>
                <Field type="text" name="avater" className="form-control br" />
              </div>
              <label>電子郵件</label>
              <ErrorMessage name="email" component="span" style={errMsg} />
              <Field
                type="email"
                name="email"
                className="form-control br "
                disabled
              />
            </div>

            <div className="form-group">
              <label>姓名</label>
              <ErrorMessage name="name" component="span" style={errMsg} />
              <Field
                type="text"
                name="name"
                className="form-control br"
                disabled
              />
            </div>

            <div className="form-group ">
              <label>暱稱</label>
              <ErrorMessage name="nikename" component="span" style={errMsg} />
              <Field type="text" name="nikename" className="form-control br " />
            </div>

            <div className="form-group ">
              <label>生日</label>
              <ErrorMessage name="BirThday" component="span" style={errMsg} />
              <Field type="date" name="BirThday" className="form-control br " />
            </div>

            <div className="form-group ">
              <label>手機號碼</label>
              <ErrorMessage name="phone" component="span" style={errMsg} />
              <Field type="text" name="phone" className="form-control br " />
            </div>

            <div className="form-group txt-cap">
              <label>
                <Field type="checkbox" name="rule1" checked={values.rule1} />
                訂閱電郵與簡訊
              </label>
              <ErrorMessage name="rule1" component="span" style={errMsg} />
            </div>

            <div className="col-4 mx-auto ">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-green txt-btn mb-5 "
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
  mapPropsToValues({ email, name, phone, rule }) {
    return {
      email: email || '',
      name: name || '',
      phone: phone || '',
    }
  },

  // 表單驗證條件＆錯誤訊息
  validationSchema: yup.object().shape({
    email: yup.string().email('Email不符合格式').required('必填'),
    name: yup.string().max(10, '最多只能輸入10個中英文字').required('必填'),
    phone: yup.string().required('必填'),
  }),

  // 點擊送出時
  handleSubmit(values, { setSubmitting }) {
    setTimeout(() => {
      setSubmitting(false) //狀態更新(true:傳送中, false:傳送完成)
      alert(JSON.stringify(values, null, 2)) //alert values
    }, 1000)
  },
})(MemberCenterInfo)
