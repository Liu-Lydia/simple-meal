function RecipeSearchBar() {
  return (
    <>
      <div className="cha-rec-search-bar row justify-content-between ">
        <div className="cha-rec-main-txt1 txt-sub1">
          <p>首頁 123 菜單介紹 123 食譜</p>
        </div>
        <div className="cha-rec-search-put-top row justify-content-center">
          <input
            type="text"
            placeholder="搜尋餐點"
            className="input-pic-style cha-search-put txt-sub2"
          />
          <i className="fas fa-search cha-search-icon2 cha-gray"></i>
        </div>
      </div>
    </>
  )
}
export default RecipeSearchBar
