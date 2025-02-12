import React from 'react'

const StatInfoCard = ({count, label}) => {
  return (
    <div className='flex-1 flex gap-3 md:gap-5 bg-gradient-to-b from-[#d7c690] to-[#afc894] rounded-[14px] p-5'>
        <h4 className='text-4xl md:text-5xl font-medium text-[#f92c62]'>{count}</h4>
        <p className='text-sm md:text-[16px] font-normal text-[#591fe0] leading-6 whitespace-pre-line'>{label}</p>
    </div>
  )
}

export default StatInfoCard;