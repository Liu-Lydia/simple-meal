import React from 'react'
import '../../styles/public.css';
import '../../styles/fff.css';

function MilestoneList() {
  return (
    <>
     
     <div className="row fff-no-mr-and-pad">
        {/* <!--保留空格 --> */}
        <div className="col-1 fff-no-mr-and-pad"></div>
        {/* <!-- 左翻按鍵 --> */}
        <div className="col-1 d-flex align-items-center fff-no-mr-and-pad">
            <i className="fas fa-chevron-circle-left fff-stone-item-forword"></i>
        </div>
        {/* <!-- 成就display8個 --> */}
        <div className="col-8 fff-no-mr-and-pad " style={{height: "510px"}}>
            <div className="row fff-no-mr-and-pad d-flex align-items-center justify-content-around">
                <div className="col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                    <div className="fff-stone-item-box justify-content-center">
                        <svg className="fff-svg-painting">
                            <circle className="fff-milestone-background-svg d-flex justify-content-center"
                                style={{display: "block" }}/>
                            <circle className="fff-milestone-progress-svg d-flex justify-content-center"
                                transform="rotate(-90)" style={{display: "block"}}>
                                <animate className="fff-milestone-progress-ani" attributeName="stroke-dasharray"
                                    values="0,4000;150,4000" dur="1s" repeatCount="1" />
                            </circle>

                        </svg>
                        <span className="d-flex justify-content-center">環保尖兵</span>
                    </div>
                </div>
                <div className="col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                    <div className="fff-stone-item-box justify-content-center">
                        <svg className="fff-svg-painting">
                            <circle className="fff-milestone-background-svg d-flex justify-content-center"
                                style={{display: "block" }}/>
                            <circle className="fff-milestone-progress-svg d-flex justify-content-center"
                                transform="rotate(-90)" style={{display:"block"}}>
                                <animate className="fff-milestone-progress-ani" attributeName="stroke-dasharray"
                                    values="0,4000;150,4000" dur="1s" repeatCount="1" />
                            </circle>

                        </svg>
                        <span className="d-flex justify-content-center">環保尖兵</span>
                    </div>
                </div>
                <div className="col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                    <div className="fff-stone-item-box justify-content-center">
                        <svg className="fff-svg-painting">
                            <circle className="fff-milestone-background-svg d-flex justify-content-center"
                                style={{display: "block"}} />
                            <circle className="fff-milestone-progress-svg d-flex justify-content-center"
                                transform="rotate(-90)" style={{display: "block"}}>
                                <animate className="fff-milestone-progress-ani" attributeName="stroke-dasharray"
                                    values="0,4000;150,4000" dur="1s" repeatCount="1" />
                            </circle>

                        </svg>
                        <span className="d-flex justify-content-center">環保尖兵</span>
                    </div>
                </div>
                <div className="col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                    <div className="fff-stone-item-box justify-content-center">
                        <svg className="fff-svg-painting">
                            <circle className="fff-milestone-background-svg d-flex justify-content-center"
                                style={{display: "block"}} />
                            <circle className="fff-milestone-progress-svg d-flex justify-content-center"
                                transform="rotate(-90)" style={{display: "block"}}>
                                <animate className="fff-milestone-progress-ani" attributeName="stroke-dasharray"
                                    values="0,4000;150,4000" dur="1s" repeatCount="1" />
                            </circle>

                        </svg>
                        <span className="d-flex justify-content-center">環保尖兵</span>
                    </div>
                </div>
                <div className="col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                    <div className="fff-stone-item-box justify-content-center">
                        <svg className="fff-svg-painting">
                            <circle className="fff-milestone-background-svg d-flex justify-content-center"
                                style={{display: "block"}}/>
                            <circle className="fff-milestone-progress-svg d-flex justify-content-center"
                                transform="rotate(-90)" style={{display: "block"}}>
                                <animate className="fff-milestone-progress-ani" attributeName="stroke-dasharray"
                                    values="0,4000;150,4000" dur="1s" repeatCount="1" />
                            </circle>

                        </svg>
                        <span className="d-flex justify-content-center">環保尖兵</span>
                    </div>
                </div>
                <div className="col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                    <div className="fff-stone-item-box justify-content-center">
                        <svg className="fff-svg-painting">
                            <circle className="fff-milestone-background-svg d-flex justify-content-center"
                                style={{display: "block"}}/>
                            <circle className="fff-milestone-progress-svg d-flex justify-content-center"
                                transform="rotate(-90)" style={{display: "block"}}>
                                <animate className="fff-milestone-progress-ani" attributeName="stroke-dasharray"
                                    values="0,4000;150,4000" dur="1s" repeatCount="1" />
                            </circle>

                        </svg>
                        <span className="d-flex justify-content-center">環保尖兵</span>
                    </div>
                </div>
                <div className="col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                    <div className="fff-stone-item-box justify-content-center">
                        <svg className="fff-svg-painting">
                            <circle className="fff-milestone-background-svg d-flex justify-content-center"
                                style={{display: "block"}}/>
                            <circle className="fff-milestone-progress-svg d-flex justify-content-center"
                                transform="rotate(-90)" style={{display: "block"}}>
                                <animate className="fff-milestone-progress-ani" attributeName="stroke-dasharray"
                                    values="0,4000;150,4000" dur="1s" repeatCount="1" />
                            </circle>

                        </svg>
                        <span className="d-flex justify-content-center">環保尖兵</span>
                    </div>
                </div>
                <div className="col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                    <div className="fff-stone-item-box justify-content-center">
                        <svg className="fff-svg-painting">
                            <circle className="fff-milestone-background-svg d-flex justify-content-center"
                                style={{display: "block"}} />
                            <circle className="fff-milestone-progress-svg d-flex justify-content-center"
                                transform="rotate(-90)" style={{display: "block"}}>
                                <animate className="fff-milestone-progress-ani" attributeName="stroke-dasharray"
                                    values="0,4000;150,4000" dur="1s" repeatCount="1" />
                            </circle>

                        </svg>
                        <span className="d-flex justify-content-center">環保尖兵</span>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- 右翻按鍵 --> */}
        <div className="col-1 d-flex align-items-center flex-row-reverse fff-no-mr-and-pad">
            <i className="fas fa-chevron-circle-right fff-stone-item-forword"></i>
        </div>
        {/* <!--保留空格 --> */}
        <div className="col-1 fff-no-mr-and-pad"></div>
    </div>

 </>
     
        
    
  )
}




export default MilestoneList
