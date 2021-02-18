import React, { useState, useEffect } from 'react'

function MemberCenterRegiStered(props) {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-6  mx-auto">
            <div className="cc  d-none d-md-none d-sm-none d-lg-none d-xl-block">
              <div className="col-10 d-flex justify-content-end ">
                <i className="fas fa-times"></i>
              </div>
              <div className="txt-body">
                <div className="h3  text-center mt-3">註冊</div>

                <form>
                  <div className="col-8 mx-auto">
                    <div className="mb-2">電子郵件</div>
                    <input type="email" className="form-control mb-3 br " />
                  </div>

                  <div className="col-8 mx-auto">
                    <div className="mb-2">密碼</div>
                    <input type="password" className="form-control mb-3 br " />
                  </div>

                  <div className="col-8 mx-auto">
                    <div className="mb-2">確認密碼</div>
                    <input type="password" className="form-control  br " />
                    <div className="txt-cap  mb-3">
                      密碼長度需為 6 個以上的英數字元，大小寫有區別。
                    </div>
                  </div>

                  <div className="col-8 mx-auto">
                    <div className="mb-2">姓名</div>
                    <input type="text" className="form-control mb-3 br " />
                  </div>

                  <div className="col-8 mx-auto ">
                    <div className="mb-2">手機</div>
                    <input type="text" className="form-control mb-3 br " />
                  </div>

                  <div className="col-8 mx-auto">
                    <div className="mb-2 ">配送地址</div>
                    <input type="text" className="form-control  br " />
                    <div className="txt-cap  mb-3">
                      本地址將作為您日後購物預設寄送地址
                    </div>
                  </div>

                  <div className="col-8 mx-auto">
                    <div className="form-check txt-cap">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="autoSizingCheck"
                      />
                      <label className="form-check-label" for="autoSizingCheck">
                        訂閱電郵與簡訊
                      </label>
                    </div>
                  </div>
                  <div className="col-8 mx-auto ">
                    <div className="form-check mb-3 txt-cap">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="autoSizingCheck"
                      />
                      <label
                        className="form-check-label "
                        for="autoSizingCheck"
                      >
                        我同意網站服務條款及隱私政策
                      </label>
                    </div>
                  </div>

                  <div className="col-8 mx-auto d-flex justify-content-center mb-4 ">
                    <div className="btn-green txt-btn mt-2 mb-3">送出</div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className=" d-block d-md-block d-sm-block d-lg-block d-xl-none">
              <div className="">
                <div className="h3 text-center mt-3">註冊</div>

                <div className="col-12 col-sm-10 mx-auto mt-5">
                  <div className="mb-2">電子郵件</div>
                  <input type="email" className="form-control mb-3 br " />
                </div>

                <div className="col-12 col-sm-10 mx-auto">
                  <div className="mb-2">密碼</div>
                  <input type="password" className="form-control mb-3 br " />
                </div>

                <div className="col-12 col-sm-10 mx-auto">
                  <div className="mb-2">確認密碼</div>
                  <input type="password" className="form-control br " />
                  <div className="txt-cap  mb-3">
                    密碼長度需為 6 個以上的英數字元，大小寫有區別。
                  </div>
                </div>

                <div className="col-12 col-sm-10 mx-auto">
                  <div className="mb-2">姓名</div>
                  <input type="text" className="form-control mb-3 br " />
                </div>

                <div className="col-12 col-sm-10 mx-auto">
                  <div className="mb-2">手機</div>
                  <input type="text" className="form-control mb-3 br " />
                </div>

                <div className="col-12 col-sm-10 mx-auto">
                  <div className="mb-2">地址</div>
                  <input type="text" className="form-control  br " />
                  <div className="txt-cap  mb-3">
                    本地址將作為您日後購物預設寄送地址
                  </div>
                </div>

                <div className="col-12 col-sm-10 mx-auto">
                  <div className="form-check txt-cap">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="autoSizingCheck"
                    />
                    <label className="form-check-label" for="autoSizingCheck">
                      訂閱電郵與簡訊
                    </label>
                  </div>
                </div>
                <div className="col-12 col-sm-10 mx-auto ">
                  <div className="form-check mb-3 txt-cap">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="autoSizingCheck"
                    />
                    <label className="form-check-label " for="autoSizingCheck">
                      我同意網站服務條款及隱私政策
                    </label>
                  </div>
                </div>

                <div className="col-12 col-sm-10 mx-auto d-flex justify-content-center mb-4">
                  <div className="btn-green txt-btn mt-2 mb-3">送出</div>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MemberCenterRegiStered

// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Formik, Form, Field, ErrorMessage } from 'formik'

// import 'bootstrap/dist/css/bootstrap.css'

// class test extends React.Component {
//   render() {
//     const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

//     return (
//       <div className="container">
//         <div className="row mb-5">
//           <div className="col-lg-12 text-center">
//             <h4 className="mt-5">Login Form</h4>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-12">
//             <Formik
//               initialValues={{ email: '', password: '' }}
//               validate={(values) => {
//                 let errors = {}
//                 if (values.email === '') {
//                   errors.email = '請輸入e-mail'
//                 } else if (!emailTest.test(values.email)) {
//                   errors.email = '輸入錯誤'
//                 }
//                 if (values.password === '') {
//                   errors.password = '密碼錯誤'
//                 } else if (values.password.length < 6) {
//                   errors.password = '請輸入六位數密碼'
//                 }
//                 return errors
//               }}
//               onSubmit={({ setSubmitting }) => {
//                 alert('Form is validated! Submitting the form...')
//                 setSubmitting(false)
//               }}
//             >
//               {({ touched, errors, isSubmitting }) => (
//                 <Form>
//                   <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <Field
//                       type="email"
//                       name="email"
//                       placeholder="Enter email"
//                       className={`form-control ${
//                         touched.email && errors.email ? 'is-invalid' : ''
//                       }`}
//                     />
//                     <ErrorMessage
//                       component="div"
//                       name="email"
//                       className="invalid-feedback"
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <Field
//                       type="password"
//                       name="password"
//                       placeholder="Enter password"
//                       className={`form-control ${
//                         touched.password && errors.password ? 'is-invalid' : ''
//                       }`}
//                     />
//                     <ErrorMessage
//                       component="div"
//                       name="password"
//                       className="invalid-feedback"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="btn btn-primary btn-block"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? 'Please wait...' : 'Submit'}
//                   </button>
//                 </Form>
//               )}
//             </Formik>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default test
