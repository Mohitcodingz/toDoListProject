import React from 'react'
import LeftSider from './pages/LeftSider'
import { Route, Routes } from 'react-router-dom'
import Overview from './pages/Overview'
import MyTasks from './pages/MyTasks'
import Board from './pages/Board'
import Projects from './pages/Projects'
import Setting from './pages/Setting'

export default function App() {
  return (
    // <div className="h-screen py-[30px] px-[20px]  bg-gray-220">
     <div className="shadow-[0_20px_30px_10px_rgba(0,0,0,0.4)] w-full h-screen grid grid-cols-[16%_84%]  ">

      <div className="bg-[var(--leftSiderBg)]">
        <LeftSider />
      </div>
      <div className="bg-white-600 color-white">
        <Routes>
          <Route path='/Overview' element={<Overview />} />
          <Route path='/MyTasks' element={<MyTasks />} />
          <Route path='/Board' element={<Board />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Settings' element={<Setting />} />
        </Routes>
      </div>
      </div>
    // </div>
  )
}
