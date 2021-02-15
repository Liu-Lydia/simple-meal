// 引用資料路徑 . 只寫目錄沒寫檔名專案會自動抓index檔名
import { data } from '../data/'
import '../styles/share-recipe.css'
import { Container, Pagination, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'

function Sharerecipe(props) {
  // 資料的鉤子 . 未經過過濾的原始資料
  const [recipe, setRecipe] = useState([])

  // 經過搜尋、排序、過濾後要呈現的資料 . 不直接用students另外設studentsDisplay的原因是因為搜尋後原本資料並沒有要修改所以用這個來暫存過濾過的資料不動到原本的資料
  const [recipeDisplay, setRecipeDisplay] = useState([])

  // spinner的鉤子
  const [isLoading, setIsLoading] = useState(true)
  // 搜尋用的文字輸入狀態
  const [searchInput, setSearchInput] = useState(null)

  // 元件已經出現在網頁上才能跟伺服器相連 . 所以要寫在生命週期完成
  useEffect(() => {
    // 載入資料前先開啟spinner
    setIsLoading(true)

    // 模擬和伺服器要資料
    // 最後設定到狀態中
    setRecipe(data)
    // 一開始的搜尋暫存值會與recipe一樣
    setRecipeDisplay(data)
    // 3秒後關閉指示器
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  // 模擬componentDidMount + componentDidUpdate
  // searchInput改變的時候要做的動作
  useEffect(() => {
    if (searchInput === null) return

    // 先開起spinner
    setIsLoading(true)

    // 過濾出輸入的字
    const newRecipe = recipe.filter((v, i) => {
      return v.name.includes(searchInput)
    })
    // 把過濾出的結果給recipeDisplay
    setRecipeDisplay(newRecipe)

    // 3秒後關閉spinner
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [searchInput])

  // 等待時的畫面
  const spinner = (
    <>
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </>
  )

  // 顯示時的畫面
  const display = (
    <>
      <div className="container">
        <div className="row">
          {/* 引入資料 */}
          {recipeDisplay.map((v, i) => (
            <div key={i} className="card col-3">
              <img src={v.pic} className="card-img-top mt-3" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{v.name}</h5>
                <p className="card-text">{v.introduction}</p>
                <div className="text-right">
                  <i className="far fa-clock col-green"></i>&nbsp; {v.cook_time}
                  分鐘
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <Pagination classNameName="mx-auto mt-5">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>

            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    </>
  )

  return (
    <>
      <div className="container">
        <div className="row mt-1 mb-1">
          <h4>分享食譜</h4>
          <div className="ml-auto">
            {/* 文字輸入框是表單元素 . 表單元素要讓react控管要兩個條件1.value必須對應到狀態值2.onChange要對應到設定狀態.且有固定寫法如下*/}
            食譜搜尋：
            <input
              type="text"
              className="input-style mr-2"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value)
              }}
            />
            <button className="xxx-sr-foodsearch">食材搜尋</button>
          </div>
        </div>
      </div>
      {/* 載入中顯示spinner . 載入完顯示display */}
      {isLoading ? spinner : display}
    </>
  )
}
export default Sharerecipe
