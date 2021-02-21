import '../../styles/addrecipe.css'
import MemberCenterNavbar from './MemberCenterNavbar'

function AddRecipe(props) {
  // 2.送資料給主機
  async function handleFormSubmit(event) {
    // 必寫這行.擋住預設submit做法避免畫面刷新
    event.preventDefault()

    // 新寫法.用FormData接事件目標來得到欄位
    const data = new FormData(event.target)
    console.log('data666', data)
    // 3.連接的伺服器資料網址 . http://localhost:4000/sharerecipe/add
    const url = 'http://localhost:4000/sharerecipe/try-upload'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: data,
      headers: new Headers({
        Accept: 'application/json',
        // 'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const rdata = await response.json()

    console.log('伺服器回傳的json資料', rdata)
  }

  return (
    <>
      <div className="container">
        <div className="row ">
          <MemberCenterNavbar />
          <div className="col-md-12 col-lg-12 col-sm-12 col-xl-6  col-12">
            <div className="col-md-8 col-lg-8 col-xl-8 col-sm-8 col-10 mx-auto ">
              <h4>新增食譜</h4>

              <form
                onSubmit={handleFormSubmit}
                enctype="multipart/form-data"
                name="form1"
              >
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">食譜名稱</label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">烹飪時間</label>
                  <div className="d-flex">
                    <input
                      name="cooktime"
                      id="cooktime"
                      type="text"
                      className="form-control w142"
                    />
                    &nbsp; 分
                  </div>
                </div>
                <div className="form-group ">
                  <label htmlFor="exampleFormControlTextarea1">簡介</label>
                  <textarea
                    name="introduction"
                    id="introduction"
                    className="form-control wh421153"
                    rows="3"
                  ></textarea>
                </div>
                <div className="form-group ">
                  <label htmlFor="exampleFormControlTextarea1">步驟一</label>
                  <textarea
                    name="step1"
                    id="step1"
                    className="form-control wh421153"
                    rows="3"
                  ></textarea>
                </div>
                <div className="form-group ">
                  <label htmlFor="exampleFormControlTextarea1">步驟二</label>
                  <textarea
                    name="step2"
                    id="step2"
                    className="form-control wh421153"
                    rows="3"
                  ></textarea>
                </div>
                <div className="form-group ">
                  <label htmlFor="exampleFormControlTextarea1">步驟三</label>
                  <textarea
                    name="step3"
                    id="step3"
                    className="form-control wh421153"
                    rows="3"
                  ></textarea>
                </div>
                <div className="form-group ">
                  <label htmlFor="exampleFormControlTextarea1">步驟四</label>
                  <textarea
                    name="step4"
                    id="step4"
                    className="form-control wh421153"
                    rows="3"
                  ></textarea>
                </div>
                <div className="form-group ">
                  <label htmlFor="exampleFormControlTextarea1">步驟五</label>
                  <textarea
                    name="step5"
                    id="step5"
                    className="form-control wh421153"
                    rows="3"
                  ></textarea>
                </div>
                <img id="myimg" src="" alt=""></img>
                <input type="file" name="pic" id="pic" accept="image/*"></input>
                <button type="submit" className="btn btn-primary">
                  送出食譜
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AddRecipe
