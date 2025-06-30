'use client';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import {CSS} from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
import FormNavGap from './FormNavGap';
import FormNavContextMenu from './FormNavContextMenu';
import { ImInfo } from "react-icons/im";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";

export enum FormNavPageType {
  INFO = 'info',
  DEFAULT = 'default',
  END = 'end'
};

export type FormNavPage = {
  id: string,
  name: string,
  type: FormNavPageType,
  active: boolean
};

interface Props {
  page: FormNavPage,
  index: number,
  totalPages: number,
  isContextOpen: boolean,
  onContextOpen: (pageId: string) => void,
  closeAll: () => void,
  onPageClick: (page: FormNavPage) => void
}

const FormSortablePage = ({ page, index, totalPages, isContextOpen, onContextOpen, closeAll, onPageClick }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        closeAll();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [closeAll]);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    onContextOpen(page.id);
  };

  const handlePageClick = (event: React.MouseEvent, page: FormNavPage) => {
    event.preventDefault();
    if (page.active) return false;
    onPageClick(page);
  }

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: page.id});

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div 
      ref={ref}
      className='relative flex items-center font-medium'
      onContextMenu={handleContextMenu}>
      <button
        ref={setNodeRef}
        style={style}
        onClick={(e) => handlePageClick(e, page)}
        className={`
          ${!page.active && 'hover:bg-gray-200'}
          ${page.active && 'border-[0.5px] border-gray-300 bg-white shadow-sm shadow-gray-300/50 hover:ring-offset-1 hover:ring-1 hover:ring-blue-200 hover:ring-offset-blue-400'}
          flex items-center group gap-2 px-2.5 py-1.5 rounded-lg bg-gray-100 cursor-pointer text-gray-600 z-10`}
        {...listeners}
        {...attributes}>

        {page.type === FormNavPageType.INFO && <span><ImInfo size={16} className={`${page.active && 'text-amber-500'}`} /></span>}
        {page.type === FormNavPageType.DEFAULT && <span><MdOutlineStickyNote2 size={16} className={`${page.active && 'text-amber-500'}`} /></span>}
        {page.type === FormNavPageType.END && <span><FaRegCircleCheck size={16} className={`${page.active && 'text-amber-500'}`} /></span>}
        <span>{page.name}</span>
        {page.active && <BsThreeDotsVertical size={16} className='text-gray-400' />}

      </button>

      <FormNavGap hover={index !== totalPages}/>

      {isContextOpen && (
        <div className="animate-fadeIn">
          <FormNavContextMenu page={page} />
        </div>
      )}
    </div>
  );
}

export default FormSortablePage