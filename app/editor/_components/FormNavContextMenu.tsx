import React from 'react';
import { FormNavPage } from './FormSortablePage';
import { IoIosFlag } from "react-icons/io";
import { FiEdit3, FiClipboard } from "react-icons/fi";
import { RxCopy } from "react-icons/rx";
import { RiDeleteBin5Line } from "react-icons/ri";

type FormNavContextMenuProps = {
  page: FormNavPage,
};

const FormNavContextMenu = ({ page }: FormNavContextMenuProps) => {
  return (
    <div className="
      absolute bottom-full mb-1 left-0 rounded-xl border-[0.5px] w-[240px] border-gray-300 bg-white 
      shadow-sm shadow-gray-300/50
      transition-opacity duration-200 opacity-100 overflow-hidden">

      <div className='bg-gray-100 px-4 py-2 border-b-[0.5px] border-b-gray-300'>
        <h3>Settings</h3>
      </div>

      <div>
          <button
            className="flex items-center gap-2 px-4 py-2 w-full text-left transition-colors duration-200 hover:bg-gray-50 cursor-pointer"
          >
            <span><IoIosFlag size={16} className='text-sky-600 font-medium' /></span>
            <span>Set as first page</span>
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 w-full text-left transition-colors duration-200 hover:bg-gray-50 cursor-pointer"
          >
            <span><FiEdit3 size={16} className='text-gray-500 font-medium' /></span>
            <span>Rename</span>
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 w-full text-left transition-colors duration-200 hover:bg-gray-50 cursor-pointer"
          >
            <span><FiClipboard size={16} className='text-gray-500 font-medium' /></span>
            <span>Copy</span>
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 w-full text-left transition-colors duration-200 hover:bg-gray-50 cursor-pointer"
          >
            <span><RxCopy size={16} className='text-gray-500 font-medium' /></span>
            <span>Duplicate</span>
          </button>
          <div className='block bg-gray-300 h-[0.5px] my-1 mx-4'></div>
          <button
            className="flex items-center gap-2 px-4 py-2 w-full text-left transition-colors duration-200 hover:bg-gray-50 cursor-pointer text-red-500"
          >
            <span><RiDeleteBin5Line size={16} className='font-medium' /></span>
            <span>Delete</span>
          </button>
        </div>
        
    </div>
  );
};

export default FormNavContextMenu;
