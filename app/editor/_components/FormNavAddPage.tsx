'use client';
import React from 'react';
import { FaPlus } from "react-icons/fa6";
import FormNavAddPageMenu from './FormNavAddPageMenu';
import { useAddPageMenu } from '../_hooks/useAddPageMenu';

const FormNavAddPage = () => {
  const { ref, isOpen, toggleMenu } = useAddPageMenu();

  return (
    <div
      ref={ref}
      className="relative inline-block">
        
        <button
          onClick={toggleMenu}
          className="
          flex items-center text-gray-900 font-medium gap-1.5 px-2.5 py-1.5 border-[0.5px] rounded-lg cursor-pointer border-gray-300 bg-white relative z-10 shadow-sm shadow-gray-300/50
          focus:ring-offset-1 focus:ring-1 focus:ring-blue-200 focus:ring-offset-blue-400"
        >
          <span><FaPlus /></span>
          <span>Add page</span>
        </button>

        {isOpen && (
          <div>
            <FormNavAddPageMenu mb />
          </div>
        )}

    </div>
  )
}

export default FormNavAddPage