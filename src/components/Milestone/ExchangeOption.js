import React,{useEffect} from 'react'
import '../../styles/public.css'
import '../../styles/fff.css'
import $ from 'jquery'

function ExchangeOption(props) {
  useEffect(() => {
    if (props.optionTab == 0){
      $("#tab0").removeClass("fff-txt-rw-unselect").addClass("fff-txt-rw-select-active");
      $("#tab1").removeClass("fff-txt-rw-select-active").addClass("fff-txt-rw-unselect");
      $("#tab2").removeClass("fff-txt-rw-select-active").addClass("fff-txt-rw-unselect");
      $("#bar0").addClass("fff-rw-select-active");
      $("#bar1").removeClass("fff-rw-select-active");
      $("#bar2").removeClass("fff-rw-select-active");

    }
    if (props.optionTab == 1){
      $("#tab0").removeClass("fff-txt-rw-select-active").addClass("fff-txt-rw-unselect");
      $("#tab1").removeClass("fff-txt-rw-unselect").addClass("fff-txt-rw-select-active");
      $("#tab2").removeClass("fff-txt-rw-select-active").addClass("fff-txt-rw-unselect");
      $("#bar0").removeClass("fff-rw-select-active");
      $("#bar1").addClass("fff-rw-select-active");
      $("#bar2").removeClass("fff-rw-select-active");
    }
    if (props.optionTab == 2){
      $("#tab0").removeClass("fff-txt-rw-select-active").addClass("fff-txt-rw-unselect");
      $("#tab1").removeClass("fff-txt-rw-select-active").addClass("fff-txt-rw-unselect");
      $("#tab2").removeClass("fff-txt-rw-unselect").addClass("fff-txt-rw-select-active");
      $("#bar0").removeClass("fff-rw-select-active");
      $("#bar1").removeClass("fff-rw-select-active");
      $("#bar2").addClass("fff-rw-select-active");
    }
  }, [props.optionTab])
  return (
    <>
      <div className="row justify-content-center text-center">
        {/* 分類文字*/}
        <div className="col-10 col-sm-8 d-flex justify-content-center text-center fff-txt-ms-select">
          <a id="tab0" className="col-xl-2 col-lg-3 d-flex justify-content-center fff-txt-rw-unselect" onClick={() => { 
              props.setOptionTab(0)}}>合作<p className="fff-ms-web">廠商</p>優惠</a>
          <a  id="tab1"
            className="col-xl-2 col-lg-3 d-flex justify-content-center fff-txt-rw-select-active" onClick={() => { 
                props.setOptionTab(1)}}
          >
            &nbsp;購物金<p className="fff-ms-web">回饋</p>&nbsp;
          </a>
          <a  id="tab2"
            className="col-xl-2 col-lg-3 fff-txt-rw-unselect" onClick={() => { 
                props.setOptionTab(2)}}>
            兌換紀錄
          </a>
        </div>

        {/* 那條Bar */}
        <div className="col-10 col-sm-8 d-flex justify-content-center text-center align-items-center fff-rw-select-line">
          <div className="col-xl-2 col-lg-3 d-flex justify-content-center">
            <div id="bar0" className="col-9 "></div>
          </div>
          <div className="col-xl-2 col-lg-3 d-flex justify-content-center">
            <div id="bar1" className="col-9 fff-rw-select-active"></div>
          </div>
          <div className="col-xl-2 col-lg-3 d-flex justify-content-center">
            <div id="bar2" className="col-9 "></div>
          </div>
        </div>
      </div>

      
    </>
  )
}
export default ExchangeOption
