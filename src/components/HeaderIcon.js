import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'

function HeaderIcon(props) {
  // {顯示字串, 導向網址, font-awesome}
  const { text, url, fa } = props

  //   消失
  const none = {
    icon: {
      margin: '0 0',
      padding: '0 24px',
      transition: '1s',
      color: '#A2A3A5',
    },
    span: {
      marginRight: '0px',
      // display: 'inline',
      transition: '1s',
      color: '#fff ',
    },
    txt: '',
  }
  //   出現
  const block = {
    icon: {
      margin: '0 0',
      padding: '0 24px 0 0',
      transition: '1.2s',
      color: '#627E2A',
    },
    span: {
      marginRight: '24px',
      // display: 'inline',
      transition: '1.2s',
      color: '#627E2A',
    },
    txt: text,
  }

  // cssAndText = {連結css物件 , 顯示字串css物件, 顯示字串} (初始設定消失)
  const [cssAndText, setCssAndText] = useState(none)

  return (
    <>
      <Nav.Link
        as={NavLink}
        to={url}
        onMouseEnter={() => {
          // console.log('enter')
          setCssAndText(block)
        }}
        onMouseLeave={() => {
          // console.log('leave')
          setCssAndText(none)
        }}
        style={cssAndText.icon}
      >
        <span style={cssAndText.span}>
          <span>{cssAndText.txt}</span>
        </span>
        <span>
          <i className={fa}></i>
        </span>
      </Nav.Link>
    </>
  )
}
export default HeaderIcon
