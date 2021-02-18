import '../styles/addrecipe.css'
import React, { useState, useEffect } from 'react'

function AddRecipe(props) {
  // 1.鉤子
  // spinner
  const [dataLoading, setDataLoading] = useState(false)
  // 輸入
  const [name, setName] = useState('')
  const [cooktime, setCooktime] = useState('')
  const [introduction, setIntroduction] = useState('')
  const [step1, setStep1] = useState('')
  const [step2, setStep2] = useState('')
  const [step3, setStep3] = useState('')
  const [step4, setStep4] = useState('')
  const [step5, setStep5] = useState('')

  // 2.送資料給主機
  async function addRecipeToSever() {
    // 1.開啟載入指示
    setDataLoading(true)
    // 2.要傳的值
    const newData = {
      name,
      cooktime,
      introduction,
      step1,
      step2,
      step3,
      step4,
      step5,
    }

    // 3.連接的伺服器資料網址
    const url = 'http://localhost:4000/sharerecipe/add'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newData))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)
    // 要等驗証過，再設定資料(簡單的直接設定)

    //直接在一段x秒關掉指示器
    setTimeout(() => {
      setDataLoading(false)
      alert('儲存完成')
      // props.history.push('/')
    }, 500)
  }
  // 3.等待時的畫面
  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  // 4.顯示時的畫面
  const display = (
    <>
      <div className="container">
        <div className="row offset-4 col-7">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">食譜名稱</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                value={name}
                onChange={(event) => {
                  setName(event.target.value)
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">烹飪時間</label>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control w142"
                  value={cooktime}
                  onChange={(event) => {
                    setCooktime(event.target.value)
                  }}
                />
                &nbsp; 分
              </div>
            </div>
            <div className="form-group ">
              <label for="exampleFormControlTextarea1">簡介</label>
              <textarea
                className="form-control wh421153"
                value={introduction}
                onChange={(event) => {
                  setIntroduction(event.target.value)
                }}
                rows="3"
              ></textarea>
            </div>
            <div className="form-group ">
              <label for="exampleFormControlTextarea1">步驟一</label>
              <textarea
                className="form-control wh421153"
                value={step1}
                onChange={(event) => {
                  setStep1(event.target.value)
                }}
                rows="3"
              ></textarea>
            </div>
            <div className="form-group ">
              <label for="exampleFormControlTextarea1">步驟二</label>
              <textarea
                className="form-control wh421153"
                value={step2}
                onChange={(event) => {
                  setStep2(event.target.value)
                }}
                rows="3"
              ></textarea>
            </div>
            <div className="form-group ">
              <label for="exampleFormControlTextarea1">步驟三</label>
              <textarea
                className="form-control wh421153"
                value={step3}
                onChange={(event) => {
                  setStep3(event.target.value)
                }}
                rows="3"
              ></textarea>
            </div>
            <div className="form-group ">
              <label for="exampleFormControlTextarea1">步驟四</label>
              <textarea
                className="form-control wh421153"
                value={step4}
                onChange={(event) => {
                  setStep4(event.target.value)
                }}
                rows="3"
              ></textarea>
            </div>
            <div className="form-group ">
              <label for="exampleFormControlTextarea1">步驟五</label>
              <textarea
                className="form-control wh421153"
                value={step5}
                onChange={(event) => {
                  setStep5(event.target.value)
                }}
                rows="3"
              ></textarea>
            </div>

            <button
              onClick={() => {
                addRecipeToSever()
              }}
              className="btn btn-primary"
            >
              送出食譜
            </button>
          </form>
        </div>
      </div>
    </>
  )
  return (
    <>
      <div className="container">
        <div className="row mt-1 mb-1">
          <h4>新增食譜</h4>
          <div></div>
        </div>
      </div>
      {/* 載入中顯示spinner . 載入完顯示display */}
      {dataLoading ? loading : display}
    </>
  )
}
export default AddRecipe
