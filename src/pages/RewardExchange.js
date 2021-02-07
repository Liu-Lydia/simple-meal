import React,{useState}from 'react';
import '../styles/public.css';
import '../styles/fff.css';
import MilestoneInfoBar from '../components/Milestone/MilestoneInfoBar';
import ExchangeOption from '../components/Milestone/ExchangeOption';
import ExangeGoodsList from '../components/Milestone/ExchangeGoodsList';
import ExchangeRecord from '../components/Milestone/ExchangeRecord';

function RewardExchange() {
  //切換分頁
  const [optionTab, setOptionTab] = useState(1);
  //集點方式
  const [about,setAbout] = useState(0);
  
    return (
      <>
        <MilestoneInfoBar btnText="我的成就" href="./Milestone" setAbout={setAbout} about={about} />
        <ExchangeOption setOptionTab={setOptionTab} optionTab={optionTab}/>
        {optionTab == 1 && <ExangeGoodsList />}
          
        {optionTab == 2 && <ExchangeRecord /> }
      </>
    )
  }

  export default RewardExchange