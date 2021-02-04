import React from 'react'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      {/* <div className="container poe-bgR" style={{ height: '60px' }}>
        <div
          className="row justify-content-center
         poe-bgB"
          style={{ height: '40px' }}
        >
          <div className="col-10 poe-bgG" style={{ height: '20px' }}>
            COL-WIDTH
          </div>
        </div>
      </div> */}
      <div className="container-fluid container-lg txt-btn">
        <div className="row">
          <div
            className="col"
            style={{ background: 'red', height: '10px' }}
          ></div>
          <div
            className="col"
            style={{ background: 'blue', height: '10px' }}
          ></div>
        </div>
        <div className="row justify-content-center">
          <div className="col col-lg-10">
            <Navbar bg="light" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Brand className="mx-auto" to="/">
                <img
                  src="/img/lydia/SimpleMeal_LOGO.png"
                  class="lll-logo-square"
                  alt=""
                />
              </Navbar.Brand>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link className="text-nowrap" as={NavLink} to="/none">
                    最新活動
                  </Nav.Link>
                  <Nav.Link className="text-nowrap" as={NavLink} to="/none">
                    關於我們
                  </Nav.Link>
                  <NavDropdown title="菜單介紹" id="basic-nav-dropdown">
                    <NavDropdown.Item as={NavLink} to="/none">
                      菜單介紹
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/none">
                      共享食譜
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item to="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item to="#action/3.4">
                      Separated link
                    </NavDropdown.Item> */}
                  </NavDropdown>
                  <Nav.Link className="text-nowrap" as={NavLink} to="/none">
                    驚喜廚房
                  </Nav.Link>
                </Nav>
                <Nav className="d-none d-lg-flex">
                  {/* <NavDropdown title="長長的兒" id="basic-nav-dropdown">
                    <Nav.Link as={NavLink} to="/Long1">
                      LonePage1
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/Long2">
                      LongPage2
                    </Nav.Link>
                  </NavDropdown> */}
                  <Nav.Link as={NavLink} to="/none" className="mx-3">
                    <i class="fas fa-shopping-cart"></i>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/none" className="mx-3">
                    <i class="fas fa-medal"></i>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/none" className="mx-3">
                    <i class="fas fa-user"></i>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/none" className="mx-3">
                    <i class="far fa-question-circle"></i>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <div
                className="d-block d-xl-none"
                style={{ height: '56px', width: '40px' }}
              ></div>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header
