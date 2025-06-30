'use client';
import { closestCenter, DndContext, DragEndEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import React, { useState } from 'react';
import FormSortablePage, { FormNavPage, FormNavPageType } from './FormSortablePage';
import { arrayMove, horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import FormNavAddPage from './FormNavAddPage';

const FormNav = () => {
  const [contextPageId, setContextPageId] = useState<string | null>(null);

  const [pages, setPages] = useState<FormNavPage[]>([
    { id: '1', name: 'Info', type: FormNavPageType.INFO, active: true },
    { id: '2', name: 'Details', type: FormNavPageType.DEFAULT, active: false },
    { id: '3', name: 'Other', type: FormNavPageType.DEFAULT, active: false },
    { id: '4', name: 'Ending', type: FormNavPageType.END, active: false },
  ]);
  
  // set active to the page clicked and removing the active status from previous
  const onPageClick = (page: FormNavPage) => {
    const updated = pages.map(p => ({...p, active: (p.id === page.id)}));
    setPages(updated);
  };

  // adding distance so that sensor starts working after button being dragged for 5px
  // otherwise it won't let us catch onClick (used for other purpose) on the button
  const sensors = useSensors(useSensor(PointerSensor, {
    activationConstraint: {
      distance: 5
    }
   }));
  
   // method to sort the pages array after the dragging event
  const handleDragEnd = (event: DragEndEvent) => {
    const {active, over} = event;

    if (over && active.id !== over.id) {
      const { active, over } = event;
      if (active.id !== over?.id) {
        const oldIndex = pages.findIndex((p) => p.id === active.id);
        const newIndex = pages.findIndex((p) => p.id === over?.id);
        setPages(arrayMove(pages, oldIndex, newIndex));
      }
    }
  }
  
  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
      <SortableContext items={pages} strategy={horizontalListSortingStrategy}>
        <nav className="inline-flex items-center w-auto relative z-10 text-sm">

          <div className="absolute top-1/2 left-4 right-4 border-1 border-dashed border-gray-300 z-0"></div>
          
          {pages.map((page, index) => (
            <div key={page.id} className='flex items-center'>
              <FormSortablePage
                key={page.id}
                page={page}
                index={index+1}
                totalPages={pages.length}
                isContextOpen={contextPageId === page.id}
                closeAll={() => setContextPageId(null)}
                onContextOpen={(pageId) => setContextPageId(pageId)}
                onPageClick={onPageClick}>
              </FormSortablePage>
            </div>
          ))}

          <FormNavAddPage />
        </nav>
      </SortableContext>
    </DndContext>
  );
};

export default FormNav;