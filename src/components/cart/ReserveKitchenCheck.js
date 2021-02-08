import React, { useEffect, useState } from 'react'
import { Route, withRouter, Link, Switch, Redirect } from 'react-router-dom'

function ReserveKitchenCheck(props) {
  const { flowchart, setFlowchart } = props

  // 是否結帳完成
  const [checkBool, setCheckBool] = useState(false)

  return (
    <>
      {/* 完成結帳跳轉 */}
      {checkBool && <Redirect to="/" />}

      {/* 上下一步 */}
      <div className="row justify-content-center text-center text-sm-right poe-bookmark-btn-group">
        <div className="col-12 col-md-8 col-xl-6">
          <Link
            onClick={() => setFlowchart(2)}
            className="btn-green txt-btn mx-2 poe-mb20"
          >
            <i className="fas fa-chevron-left"></i>　上一步
          </Link>
          <Link
            onClick={() => {
              setCheckBool(true)
              // handlePostcheck()
            }}
            className="btn-green txt-btn mx-2 poe-mb20"
          >
            送出訂單　<i className="fas fa-check"></i>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ReserveKitchenCheck
