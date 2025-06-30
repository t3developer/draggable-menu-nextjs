import React from 'react'
import { MdOutlineStickyNote2 } from 'react-icons/md'

type FormNavAddPageMenuProps = {
  mb ?: boolean
}

const FormNavAddPageMenu = ({ mb }: FormNavAddPageMenuProps) => {
  return (
    <div className={`
      absolute  bottom-full left-0 rounded-xl border-[0.5px] w-[240px] overflow-hidden
      animate-fadeIn transition-opacity duration-200 opacity-100
      border-gray-300 bg-white  shadow-sm shadow-gray-300/50
      ${mb && 'mb-2'}`}>
      <div className='bg-gray-100 px-4 py-2 border-b-[0.5px] border-b-gray-300'>
        <h3>Create new</h3>
      </div>
      <div>
          <button
            className="flex items-center gap-2 px-4 py-2 w-full text-left transition-colors duration-200 hover:bg-gray-50 cursor-pointer"
          >
            <span><MdOutlineStickyNote2 size={16} className='text-gray-500 font-medium' /></span>
            <span>Form</span>
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 w-full text-left transition-colors duration-200 hover:bg-gray-50 cursor-pointer"
          >
            <span><MdOutlineStickyNote2 size={16} className='text-gray-500 font-medium' /></span>
            <span>Cover</span>
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 w-full text-left transition-colors duration-200 hover:bg-gray-50 cursor-pointer"
          >
            <span><MdOutlineStickyNote2 size={16} className='text-gray-500 font-medium' /></span>
            <span>Ending</span>
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 w-full text-left transition-colors duration-200 hover:bg-gray-50 cursor-pointer"
          >
            <span><MdOutlineStickyNote2 size={16} className='text-gray-500 font-medium' /></span>
            <span>Payment</span>
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 w-full text-left transition-colors duration-200 hover:bg-gray-50 cursor-pointer"
          >
            <span><MdOutlineStickyNote2 size={16} className='text-gray-500 font-medium' /></span>
            <span>Login</span>
          </button>
        </div>
    </div>
  )
};

export default FormNavAddPageMenu;