import SingleMapDetail from '../components/aboutus/SingleMapDetail'
import GeocodeSearch from '../components/aboutus/GeocodeSearch'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// ??名子怎麼改不掉
function GoogleMapDemo() {
  // 預設的中心點
  const [lat, setLat] = useState(23.642985361265722)
  const [lng, setLng] = useState(120.9954084799164)
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '青椒',
      completed: false,
      add: '台北市北投區中央北路三段40巷',
      lat: 25.13988774719059,
      lng: 121.48458969806865,
    },
    {
      id: 2,
      text: '高麗菜 . 大蒜 . A菜',
      completed: false,
      add: '台南市柳營區果毅里南湖25號',
      lat: 23.240227242579074,
      lng: 120.37868608640444,
    },
    {
      id: 3,
      text: '蔥',
      completed: false,
      add: '屏東縣瑪家鄉114-6號',
      lat: 22.66255809598465,
      lng: 120.63152645571405,
    },
    {
      id: 4,
      text: '胡蘿蔔',
      completed: false,
      add: '台中市太平區廓仔坑路119號',
      lat: 24.151732232849326,
      lng: 120.75964181229905,
    },
    {
      id: 5,
      text: '杏包菇 . 金針菇等菇類',
      completed: false,
      add: '彰化縣彰化市水月台路218號',
      lat: 24.056362209222623,
      lng: 120.58705255572812,
    },
    {
      id: 6,
      text: '海鮮類',
      completed: false,
      add: '新北市瑞芳區深澳路',
      lat: 25.13131514828753,
      lng: 121.81920779806867,
    },
  ])

  // 利用id值找到對應的todo項目的索引值，然後改變其completed值
  const handleCompleted = (id) => {
    // 先拷貝一個新的陣列
    const newTodos = [...todos]

    // 利用id值找對應的todo項目的索引值
    const index = newTodos.findIndex((item) => item.id === id)

    // 如果有找到則不是-1
    if (index !== -1) {
      // 切換布林值：true變false，false變true
      newTodos[index].completed = !newTodos[index].completed

      // 設定回原本的todos
      setTodos(newTodos)
    }
  }

  useEffect(() => {
    console.log(lat)
  }, [lat])

  useEffect(() => {
    console.log(lng)
  }, [lng])
  // 抓是否勾選狀態
  useEffect(() => {
    console.log(todos.completed)
  }, [todos.completed])

  // 產生只有勾選的陣列
  const filtertrue = todos.filter(function (item, index, array) {
    return item.completed === true
  })

  console.log(todos)

  return (
    <>
      <Container>
        <Row>
          <Col sm={8}>
            {/* <GeocodeSearch setLat={setLat} setLng={setLng} /> */}
            <SingleMapDetail
              lat={lat}
              lng={lng}
              infoTitle="測試"
              infoContent="this is a sample string"
              todos={todos}
            />

            {/* <h2>捷運科技大樓站</h2>
      <SingleMapDetail
        lat={25.026312}
        lng={121.543439}
        infoTitle="捷運科技大樓站"
        infoContent="this is a sample string"
      /> */}
          </Col>

          <Col sm={4}>
            <ul>
              {/* 從陣列值中map出來，記得加上key值 */}
              {/* 判斷依照不同的completed值作不同的呈現樣子 */}
              {todos.map((item, index) => {
                return (
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => {
                        handleCompleted(item.id)
                      }}
                    />
                    {/* 用三元表達式改寫 */}
                    {item.text}
                    {/* {item.completed ? <del>{item.text}</del> : item.text} */}
                  </li>
                )
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default GoogleMapDemo
