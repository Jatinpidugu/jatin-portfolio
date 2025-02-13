import React from 'react'

const ContactInfoCard = ({icon, text}) => {
  return (
    <div className="flex items-center gap-5 bg-[#d2f4b69a] rounded border border-[#13480f] px-4 py-3 mb-5">
        <div className="w-5 h-5 text-xl text-black flex items-center bg-[#d8efe19a]">
            {icon}
        </div>
        <p className="text-secondary text-xs sm:text-sm md:text-base">{text}</p>
    </div>
  )
}

export default ContactInfoCard;