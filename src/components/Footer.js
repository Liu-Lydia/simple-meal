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
  // { 登入布林值, 設定登入布林值}
  const { loginBool, setLoginBool } = props
  return (
    <>
      <footer
        className="footer d-none d-sm-block mt-auto py-3 txt-btn poe-gray"
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
      <div
        className="container flex-shrink-0 d-block d-sm-none"
        style={{ height: '60px' }}
      ></div>
      <div
        className="container d-block d-sm-none text-center"
        style={{
          position: 'fixed',
          bottom: '0px',
          background: 'white',
          borderTop: '2px solid #A2A3A5',
          paddingTop: '17px',
          paddingBottom: '18px',
        }}
      >
        <div className="d-flex justify-content-center">
          <div className="col">
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </div>
          <div className="col">
            <Link to="/Milestone">
              <i className="fas fa-medal"></i>
            </Link>
          </div>
          <div className="col">
            <Link
              // 如果登入, 到會員首頁; 如果未登入, 到登入畫面
              to={`${loginBool ? '/MemberCenter/Index' : '/MemberCenter'}`}
            >
              <i className="fas fa-user"></i>
            </Link>
          </div>
          <div className="col">
            <Link to="/none8">
              <i className="far fa-question-circle"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
