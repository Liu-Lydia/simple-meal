import React, { useState, useEffect } from 'react'

function MainContentNoContainer(props) {
  return (
    <>
      <main role="main" className="flex-shrink-0">
        {props.children}
      </main>
    </>
  )
}

export default MainContentNoContainer
