import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

//成就系統 檢查有沒有完成的成就
//當登入之後先檢查目前完成的成就並記錄下來
//每次畫面更新時檢查完成的成就數量是否不同
//數量不同要檢查是什麼更新 並呈現

function MilestoneGoalListener(props) {
  //檢查是否登入
  const { loginBool } = props

  const [userID, setUserID] = useState('')

  //決定是否要開始監聽
  const [milestoneListener, setMilestoneLinstener] = useState(false)

  //達成成就陣列
  const [milestoneGoalList, setMilestoneGoalList] = useState([])

  // sweet alert集點按鈕
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      popup: 'poe-alert',
      title: 'poe-green my-0',
      content: 'txt-btn',
      confirmButton: 'btn-green txt-btn mx-2 my-2',
      cancelButton: 'btn-red txt-btn mx-2 my-2',
      denyButton: 'btn-red txt-btn mx-2 my-2',
    },
    buttonsStyling: false,
  })

  //檢查有無新成就
  const isNewMilestoneGoal = async () => {
    console.log('檢查有無新成就')
    const url = `http://localhost:4000/milestone/getGoalMilestone`
    if (loginBool && milestoneListener) {
      console.log('有登入有監聽 開始檢查')
      await fetch(url, {
        method: 'get',
        credentials: 'include',
      })
        //then 是會接前方拋出的結果
        .then((r) => r.json())
        .then((obj) => {
          if (obj.id == userID) {
            //確認還是同一人
            console.log("新成就數量",obj.result.length,obj)
            console.log("舊成就數量",milestoneGoalList.length,milestoneGoalList,userID)
            if (milestoneGoalList.length != obj.result.length) {
              //如果成就數量不同
              //一對一比較
              for (let i = 0; i < obj.result.length; i++) {
                let exist = false //設定boolean 來檢查有沒有找到
                for (let j = 0; j < milestoneGoalList.length; j++) {
                  if (
                    obj.result[i].milestone_sid ==
                    milestoneGoalList[j].milestone_sid
                  ) {
                    //比較兩者的milestone_sid 是否相同
                    exist = true
                  }
                }
                if (!exist) {
                  //如果該成就不存在於原有陣列中 顯示出來
                  swalWithBootstrapButtons.fire({
                    //icon: 'success',
                    imageUrl: `http://localhost:3015/img/milestonelist/${obj.result[i].finished_goal_pic}`,
                    imageHeight: 200,
                    title: `<h6>新成就達成</h6><h6>${obj.result[i].stone_name}</h6>`,
                    padding: '75px',
                    showConfirmButton: true,
                    confirmButtonText: '知道了',
                    // showDenyButton: true,
                    // showCloseButton: true,
                    backdrop: `rgba(0,0,0,.5)`,
                  })
                  console.log('顯示成就')
                  setMilestoneLinstener(false)//顯示成就之後 關閉監聽 可以重新刷新已完成的成就清單
                }
              }
            }
          } else {
            //取得不同UserID 取消監聽 重新取得 MilestoneGoalList
            setMilestoneLinstener(false)
          }
        })
    }
  }

  //取得成就
  const getGoalMilestone = async () => {
    const url = `http://localhost:4000/milestone/getGoalMilestone`
    await fetch(url, {
      method: 'get',
      credentials: 'include',
    })
      //then 是會接前方拋出的結果
      .then((r) => r.json())
      .then((obj) => {
        setMilestoneGoalList(obj.result)
        setUserID(obj.id)
        setMilestoneLinstener(true) //開始監聽
      })
  }

  //如果登入且還沒開始監聽 執行取得第一次 成就表單
  useEffect(() => {
    if (loginBool && !milestoneListener) {
      getGoalMilestone()

    }
  }, [loginBool, milestoneListener])

  //檢查成就
  useEffect(() => {
    console.log('成就更新')
    isNewMilestoneGoal()
  })

  useEffect(() => {
    console.log('成就更新-props')
    isNewMilestoneGoal()
  }, [props])

  return <>{props.children}</>
}
export default MilestoneGoalListener
