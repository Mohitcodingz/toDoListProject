import React from 'react'

export default function App() {
  return (
    <div className="w-full min-h-screen grid grid-cols-[15%_85%] bg-red py-[30px] px-[20px] ">
      <div className="bg-green-500 rounded-tl-[15px] rounded-bl-[15px]">left</div>
      <div className="bg-orange-600 color-white rounded-tr-[15px] rounded-br-[15px]">right</div>
    </div>
  )
}
