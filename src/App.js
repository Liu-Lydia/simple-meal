// 使用套件
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

// 頁面元件
import ThisIsForFun from './pages/ThisIsForFun'
import Test from './pages/Test'
import TestDatabase from './pages/TestDatabase'
import Cart from './pages/Cart'
import SurpriseKitchen from './pages/SurpriseKitchen'
import Milestone from './pages/Milestone'
import RewardExchange from './pages/RewardExchange'
import Meal from './pages/Meal'
import Recipe from './pages/Recipe'

// 組合用元件
import Header from './components/Header'
import MainContent from './components/MainContent'
import MainContentNoContainer from './components/MainContentNoContainer'
import ScrollToTop from './components/ScrollToTop'
import MultiLevelBreadCrumb from './components/MultiLevelBreadCrumb'
import Footer from './components/Footer'

function App() {
  // 麵包屑判斷 (true在左上 false由各頁面自訂, 需要改動者再引入)
  const [breadCrumbBool, setBreadCrumbBool] = useState(true)

  return (
    <Router>
      <>
        <Header />
        {/* 主內容 */}
        <MainContent>
          {breadCrumbBool && (
            <MultiLevelBreadCrumb breadCrumbBool={breadCrumbBool} />
          )}
          <ScrollToTop>
            <Switch>
              <Route path="/cart">
                <Cart />
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
            </Switch>
          </ScrollToTop>
        </MainContent>
        <MainContentNoContainer>
          <Switch>
            <Route path="/surprisekitchen">
              <SurpriseKitchen />
            </Route>
          </Switch>
          {/* <Route path="/">
            <ThisIsForFun />
          </Route> */}
        </MainContentNoContainer>
        <Footer />
      </>
    </Router>
  )
}

export default App
