// 使用套件
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

// 頁面元件
import Test from './pages/Test'
import TestDatabase from './pages/TestDatabase'

// 組合用元件
import MainContent from './components/MainContent'

function App() {
  return (
    <Router>
      <>
        <MainContent>
          <Switch>
            <Route path="/TestDatabase">
              <TestDatabase />
            </Route>
            <Route path="/Test">
              <Test />
            </Route>
          </Switch>
        </MainContent>
      </>
    </Router>
  )
}

export default App
