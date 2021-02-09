import React, { useState, useEffect } from 'react'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Footer(props) {
  return (
    <>
      <footer
        className="footer mt-auto py-3 txt-btn poe-gray"
        style={{ zIndex: '-1' }}
      >
        <div className="container">
          <div className="row justify-content-center px-3">
            <div className="col-12 col-md offset-md-1 text-center text-md-left">
              <div>
                <span>SimpleMeal © 2021 All Rights Reserved.</span>
              </div>
            </div>
            <div className="col-12 col-md-auto d-flex justify-content-center justify-content-md-right">
              <Link className="mx-3 px-2">
                <i class="far fa-envelope"></i>
              </Link>
              <Link className="mx-3 px-2">
                <i class="fab fa-instagram"></i>
              </Link>
              <Link className="mx-3 px-2">
                <i class="fab fa-facebook-square"></i>
              </Link>
              <Link className="mx-3 px-2">
                <i class="fab fa-line"></i>
              </Link>
              <Link className="mx-3 px-2">
                <i class="fab fa-twitter-square"></i>
              </Link>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
