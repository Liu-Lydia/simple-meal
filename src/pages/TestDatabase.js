import React, { useEffect, useState } from 'react'

function TestDatabase() {
  const [testData, setTestData] = useState([])

  async function getDataFromServer() {
    const response = await fetch('http://localhost:4000/test/getdata', {
      method: 'get',
    })
    const data = await response.json()

    setTestData(data)
  }

  useEffect(() => {}, [])

  return (
    <>
      <div className="row my-5">
        <div className="col-6">
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>string</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#</td>
                <td>
                  <input type="text" placeholder="請輸入" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-6">
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>string</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default TestDatabase
