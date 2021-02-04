import React, { useState, useEffect } from 'react'

function Footer(props) {
  return (
    <>
      <footer className="footer mt-4 py-3 txt-btn poe-gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm offset-sm-1 text-center text-sm-left">
              <span>SimpleMeal © 2021 All Rights Reserved.</span>
            </div>
            <div className="col-12 col-sm text-center text-sm-right">
              <span className="mx-2">
                <i class="far fa-envelope"></i>
              </span>
              <span className="mx-2">
                <i class="fab fa-instagram"></i>
              </span>
              <span className="mx-2">
                <i class="fab fa-facebook-square"></i>
              </span>
              <span className="mx-2">
                <i class="fab fa-line"></i>
              </span>
              <span className="mx-2">
                <i class="fab fa-twitter-square"></i>
              </span>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
