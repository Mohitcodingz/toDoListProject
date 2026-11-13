import React from 'react'
import { Link } from 'react-router-dom'
export default function LeftSider() {
  return (
    <div  className='flex flex-col gap-5 justify-center items-center mt-[50px]'>
      <div className='mb-[50px]'>
        <Link to='/'>TaskFlow</Link>
      </div>
      <div className='flex flex-col gap-10  justify-center items-center'>
        <Link to='/Overview' >Overview</Link>
        <Link to='/MyTasks'  >My Tasks</Link>
        <Link to='/Board'  >Board</Link>
        <Link to='/Projects'  >Projects</Link>
      </div>
      <div className='flex gap-5 justify-center items-center mt-[50px]'>
        <Link to='/Settings'  >Settings</Link>
      </div>
    </div>
  )
}
