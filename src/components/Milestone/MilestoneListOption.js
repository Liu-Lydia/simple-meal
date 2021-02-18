import React,{props} from 'react'
import '../../styles/public.css';
import '../../styles/fff.css';

function MilestoneListOption(props) {

    const tabClassArray = [
        [
            "col col-sm-2 mx-1 mx-sm-auto px-0 fff-txt-ms-select-active",
            "col col-sm-2 mx-1 mx-sm-auto px-0 fff-txt-ms-unselect",
            "col col-sm-2 mx-1 mx-sm-auto px-0 fff-txt-ms-unselect",
            "col col-sm-2 mx-1 mx-sm-auto px-0 fff-txt-ms-unselect"
        ],[
            "col col-sm-2 mx-1 mx-sm-auto px-0 fff-txt-ms-unselect",
            "col col-sm-2 mx-1 mx-sm-auto px-0 fff-txt-ms-select-active",
            "col col-sm-2 mx-1 mx-sm-auto px-0 fff-txt-ms-unselect",
            "col col-sm-2 mx-1 mx-sm-auto px-0 fff-txt-ms-unselect"
        ],[
            "col col-sm-2 mx-1 mx-sm-auto px-0 fff-txt-ms-unselect",
            "col col-sm-2 mx-1 mx-sm-auto px-0 fff-txt-ms-unselect",
            "col col-sm-2 mx-1 mx-sm-auto px-0 fff-txt-ms-select-active",
            "col col-sm-2 mx-1 mx-sm-auto px-0 fff-txt-ms-unselect"
        ],[
            "col col-sm-2 mx-1 mx-sm-auto px-0 fff-txt-ms-unselect",
            "col col-sm-2 mx-1 mx-sm-auto px-0 fff-txt-ms-unselect",
            "col col-sm-2 mx-1 mx-sm-auto px-0 fff-txt-ms-unselect",
            "col col-sm-2 mx-1 mx-sm-auto px-0 fff-txt-ms-select-active"
        ]
    ];

    const barClassArray = [
        [
            "col col-sm-2 mx-1 mx-sm-auto fff-ms-select-active",
            "col col-sm-2 mx-1 mx-sm-auto ",
            "col col-sm-2 mx-1 mx-sm-auto ",
            "col col-sm-2 mx-1 mx-sm-auto "
        ],
        [
            "col col-sm-2 mx-1 mx-sm-auto ",
            "col col-sm-2 mx-1 mx-sm-auto fff-ms-select-active",
            "col col-sm-2 mx-1 mx-sm-auto ",
            "col col-sm-2 mx-1 mx-sm-auto "
        ],
        [
            "col col-sm-2 mx-1 mx-sm-auto ",
            "col col-sm-2 mx-1 mx-sm-auto ",
            "col col-sm-2 mx-1 mx-sm-auto fff-ms-select-active",
            "col col-sm-2 mx-1 mx-sm-auto "
        ],
        [
            "col col-sm-2 mx-1 mx-sm-auto ",
            "col col-sm-2 mx-1 mx-sm-auto ",
            "col col-sm-2 mx-1 mx-sm-auto ",
            "col col-sm-2 mx-1 mx-sm-auto fff-ms-select-active"
        ]
    ];

    const moboTabClassArray = [
        [
            "col  mx-1 mx-sm-auto px-0 fff-txt-ms-select-active",
            "col  mx-1 mx-sm-auto px-0 fff-txt-ms-unselect",
            "col  mx-1 mx-sm-auto px-0 fff-txt-ms-unselect",
            "col  mx-1 mx-sm-auto px-0 fff-txt-ms-unselect"
        ],[
            "col  mx-1 mx-sm-auto px-0 fff-txt-ms-unselect",
            "col  mx-1 mx-sm-auto px-0 fff-txt-ms-select-active",
            "col  mx-1 mx-sm-auto px-0 fff-txt-ms-unselect",
            "col  mx-1 mx-sm-auto px-0 fff-txt-ms-unselect"
        ],[
            "col  mx-1 mx-sm-auto px-0 fff-txt-ms-unselect",
            "col  mx-1 mx-sm-auto px-0 fff-txt-ms-unselect",
            "col  mx-1 mx-sm-auto px-0 fff-txt-ms-select-active",
            "col  mx-1 mx-sm-auto px-0 fff-txt-ms-unselect"
        ],[
            "col  mx-1 mx-sm-auto px-0 fff-txt-ms-unselect",
            "col  mx-1 mx-sm-auto px-0 fff-txt-ms-unselect",
            "col  mx-1 mx-sm-auto px-0 fff-txt-ms-unselect",
            "col  mx-1 mx-sm-auto px-0 fff-txt-ms-select-active"
        ]
    ];

    const moboBarClassArray = 
    [
        [
            "col  mx-1 mx-sm-auto fff-ms-select-active",
            "col  mx-1 mx-sm-auto ",
            "col  mx-1 mx-sm-auto ",
            "col  mx-1 mx-sm-auto "
        ],[
            "col  mx-1 mx-sm-auto ",
            "col  mx-1 mx-sm-auto fff-ms-select-active",
            "col  mx-1 mx-sm-auto ",
            "col  mx-1 mx-sm-auto "
        ],[
            "col  mx-1 mx-sm-auto ",
            "col  mx-1 mx-sm-auto ",
            "col  mx-1 mx-sm-auto fff-ms-select-active",
            "col  mx-1 mx-sm-auto "
        ],[
            "col  mx-1 mx-sm-auto ",
            "col  mx-1 mx-sm-auto ",
            "col  mx-1 mx-sm-auto ",
            "col  mx-1 mx-sm-auto fff-ms-select-active"
        ]
    ];


  return (
    <>
    {/* web virsion */}
     <div className="row justify-content-center text-center fff-ms-web" style={{marginBottom:"60px"}}>
            {/* 成就分類文字*/}
            <div className="col-12 col-md-11 col-xl-10 d-flex justify-content-center fff-txt-ms-select">
                <div className="col-12 col-lg-8 col-xl-7 d-flex justify-content-between">
                    <div className={tabClassArray[props.milestoneFilter][0]} onClick={()=>{props.setMilestoneFilter(0)}}>&nbsp;限時活動&nbsp;</div>
                    <div className={tabClassArray[props.milestoneFilter][1]} onClick={()=>{props.setMilestoneFilter(1)}}>&nbsp;全部成就&nbsp;</div>
                    <div className={tabClassArray[props.milestoneFilter][2]} onClick={()=>{props.setMilestoneFilter(2)}}>已達成成就</div>
                    <div className={tabClassArray[props.milestoneFilter][3]} onClick={()=>{props.setMilestoneFilter(3)}}>未達成成就</div>
                </div>
            </div>
            {/*那條Bar*/}
            <div className="col-12 col-md-11 col-xl-10 d-flex justify-content-center fff-ms-select-line">
                <div className="col-12  col-lg-8 col-xl-7 d-flex justify-content-between align-items-center">
                    <div className={barClassArray[props.milestoneFilter][0]}></div>
                    <div className={barClassArray[props.milestoneFilter][1]}></div>
                    <div className={barClassArray[props.milestoneFilter][2]}></div>
                    <div className={barClassArray[props.milestoneFilter][3]}></div>
                </div>
            </div>
            {/*過濾器*/}
            <div className="col-12 col-md-11 col-xl-10 d-flex justify-content-end align-items-center fff-end-event-filter">
                <input type="checkbox"></input><span>不過濾已結束活動</span>
            </div>

        </div>
    
    {/* mobo virsion */}
     <div className="row justify-content-center text-center fff-ms-mobo" style={{marginBottom:"15px"}}>
            {/* 成就分類文字*/}
            <div className="col-10 d-flex justify-content-center fff-txt-ms-select">
                <div className="col-12  d-flex justify-content-between">
                    <div className={moboTabClassArray[props.milestoneFilter][0]}>&nbsp;限時&nbsp;</div>
                    <div className={moboTabClassArray[props.milestoneFilter][1]}>&nbsp;全部&nbsp;</div>
                    <div className={moboTabClassArray[props.milestoneFilter][2]}>已達成</div>
                    <div className={moboTabClassArray[props.milestoneFilter][3]}>未達成</div>
                </div>
            </div>
            {/*那條Bar*/}
            <div className="col-10 col-md-11 col-xl-10 d-flex justify-content-center fff-ms-select-line">
                <div className="col-12  col-lg-8 col-xl-7 d-flex justify-content-between align-items-center">
                    <div className={moboBarClassArray[props.milestoneFilter][0]}></div>
                    <div className={moboBarClassArray[props.milestoneFilter][1]}></div>
                    <div className={moboBarClassArray[props.milestoneFilter][2]}></div>
                    <div className={moboBarClassArray[props.milestoneFilter][3]}></div>
                </div>
            </div>
            {/*過濾器*/}
            <div className="col-12 col-md-11 col-xl-10 d-flex justify-content-center align-items-center fff-end-event-filter">
                <input type="checkbox"></input><span>不過濾已結束活動</span>
            </div>
            <div className="col-1"></div>

        </div>
 </>
     
        
    
  )
}




export default MilestoneListOption
