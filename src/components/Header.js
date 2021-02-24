import React, { useEffect, useState } from 'react'
import {
  Dropdown,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import HeaderIcon from './HeaderIcon'

function Header(props) {
  // { 登入布林值, 設定登入布林值}
  const { loginBool, setLoginBool } = props

  // 定義logo用的CSS物件
  const cssObjNone = {
    transform: 'translateX(-100px)',
    opacity: '0',
    transition: '0s',
  }
  const cssObjShow = {
    transform: 'translateX(0px)',
    opacity: '1',
    transition: '3s',
  }

  const [cssObj, setCssObj] = useState(cssObjNone)

  const handleSetCssObj = async () => {
    setCssObj(cssObjNone)
    setTimeout(() => {
      setCssObj(cssObjShow)
    }, 10)
  }

  // 控制漢堡選單
  const [expanded, setExpanded] = useState(false)

  // 登出
  const handleLogout = () => {
    // console.log('登出')
    fetch('http://localhost:4000/logout', {
      method: 'get',
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((obj) => {
        console.log(obj)
        setLoginBool(false)
      })
  }

  useEffect(() => {
    handleSetCssObj()
  }, [])

  useEffect(() => {
    // console.log(2)
    return () => setCssObj(cssObjNone)
  }, [])

  return (
    <>
      <div
        // 背景色
        style={{ backgroundColor: 'white' }}
      >
        <div className="container-fluid container-lg txt-btn">
          <div className="row justify-content-center">
            <Navbar
              // bg="light"
              // variant="dark"
              expand="lg"
              className="col col-lg-10 py-0"
              expanded={expanded}
            >
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={() => setExpanded(expanded ? false : 'expanded')}
              />
              <Navbar.Brand as={NavLink} className="mx-auto" to="/">
                <img
                  src="/img/lydia/SimpleMeal_LOGO.png"
                  className="lll-logo-square py-0"
                  alt=""
                  style={cssObj}
                />
              </Navbar.Brand>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link
                    className="text-nowrap"
                    as={NavLink}
                    to="/none1"
                    onClick={() => setExpanded(false)}
                  >
                    最新活動
                  </Nav.Link>
                  <Nav.Link
                    className="text-nowrap"
                    as={NavLink}
                    to="/aboutus"
                    onClick={() => setExpanded(false)}
                  >
                    關於我們
                  </Nav.Link>
                  <NavDropdown title="菜單介紹" id="basic-nav-dropdown">
                    <NavDropdown.Item
                      as={NavLink}
                      to="/meal"
                      onClick={() => setExpanded(false)}
                    >
                      菜單介紹
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={NavLink}
                      to="/sharerecipe"
                      onClick={() => setExpanded(false)}
                    >
                      共享食譜
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link
                    className="text-nowrap"
                    as={NavLink}
                    to="/surprisekitchen"
                    onClick={() => setExpanded(false)}
                  >
                    驚喜廚房
                  </Nav.Link>
                </Nav>
                <Nav className="d-none d-lg-flex">
                  <HeaderIcon
                    text={'購物車'}
                    url={'/cart'}
                    fa={'fas fa-shopping-cart'}
                  ></HeaderIcon>
                  <HeaderIcon
                    text={'我的成就'}
                    url={'/Milestone'}
                    fa={'fas fa-medal'}
                  ></HeaderIcon>
                  <HeaderIcon
                    text={'會員中心'}
                    // 如果登入, 到會員首頁; 如果未登入, 到登入畫面
                    url={`${
                      loginBool ? '/MemberCenter/Index' : '/MemberCenter'
                    }`}
                    fa={'fas fa-user'}
                  ></HeaderIcon>
                  <HeaderIcon
                    text={'問題回答'}
                    url={'/none8'}
                    fa={'far fa-question-circle'}
                  ></HeaderIcon>

                  {/* 登入登出切換 */}
                  {!loginBool && (
                    <Nav.Link
                      to="/MemberCenter"
                      as={NavLink}
                      style={{
                        margin: '0 0',
                        padding: '0 24px',
                        transition: '1s',
                        color: '#A2A3A5',
                      }}
                    >
                      <div className="text-center d-flex">
                        <div>登入</div>
                      </div>
                    </Nav.Link>
                  )}
                  {loginBool && (
                    <Nav.Link
                      to=""
                      as={NavLink}
                      style={{
                        margin: '0 0',
                        padding: '0 24px',
                        transition: '1s',
                        color: '#A2A3A5',
                      }}
                      onClick={() => {
                        handleLogout()
                      }}
                    >
                      <div className="text-center d-flex">
                        <div>登出</div>
                      </div>
                    </Nav.Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header
