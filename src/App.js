// 使用套件
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

// 頁面元件
import Test from './pages/Test'
import TestDatabase from './pages/TestDatabase'
import Cart from './pages/Cart'
import Long1 from './pages/Long1'
import Long2 from './pages/Long2'
import Calendar from './pages/Calendar'
import Milestone from './pages/Milestone'

// 組合用元件
import Header from './components/Header'
import MainContent from './components/MainContent'
import ScrollToTop from './components/ScrollToTop'
import MultiLevelBreadCrumb from './components/MultiLevelBreadCrumb'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <>
        <Header />
        {/* 主內容 */}
        <MainContent>
          <MultiLevelBreadCrumb />
          <ScrollToTop>
            <Switch>
              <Route path="/Long1">
                <Long1 />
              </Route>
              <Route path="/Long2">
                <Long2 />
              </Route>
              <Route path="/Cart">
                <Cart />
              </Route>
              <Route path="/TestDatabase">
                <TestDatabase />
              </Route>
              <Route path="/Test">
                <Test />
              </Route>
              <Route path="/Calendar">
                <Calendar />
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
