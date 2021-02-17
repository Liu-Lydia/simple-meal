import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MemberCenterLogin from '../components/member-center/MemberCenterLogin'
import MemberCenterRegiStered from '../components/member-center/MemberCenterRegiStered'
import MemberCenterIndex from '../components/member-center/MemberCenterIndex'
import MemberCenterInfo from '../components/member-center/MemberCenterInfo'
import MemberCenterResetPassword from '../components/member-center/MemberCenterRestPassword'

function MemberCenter() {
  return (
    <>
      {/* <BrowserRouter> */}
      <Switch>
        <Route path="/MemberCenter/Info" component={MemberCenterInfo}></Route>
        <Route
          path="/MemberCenter/RegiStered"
          component={MemberCenterRegiStered}
        />
        <Route
          path="/MemberCenter/ResetPassword"
          component={MemberCenterResetPassword}
        />
        <Route path="/MemberCenter/Index" component={MemberCenterIndex} />
        <Route path="/" component={MemberCenterLogin} />
      </Switch>
      {/* </BrowserRouter> */}
    </>
  )
}

export default MemberCenter
