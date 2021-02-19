import React from 'react'
import { withFormik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
const errMsg = {
  color: 'red',
  fontSize: '12px',
}

const MemberCenterResetPassword = ({ values, isSubmitting }) => (
  <div className="container">
    <div className="row ">
      <div className="col-6  mx-auto">
        <div className="cc  d-none d-md-none d-sm-none d-lg-none d-xl-block">
          <div className="col-10 d-flex justify-content-end ">
            <Link to="/MemberCenter">
              <i className="fas fa-times" style={{ color: 'red' }}></i>
            </Link>
          </div>

          <div className="h3  text-center mb-4">忘記密碼</div>
          <Form>
            <div className="col-8 mx-auto ">
              <div className="mb-1 txt-sub2">忘記密碼嗎？</div>
              <div className="mb-2 txt-sub2">輸入您的email 重置密碼吧！</div>
              <ErrorMessage name="email" component="span" style={errMsg} />
              <Field type="email" name="email" className="form-control br " />
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
      <div className="col">
        <div className=" d-block d-md-block d-sm-block d-lg-block d-xl-none">
          <div className="h3  text-center mb-4">忘記密碼</div>
          <Form>
            <div className="col-12 col-sm-10  mx-auto  mt-5">
              <div className="mb-1 txt-sub2">忘記密碼嗎？</div>
              <div className="mb-2 txt-sub2">輸入您的email 重置密碼吧！</div>
              <ErrorMessage name="email" component="span" style={errMsg} />
              <Field
                type="email"
                name="email"
                className="form-control mb-3 br "
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
          </Form>
        </div>
      </div>
    </div>
  </div>
)

export default withFormik({
  // input 預設值
  mapPropsToValues({ email }) {
    return {
      email: email || '',
    }
  },

  // 表單驗證條件＆錯誤訊息
  validationSchema: yup.object().shape({
    email: yup.string().email('Email不符合格式').required('必填'),
  }),

  // 點擊送出時
  handleSubmit(values, { resetForm, setSubmitting }) {
    setTimeout(() => {
      resetForm() //重設表單
      setSubmitting(false) //狀態更新(true:傳送中, false:傳送完成)
      alert(JSON.stringify(values, null, 2)) //alert values
    }, 1000)
  },
})(MemberCenterResetPassword)

// function MemberCenterResetPassword() {
//   return (
//     <div class="container">
//       <div className="row ">
//         <div className="col-6  mx-auto">
//           <div className="cc  d-none d-md-none d-sm-none d-lg-none d-xl-block">
//             <div
//               className="col-10 d-flex justify-content-end "
//               style={{ color: 'red' }}
//             >
//               <i className="fas fa-times"></i>
//             </div>
//             <div className="">
//               <div className="h4  text-center mb-5 ">忘記密碼</div>

//               <div className="col-8 mx-auto">
//                 <div className="mb-1 txt-sub1">忘記密碼嗎？</div>
//                 <div className="mb-2 txt-sub1">輸入您的email 重置密碼吧！</div>
//                 <input
//                   type="email"
//                   className="form-control mb-3 br "
//                   id="exampleInputEmail1"
//                   aria-describedby="emailHelp"
//                   placeholder="Enter email"
//                 />
//               </div>

//               <div className="col-8 mx-auto d-flex justify-content-end mb-4">
//                 <a href="" className="btn-green txt-btn mt-2 mb-3">
//                   送出
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col">
//           <div className=" d-block d-md-block d-sm-block d-lg-block d-xl-none">
//             <div className="">
//               <div className="h3  text-center mt-3">忘記密碼</div>

//               <div className="col-12 col-sm-10 mx-auto mt-5">
//                 <div className="mb-1 txt-sub1">忘記密碼嗎？</div>
//                 <div className="mb-2 txt-sub1">輸入您的email 重置密碼吧！</div>
//                 <input
//                   type="email"
//                   className="form-control mb-3 br "
//                   id="exampleInputEmail1"
//                 />
//               </div>

//               <div className="col-12 col-sm-10 mx-auto d-flex justify-content-center mb-4">
//                 <a href="" className="btn-green txt-btn mt-2 mb-3">
//                   送出
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default MemberCenterResetPassword
