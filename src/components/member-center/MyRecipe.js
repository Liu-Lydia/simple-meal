import MemberCenterNavbar from './MemberCenterNavbar'
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import '../../styles/myrecipe.css'
import { withRouter } from 'react-router-dom'
import Swal from 'sweetalert2'

function MyRecipe(props) {
  const [users, setUsers] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  // sweetalert
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      cancelButton: 'select-btn-green txt-btn',
    },
    buttonsStyling: false,
  })

  async function getUsersFromServer() {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:4000/sharerecipe/getusermeal'

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    // 設定資料
    setUsers(data)
  }

  async function deletcUserFromServer(id) {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:4000/sharerecipe/' + id
    console.log('url:', url)

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'DELETE',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log('data:', data)

    // 設定資料
    if (!data.id) {
      const newUsers = users.filter((value, index) => {
        return value.id !== id
      })

      setUsers(newUsers)
      // alert('刪除完成')
      swalWithBootstrapButtons.fire({
        icon: 'success',
        text: '刪除成功',
        showConfirmButton: false,
        padding: '25px',
        showCancelButton: true,
        cancelButtonText: '確定',
        showCloseButton: true,
      })
    }
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getUsersFromServer()
  }, [])

  // 每次users資料有變動就會X秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 1000)
  }, [users])

  const loading = (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="mt-5 mx-auto xxx-200x200">
            <img
              src="http://localhost:3015/img/lemon/empty.gif"
              className="card-img-top xxx-img xxx-br25 xxx-m85"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">照片</th>
            <th className="xxx-w50" scope="col">
              食譜名稱
            </th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          {users.length &&
            users.map((value, index) => {
              return (
                <tr key={value.id}>
                  <td>
                    <div className="xxx-myrecipe-img-div">
                      <img
                        className="xxx-myrecipe-img-size"
                        src={value.pic}
                        alt=""
                      />
                    </div>
                  </td>
                  <td className="xxx-w50">{value.name}</td>
                  <td>
                    <button
                      className="select-btn-green txt-btn mb-2"
                      onClick={() => {
                        props.history.push(
                          '/MemberCenter/myrecipeedit/' + value.id
                        )
                      }}
                    >
                      編輯
                    </button>
                    {'  '}
                    <button
                      className="select-btn-red txt-btn"
                      onClick={() => {
                        deletcUserFromServer(value.id)
                      }}
                    >
                      刪除
                    </button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </>
  )
  return (
    <>
      <div className="container">
        <div className="row ml-2">
          <MemberCenterNavbar />
          <div className="col-md-12 col-lg-12 col-sm-12 col-xl-8  col-12">
            <div className="col-md-8 col-lg-8 col-xl-8 col-sm-8 col-10 mx-auto ">
              <h4 className="col-green">我的食譜</h4>
              {dataLoading ? loading : display}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(MyRecipe)
