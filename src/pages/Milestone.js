import React,{useState} from 'react'
import '../styles/public.css'
import '../styles/fff.css'
import MilestoneInfoBar from '../components/Milestone/MilestoneInfoBar'
import MilestoneList from '../components/Milestone/MilestoneList'
import MilestoneListOption from '../components/Milestone/MilestoneListOption'

function Milestone() {
  //集點方式
  const [about,setAbout] = useState(0);
  return (
    <>
      <MilestoneInfoBar btnText="兌換獎勵" href="./RewardExchange" setAbout={setAbout} about={about} />
      <MilestoneListOption/>
      <MilestoneList />
    </>
  )
}

export default Milestone
