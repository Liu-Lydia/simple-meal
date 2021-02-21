import { get } from 'jquery'
import { useEffect, useState } from 'react'
// import { data } from './data'

function Test(props) {
  const [Coupn, setCoupn] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  const getDataFromServer = async () => {
    //模擬和伺服器要資料
    const response = await fetch('http://localhost:4000/test/getallmeal', {
      method: 'get',
    })
    const data = await response.json()
    //最後設定要到狀態中
    setCoupn(data)
  }

  useEffect(() => {
    getDataFromServer()
  }, [])

  const spinner = (
    <>
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </>
  )
  const dispaly = (
    <>
      {' '}
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">座號</th>
            <th scope="col">姓名</th>
            <th scope="col">出生年月日</th>
          </tr>
        </thead>
        <tbody>
          {Coupn.map((v, i) => (
            <tr key={i}>
              <td>{v.description}</td>
              <td>{v.order_sid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )

  return (
    <>
      <div className="container col-6">
        <h1>學生資料</h1>
        {isLoading ? spinner : dispaly}
      </div>
    </>
  )
}
export default Test
