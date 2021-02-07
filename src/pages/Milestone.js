import React from 'react'
import '../styles/public.css'
import '../styles/fff.css'
import MilestoneInfoBar from '../components/Milestone/MilestoneInfoBar'
import MilestoneList from '../components/Milestone/MilestoneList'
import MilestoneListOption from '../components/Milestone/MilestoneListOption'

function Milestone() {
  return (
    <>
      <MilestoneInfoBar />
      {/* 留空白 */}
      <div style={{ height: '530px' }}></div>

      <MilestoneListOption />
      <MilestoneList />
    </>
  )
}

export default Milestone
