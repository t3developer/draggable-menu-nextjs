'use client';
import { closestCenter, DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import React, { useState } from 'react';
import FormSortablePage, { FormNavPage, FormNavPageType } from './FormSortablePage';
import { arrayMove, horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import FormNavAddPage, { FormNavAddPageDisplay } from './FormNavAddPage';

const FormNav = () => {
  const [contextPageId, setContextPageId] = useState<string | null>(null);
  
  const [pages, setPages] = useState<FormNavPage[]>([
    { id: '1', name: 'Info', type: FormNavPageType.INFO, active: true },
    { id: '2', name: 'Details', type: FormNavPageType.DEFAULT, active: false },
    { id: '3', name: 'Other', type: FormNavPageType.DEFAULT, active: false },
    { id: '4', name: 'Ending', type: FormNavPageType.END, active: false },
  ]);
  
  const onPageClick = (page: FormNavPage) => {
    const updated = pages.map(p => ({...p, active: (p.id === page.id)}));
    setPages(updated);
  };

  const sensors = useSensors(useSensor(PointerSensor, {
    activationConstraint: {
      distance: 5
    }
   }));
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

          <FormNavAddPage display={FormNavAddPageDisplay.BUTTON} />
        </nav>
      </SortableContext>
    </DndContext>
  );
}

export default FormNav