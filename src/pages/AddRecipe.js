import '../styles/addrecipe.css'

function AddRecipe() {

  return (
    <>
      <div className="container">
        <div className="row offset-4 col-7">
          <form>
            <h4 className="col-green">新增食譜</h4>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">食譜名稱</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">烹飪時間</label>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control w142"
                  id="exampleInputPassword1"
                />
                &nbsp; 分
              </div>
            </div>
            <div className="form-group ">
              <label for="exampleFormControlTextarea1">簡介</label>
              <textarea
                className="form-control wh421153"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">步驟一</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">步驟二</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">步驟三</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              送出食譜
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
export default AddRecipe
