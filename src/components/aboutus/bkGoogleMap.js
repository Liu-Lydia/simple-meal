import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import '../../styles/aboutas.css'



const AnyReactComponent = ({ text }) => <div>{text}</div>

class GoogleMap extends Component {
  constructor() {
    super()
    // 類別行元件狀態是一個物件
    this.state = {
      todo: '',
      todos: [
        { id: 1, text: '青椒', completed: false },
        { id: 2, text: '高麗菜 . 大蒜 . A菜', completed: false },
        { id: 3, text: '蔥', completed: false },
        { id: 4, text: '胡蘿蔔', completed: false },
        { id: 5, text: '杏包菇 . 金針菇等菇類', completed: false },
        { id: 6, text: '海鮮類', completed: false },
      ],
    }

    this.handleCompleted = this.handleCompleted.bind(this)
  }

  // 地圖初始位置
  static defaultProps = {
    center: {
      lat: 23.642985361265722,
      lng: 120.9954084799164,
    },
    zoom: 8,
  }

  // 利用id值找到對應的todo項目的索引值，然後改變其completed值
  handleCompleted = (id) => {
    // 先拷貝一個新的陣列
    const newTodos = [...this.state.todos]

    // 利用id值找對應的todo項目的索引值
    const index = newTodos.findIndex((item) => item.id === id)

    // 如果有找到則不是-1
    if (index !== -1) {
      // 切換布林值：true變false，false變true
      newTodos[index].completed = !newTodos[index].completed

      // 設定回原本的todos
      this.setState(newTodos)
    }
  }

  render() {
    return (
      <>
        <h3 className="col-black">食材合作介紹</h3>
        {/* 地圖長寬 */}
        <div className="float-right" style={{ height: '70vh', width: '70%' }}>
          <GoogleMapReact
            // key
            bootstrapURLKeys={{
              key: 'AIzaSyANEATk09b9fvkHO5mw_wa7FycnZ1yXW0c',
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
        {/* 左邊選區區塊 */}
        <div className="xxx-choose float-right">
          {/* React可控表單元件：值對應到狀態，onChange對應到設定狀態 */}
          <ul>
            {/* 從陣列值中map出來，記得加上key值 */}
            {this.state.todos.map((item, index) => {
              return (
                <li key={item.id}>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => {
                      this.handleCompleted(item.id)
                    }}
                  />
                  {/* 用三元表達式改寫 */}
                  {item.completed ? <del>{item.text}</del> : item.text}
                </li>
              )
            })}
          </ul>
        </div>
      </>
    )
  }
}

export default GoogleMap
