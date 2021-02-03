import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

// 第一步：匯入createStore (composer與applyMiddleware用來建立middle well)
import { createStore, compose, applyMiddleware } from 'redux'

// 匯入串接的綁定器
import { Provider } from 'react-redux'

// 第二步：寫出reducer
// 累加器/歸納器寫法
import { rootReducer } from './reducers/index'

// 導入redux-thunk中介軟體
import thunk from 'redux-thunk'

// 第三步：由rootReducer建立store(有中介軟體的語法)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
