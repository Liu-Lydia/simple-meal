// 全部改用常數宣告的動作類型
// import { ADD_VALUE, SUB_VALUE, INIT_VALUE } from './actionTypes'

// 寫出動作建立器(函式)
// 擴充可以依value作增或減

// export const initValue = (value) => {
//   return { type: INIT_VALUE, value }
// }

// export const initValueAsync = (value) => {
//   return async (dispatch) => {
//     const url = 'http://localhost:8888/count/1'

//     const response = await fetch(url, { method: 'GET' })
//     const data = await response.json()

//     console.log(data)

//     dispatch(initValue(data.total))
//   }
// }

// export const addValue = (value) => {
//   return { type: ADD_VALUE, value }
// }

// // 異步-3秒後會加值
// export const addValueAsync = (value) => {
//   return async (dispatch, getState) => {
//     console.log(getState())

//     const newTotal = { total: getState().counter.count + value }

//     console.log(newTotal)

//     const url = 'http://localhost:8888/count/1'

//     const response = await fetch(url, {
//       method: 'PUT',
//       body: JSON.stringify(newTotal),
//       headers: new Headers({
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       }),
//     })

//     const data = await response.json()

//     console.log(data)

//     dispatch(addValue(value))
//   }
// }

// export const subValue = (value) => {
//   return { type: SUB_VALUE, value }
// }
