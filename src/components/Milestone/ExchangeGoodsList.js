import React from 'react';
import '../../styles/public.css';
import '../../styles/fff.css';

function ExchangeGoodsList() {
    return (
      <>
        {/* <!-- 整個成就清單區 --> */}
        <div className="row fff-no-mr-and-pad">
            {/* <!--保留空格 --> */}
            <div className="col fff-no-mr-and-pad"></div>
            {/* <!-- 左翻按鍵 --> */}
            <div className="fff-ms-web col-1 col-xl-1 d-flex align-items-center fff-no-mr-and-pad">
                <i className="fas fa-chevron-circle-left fff-stone-item-forword"></i>
            </div>
            {/* <!-- 獎勵display4個 --> */}
            <div className="col-10 col-sm-8 col-xl-10 fff-no-mr-and-pad" style={{height: "210px"}}>
                {/* <!-- 獎勵項目 --> */}
                <div className="row fff-no-mr-and-pad d-flex align-items-center justify-content-space-between ">
                    <div className="col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                        <div className="exchange">
                            <img className="fff-reward-pic" src='http://localhost:3015/img/fff/reward-Env.png'alt="" />
                            <span className="d-flex justify-content-center">星巴克買一送一</span>
                        </div>
                    </div>
                    <div className="col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                        <div className="exchange">
                            <img className="fff-reward-pic" src="http://localhost:3015/img/fff/reward-Env.png" alt="" />
                            <span className="d-flex justify-content-center">星巴克買一送一</span>
                        </div>
                    </div>
                    <div className="col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                        <div className="exchange">
                            <img className="fff-reward-pic" src="http://localhost:3015/img/fff/reward-Env.png" alt="" />
                            <span className="d-flex justify-content-center">星巴克買一送一</span>
                        </div>
                    </div>
                    <div className="col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                        <div className="exchange">
                            <img className="fff-reward-pic" src="http://localhost:3015/img/fff/reward-Env.png" alt="" />
                            <span className="d-flex justify-content-center">星巴克買一送一</span>
                        </div>
                    </div>
                </div>


            </div>
            {/* <!-- 右翻按鍵 --> */}
            <div className=" fff-ms-web col-1 col-xl-1 d-flex align-items-center flex-row-reverse fff-no-mr-and-pad">
                <i className="fas fa-chevron-circle-right fff-stone-item-forword"></i>
            </div>
            {/* <!--保留空格 --> */}
            <div className="col fff-no-mr-and-pad"></div>
        </div>
      </>
    )
  }

  export default ExchangeGoodsList