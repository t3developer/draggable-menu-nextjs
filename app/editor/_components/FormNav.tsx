'use client';
import { closestCenter, DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import React, { useState } from 'react';
import FormSortablePage, { FormNavPage } from './FormSortablePage';
import { arrayMove, horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable';

const FormNav = () => {
  const [contextPageId, setContextPageId] = useState<string | null>(null);
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
        <nav className="inline-flex items-center w-auto relative z-10">
          <div className="absolute top-1/2 left-4 right-4 border-t border-dashed border-gray-400 z-0"></div>
          {pages.map((page, index) => (
            <div key={page.id} className='flex items-center'>
              <FormSortablePage
                key={page.id}
                page={page}
                index={index+1}
                totalPages={pages.length}
                isContextOpen={contextPageId === page.id}
                closeAll={() => setContextPageId(null)}
                onContextOpen={(pageId) => setContextPageId(pageId)}>
              </FormSortablePage>
            </div>
          ))}
          <button className='px-4 py-2 border rounded cursor-pointer bg-white relative z-10'>Add page</button>
        </nav>
      </SortableContext>
    </DndContext>
  );
}

export default FormNav