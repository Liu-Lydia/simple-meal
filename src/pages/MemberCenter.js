import React from 'react'
import { Route, Switch } from 'react-router-dom'
/* 子頁面載入*/
import MemberCenterLogin from '../components/member-center/MemberCenterLogin'
import MemberCenterRegiStered from '../components/member-center/MemberCenterRegiStered'
import MemberCenterIndex from '../components/member-center/MemberCenterIndex'
import MemberCenterInfo from '../components/member-center/MemberCenterInfo'
import MemberCenterResetPassword from '../components/member-center/MemberCenterRestPassword'
import MemberCenterNavbar from '../components/member-center/MemberCenterNavbar'
import MemberCenterAddr from '../components/member-center/MemberCenterAddr'
import MemberCenterCreditCard from '../components/member-center/MemberCenterCreditCard'
import MemberCenterFoodDelivery from '../components/member-center/MemberCenterFoodDelivery'
import MemberCenterSimpleMealCoupon from '../components/member-center/MemberCenterSimpleMealCoupon'

function MemberCenter() {
  return (
    <>
      <Switch>
        <Route
          path="/MemberCenter/MemberCenterSimpleMealCoupon"
          component={MemberCenterSimpleMealCoupon}
        ></Route>
        <Route
          path="/MemberCenter/MemberCenterFoodDelivery"
          component={MemberCenterFoodDelivery}
        ></Route>
        <Route
          path="/MemberCenter/CreditCard"
          component={MemberCenterCreditCard}
        ></Route>
        <Route path="/MemberCenter/addr" component={MemberCenterAddr}></Route>
        <Route path="/MemberCenter/Info" component={MemberCenterInfo}></Route>
        <Route
          path="/MemberCenter/Navbar"
          component={MemberCenterNavbar}
        ></Route>
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
    </>
  )
}

export default MemberCenter
