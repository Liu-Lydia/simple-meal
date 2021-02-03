import { ADD_VALUE, SUB_VALUE, INIT_VALUE } from '../actions/actionTypes'

// Reducer範例
//action = {type :ADD_VALUE, value:value}
export default function counter(state = { count: 100 }, action) {
  switch (action.type) {
    case ADD_VALUE:
      return { count: state.count + action.value }
    case SUB_VALUE:
      return { count: state.count - action.value }
    case INIT_VALUE:
      return { count: action.value }
    default:
      return state
  }
}

// state可設定為任意資料類型, 但設定後必須按照該資料類型的結構運作
// action純物件, 一定會有type鍵與對應值作條件判斷, 加上其他可選的鍵值對

// export default function Reducer名稱(state = 初始狀態 , action) {
//   switch (action.type) {
//     case ADD_VALUE:
//       return { count: state.count + action.value }
//     case SUB_VALUE:
//       return { count: state.count - action.value }
//     case INIT_VALUE:
//       return { count: action.value }
//     default:
//       return state
//   }
// }
