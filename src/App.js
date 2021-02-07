// 使用套件
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

// 頁面元件
import Test from './pages/Test'
import TestDatabase from './pages/TestDatabase'
import Cart from './pages/Cart'
import Long1 from './pages/Long1'
import Long2 from './pages/Long2'
import SurpriseKitchen from './pages/SurpriseKitchen'
import Milestone from './pages/Milestone'
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
            </Switch>
          </ScrollToTop>
        </MainContent>
        <MainContentNoContainer>
          <Switch>
            <Route path="/surprisekitchen">
              <SurpriseKitchen />
            </Route>
            <Route path="/meal">
              <Meal />
            </Route>
            <Route path="/recipe">
              <Recipe />
            </Route>
          </Switch>
        </MainContentNoContainer>
        <Footer />
      </>
    </Router>
  )
}

export default App
