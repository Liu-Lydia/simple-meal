import React,{useEffect} from 'react'
import '../../styles/public.css'
import '../../styles/fff.css'
import $ from 'jquery'

function ExchangeOption(props) {
  useEffect(() => {
    if (props.optionTab == 0){
      const tab0 = document.getElementById("tab0");
      tab0.classList.remove("fff-txt-rw-unselect");
      tab0.classList.add("fff-txt-rw-select-active");
      
      const tab1 = document.getElementById("tab1");
      tab1.classList.add("fff-txt-rw-unselect");
      tab1.classList.remove("fff-txt-rw-select-active");
      
      const tab2 = document.getElementById("tab2");
      tab2.classList.add("fff-txt-rw-unselect");
      tab2.classList.remove("fff-txt-rw-select-active");

      const bar0 = document.getElementById("bar0");
      bar0.classList.add("fff-rw-select-active");
      const bar1 = document.getElementById("bar1");
      bar1.classList.remove("fff-rw-select-active");
      const bar2 = document.getElementById("bar2");
      bar2.classList.remove("fff-rw-select-active");
    }
    if (props.optionTab == 1){
      const tab0 = document.getElementById("tab0");
      tab0.classList.add("fff-txt-rw-unselect");
      tab0.classList.remove("fff-txt-rw-select-active");
      
      const tab1 = document.getElementById("tab1");
      tab1.classList.remove("fff-txt-rw-unselect");
      tab1.classList.add("fff-txt-rw-select-active");
      
      const tab2 = document.getElementById("tab2");
      tab2.classList.add("fff-txt-rw-unselect");
      tab2.classList.remove("fff-txt-rw-select-active");

      const bar0 = document.getElementById("bar0");
      bar0.classList.remove("fff-rw-select-active");
      const bar1 = document.getElementById("bar1");
      bar1.classList.add("fff-rw-select-active");
      const bar2 = document.getElementById("bar2");
      bar2.classList.remove("fff-rw-select-active");
    }
    if (props.optionTab == 2){

      const tab0 = document.getElementById("tab0");
      tab0.classList.add("fff-txt-rw-unselect");
      tab0.classList.remove("fff-txt-rw-select-active");
      
      const tab1 = document.getElementById("tab1");
      tab1.classList.add("fff-txt-rw-unselect");
      tab1.classList.remove("fff-txt-rw-select-active");
      
      const tab2 = document.getElementById("tab2");
      tab2.classList.remove("fff-txt-rw-unselect");
      tab2.classList.add("fff-txt-rw-select-active");

      const bar0 = document.getElementById("bar0");
      bar0.classList.remove("fff-rw-select-active");
      const bar1 = document.getElementById("bar1");
      bar1.classList.remove("fff-rw-select-active");
      const bar2 = document.getElementById("bar2");
      bar2.classList.add("fff-rw-select-active");

    }
  }, [props.optionTab])
  return (
    <>
      <div className="row justify-content-center text-center">
        {/* 分類文字*/}
        <div className="col-10 col-sm-11 col-lg-10 col-xl-10 d-flex justify-content-center text-center fff-txt-ms-select">


          <a id="tab0" className="col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center fff-txt-rw-unselect" onClick={() => { 
              props.setOptionTab(0)}}>合作<p className="fff-ms-web">廠商</p>優惠</a>


          <a  id="tab1"
            className="col-xl-3 col-md-4 col-sm-4 d-flex justify-content-center fff-txt-rw-select-active" onClick={() => { 
                props.setOptionTab(1)}}
          >
            &nbsp;購物金<p className="fff-ms-web">回饋</p>&nbsp;
          </a>



          <a  id="tab2"
            className="col-xl-3 col-md-4 col-sm-4 fff-txt-rw-unselect" onClick={() => { 
                props.setOptionTab(2)}}>
            兌換紀錄
          </a>
        </div>

        {/* 那條Bar */}
        <div className="col-10 col-sm-11 col-lg-10 col-xl-10 d-flex justify-content-center text-center align-items-center fff-rw-select-line">
          <div className="col-xl-2 col-lg-3 d-flex justify-content-center">
            <div id="bar0" className="col-9 " style={{ transition: '1.5s' }}></div>
          </div>
          <div className="col-xl-2 col-lg-3 d-flex justify-content-center">
            <div id="bar1" className="col-9 fff-rw-select-active" style={{ transition: '1.5s' }}></div>
          </div>
          <div className="col-xl-2 col-lg-3 d-flex justify-content-center">
            <div id="bar2" className="col-9 " style={{ transition: '1.5s' }}></div>
          </div>
        </div>
        <p className="fff-exchange-record-warning">僅顯示一週內兌換資料，詳細兌換資料請拜訪<a href>會員中心</a>查詢</p>
      </div>

      
    </>
  )
}
export default ExchangeOption
