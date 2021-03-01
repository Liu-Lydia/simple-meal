import React from 'react'
import { Redirect } from 'react-router-dom'

function Test() {
  return (
    <>
      <Redirect to="/MemberCenter" />
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-6"
            style={{ height: '600vh', backgroundColor: 'grey' }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default Test
