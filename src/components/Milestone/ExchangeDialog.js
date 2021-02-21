import React, { props, useState,useEffect } from 'react'
import '../../styles/public.css'
import '../../styles/fff.css'

//<ExchangeDialog dialogStyle={dialogStyle} setDialogStyle={setDialogStyle} detailContext={detailContext}/>
function ExchangeDialog(props) {

  //目前擁有點數
  const [totalPoint, setTotalPoint] = useState(0)
  const [count,setCount] = useState(0)
  const [selectOption,setSelectOption] = useState([])

  const getPoint = () => {
    const url = 'http://localhost:4000/milestone/getPoint?sid=1' //sid 要從session來
    fetch(url, {
      method: 'get',
    })
      //then 是會接前方拋出的結果
      .then((r) => r.json())
      .then((obj) => {
        //總獲得的點數
        const totalGetPoint = obj.totalGetPoiont;
        //總花費的點數
        const totalSpendPoint = obj.totalSpendPoint;
        //將目前有的點數設定成為屬性
        setTotalPoint(totalGetPoint-totalSpendPoint);
      })
  }

  const updateSelectOption = ()=>{
    const temparray = []
    console.log("\ttotalPoint",totalPoint,"\tneed_point",props.detailContext.need_point)
    for(let i = 0;i*props.detailContext.need_point<=totalPoint;i++)
    {
      console.log("i",i,"\ttotalPoint",totalPoint,"\tneed_point",props.detailContext.need_point)
      temparray.push(i*props.detailContext.need_point)
    }
    setSelectOption(temparray)
    console.log(temparray)
  }

  useEffect(() => {
    console.log("useEffect - detailContext")
    getPoint()
    updateSelectOption()
  }, [props.detailContext]);

    //當選擇兌換時 更新
    useEffect(() => {
      console.log("useEffect - count")
      
    }, [count]);


  return (
    <div className="fff-exchange" style={props.dialogStyle}>
      <div className="fff-exchange-content-box">
        <div className="row">
          {/* 圖片放置位置 先占高 mobo關閉 */}

          {/* 關閉頁面的Ｘ */}
          <div
            className=" justify-content-end col-12 "
            style={{ marginBottom: '25px' }}
          >
            <h6 className="fff-no-mr-and-pad">
              <i
                className="fas fa-times aboutCloseBtn"
                onClick={() => {
                  props.setDialogStyle({ display: 'none' })
                }}
              ></i>
            </h6>
          </div>
          <form>
            <div className="col fff-exchange-content ">
              <div className="d-flex justify-content-between">
                <span className="txt-h6">你點選了</span>
                <span style={{ color: '#627E2A' }}>
                  {props.detailContext.good_name}
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="txt-body" style={{ color: '#627E2A' }}>
                  選擇數量
                </span>
                <select onchange={setCount(this)}>
                {selectOption.map((value,index)=>(<option key={index} >{index}</option>))}
                </select>
              </div>
              <div className="d-flex justify-content-between">
                <span>花費點數</span>
                <span>{count*props.detailContext.need_point}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>剩餘點數</span>
                <span>{totalPoint - count*props.detailContext.need_point}</span>
              </div>
              <div>
                <span className="txt-btn">
                  兌換說明：
                  {props.detailContext.good_subs}
                </span>
              </div>

              <div>
                <span className="txt-btn">已兌換便無法退還點數喔！</span>
              </div>

              <div
                className="d-flex justify-content-center"
                style={{ marginTop: '25px' }}
              >
                <button
                  type="button"
                  className="btn-green txt-btn aboutCloseBtn"
                  onClick={() => {
                    props.setDialogStyle({ display: 'none' })
                  }}
                  data-dismiss="modal"
                >
                  確定兌換
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ExchangeDialog
