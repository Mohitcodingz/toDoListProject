import React from 'react'
import { Link } from 'react-router-dom'
export default function LeftSider() {
  return (
    <div className=''>
      <div>
      <h1>TaskFlow</h1>
      </div>
<div>
<Link to='/Overview' element={} >Overview</Link>
<Link to='/MyTasks' element={} >My Tasks</Link>
<Link to='/Board' element={} >Board</Link>
<Link to='/Projects' element={} >Projects</Link>
</div>
<div>
<Link to='/Settings' element={} >Settings</Link>
</div>
    </div>
  )
}
