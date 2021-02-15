// 引用資料路徑 . 只寫目錄沒寫檔名專案會自動抓index檔名
import { data } from '../data/'
import '../styles/share-recipe.css'
import { Container, Pagination, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'

function Sharerecipe(props) {
  // 資料的鉤子
  const [recipe, setRecipe] = useState([])
  // spinner的鉤子
  const [isLoading, setIsLoading] = useState(true)

  // 元件已經出現在網頁上才能跟伺服器相連 . 所以要寫在生命週期完成
  useEffect(() => {
    // 載入資料前先開啟spinner
    setIsLoading(true)

    // 模擬和伺服器要資料
    // 最後設定到狀態中
    setRecipe(data)

    // 3秒後關閉指示器
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

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
        <div className="row mt-1 mb-1">
          <h4>分享食譜</h4>
          <div className="ml-auto">
            <input type="text" className="input-style" />

            <button className="xxx-sr-btsearch" type="submit">
              <i className="fas fa-search"></i>
            </button>

            <button className="xxx-sr-foodsearch">食材搜尋</button>
          </div>
        </div>
        <div className="row">
          {/* 引入資料 */}
          {recipe.map((v, i) => (
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
      {/* 載入中顯示spinner . 載入完顯示display */}
      {isLoading ? spinner : display}
    </>
  )
}
export default Sharerecipe
