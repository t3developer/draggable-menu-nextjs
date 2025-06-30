'use client';

import React, { forwardRef, useEffect, useRef, useState } from 'react';
import {CSS} from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
import FormNavGap from './FormNavGap';
import FormNavContextMenu from './FormNavContextMenu';

export type FormNavPage = {
  id: string,
  name: string,
};

interface Props {
  page: FormNavPage,
  index: number,
  totalPages: number,
  isContextOpen: boolean,
  onContextOpen: (pageId: string) => void,
  closeAll: () => void
}

const FormSortablePage = ({ page, index, totalPages, isContextOpen, onContextOpen, closeAll }: Props) => {
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
      className='relative flex items-center'
      onContextMenu={handleContextMenu}>
      <button
        ref={setNodeRef}
        style={style}
        className='px-4 py-2 border rounded cursor-pointer bg-white z-10'
        {...listeners}
        {...attributes}>
        {page.name}
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