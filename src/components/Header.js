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

function Header() {
  // 定義CSS物件
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

  useEffect(() => {
    handleSetCssObj()
  }, [])

  useEffect(() => {
    // console.log(2)
    return () => setCssObj(cssObjNone)
  }, [])

  return (
    <>
      {/* <Navbar
        bg="light"
        expand="lg"
        // style={{ height: '100px', backgroundColor: 'white' }}
      >
        <Navbar.Brand as={NavLink} className="mx-auto" to="/">
          <img
            src="/img/lydia/SimpleMeal_LOGO.png"
            class="lll-logo-square"
            alt=""
            style={cssObj}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
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
              // collapseOnSelect="false"
              className="col col-lg-10 py-0"
            >
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
                  <Nav.Link className="text-nowrap" as={NavLink} to="/none1">
                    最新活動
                  </Nav.Link>
                  <Nav.Link className="text-nowrap" as={NavLink} to="/none2">
                    關於我們
                  </Nav.Link>
                  <NavDropdown title="菜單介紹" id="basic-nav-dropdown">
                    <NavDropdown.Item as={NavLink} to="/meal">
                      菜單介紹
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/none4">
                      共享食譜
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link
                    className="text-nowrap"
                    as={NavLink}
                    to="/surprisekitchen"
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
                    url={'/MemberCenter'}
                    fa={'fas fa-user'}
                  ></HeaderIcon>
                  <HeaderIcon
                    text={'問題回答'}
                    url={'/none8'}
                    fa={'far fa-question-circle'}
                  ></HeaderIcon>
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
