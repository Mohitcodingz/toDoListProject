import React, { useMemo } from 'react'


export default function CommonBox({ Heading, customComponent }) {


    return (
        <div className='w-[97%] p-3 h-80 shadow-[0_0_20px_rgba(0,0,0,0.06)] rounded-[10px] grid grid-rows-[20%_80%] '>
            <div className='w-full h-full p-2 flex items-center'>
                <h1 className='font-bold text-base text-[20px]'>{Heading}</h1>
            </div>
            <div>
                {customComponent}
            </div>
        </div>
    )
}
