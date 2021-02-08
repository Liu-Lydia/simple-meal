import MultiLevelBreadCrumb from '../MultiLevelBreadCrumb'

function RecipeSearchBar(porps) {
  const { breadCrumbBool } = porps
  return (
    <>
      <div className="cha-rec-search-bar row justify-content-between ">
        <div className=" col cha-rec-main-txt1 txt-sub1">
          {!breadCrumbBool && <MultiLevelBreadCrumb />}
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
