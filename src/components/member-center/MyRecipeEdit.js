import '../../styles/addrecipe.css'
import MemberCenterNavbar from './MemberCenterNavbar'
import { withRouter } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
// import { useState, data } from 'jquery'

function MyRecipeEdit(props) {
  const [name, setName] = useState('')
  const [cooktime, setCooktime] = useState('')
  const [introduction, setIntroduction] = useState('')
  //   const [pic, setPic] = useState('')
  const [step1, setStep1] = useState('')
  const [step2, setStep2] = useState('')
  const [step3, setStep3] = useState('')
  const [step4, setStep4] = useState('')
  const [step5, setStep5] = useState('')
  const mealid = props.match.params.id
  console.log('mealid:', mealid)
  // 鉤子

  // 取得一開始的資料
  async function getUserFromServer(id) {
    // 連接的伺服器資料網址
    const url = 'http://localhost:4000/sharerecipe/edit/' + id
    console.log('url:', url)

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
    console.log('onedata:', data)
    console.log('data.name:', data[0].name)
    // 設定資料

    setName(data[0].name)
    setCooktime(data[0].cooktime)
    setIntroduction(data[0].introduction)
    // setPic(data[0].pic)
    setStep1(data[0].step1)
    setStep2(data[0].step2)
    setStep3(data[0].step3)
    setStep4(data[0].step4)
    setStep5(data[0].step5)
    console.log('name:', name)
  }

  // 2.送資料給主機
  async function handleFormSubmit(event) {
    // 必寫這行.擋住預設submit做法避免畫面刷新
    event.preventDefault()

    // 新寫法.用FormData接事件目標來得到欄位
    const data = new FormData(event.target)
    //   console.log('data666', data)
    console.log('mealid:', mealid)

    // 3.連接的伺服器資料網址 . http://localhost:4000/sharerecipe/add
    const url = 'http://localhost:4000/sharerecipe/edit/' + mealid
    console.log('puturl', url)

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'PUT',
      credentials: 'include',
      // credentials: 'include',
      body: data,
      headers: new Headers({
        Accept: 'application/json',
        // 'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const rdata = await response.json()

    console.log('伺服器回傳的json資料', rdata)
  }
  // 一開始就會開始載入資料
  useEffect(() => {
    getUserFromServer(mealid)
  }, [])

  //   useEffect(() => {
  //     //   setName(data.name)
  //     console.log('生變', name)
  //   }, [name])
  return (
    <>
      <div className="container">
        <div className="row ">
          <MemberCenterNavbar />
          <div className="col-md-12 col-lg-12 col-sm-12 col-xl-8  col-12">
            <div className="col-md-8 col-lg-8 col-xl-8 col-sm-8 col-10 mx-auto ">
              <h4 className="col-green">修改食譜</h4>
              <form
                onSubmit={handleFormSubmit}
                enctype="multipart/form-data"
                name="form1"
              >
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">食譜名稱</label>
                  <input
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value)
                    }}
                    name="name"
                    id="name"
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">烹飪時間</label>
                  <div className="d-flex">
                    <input
                      value={cooktime}
                      onChange={(event) => {
                        setCooktime(event.target.value)
                      }}
                      name="cooktime"
                      id="cooktime"
                      type="text"
                      className="form-control w142"
                    />
                    &nbsp; 分
                  </div>
                </div>
                <div className="form-group ">
                  <label htmlFor="exampleFormControlTextarea1">簡介</label>
                  <textarea
                    value={introduction}
                    onChange={(event) => {
                      setIntroduction(event.target.value)
                    }}
                    name="introduction"
                    id="introduction"
                    className="form-control wh421153"
                    rows="3"
                  ></textarea>
                </div>
                <div className="form-group ">
                  <label htmlFor="exampleFormControlTextarea1">步驟一</label>
                  <textarea
                    value={step1}
                    onChange={(event) => {
                      setStep1(event.target.value)
                    }}
                    name="step1"
                    id="step1"
                    className="form-control wh421153"
                    rows="3"
                  ></textarea>
                </div>
                <div className="form-group ">
                  <label htmlFor="exampleFormControlTextarea1">步驟二</label>
                  <textarea
                    value={step2}
                    onChange={(event) => {
                      setStep2(event.target.value)
                    }}
                    name="step2"
                    id="step2"
                    className="form-control wh421153"
                    rows="3"
                  ></textarea>
                </div>
                <div className="form-group ">
                  <label htmlFor="exampleFormControlTextarea1">步驟三</label>
                  <textarea
                    value={step3}
                    onChange={(event) => {
                      setStep3(event.target.value)
                    }}
                    name="step3"
                    id="step3"
                    className="form-control wh421153"
                    rows="3"
                  ></textarea>
                </div>
                <div className="form-group ">
                  <label htmlFor="exampleFormControlTextarea1">步驟四</label>
                  <textarea
                    value={step4}
                    onChange={(event) => {
                      setStep4(event.target.value)
                    }}
                    name="step4"
                    id="step4"
                    className="form-control wh421153"
                    rows="3"
                  ></textarea>
                </div>
                <div className="form-group ">
                  <label htmlFor="exampleFormControlTextarea1">步驟五</label>
                  <textarea
                    value={step5}
                    onChange={(event) => {
                      setStep5(event.target.value)
                    }}
                    name="step5"
                    id="step5"
                    className="form-control wh421153"
                    rows="3"
                  ></textarea>
                </div>
                <img id="myimg" src="" alt=""></img>
                <input
                  type="file"
                  //   value={pic}
                  //   onChange={(event) => {
                  //     setPic(event.target.value)
                  //   }}
                  name="pic"
                  id="pic"
                  accept="image/*"
                ></input>

                <button type="submit" className="btn btn-primary">
                  送出食譜
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(MyRecipeEdit)
