// 使用套件
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

// 頁面元件
import Home from './pages/Home'
import ThisIsForFun from './pages/ThisIsForFun'
import Test from './pages/Test'
import TestDatabase from './pages/TestDatabase'
import Cart from './pages/Cart'
import SurpriseKitchen from './pages/SurpriseKitchen'
import Milestone from './pages/Milestone'
import RewardExchange from './pages/RewardExchange'
import Meal from './pages/Meal'
import Recipe from './pages/Recipe'
import MemberCenter from './pages/MemberCenter'
import AboutUs from './pages/AboutUs'
import Sharerecipe from './pages/Sharerecipe'
import XTest from './pages/XTest'
import TestSvgAnimate from './pages/TestSvgAnimate'
import MyRecipePage from './pages/MyRecipePage'

// 組合用元件
import Header from './components/Header'
import MainContent from './components/MainContent'
import ScrollToTop from './components/ScrollToTop'
import MultiLevelBreadCrumb from './components/MultiLevelBreadCrumb'
import Footer from './components/Footer'

function App() {
  // 麵包屑判斷 (true在左上 false由各頁面自訂, 需要改動者再引入)
  const [breadCrumbBool, setBreadCrumbBool] = useState(true)

  // 登入狀態(未登入false, 登入true)
  const [loginBool, setLoginBool] = useState(false)

  // 非購物車頁面改變購物車模式
  const [cartModeByRedirectFrom, setCartModeByRedirectFrom] = useState('')

  return (
    <Router>
      <>
        <Header loginBool={loginBool} setLoginBool={setLoginBool} />
        {/* 主內容 */}
        <MainContent>
          {breadCrumbBool && (
            <MultiLevelBreadCrumb breadCrumbBool={breadCrumbBool} />
          )}
          <ScrollToTop>
            <Switch>
              <Route path="/cart">
                <Cart
                  loginBool={loginBool}
                  cartModeByRedirectFrom={cartModeByRedirectFrom}
                  setCartModeByRedirectFrom={setCartModeByRedirectFrom}
                />
              </Route>
              <Route path="/TestDatabase">
                <TestDatabase />
              </Route>
              <Route path="/Test">
                <Test />
              </Route>
              <Route path="/Milestone">
                <Milestone />
              </Route>
              <Route path="/RewardExchange">
                <RewardExchange />
              </Route>
              <Route path="/meal">
                <Meal
                  breadCrumbBool={breadCrumbBool}
                  setBreadCrumbBool={setBreadCrumbBool}
                />
              </Route>
              <Route path="/recipe">
                <Recipe
                  breadCrumbBool={breadCrumbBool}
                  setBreadCrumbBool={setBreadCrumbBool}
                />
              </Route>

              <Route path="/MemberCenter">
                <MemberCenter
                  loginBool={loginBool}
                  setLoginBool={setLoginBool}
                />
              </Route>
              {/* <Route path="/MemberCenter/Index" component={MemberCenterIndex} />
              <Route
                path="/MemberCenter/RegiStered"
                component={MemberCenterRegiStered}
              />
              <Route
                path="/MemberCenter/ResetPassword"
                component={MemberCenterResetPassword}
              />
              <Route path="/MemberCenter" component={MemberCenterLogin} /> */}
              <Route path="/surprisekitchen">
                <SurpriseKitchen
                  loginBool={loginBool}
                  setCartModeByRedirectFrom={setCartModeByRedirectFrom}
                />
              </Route>
              {/* 關於我 */}
              <Route path="/aboutus">
                <AboutUs />
              </Route>
              {/* 食譜內容頁 注意：要加上網址參數 */}
              <Route exact path="/myrecipepage/:id?">
                <MyRecipePage />
              </Route>
              {/* 共享食譜 */}
              <Route path="/sharerecipe">
                <Sharerecipe />
              </Route>
              {/* 測試 */}
              <Route path="/xtest">
                <XTest />
              </Route>
              {/* 測試 */}
              <Route path="/TestSvgAnimate">
                <TestSvgAnimate />
              </Route>
              {/* 首頁 */}
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </ScrollToTop>
        </MainContent>

        <Footer />
      </>
    </Router>
  )
}

export default App
