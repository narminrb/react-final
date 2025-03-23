import React from 'react'

const Feedback = ({image,desc}) => {
  return (
    <div>
        <div className="px-6 py-6 items-center my-4 bg-[#f6f6f6]">
    <div className="flex items-center justify-center mb-6">
        <img src={image} alt="Avatar" className="w-22 h-22 rounded-full mr-4"/>
    </div>
    <p className="text-[18px] text-center leading-relaxed mb-6 text-[#333333]">{desc}</p>
    <div className='flex items-center text-center justify-center'>
            <div className="text-lg text-center font-medium text-gray-800">John Doe</div>
        </div>
</div>
    </div>
  )
}

export default Feedback