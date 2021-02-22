import { withRouter } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import '../styles/recipe-content.css'

function MyRecipePage(props) {
  const [name, setName] = useState('')
  const [cooktime, setCooktime] = useState('')
  const [introduction, setIntroduction] = useState('')
  //   const [pic, setPic] = useState('')
  const [step1, setStep1] = useState('')
  const [step2, setStep2] = useState('')
  const [step3, setStep3] = useState('')
  const [step4, setStep4] = useState('')
  const [step5, setStep5] = useState('')
  const [pic, setPic] = useState('')
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
    setPic(data[0].pic)
    console.log('name:', name)
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getUserFromServer(mealid)
  }, [])

  const step11 = (
    <>
      <div class="d-flex xxx-rc-step">
        <div class="xxx-rc-circle text-center">1</div>
        <p class="txt-body col xxx-rc-pstep offset-1">{step1}</p>
      </div>
    </>
  )
  const step22 = (
    <>
      <div class="d-flex xxx-rc-step">
        <div class="xxx-rc-circle text-center">2</div>
        <p class="txt-body col xxx-rc-pstep offset-1">{step2}</p>
      </div>
    </>
  )
  const step33 = (
    <>
      <div class="d-flex xxx-rc-step">
        <div class="xxx-rc-circle text-center">2</div>
        <p class="txt-body col xxx-rc-pstep offset-1">{step2}</p>
      </div>
    </>
  )
  const step44 = (
    <>
      <div class="d-flex xxx-rc-step">
        <div class="xxx-rc-circle text-center">4</div>
        <p class="txt-body col xxx-rc-pstep offset-1">{step4}</p>
      </div>
    </>
  )
  const step55 = (
    <>
      <div class="d-flex xxx-rc-step">
        <div class="xxx-rc-circle text-center">5</div>
        <p class="txt-body col xxx-rc-pstep offset-1">{step5}</p>
      </div>
    </>
  )

  return (
    <>
      <div className="container">
        <div className="row ">
          {/* 品名那塊 */}
          <div class="offset-1 mt-5 col-8 mx-auto">
            <h6 class="float-left">創意料理</h6>
            {/* 產品圖 */}
            <div class=" xxx-img-div float-right">
              <img className="img-size" src={pic} alt="" />
            </div>
            <br />
            <br />
            <h4 class="mb-5">{name}</h4>
            <p class="txt-body xxx-rc-p1 col-5">{introduction}</p>
            <h6>食材</h6>
            <p class="txt-body xxx-rc-p2">高麗菜 . 青江菜 . 番茄 . 關廟麵 .</p>
          </div>
          {/* 步驟 */}
          <div class="offset-1 col-8 xxx-rc-line mx-auto" data-spy="scroll">
            <h5>步驟</h5>
            {step1 == null || step1 == '' ? null : step11}
            {step2 == null || step2 == '' ? null : step22}
            {step3 == null || step3 == '' ? null : step33}
            {step4 == null || step4 == '' ? null : step44}
            {step5 == null || step5 == '' ? null : step55}
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(MyRecipePage)
