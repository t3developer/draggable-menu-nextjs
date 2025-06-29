'use client';

import React from 'react';
import {CSS} from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';

export type FormNavPage = {
  id: string,
  name: string,
};

const FormSortablePage = ( { page } : { page: FormNavPage } ) => {
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
    <button
      ref={setNodeRef}
      style={style}
      className='px-4 py-2 border rounded cursor-pointer bg-white relative z-10'
      {...listeners}
      {...attributes}>
      {page.name}
    </button>
  );
}

export default FormSortablePage