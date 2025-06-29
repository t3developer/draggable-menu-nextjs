'use client';
import { closestCenter, DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import React, { useState } from 'react';
import FormSortablePage, { FormNavPage } from './FormSortablePage';
import { arrayMove, horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable';

const FormPageNavigation = () => {
  const [pages, setPages] = useState<FormNavPage[]>([
    { id: '1', name: 'Info' },
    { id: '2', name: 'Details' },
    { id: '3', name: 'Other' },
    { id: '4', name: 'Ending' },
  ]);
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: any) => {
    const {active, over} = event;

    if (active.id !== over.id) {
      const { active, over } = event;
      if (active.id !== over?.id) {
        const oldIndex = pages.findIndex((p) => p.id === active.id);
        const newIndex = pages.findIndex((p) => p.id === over.id);
        setPages(arrayMove(pages, oldIndex, newIndex));
      }
    }
  }
  
  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
      <SortableContext items={pages} strategy={horizontalListSortingStrategy}>
        <div className="flex items-center relative z-10">
          {pages.map(page => (
            <div key={page.id} className='flex items-center'>
              <FormSortablePage key={page.id} page={page}></FormSortablePage>
            </div>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}

export default FormPageNavigation