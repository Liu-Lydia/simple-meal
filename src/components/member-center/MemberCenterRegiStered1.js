// import React from 'react'
// import MemberCenterRegiStered from './MemberCenterRegiStered'

// function MemberCenterRegiStered1(props) {
//   return (
//     <>
//       <MemberCenterRegiStered />
//     </>
//   )
// }
// export default MemberCenterRegiStered1

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
