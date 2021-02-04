import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'

function HeaderIcon(props) {
  // {顯示字串, 導向網址, font-awesome}
  const { text, url, fa } = props

  //   消失
  const noneCss = {
    width: '0px',
    color: '#fff ',
    marginRight: '0px',
    display: 'inline',
    transition: '1s',
  }
  //   出現
  const blockCss = {
    width: '30px',
    color: '#000 ',
    marginRight: '16px',
    display: 'inline',
    transition: '1s',
  }

  // cssAndText = [css變化物件 , 顯示字串] (初始設定消失)
  const [cssAndText, setCssAndText] = useState([noneCss, ''])

  return (
    <Nav.Link
      as={NavLink}
      to={url}
      className="mx-2 px-2"
      onMouseOver={() => {
        setCssAndText([blockCss, text])
      }}
      onMouseOut={() => {
        setCssAndText([noneCss, ''])
      }}
    >
      <span className="text-center overflow-hidden">
        <span style={cssAndText[0]}>{cssAndText[1]}</span>
      </span>

      <i className={fa}></i>
    </Nav.Link>
  )
}
export default HeaderIcon
