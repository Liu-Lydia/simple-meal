import MemberCenterNavbar from './MemberCenterNavbar'
import React from 'react'
import { withFormik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

const errMsg = {
  color: 'red',
  fontSize: '12px',
}

const MemberCenterAddr = ({ values, isSubmitting }) => (
  <div className="container">
    <div className="row ">
      <MemberCenterNavbar />
      <div className="col-md-12 col-lg-12 col-sm-12 col-xl-6  col-12">
        <div className="col-md-8 col-lg-8 col-xl-8 col-sm-8 col-10 mx-auto ">
          <Form>
            <div className="mb-4 offset-3 offset-sm-0 h3">地址</div>

            <div
              className="btn border  txt-cap1 mr-2 mb-5  col-12
                 d-block d-sm-none d-md-none d-lg-none d-xl-none "
            >
              回上頁
            </div>

            <div className="form-group ">
              <label>配送地址</label>
              <button
                className="btn btn-success btn-sm box6 mb-2 ml-1 "
                type="button"
              >
                預 設
              </button>

              <ErrorMessage name="addr" component="span" style={errMsg} />
              <Field type="text" name="addr" className="form-control br " />
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
  mapPropsToValues({ addr }) {
    return {
      addr: addr || '',
    }
  },

  // 表單驗證條件＆錯誤訊息
  validationSchema: yup.object().shape({
    addr: yup.string().min(10, '最多只能輸入10個中英文字').required('必填'),
  }),

  // 點擊送出時
  handleSubmit(values, { setSubmitting }) {
    setTimeout(() => {
      setSubmitting(false) //狀態更新(true:傳送中, false:傳送完成)
      alert(JSON.stringify(values, null, 2)) //alert values
    }, 1000)
  },
})(MemberCenterAddr)
